import { NextResponse } from "next/server";
import { createContact } from "@/lib/services";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, phone, email, subject, message } = body;

    // Validation basique
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Veuillez remplir tous les champs obligatoires." },
        { status: 400 }
      );
    }

    // Enregistrement dans MongoDB via ta fonction existante
    await createContact({
      name,
      email,
      phone,
      subject,
      message,
    });

    return NextResponse.json(
      { success: true, message: "Message enregistré avec succès." },
      { status: 201 }
    );
  } catch (error: any) {
    console.error("Erreur API Contact :", error);
    return NextResponse.json(
      { error: "Erreur interne du serveur." },
      { status: 500 }
    );
  }
}