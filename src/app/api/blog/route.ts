import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type, Authorization',
  };

  if (req.method === 'OPTIONS') {
    return new NextResponse(null, { headers });
  }

  try {
    const body = await req.json();
    console.log('Criando novo post do blog:', body);

    const {
      title,
      author,
      content,
      summary,
      tags,
      status,
      publishdate,
      featuredimage,
      permalink,
      estimatedread,
    } = body;

    const apiKey = process.env.AIRTABLE_API_KEY;
    const baseId = process.env.AIRTABLE_BASE_ID;
    const tableName = process.env.AIRTABLE_BLOG || 'blog_posts';

    if (!apiKey || !baseId) {
      console.error('Configurações do Airtable ausentes no servidor.');
      return NextResponse.json(
        { error: 'Configuração da API do Airtable não encontrada no servidor' },
        { status: 500, headers },
      );
    }

    // Monta o registro respeitando o formato e IDs exatos da sua tabela blog_posts
    const record = {
      fields: {
        fldT5Tb1GYceKnPSJ: title,
        fldXsWjAdrTQcfpL9: author || 'Equipe Eleven',
        fld7skYfUx93qXSm4: content,
        fldV85s2zoROC6Wi1: summary || '',
        fldik9twMBFobGYeC: tags ? (Array.isArray(tags) ? tags : [tags]) : undefined,
        fld43vDBCrLbrcp7D: status || 'Draft',
        fldQlVF6m1bcvcVc2: publishdate ? new Date(publishdate).toISOString() : undefined,
        fldnkiKhlrvGr0fnT: permalink || '',
        fldR7UmYQTnN9uXzY: estimatedread ? Number(estimatedread) : 5,
        // Campo de anexo do Airtable precisa ser um array de objetos com o link da imagem
        fldQLbDq2RN6Mi7mI: featuredimage ? [{ url: featuredimage }] : undefined,
      },
    };

    console.log('Enviando post para o Airtable:', { baseId, tableName, record });

    const res = await fetch(
      `https://api.airtable.com/v0/${baseId}/${encodeURIComponent(tableName)}`,
      {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${apiKey}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(record),
      },
    );

    const data = await res.json();
    console.log('Resposta do Airtable:', data);

    if (!res.ok) {
      console.error('Erro de gravação no Airtable:', data);
      return NextResponse.json(
        { error: 'Erro ao cadastrar post no Airtable', details: data },
        { status: res.status, headers },
      );
    }

    return NextResponse.json({ success: true, record: data }, { headers });
  } catch (error: unknown) {
    console.error('Erro no processamento do post:', error);
    const message = error instanceof Error ? error.message : 'Erro desconhecido';
    return NextResponse.json(
      { error: 'Erro ao processar a requisição', details: message },
      { status: 500, headers },
    );
  }
}
