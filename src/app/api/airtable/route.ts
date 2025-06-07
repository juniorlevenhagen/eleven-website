import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const headers = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type, Authorization",
  };

  if (req.method === "OPTIONS") {
    return new NextResponse(null, { headers });
  }

  try {
    const body = await req.json();
    console.log("Dados recebidos na API:", body);

    const { name, email, phone, selectedOptions} = body;

    // Log para debug das variáveis de ambiente
    console.log("Verificando variáveis de ambiente:", {
      apiKeyLength: process.env.AIRTABLE_API_KEY?.length || 0,
      baseIdLength: process.env.AIRTABLE_BASE_ID?.length || 0,
      tableName: process.env.AIRTABLE_TABLE,
    });

    if (
      !process.env.AIRTABLE_API_KEY ||
      !process.env.AIRTABLE_BASE_ID ||
      !process.env.AIRTABLE_TABLE
    ) {
      console.error("Variáveis de ambiente faltando:", {
        apiKey: !process.env.AIRTABLE_API_KEY,
        baseId: !process.env.AIRTABLE_BASE_ID,
        table: !process.env.AIRTABLE_TABLE,
      });
      return NextResponse.json(
        { error: "Configuração da API não encontrada" },
        { status: 500, headers }
      );
    }

    const record = {
      fields: {
        fldqoLfAfJ6uIvMbV: name,
        fldUJAP7ThETPNOI0: email,
        fldWDnE2wnakS3THe: phone,
        fldtzqUj0EZV5uRST: selectedOptions.siteType,
        fldztPbU0cZM96ZWs: selectedOptions.features,
        fldLVGfokCu0OHlUp: selectedOptions.extras,
      },
    };

    console.log("Tentando enviar para Airtable:", {
      baseId: process.env.AIRTABLE_BASE_ID,
      table: process.env.AIRTABLE_TABLE,
      record,
    });

    const res = await fetch(
      `https://api.airtable.com/v0/${process.env.AIRTABLE_BASE_ID}/${process.env.AIRTABLE_TABLE}`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${process.env.AIRTABLE_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(record),
      }
    );

    const data = await res.json();
    console.log("Resposta do Airtable:", data);

    if (!res.ok) {
      console.error("Erro do Airtable:", data);
      return NextResponse.json(
        { error: "Erro ao enviar para o Airtable", details: data },
        { status: res.status, headers }
      );
    }

    return NextResponse.json({ success: true }, { headers });
  } catch (error) {
    console.error("Erro completo na API:", error);
    return NextResponse.json(
      { error: "Erro ao processar a requisição", details: error },
      { status: 500, headers }
    );
  }
}
