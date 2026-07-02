import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);

  if (!body || typeof body.email !== "string" || !body.email.includes("@")) {
    return NextResponse.json({ error: "Email invalide." }, { status: 400 });
  }

  const firstName = typeof body.firstName === "string" ? body.firstName.trim() : "";
  const email = body.email.trim().toLowerCase();

  // TODO: brancher ici l'envoi vers Brevo (ou votre CRM) pour ajouter le lead
  // à une liste "Lead magnet" et déclencher l'email de bienvenue.
  console.log("[lead-magnet] nouveau lead:", { firstName, email });

  return NextResponse.json({ ok: true });
}
