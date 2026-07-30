import Image from "next/image";

export default function Home() {
  return (
    <>
      {/* Hero Section Luxe */}
      <section className="relative overflow-hidden min-h-[85vh] flex items-center py-20 bg-[#F5F4F0]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8 text-left">
            <div className="inline-flex items-center gap-3 bg-[#346b00]/5 px-4 py-1.5 rounded-full border border-[#346b00]/10">
              <span className="w-2 h-2 rounded-full bg-[#346b00]"></span>
              <span className="text-xs font-semibold text-[#346b00] tracking-wide uppercase">Excellence & Précision 360°</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#0d1c2f] leading-[1.1]">
              Donnez une dimension <span className="text-[#346b00]">prestigieuse</span> à votre image de marque.
            </h1>
            <p className="text-lg text-[#414939] font-normal leading-relaxed max-w-xl">
              De la conception architecturale à l&lsquo;impression haute définition sur tous supports, BivoTech associe l&lsquo;exigence artisanale à l&lsquo;innovation technologique.
            </p>
            <div className="flex flex-wrap gap-4 pt-2">
              <button className="bg-[#346b00] text-white px-8 py-4 rounded-full font-semibold text-sm hover:shadow-xl hover:shadow-[#346b00]/25 transition-all active:scale-95">Demander un devis sur-mesure</button>
              <button className="bg-white text-[#0d1c2f] border border-[#c1cab4] px-8 py-4 rounded-full font-semibold text-sm hover:bg-[#eff4ff] transition-all active:scale-95">Explorer nos réalisations</button>
            </div>
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-[#c1cab4]/40">
              <div>
                <p className="text-3xl font-extrabold text-[#346b00]">500+</p>
                <p className="text-xs text-[#414939] uppercase tracking-wider mt-1">Clients d&lsquo;élite</p>
              </div>
              <div>
                <p className="text-3xl font-extrabold text-[#346b00]">1.2k+</p>
                <p className="text-xs text-[#414939] uppercase tracking-wider mt-1">Projets d&lsquo;exception</p>
              </div>
              <div>
                <p className="text-3xl font-extrabold text-[#346b00]">5+</p>
                <p className="text-xs text-[#414939] uppercase tracking-wider mt-1">Ans d&lsquo;expertise</p>
              </div>
            </div>
          </div>
          <div className="relative group">
            <div className="absolute -inset-4 bg-[#346b00]/5 rounded-[40px] blur-2xl"></div>
            <div className="relative bg-white p-3 rounded-[32px] border border-[#c1cab4]/60 shadow-2xl overflow-hidden aspect-square flex items-center justify-center">
              <div className="relative w-full h-full">
                <Image 
                  src="/images/photohero.jpg" 
                  alt="Atelier d'impression haut de gamme BivoTech" 
                  fill 
                  className="object-cover rounded-[24px]" 
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section Minimaliste */}
      <section className="py-24 bg-white" id="services">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
            <h2 className="text-3xl font-bold text-[#0d1c2f]">Nos Domaines d&lsquo;Expertise</h2>
            <p className="text-[#414939] text-base">Une approche sur-mesure pour sublimer la communication visuelle de votre entreprise.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="p-8 bg-[#f8f9ff] border border-[#c1cab4]/50 rounded-2xl hover:border-[#346b00]/50 transition-all group">
              <div className="w-12 h-12 bg-[#b8eafd]/50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#346b00]/10 transition-colors">
                <span className="material-symbols-outlined text-[#346b00]">view_in_ar</span>
              </div>
              <h3 className="text-xl font-bold mb-3 text-[#0d1c2f]">Enseignes 3D & Façades</h3>
              <p className="text-sm text-[#414939] leading-relaxed">Lettrages lumineux relief et habillage Allucobond pour une prestance architecturale remarquable.</p>
            </div>
            <div className="p-8 bg-[#f8f9ff] border border-[#c1cab4]/50 rounded-2xl hover:border-[#346b00]/50 transition-all group">
              <div className="w-12 h-12 bg-[#b8eafd]/50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#346b00]/10 transition-colors">
                <span className="material-symbols-outlined text-[#346b00]">print</span>
              </div>
              <h3 className="text-xl font-bold mb-3 text-[#0d1c2f]">Impression Offset & Numérique</h3>
              <p className="text-sm text-[#414939] leading-relaxed">Papeterie corporate de luxe, finitions spéciales (vernis sélectif, gaufrage) et grands formats.</p>
            </div>
            <div className="p-8 bg-[#f8f9ff] border border-[#c1cab4]/50 rounded-2xl hover:border-[#346b00]/50 transition-all group">
              <div className="w-12 h-12 bg-[#b8eafd]/50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#346b00]/10 transition-colors">
                <span className="material-symbols-outlined text-[#346b00]">checkroom</span>
              </div>
              <h3 className="text-xl font-bold mb-3 text-[#0d1c2f]">Textile & Goodies Haut de Gamme</h3>
              <p className="text-sm text-[#414939] leading-relaxed">Merchandising élégant, broderie de précision et objets publicitaires soigneusement sélectionnés.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Épuré */}
      <section className="py-24 bg-[#FAFAFC]" id="portfolio">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-16">
            <div>
              <h2 className="text-3xl font-bold text-[#0d1c2f] mb-2">Sélection de Réalisations</h2>
              <p className="text-[#414939] text-base">L&lsquo;art du détail au service de grandes marques.</p>
            </div>
            <div className="flex gap-2 bg-white p-1.5 rounded-full border border-[#c1cab4]/60">
              <button className="bg-[#346b00] text-white px-5 py-2 rounded-full text-xs font-semibold">Tous</button>
              <button className="text-[#414939] hover:text-[#346b00] px-5 py-2 rounded-full text-xs font-semibold transition-colors">Textile</button>
              <button className="text-[#414939] hover:text-[#346b00] px-5 py-2 rounded-full text-xs font-semibold transition-colors">Véhicules</button>
              <button className="text-[#414939] hover:text-[#346b00] px-5 py-2 rounded-full text-xs font-semibold transition-colors">Papeterie</button>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="group relative overflow-hidden rounded-2xl aspect-[4/5] bg-white border border-[#c1cab4]/60">
              <img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDhbhjrEyg7BIUhUBAaRynPHBEY2ckbZK3vDwdC7HeINnsLkBlnEJYntsKN0LDrS4ByFWzzqMJUvv2yotMthM3dE6klelUykAqV_F-atBjO8qIFDcz5zwL3amE_Vic5d5ABfcG0vEvaALXc165Z3CZ5UVy_xUl3hvHxBhjyVeBi_YKkCmxCEL0BR6px71g71gQWEMrsHKAR2FHP835UVioUfWuckLhSIWKjuuyhpEmmFfmrRK-0r5mYOJBttSPQdOGhrBaVazaHgOk" alt="Branding T-Shirts" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
                <span className="text-[#acf771] font-bold text-xs uppercase tracking-widest mb-1">Textile</span>
                <h4 className="text-white text-lg font-bold">Collection Corporate</h4>
              </div>
            </div>
            <div className="group relative overflow-hidden rounded-2xl aspect-[4/5] bg-white border border-[#c1cab4]/60 lg:mt-8">
              <img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBs7YOf0K0z6zVoQDpq4suplzEbrdFNMsgKeD4chHqXCTfTitOIPZxubrWOSohEVnSJaUlZGPzyDzh_NGTDlQ9tOuiTKGlnOafwySembtQzpm-f-N1wfACSU9HpORLzs4LQ11CN9bIRTMzzmKc-YzhDnx03F1PKTp4nE9mDT1ZDRXxZ3OmNHpe0PDs-hcInyL0jB9tjpA28Nj0vYno6vFqSO4HK--W2R-JkZdN7B2YIMUgFJI2yoDRZbClqOdUEwe5AK7wysDHOvCk" alt="Marquage Flotte" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
                <span className="text-[#acf771] font-bold text-xs uppercase tracking-widest mb-1">Véhicules</span>
                <h4 className="text-white text-lg font-bold">Total Covering Flotte</h4>
              </div>
            </div>
            <div className="group relative overflow-hidden rounded-2xl aspect-[4/5] bg-white border border-[#c1cab4]/60">
              <img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAjh8dHnteU0V3AbKAGl1iSZVReQN0n9dRfFBKzZz6YQ8tbSbg2xHTwNB-HiJFE1iFSdhY8iPiVr304OQbBoH3FO8lOcPO8h4Jtlr5UlnPsqjH6xtF0mSXhxPBVSC7dkONrOJlvfUKI-b9tc22OVA_Y2RUewr1Dz2RfsTsl5fyrFpdrxumqYzmeRzqkQJsp-5gbIS8xCvVJjfEOugFBEm9WSFLZbFdD1CjJ1ZBEZMeb6fozVLbOdvBMTxkoX_pMSJ0rfvPKODpiPsI" alt="Papeterie Corporate" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
                <span className="text-[#acf771] font-bold text-xs uppercase tracking-widest mb-1">Papeterie</span>
                <h4 className="text-white text-lg font-bold">Coffrets Papeterie de Luxe</h4>
              </div>
            </div>
            <div className="group relative overflow-hidden rounded-2xl aspect-[4/5] bg-white border border-[#c1cab4]/60 lg:mt-8">
              <img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBNTKlsg3x_F9kf12okG_R3luVSTT_vg90wppIfAVNQ04CRXprk_8IOUSYKLOv9dLM3sB0Ksy1A_NE97pIxtnnaSL0UQYt3PBEpTGsyQXiCSjG7DkxwnN9aVCiVdpeDA5ZdBqU_19H3Sbxt1-KbKiDttdHhjfSCPQqnGFcknW_7lYttz2gp1FV4Sp7kiXtSUIZaHgwyWIULSibkuvANhADUKM0qciDpEWSrnRJsbmCpQFyJWh04xmaHd3xns3wtn6ZjE5aHmnFUqHw" alt="Goodies" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
                <span className="text-[#acf771] font-bold text-xs uppercase tracking-widest mb-1">Goodies</span>
                <h4 className="text-white text-lg font-bold">Objets Designés</h4>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Final */}
      <section className="py-20 bg-white border-t border-[#c1cab4]/40" id="contact">
        <div className="max-w-5xl mx-auto px-6 text-center space-y-8">
          <div className="inline-flex items-center gap-2 bg-[#346b00]/10 px-4 py-1.5 rounded-full">
            <span className="text-xs font-semibold text-[#346b00] uppercase tracking-wider">Parlons de votre projet</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0d1c2f]">Prêt à transformer votre communication visuelle ?</h2>
          <p className="text-[#414939] max-w-xl mx-auto text-base">Nos experts vous accompagnent dès aujourd&lsquo;hui pour concrétiser vos idées avec un niveau de finition irréprochable.</p>
          <div className="flex justify-center gap-4 pt-4">
            <button className="bg-[#346b00] text-white px-8 py-4 rounded-full font-semibold text-sm hover:shadow-xl hover:shadow-[#346b00]/20 transition-all">Prendre rendez-vous en atelier</button>
          </div>
        </div>
      </section>
    </>
  );
}