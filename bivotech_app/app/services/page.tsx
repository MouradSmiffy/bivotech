"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function ServicesPage() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Fonction pour déclencher l'ouverture de la modale de RDV globale
  const handleOpenRdvModal = () => {
    window.dispatchEvent(new CustomEvent("open-rdv-modal"));
  };

  return (
    <>
      {/* Hero Section Luxe */}
      <section className="relative overflow-hidden min-h-[50vh] flex items-center py-20 bg-[#F5F4F0]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl space-y-6"
          >
            <div className="inline-flex items-center gap-2 bg-[#346b00]/10 px-4 py-1.5 rounded-full">
              <span className="text-xs font-semibold text-[#346b00] uppercase tracking-wider">Expertise BivoTech</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#0d1c2f] leading-[1.1]">
              L&apos;excellence technique au <span className="text-[#346b00]">service</span> de votre image.
            </h1>
            <p className="text-lg text-[#414939] font-normal leading-relaxed max-w-2xl">
              De l&apos;impression haute définition à la stratégie digitale, nous transformons vos idées en supports tangibles et impactants avec une précision chirurgicale.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Bento Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            
            {/* Service 1: Imprimerie (Large Card) */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              whileHover={{ y: -4 }}
              className="md:col-span-8 bg-white border border-[#c1cab4]/60 rounded-[32px] p-8 md:p-12 flex flex-col md:flex-row gap-8 transition-all shadow-xl shadow-black/[0.02]"
            >
              <div className="flex-1 space-y-4">
                <div className="w-12 h-12 bg-[#346b00]/10 rounded-xl flex items-center justify-center text-[#346b00]">
                  <span className="material-symbols-outlined">print</span>
                </div>
                <h3 className="text-2xl font-bold text-[#0d1c2f]">Imprimerie &amp; Supports</h3>
                <p className="text-[#414939] text-sm leading-relaxed">
                  Production haute fidélité sur une gamme infinie de supports. Qualité offset et numérique pour vos besoins professionnels.
                </p>
                <ul className="space-y-3 pt-2 text-[#414939] text-sm">
                  <li className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-[#346b00] text-[18px]">check_circle</span> Tous supports (Papier, PVC, Vinyle)
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-[#346b00] text-[18px]">check_circle</span> Gadgets &amp; Objets publicitaires
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-[#346b00] text-[18px]">check_circle</span> Marquage Textiles personnalisés
                  </li>
                </ul>
              </div>
              <div className="flex-1 rounded-2xl overflow-hidden min-h-[240px] relative border border-[#c1cab4]/40">
                <Image
                  fill
                  className="object-cover w-full h-full"
                  alt="Atelier d'impression haute-définition"
                  src="/images/services.jpg"
                />
              </div>
            </motion.div>

            {/* Service 2: Digital & Marketing */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              whileHover={{ y: -4 }}
              className="md:col-span-4 bg-[#f8f9ff] border border-[#c1cab4]/50 rounded-[32px] p-8 flex flex-col justify-between shadow-xl shadow-black/[0.02]"
            >
              <div>
                <div className="w-12 h-12 bg-[#346b00]/10 rounded-xl flex items-center justify-center text-[#346b00] mb-6">
                  <span className="material-symbols-outlined">campaign</span>
                </div>
                <h3 className="text-2xl font-bold text-[#0d1c2f] mb-3">Digital &amp; Marketing</h3>
                <p className="text-[#414939] text-sm leading-relaxed mb-6">
                  Propulsez votre présence en ligne avec nos packs d&apos;assistance et une gestion de communauté experte.
                </p>
              </div>
              <div className="bg-white p-4 rounded-2xl border border-[#c1cab4]/40">
                <div className="text-xs text-[#346b00] mb-1 font-bold uppercase tracking-wider">Populaire</div>
                <div className="text-base font-bold text-[#0d1c2f] mb-1">Packs d&apos;Assistance</div>
                <p className="text-xs text-[#414939]">Maintenance et support 24/7 pour votre visibilité.</p>
              </div>
            </motion.div>

            {/* Service 3: Signalétique & Enseignes */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              whileHover={{ y: -4 }}
              className="md:col-span-6 bg-white border border-[#c1cab4]/60 rounded-[32px] overflow-hidden shadow-xl shadow-black/[0.02] flex flex-col"
            >
              <div className="h-64 relative">
                <Image
                  fill
                  className="object-cover w-full h-full"
                  alt="Enseigne 3D lumineuse"
                  src="/images/bivofa.jpg"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent"></div>
              </div>
              <div className="p-8 md:p-12 relative -mt-12 bg-white flex-1 flex flex-col justify-between space-y-6">
                <div>
                  <div className="w-12 h-12 bg-[#346b00]/10 rounded-xl flex items-center justify-center text-[#346b00] mb-6">
                    <span className="material-symbols-outlined">add_business</span>
                  </div>
                  <h3 className="text-2xl font-bold text-[#0d1c2f] mb-3">Signalétique &amp; Enseignes</h3>
                  <p className="text-[#414939] text-sm leading-relaxed">
                    Marquez votre territoire avec des enseignes 3D, lumineuses et des revêtements Allucobond haut de gamme.
                  </p>
                </div>
                <button className="text-[#346b00] font-bold text-sm flex items-center gap-2 hover:gap-3 transition-all pt-2">
                  Voir nos réalisations <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </button>
              </div>
            </motion.div>

            {/* Service 4: Identité Visuelle */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              whileHover={{ y: -4 }}
              className="md:col-span-6 bg-[#b8eafd]/20 border border-[#c1cab4]/50 rounded-[32px] p-8 md:p-12 flex flex-col justify-between shadow-xl shadow-black/[0.02]"
            >
              <div className="space-y-4 mb-8">
                <div className="w-12 h-12 bg-[#346b00]/10 rounded-xl flex items-center justify-center text-[#346b00]">
                  <span className="material-symbols-outlined">palette</span>
                </div>
                <h3 className="text-2xl font-bold text-[#0d1c2f]">Design Graphique</h3>
                <p className="text-[#414939] text-base leading-relaxed">
                  L&apos;ADN de votre marque. Nous concevons des identités visuelles qui racontent votre histoire avec force et clarté.
                </p>
              </div>
              <div className="grid grid-cols-3 gap-4">
                <div className="aspect-square bg-white rounded-2xl flex items-center justify-center border border-[#c1cab4]/40 shadow-sm">
                  <span className="material-symbols-outlined text-[#346b00] text-3xl">branding_watermark</span>
                </div>
                <div className="aspect-square bg-white rounded-2xl flex items-center justify-center border border-[#c1cab4]/40 shadow-sm">
                  <span className="material-symbols-outlined text-[#346b00] text-3xl">draw</span>
                </div>
                <div className="aspect-square bg-white rounded-2xl flex items-center justify-center border border-[#c1cab4]/40 shadow-sm">
                  <span className="material-symbols-outlined text-[#346b00] text-3xl">auto_fix_high</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-[#FAFAFC] border-t border-[#c1cab4]/30">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
            <h2 className="text-3xl font-bold text-[#0d1c2f]">Notre Processus</h2>
            <p className="text-[#414939] text-base">Une méthodologie rigoureuse pour garantir des résultats à la hauteur de vos ambitions.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
            <div className="hidden md:block absolute top-12 left-12 right-12 h-0.5 bg-[#c1cab4]/40 z-0"></div>

            {[
              { icon: "search_insights", title: "Analyse", desc: "Compréhension approfondie de vos besoins et de votre marché." },
              { icon: "lightbulb", title: "Propositions", desc: "Élaboration de concepts créatifs et solutions techniques." },
              { icon: "design_services", title: "Conception", desc: "Réalisation des maquettes et finalisation technique." },
              { icon: "local_shipping", title: "Livraison", desc: "Production finale, contrôle qualité et remise." },
            ].map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.15 }}
                className="relative z-10 text-center space-y-3"
              >
                <div className="w-20 h-20 rounded-full bg-[#346b00] text-white flex items-center justify-center mx-auto shadow-lg shadow-[#346b00]/20 border-4 border-white">
                  <span className="material-symbols-outlined text-3xl">{step.icon}</span>
                </div>
                <h4 className="text-lg font-bold text-[#0d1c2f]">{step.title}</h4>
                <p className="text-xs text-[#414939] leading-relaxed max-w-xs mx-auto">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Final */}
      <section className="py-20 bg-white border-t border-[#c1cab4]/40">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-[#0d1c2f] text-white rounded-[32px] p-10 md:p-16 flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl"
          >
            <div className="max-w-xl space-y-3 text-center md:text-left">
              <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">Prêt à lancer votre projet ?</h2>
              <p className="text-slate-300 text-base leading-relaxed">
                Contactez nos experts pour une consultation gratuite et un devis personnalisé adapté à vos besoins.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
              <motion.button
                onClick={handleOpenRdvModal}
                whileTap={{ scale: 0.95 }}
                whileHover={{ opacity: 0.9 }}
                className="bg-[#346b00] text-white px-8 py-4 rounded-full font-semibold text-sm shadow-lg shadow-[#346b00]/25 transition-all text-center cursor-pointer"
              >
                Démarrer un projet
              </motion.button>
              <Link href="/contact" passHref>
                <motion.button
                    whileTap={{ scale: 0.95 }}
                    whileHover={{ backgroundColor: "rgba(255, 255, 255, 0.1)" }}
                    className="border border-white/30 text-white px-8 py-4 rounded-full font-semibold text-sm transition-all text-center cursor-pointer"
                >
                    Nous contacter
                </motion.button>
                </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}