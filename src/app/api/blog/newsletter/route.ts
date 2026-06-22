import { NextRequest, NextResponse } from "next/server";
import {
  createAirtableRecord,
  fetchAirtableRecords,
  isAirtableConfigured,
} from "@/lib/airtable";

function getNewsletterTableName(): string {
  return process.env.AIRTABLE_NEWSLETTER_TABLE ?? "Newsletter";
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const email = typeof body.email === "string" ? body.email.trim() : "";

    if (!email) {
      return NextResponse.json({ error: "Email é obrigatório" }, { status: 400 });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: "Email inválido" }, { status: 400 });
    }

    if (!isAirtableConfigured()) {
      return NextResponse.json(
        { error: "Configuração do Airtable não encontrada" },
        { status: 500 },
      );
    }

    const tableName = getNewsletterTableName();
    const escapedEmail = email.replace(/"/g, '\\"');
    const existing = await fetchAirtableRecords(tableName, {
      maxRecords: 1,
      filterByFormula: `{Email} = "${escapedEmail}"`,
    });

    if (existing.length > 0) {
      return NextResponse.json({
        success: true,
        alreadySubscribed: true,
        message: "Você já está inscrito na newsletter",
      });
    }

    const result = await createAirtableRecord(tableName, {
      Email: email,
      Source: "blog",
      "Subscribed At": new Date().toISOString(),
    });

    if (!result.success) {
      return NextResponse.json(
        { error: "Erro ao salvar inscrição" },
        { status: 500 },
      );
    }

    return NextResponse.json({
      success: true,
      alreadySubscribed: false,
      message: "Inscrição realizada com sucesso",
    });
  } catch (error) {
    console.error("Erro na newsletter do blog:", error);
    return NextResponse.json(
      { error: "Erro interno do servidor" },
      { status: 500 },
    );
  }
}
