import { NextResponse } from "next/server";

interface BookingPayload {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  situation: string;
  goal: string;
  comment?: string;
}

export async function POST(request: Request) {
  const body = (await request.json().catch(() => null)) as Partial<BookingPayload> | null;

  if (
    !body ||
    !body.firstName?.trim() ||
    !body.lastName?.trim() ||
    !body.email?.includes("@") ||
    !body.phone?.trim() ||
    !body.situation?.trim()
  ) {
    return NextResponse.json({ error: "Champs manquants ou invalides." }, { status: 400 });
  }

  // TODO: brancher ici la création du lead dans le CRM / l'envoi de notification
  // (Brevo, email interne, ou création directe d'un événement dans l'agenda).
  console.log("[booking] nouvelle demande de rendez-vous:", body);

  return NextResponse.json({ ok: true });
}
