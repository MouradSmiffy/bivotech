import { NextResponse } from 'next/server';
import clientPromise from '@/lib/mongodb';
import { ObjectId } from 'mongodb';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { nom, email, telephone, date, message } = body;

    if (!nom || !email || !telephone || !date) {
      return NextResponse.json(
        { error: 'Veuillez remplir tous les champs obligatoires.' }, 
        { status: 400 }
      );
    }

    const client = await clientPromise;
    const db = client.db('bivotech_db');

    const result = await db.collection('appointments').insertOne({
      name: nom,
      email: email,
      phone: telephone,
      preferred_date: new Date(date),
      message: message || null,
      status: 'pending',
      created_at: new Date()
    });

    return NextResponse.json(
      { success: true, id: result.insertedId }, 
      { status: 201 }
    );
  } catch (error) {
    console.error("Erreur lors de l'enregistrement du rendez-vous:", error);
    return NextResponse.json(
      { error: 'Erreur interne du serveur.' }, 
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    const client = await clientPromise;
    const db = client.db('bivotech_db');

    const appointments = await db
      .collection('appointments')
      .find({})
      .sort({ created_at: -1 })
      .toArray();

    return NextResponse.json({ success: true, data: appointments }, { status: 200 });
  } catch (error) {
    console.error("Erreur lors de la récupération des rendez-vous:", error);
    return NextResponse.json(
      { error: 'Erreur interne du serveur.' }, 
      { status: 500 }
    );
  }
}

export async function PATCH(request: Request) {
  try {
    const body = await request.json();
    const { id, status } = body;

    if (!id || !status) {
      return NextResponse.json(
        { error: "L'ID et le nouveau statut sont requis." }, 
        { status: 400 }
      );
    }

    const client = await clientPromise;
    const db = client.db('bivotech_db');

    const result = await db.collection('appointments').updateOne(
      { _id: new ObjectId(id) },
      { $set: { status } }
    );

    if (result.matchedCount === 0) {
      return NextResponse.json(
        { error: 'Rendez-vous introuvable.' }, 
        { status: 404 }
      );
    }

    return NextResponse.json({ success: true, message: 'Statut mis à jour avec succès.' }, { status: 200 });
  } catch (error) {
    console.error("Erreur lors de la mise à jour du statut:", error);
    return NextResponse.json(
      { error: 'Erreur interne du serveur.' }, 
      { status: 500 }
    );
  }
}