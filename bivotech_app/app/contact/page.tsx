"use client";

import { useState } from "react";

export default function ContactPage() {
  const [status, setStatus] = useState<{ loading: boolean; success?: string; error?: string }>({ loading: false });
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    subject: "Imprimerie (Flyers, Brochures)",
    message: ""
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus({ loading: true });

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Une erreur est survenue lors de l'envoi.");

      setStatus({ loading: false, success: "Votre message a été envoyé avec succès !" });
      setFormData({ name: "", phone: "", email: "", subject: "Imprimerie (Flyers, Brochures)", message: "" });
      
      setTimeout(() => {
        setStatus({ loading: false });
      }, 4000);
    } catch (err: any) {
      setStatus({ loading: false, error: err.message });
    }
  };

  return (
    <main className="bg-[#f8f9ff] text-[#0d1c2f] font-sans">
      {/* Hero Section */}
      <section className="relative py-24 md:py-32 overflow-hidden bg-[#eff4ff]">
        <div className="absolute inset-0 opacity-5 bg-[radial-gradient(#7ac143_0.5px,transparent_0.5px)] [background-size:24px_24px]"></div>
        <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
          <div className="max-w-3xl">
            <span className="inline-block px-4 py-1 bg-[#346b00]/10 text-[#346b00] rounded-full text-xs font-semibold mb-6">
              Parlons de votre projet
            </span>
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-[#0d1c2f] mb-6">
              Contactez nos <span className="text-[#7ac143]">experts</span>
            </h1>
            <p className="text-base md:text-lg text-[#414939] mb-8 leading-relaxed">
              Que vous soyez au début d&lsquo;une idée ou prêt à lancer une production d&lsquo;envergure, BivoTech vous offre un accompagnement personnalisé pour sublimer votre communication visuelle.
            </p>
            <div className="flex flex-wrap gap-4">
              <a 
                href="#appointment" 
                className="bg-[#7ac143] text-white px-8 py-4 rounded-xl font-semibold flex items-center gap-2 hover:shadow-lg transition-all"
              >
                <span className="material-symbols-outlined">calendar_today</span>
                Prendre rendez-vous
              </a>
              <a 
                href="#form" 
                className="bg-white text-[#336574] px-8 py-4 rounded-xl border border-[#c1cab4] font-semibold hover:bg-[#e6eeff] transition-all"
              >
                Envoyer un message
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Coordonnées & Map Section */}
      <section className="py-16 max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Contact Cards */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white border border-[#c1cab4] p-6 rounded-xl shadow-sm hover:border-[#346b00]/30 transition-colors">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-[#346b00]/10 rounded-lg text-[#346b00]">
                  <span className="material-symbols-outlined">location_on</span>
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2">Notre Siège</h3>
                  <p className="text-[#414939] text-sm">Riviera triangle, ancien camps Akouedo, Abidjan, Côte d&lsquo;Ivoire.</p>
                </div>
              </div>
            </div>

            <div className="bg-white border border-[#c1cab4] p-6 rounded-xl shadow-sm hover:border-[#346b00]/30 transition-colors">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-[#346b00]/10 rounded-lg text-[#346b00]">
                  <span className="material-symbols-outlined">call</span>
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2">Téléphones</h3>
                  <p className="text-[#414939] text-sm">07 58 73 24 48</p>
                  <p className="text-[#414939] text-sm">05 00 59 17 18</p>
                </div>
              </div>
            </div>

            <div className="bg-white border border-[#c1cab4] p-6 rounded-xl shadow-sm hover:border-[#346b00]/30 transition-colors">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-[#346b00]/10 rounded-lg text-[#346b00]">
                  <span className="material-symbols-outlined">mail</span>
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2">Emails</h3>
                  <p className="text-[#414939] text-sm">bivotech05@gmail.com</p>
                  <p className="text-[#414939] text-sm">yvonbadirou@gmail.com</p>
                </div>
              </div>
            </div>

            <div className="bg-white border border-[#c1cab4] p-6 rounded-xl shadow-sm hover:border-[#346b00]/30 transition-colors">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-[#346b00]/10 rounded-lg text-[#346b00]">
                  <span className="material-symbols-outlined">schedule</span>
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2">Horaires d&lsquo;ouverture</h3>
                  <div className="grid grid-cols-2 gap-2 text-[#414939] text-sm">
                    <span>Lun - Ven :</span>
                    <span>8h00 - 18h00</span>
                    <span>Samedi :</span>
                    <span>9h00 - 13h00</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Map Placeholder */}
          <div className="lg:col-span-7 h-[500px] lg:h-auto bg-[#e6eeff] rounded-xl overflow-hidden relative group border border-[#c1cab4]">
            <div 
              className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105" 
              style={{ backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuDNvuaxbOb6Z-XKntOv8JgFBD3lRaYuUyAt8WRhKwohiX89QxeKOFAB61gzKE7LcTnaaoAY-Zd3XkRKiB6erSFZbbg2YeTyFkwR6O_eeby6EdxUHZgVOpfjrOcIRdsDjbWrFk-uBo6noRphiOba9ILwUlA7L7LCRk9mOm9xYPa9qKgdIzSeBExrzQesAFeIQdqd_TS_o9EuAmGGfEi5PRXvGgNjiEMadrmxMj5FGDQMcFqbPpK1q09_')` }}
            ></div>
            <div className="absolute bottom-6 right-6 bg-white p-4 rounded-xl shadow-xl max-w-xs border border-[#c1cab4]">
              <p className="font-bold text-sm mb-1 text-[#346b00]">Retrouvez-nous ici</p>
              <p className="text-xs text-[#414939]">Zone Riviera Triangle, un pôle d&lsquo;excellence en communication visuelle.</p>
              <a 
                href="https://maps.google.com" 
                target="_blank" 
                rel="noreferrer"
                className="mt-3 inline-flex items-center text-[#346b00] font-bold text-sm gap-1 hover:underline"
              >
                Ouvrir dans Maps <span className="material-symbols-outlined text-sm">open_in_new</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-24 bg-[#f8f9ff]" id="form">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-extrabold mb-6">Un projet ? <br/><span className="text-[#7ac143]">Demandez un devis gratuit</span></h2>
              <p className="text-[#414939] mb-8 leading-relaxed">Remplissez ce formulaire et l&lsquo;un de nos chargés d&lsquo;affaires vous recontactera sous 24h pour discuter de la faisabilité technique et du chiffrage de votre demande.</p>
              <div className="flex items-center gap-6 p-6 border border-[#346b00]/20 bg-[#346b00]/5 rounded-xl">
                <div className="w-12 h-12 rounded-full bg-[#7ac143] flex items-center justify-center text-white shrink-0">
                  <span className="material-symbols-outlined">verified</span>
                </div>
                <div>
                  <p className="font-bold text-[#0d1c2f]">Expertise Garantie</p>
                  <p className="text-sm text-[#414939]">Analyse technique approfondie pour chaque demande.</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 md:p-10 rounded-2xl shadow-xl border border-[#c1cab4]">
              {status.success && <div className="mb-6 p-4 bg-green-100 text-green-700 text-sm rounded-xl">{status.success}</div>}
              {status.error && <div className="mb-6 p-4 bg-red-100 text-red-700 text-sm rounded-xl">{status.error}</div>}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-semibold uppercase tracking-wider text-[#414939]">Nom complet</label>
                    <input 
                      type="text" 
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-[#c1cab4] focus:border-[#346b00] outline-none transition-all text-sm" 
                      placeholder="Jean Dupont" 
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-semibold uppercase tracking-wider text-[#414939]">Téléphone</label>
                    <input 
                      type="tel" 
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-[#c1cab4] focus:border-[#346b00] outline-none transition-all text-sm" 
                      placeholder="+225 ..." 
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-semibold uppercase tracking-wider text-[#414939]">Email professionnel</label>
                  <input 
                    type="email" 
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-[#c1cab4] focus:border-[#346b00] outline-none transition-all text-sm" 
                    placeholder="contact@entreprise.com" 
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-semibold uppercase tracking-wider text-[#414939]">Type de projet (Sujet)</label>
                  <select 
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-[#c1cab4] focus:border-[#346b00] outline-none transition-all bg-white text-sm"
                  >
                    <option>Imprimerie (Flyers, Brochures)</option>
                    <option>Signalétique (Enseignes, Panneaux)</option>
                    <option>Design & Branding</option>
                    <option>Autre</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-semibold uppercase tracking-wider text-[#414939]">Votre message</label>
                  <textarea 
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-[#c1cab4] focus:border-[#346b00] outline-none transition-all text-sm" 
                    placeholder="Détaillez votre besoin ici..."
                  ></textarea>
                </div>

                <button 
                  type="submit" 
                  disabled={status.loading}
                  className="w-full bg-[#7ac143] text-white py-4 rounded-xl font-semibold hover:opacity-90 transition-all flex items-center justify-center gap-2 disabled:opacity-50"
                >
                  {status.loading ? "Envoi en cours..." : "Envoyer la demande"} 
                  <span className="material-symbols-outlined">send</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials & CTA Section */}
      <section className="py-24 bg-[#336574] text-white overflow-hidden relative" id="appointment">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-[#346b00]/10 skew-x-12 translate-x-24"></div>
        <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
          
          {/* En-tête de section */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block px-4 py-1 bg-[#acf771]/10 text-[#acf771] rounded-full text-xs font-semibold mb-4">
              Ils nous font confiance
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold mb-6">
              Ce que disent nos <span className="text-[#acf771]">clients</span>
            </h2>
            <p className="text-base md:text-lg opacity-90">
              Découvrez les retours d&lsquo;expérience de ceux qui ont fait appel à notre expertise pour leurs projets de communication et d&lsquo;impression.
            </p>
          </div>

          {/* Grille des Témoignages */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            
            {/* Témoignage 1 */}
            <div className="bg-white/10 backdrop-blur-md p-6 lg:p-8 rounded-2xl border border-white/20 flex flex-col justify-between">
              <div>
                <div className="flex text-[#acf771] mb-4 gap-1">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                  ))}
                </div>
                <p className="text-sm opacity-90 italic mb-6">
                  Un professionnalisme remarquable. Les flyers et la signalétique livrés pour notre lancement d&lsquo;entreprise ont dépassé nos attentes.
                </p>
              </div>
              <div className="flex items-center gap-3 border-t border-white/10 pt-4">
                <div className="w-10 h-10 rounded-full bg-[#acf771]/20 flex items-center justify-center font-bold text-[#acf771]">
                  KA
                </div>
                <div>
                  <h4 className="font-bold text-sm">Kouassi Alain</h4>
                  <p className="text-xs opacity-70">Directeur Général, Entreprise Locale</p>
                </div>
              </div>
            </div>

            {/* Témoignage 2 */}
            <div className="bg-white/10 backdrop-blur-md p-6 lg:p-8 rounded-2xl border border-white/20 flex flex-col justify-between">
              <div>
                <div className="flex text-[#acf771] mb-4 gap-1">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                  ))}
                </div>
                <p className="text-sm opacity-90 italic mb-6">
                  Le suivi de projet a été parfait de la conception graphique à l&lsquo;impression finale. Je recommande vivement l&lsquo;équipe de la Riviera Triangle.
                </p>
              </div>
              <div className="flex items-center gap-3 border-t border-white/10 pt-4">
                <div className="w-10 h-10 rounded-full bg-[#acf771]/20 flex items-center justify-center font-bold text-[#acf771]">
                  MD
                </div>
                <div>
                  <h4 className="font-bold text-sm">Mariam Diallo</h4>
                  <p className="text-xs opacity-70">Responsable Communication</p>
                </div>
              </div>
            </div>

            {/* Témoignage 3 */}
            <div className="bg-white/10 backdrop-blur-md p-6 lg:p-8 rounded-2xl border border-white/20 flex flex-col justify-between">
              <div>
                <div className="flex text-[#acf771] mb-4 gap-1">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                  ))}
                </div>
                <p className="text-sm opacity-90 italic mb-6">
                  Réactivité au top et respect des délais serrés. Le rendu sur nos supports grands formats est juste impeccable.
                </p>
              </div>
              <div className="flex items-center gap-3 border-t border-white/10 pt-4">
                <div className="w-10 h-10 rounded-full bg-[#acf771]/20 flex items-center justify-center font-bold text-[#acf771]">
                  JS
                </div>
                <div>
                  <h4 className="font-bold text-sm">Jean-Marc S.</h4>
                  <p className="text-xs opacity-70">Entrepreneur</p>
                </div>
              </div>
            </div>

          </div>

          {/* Bouton d'appel à l'action pour ouvrir le Modal de RDV */}
          <div className="text-center bg-white/5 border border-white/10 p-8 rounded-2xl max-w-2xl mx-auto backdrop-blur-sm">
            <h3 className="text-xl font-bold mb-3">Prêt à concrétiser votre vision ?</h3>
            <p className="text-sm opacity-80 mb-6">Discutons de vos besoins spécifiques en planifiant un rendez-vous dès maintenant.</p>
            <button 
              onClick={() => window.dispatchEvent(new CustomEvent('open-rdv-modal'))}
              className="bg-[#acf771] text-[#0d1c2f] px-8 py-4 rounded-xl font-bold inline-flex items-center gap-2 hover:bg-white transition-all shadow-lg cursor-pointer"
            >
              <span className="material-symbols-outlined">calendar_month</span>
              Prendre rendez-vous
            </button>
          </div>

        </div>
      </section>
    </main>
  );
}