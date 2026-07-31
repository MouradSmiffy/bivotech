"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  // États du formulaire
  const [formData, setFormData] = useState({ nom: "", email: "", telephone: "", date: "", heure: "", message: "" });
  const [bookedSlots, setBookedSlots] = useState<{ date: string; heure: string }[]>([]);
  const [status, setStatus] = useState<{ loading: boolean; success?: string; error?: string }>({ loading: false });

  // Écouter l'événement global venant des pages (ex: "Démarrer un projet")
  useEffect(() => {
    const handleOpenModal = () => setIsModalOpen(true);
    window.addEventListener("open-rdv-modal", handleOpenModal);
    return () => {
      window.removeEventListener("open-rdv-modal", handleOpenModal);
    };
  }, []);

  // Récupérer les rendez-vous existants de manière sécurisée pour éviter les erreurs de parsing HTML/JSON
  useEffect(() => {
    if (isModalOpen) {
      fetch("/api/rdv")
        .then(async (res) => {
          const contentType = res.headers.get("content-type");
          if (!res.ok || !contentType || !contentType.includes("application/json")) {
            throw new Error("Erreur de communication avec le serveur (API introuvable ou erreur 500).");
          }
          return res.json();
        })
        .then((data) => {
          if (data.success && Array.isArray(data.data)) {
            const slots = data.data.map((appt: any) => {
              const d = new Date(appt.preferred_date);
              const year = d.getFullYear();
              const month = String(d.getMonth() + 1).padStart(2, '0');
              const day = String(d.getDate()).padStart(2, '0');
              const hours = String(d.getHours()).padStart(2, '0');
              const minutes = String(d.getMinutes()).padStart(2, '0');
              return {
                date: `${year}-${month}-${day}`,
                heure: `${hours}:${minutes}`
              };
            });
            setBookedSlots(slots);
          }
        })
        .catch((err) => {
          console.error("Erreur chargement créneaux :", err);
        });
    }
  }, [isModalOpen]);

  // Liste des créneaux horaires disponibles en mode 24h
  const timeSlots = ["09:00", "10:00", "11:00", "12:00", "14:00", "15:00", "16:00", "17:00"];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus({ loading: true });

    const combinedDateTime = `${formData.date}T${formData.heure}:00`;

    try {
      const res = await fetch("/api/rdv", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          nom: formData.nom,
          email: formData.email,
          telephone: formData.telephone,
          date: combinedDateTime,
          message: formData.message,
        }),
      });

      const contentType = res.headers.get("content-type");
      if (!contentType || !contentType.includes("application/json")) {
        throw new Error("Réponse serveur invalide. Vérifie que la route API '/api/rdv' existe bien.");
      }

      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Une erreur est survenue lors de l'enregistrement");

      setStatus({ loading: false, success: "Rendez-vous enregistré avec succès !" });
      setFormData({ nom: "", email: "", telephone: "", date: "", heure: "", message: "" });
      setTimeout(() => {
        setIsModalOpen(false);
        setStatus({ loading: false });
      }, 2000);
    } catch (err: any) {
      setStatus({ loading: false, error: err.message });
    }
  };

  // Fonction utilitaire pour appliquer le style actif/inactif des liens
  const getLinkClass = (path: string) => {
    const isActive = pathname === path;
    return isActive
      ? "text-[#346b00] font-semibold border-b-2 border-[#346b00] pb-1 transition-all"
      : "text-[#414939] hover:text-[#346b00] transition-colors pb-1";
  };

  const getMobileLinkClass = (path: string) => {
    const isActive = pathname === path;
    return isActive
      ? "text-[#346b00] font-semibold text-base py-2 border-l-2 border-[#346b00] pl-3"
      : "text-[#414939] py-2 pl-3 hover:text-[#346b00] transition-colors";
  };

  return (
    <html lang="fr" className="scroll-smooth">
      <head>
        <title>BivoTech</title>
        <meta name="description" content="Votre partenaire stratégique en impression 360° et communication visuelle haut de gamme en Côte d'Ivoire." />
        <link 
          rel="stylesheet" 
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" 
        />
      </head>
      <body className="bg-[#FAFAFC] text-[#0d1c2f] font-sans selection:bg-[#7ac143] selection:text-[#234b00] antialiased">
        
        {/* Top Navigation Bar */}
        <nav className="fixed top-0 w-full z-50 bg-white/85 backdrop-blur-md border-b border-[#c1cab4]/40 transition-all duration-300">
          <div className="flex justify-between items-center h-20 px-6 lg:px-12 max-w-7xl mx-auto">
            <div className="flex items-center gap-2">
              <Link href="/" className="flex items-center w-32 md:w-40"> 
                <Image 
                  src="/images/Logo.png"
                  alt="BivoTech Logo" 
                  width={700} 
                  height={700} 
                  className="object-contain w-full h-auto" 
                  priority 
                />
              </Link>
            </div>
            
            <div className="hidden md:flex gap-8 items-center text-sm font-medium">
              <Link className={getLinkClass("/")} href="/">Accueil</Link>
              <Link className={getLinkClass("/services")} href="/services">Services</Link>
              <Link className={getLinkClass("/portfolio")} href="/portfolio">Portfolio</Link>
              <Link className={getLinkClass("/temoignages")} href="/blog">Blog</Link>
              <Link className={getLinkClass("/contact")} href="/contact">Contact</Link>
            </div>

            <div className="flex items-center gap-3">
              <button 
                onClick={() => setIsModalOpen(true)}
                className="hidden sm:inline-block bg-[#346b00] text-white px-6 py-2.5 rounded-full text-sm font-semibold tracking-wide hover:shadow-lg hover:shadow-[#346b00]/20 active:scale-95 transition-all"
              >
                Prendre RDV
              </button>

              <button 
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden p-2 text-[#0d1c2f] hover:bg-[#eff4ff] rounded-full transition-colors"
                aria-label="Menu"
              >
                <span className="material-symbols-outlined text-2xl">
                  {mobileMenuOpen ? "close" : "menu"}
                </span>
              </button>
            </div>
          </div>

          {/* Menu Mobile */}
          {mobileMenuOpen && (
            <div className="md:hidden absolute top-20 left-0 w-full bg-white/95 backdrop-blur-xl border-b border-[#c1cab4]/40 px-6 py-6 shadow-xl flex flex-col gap-2">
              <Link href="/" onClick={() => setMobileMenuOpen(false)} className={getMobileLinkClass("/")}>Accueil</Link>
              <Link href="/services" onClick={() => setMobileMenuOpen(false)} className={getMobileLinkClass("/services")}>Services</Link>
              <Link href="/portfolio" onClick={() => setMobileMenuOpen(false)} className={getMobileLinkClass("/portfolio")}>Portfolio</Link>
              <Link href="/temoignages" onClick={() => setMobileMenuOpen(false)} className={getMobileLinkClass("/blog")}>Blog</Link>
              <Link href="/contact" onClick={() => setMobileMenuOpen(false)} className={getMobileLinkClass("/contact")}>Contact</Link>
              <button 
                onClick={() => { setMobileMenuOpen(false); setIsModalOpen(true); }}
                className="w-full mt-4 bg-[#346b00] text-white py-3 rounded-full text-sm font-semibold shadow-md"
              >
                Prendre RDV
              </button>
            </div>
          )}
        </nav>

        <main className="pt-20">
          {children}
        </main>

        {/* MODALE DE RENDEZ-VOUS */}
        {isModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4 overflow-y-auto">
            <div className="bg-white rounded-3xl max-w-lg w-full p-8 shadow-2xl relative my-8 animate-fadeIn">
              <button 
                onClick={() => setIsModalOpen(false)}
                className="absolute top-6 right-6 text-gray-400 hover:text-black text-xl font-bold"
              >
                ✕
              </button>

              <h3 className="text-2xl font-extrabold text-[#0d1c2f] mb-2">Prendre un Rendez-vous</h3>
              <p className="text-sm text-[#414939] mb-6">Planifiez votre consultation en atelier en toute simplicité.</p>

              {status.success && <div className="mb-4 p-3 bg-green-100 text-green-700 text-sm rounded-xl">{status.success}</div>}
              {status.error && <div className="mb-4 p-3 bg-red-100 text-red-700 text-sm rounded-xl">{status.error}</div>}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#0d1c2f] mb-1">Nom complet</label>
                  <input 
                    type="text" 
                    required
                    value={formData.nom}
                    onChange={(e) => setFormData({ ...formData, nom: e.target.value })}
                    className="w-full bg-[#FAFAFC] border border-[#c1cab4]/65 rounded-xl px-4 py-3 text-sm text-[#0d1c2f] placeholder:text-[#414939]/60 outline-none focus:border-[#346b00]"
                    placeholder="Ex: Jean Kouassi"
                  />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-[#0d1c2f] mb-1">Email</label>
                    <input 
                      type="email" 
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-[#FAFAFC] border border-[#c1cab4]/65 rounded-xl px-4 py-3 text-sm text-[#0d1c2f] placeholder:text-[#414939]/60 outline-none focus:border-[#346b00]"
                      placeholder="jean@example.com"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-[#0d1c2f] mb-1">Téléphone</label>
                    <input 
                      type="tel" 
                      required
                      value={formData.telephone}
                      onChange={(e) => setFormData({ ...formData, telephone: e.target.value })}
                      className="w-full bg-[#FAFAFC] border border-[#c1cab4]/65 rounded-xl px-4 py-3 text-sm text-[#0d1c2f] placeholder:text-[#414939]/60 outline-none focus:border-[#346b00]"
                      placeholder="+225 ..."
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#0d1c2f] mb-1">Date souhaitée (JJ/MM/AAAA)</label>
                  <input 
                    type="date" 
                    required
                    min={new Date().toISOString().split("T")[0]}
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    className="w-full bg-[#FAFAFC] border border-[#c1cab4]/65 rounded-xl px-4 py-3 text-sm text-[#0d1c2f] outline-none focus:border-[#346b00]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#0d1c2f] mb-1">Créneau horaire (24h)</label>
                  <div className="grid grid-cols-4 gap-2 mt-1">
                    {timeSlots.map((slot) => {
                      const isBooked = bookedSlots.some(
                        (b) => b.date === formData.date && b.heure === slot
                      );
                      const isSelected = formData.heure === slot;

                      return (
                        <button
                          key={slot}
                          type="button"
                          disabled={isBooked || !formData.date}
                          onClick={() => setFormData({ ...formData, heure: slot })}
                          className={`py-2 px-3 text-xs font-semibold rounded-xl border transition-all ${
                            isBooked
                              ? "bg-gray-100 text-gray-400 border-gray-200 cursor-not-allowed line-through"
                              : isSelected
                              ? "bg-[#346b00] text-white border-[#346b00] shadow-md"
                              : "bg-[#FAFAFC] text-[#0d1c2f] border-[#c1cab4]/65 hover:border-[#346b00]"
                          }`}
                        >
                          {slot}
                        </button>
                      );
                    })}
                  </div>
                  {!formData.date && (
                    <p className="text-[11px] text-amber-600 mt-1">Veuillez d&lsquo;abord choisir une date pour voir les créneaux.</p>
                  )}
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#0d1c2f] mb-1">Message (Optionnel)</label>
                  <textarea 
                    rows={2}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-[#FAFAFC] border border-[#c1cab4]/65 rounded-xl px-4 py-3 text-sm text-[#0d1c2f] placeholder:text-[#414939]/60 outline-none focus:border-[#346b00]"
                    placeholder="Précisez votre projet..."
                  ></textarea>
                </div>

                <button 
                  type="submit" 
                  disabled={status.loading || !formData.heure}
                  className="w-full bg-[#346b00] text-white py-3.5 rounded-full font-semibold text-sm shadow-lg hover:shadow-xl transition-all disabled:opacity-50"
                >
                  {status.loading ? "Enregistrement..." : "Confirmer le rendez-vous"}
                </button>
              </form>
            </div>
          </div>
        )}

        {/* Footer Commun */}
        <footer className="bg-[#0d1c2f] text-[#f8f9ff] py-16 border-t border-white/10">
          <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 md:grid-cols-4 gap-12">
            <div className="space-y-4">
              <span className="text-2xl font-extrabold text-white">BivoTech</span>
              <p className="text-sm text-white/70 leading-relaxed">Votre partenaire stratégique en impression 360° et communication visuelle haut de gamme en Côte d&lsquo;Ivoire.</p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Navigation</h4>
              <ul className="space-y-2.5 text-sm text-white/70">
                <li><Link href="/" className="hover:text-white transition-colors">Accueil</Link></li>
                <li><Link href="/services" className="hover:text-white transition-colors">Nos Services</Link></li>
                <li><Link href="/portfolio" className="hover:text-white transition-colors">Portfolio</Link></li>
                <li><Link href="/temoignages" className="hover:text-white transition-colors">Témoignages</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Services</h4>
              <ul className="space-y-2.5 text-sm text-white/70">
                <li><Link href="/services" className="hover:text-white transition-colors">Enseignes 3D & Allucobond</Link></li>
                <li><Link href="/services" className="hover:text-white transition-colors">Impression Offset & Numérique</Link></li>
                <li><Link href="/services" className="hover:text-white transition-colors">Textile & Goodies Corporate</Link></li>
                <li><Link href="/services" className="hover:text-white transition-colors">Community Management</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Contact</h4>
              <p className="text-sm text-white/70 mb-2">Riviera Triangle Ancien Camp D&lsquo;Akouédo, Abidjan, Côte d&lsquo;Ivoire</p>
              <p className="text-sm text-white/70 mb-4">contact@bivotech.com</p>
              <div className="flex gap-3 items-center">
                <span className="w-2 h-2 rounded-full bg-[#7ac143] animate-pulse"></span>
                <span className="text-xs text-[#7ac143] font-medium">Atelier ouvert du Lundi au Samedi</span>
              </div>
            </div>
          </div>
          <div className="max-w-7xl mx-auto px-6 lg:px-12 mt-12 pt-8 border-t border-white/10 text-center text-xs text-white/50">
            © 2026 BivoTech. Tous droits réservés.
          </div>
        </footer>

      </body>
    </html>
  );
}