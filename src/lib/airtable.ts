type AirtableSort = {
  field: string;
  direction?: 'asc' | 'desc';
};

type FetchAirtableOptions = {
  filterByFormula?: string;
  maxRecords?: number;
  sort?: AirtableSort[];
};

export type AirtableRecord = {
  id: string;
  createdTime: string;
  fields: Record<string, unknown>;
};

// 🔴 CORREÇÃO 1: Centralizando as credenciais e incluindo a tabela dinâmica
function getAirtableCredentials() {
  return {
    apiKey: process.env.AIRTABLE_API_KEY,
    baseId: process.env.AIRTABLE_BASE_ID,
    // Se AIRTABLE_TABLE existir ele usa, senão usa AIRTABLE_BLOG como padrão
    tableName: process.env.AIRTABLE_TABLE || process.env.AIRTABLE_BLOG,
  };
}

export function isAirtableConfigured(): boolean {
  const { apiKey, baseId, tableName } = getAirtableCredentials();
  return Boolean(apiKey && baseId && tableName);
}

// 🔴 CORREÇÃO 2: Tornando o tableName opcional. Se não passar nada, ele pega o do .env
export async function fetchAirtableRecords(
  tableName?: string,
  options: FetchAirtableOptions = {},
): Promise<AirtableRecord[]> {
  const credentials = getAirtableCredentials();
  // Se você passou um nome na função, usa ele. Se não, usa o do arquivo .env
  const activeTableName = tableName || credentials.tableName;

  if (!credentials.apiKey || !credentials.baseId || !activeTableName) {
    console.error('Airtable: Falta apiKey, baseId ou tableName na leitura.');
    return [];
  }

  const params = new URLSearchParams();

  // Ajuste fino: se usarmos maxRecords, passamos direto para a API do Airtable
  if (options.maxRecords) {
    params.set('maxRecords', String(options.maxRecords));
  } else {
    params.set('pageSize', '100');
  }

  if (options.filterByFormula) {
    params.set('filterByFormula', options.filterByFormula);
  }

  options.sort?.forEach((sort, index) => {
    params.set(`sort[${index}][field]`, sort.field);
    params.set(`sort[${index}][direction]`, sort.direction ?? 'asc');
  });

  const url = `https://api.airtable.com/v0/${credentials.baseId}/${encodeURIComponent(activeTableName)}?${params.toString()}`;

  const response = await fetch(url, {
    headers: {
      Authorization: `Bearer ${credentials.apiKey}`,
    },
    next: { revalidate: 60 },
  });

  if (!response.ok) {
    console.error(
      'Erro ao buscar registros no Airtable:',
      await response.text(),
    );
    return [];
  }

  const data = (await response.json()) as { records?: AirtableRecord[] };
  return data.records ?? [];
}

// 🔴 CORREÇÃO 3: Mesma lógica para a criação de registros
export async function createAirtableRecord(
  tableName: string | undefined,
  fields: Record<string, unknown>,
): Promise<{ success: boolean; alreadyExists?: boolean }> {
  const credentials = getAirtableCredentials();
  const activeTableName = tableName || credentials.tableName;

  if (!credentials.apiKey || !credentials.baseId || !activeTableName) {
    console.error('Airtable: Falta apiKey, baseId ou tableName na criação.');
    return { success: false };
  }

  const response = await fetch(
    `https://api.airtable.com/v0/${credentials.baseId}/${encodeURIComponent(activeTableName)}`,
    {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${credentials.apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ fields }),
    },
  );

  if (response.ok) {
    return { success: true };
  }

  const errorBody = await response.text();
  console.error('Erro ao criar registro no Airtable:', errorBody);
  return { success: false };
}
