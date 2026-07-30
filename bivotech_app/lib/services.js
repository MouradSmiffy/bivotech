import clientPromise from './mongodb';
import { ObjectId } from 'mongodb';

async function getDB() {
  const client = await clientPromise;
  return client.db("bivotech_db"); // Remplacez par le nom de votre base de données
}

// --- 1. SERVICES ---
export async function getServices() {
  const db = await getDB();
  return await db.collection("services").find({}).toArray();
}

export async function createService(data) {
  const db = await getDB();
  return await db.collection("services").insertOne({
    title: data.title,
    description: data.description,
    slug: data.slug,
    icon: data.icon,
    created_at: new Date()
  });
}

// --- 2. PORTFOLIO ITEMS ---
export async function getPortfolioItems() {
  const db = await getDB();
  return await db.collection("portfolio_items").find({}).toArray();
}

export async function createPortfolioItem(data) {
  const db = await getDB();
  return await db.collection("portfolio_items").insertOne({
    title: data.title,
    category: data.category,
    image_url: data.image_url,
    created_at: new Date()
  });
}

// --- 3. APPOINTMENTS (Rendez-vous) ---
export async function createAppointment(data) {
  const db = await getDB();
  return await db.collection("appointments").insertOne({
    name: data.name,
    phone: data.phone,
    service_id: data.service_id, // Référence vers l'ID d'un service
    preferred_date: new Date(data.preferred_date),
    message: data.message || null,
    status: 'pending', // Valeur par défaut
    created_at: new Date()
  });
}

export async function getAppointments() {
  const db = await getDB();
  return await db.collection("appointments").find({}).sort({ created_at: -1 }).toArray();
}

// --- 4. CONTACTS (Devis & Messages) ---
export async function createContact(data) {
  const db = await getDB();
  return await db.collection("contacts").insertOne({
    name: data.name,
    email: data.email,
    phone: data.phone,
    subject: data.subject,
    message: data.message,
    is_read: false, // Valeur par défaut
    created_at: new Date()
  });
}

export async function getContacts() {
  const db = await getDB();
  return await db.collection("contacts").find({}).sort({ created_at: -1 }).toArray();
}