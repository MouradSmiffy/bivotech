import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Inter } from "next/font/google";
import Image from "next/image";
import Link from "next/link"
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({ 
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
});

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "BivoTech",
  description: "Votre partenaire stratégique en impression 360° et communication visuelle haut de gamme en Côte d'Ivoire.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className={`scroll-smooth ${jakarta.variable} ${inter.variable}`}>
      <head>
        <link 
          rel="stylesheet" 
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" 
        />
      </head>
      <body className="bg-[#FAFAFC] text-[#0d1c2f] font-sans selection:bg-[#7ac143] selection:text-[#234b00] antialiased">
        
        {/* Top Navigation Bar (Commun à tout le site) */}
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
              <Link className="text-[#346b00] font-semibold border-b-2 border-[#346b00] pb-1 transition-all" href="/">Accueil</Link>
              <Link className="text-[#414939] hover:text-[#346b00] transition-colors" href="/#services">Services</Link>
              <Link className="text-[#414939] hover:text-[#346b00] transition-colors" href="/#portfolio">Portfolio</Link>
              <Link className="text-[#414939] hover:text-[#346b00] transition-colors" href="/#temoignages">Témoignages</Link>
              <Link className="text-[#414939] hover:text-[#346b00] transition-colors" href="/#contact">Contact</Link>
            </div>

            <div className="flex items-center gap-4">
              <button aria-label="Rechercher" className="text-[#414939] p-2.5 hover:bg-[#eff4ff] rounded-full transition-colors text-lg">
                🔍
              </button>
              <button className="bg-[#346b00] text-white px-6 py-2.5 rounded-full text-sm font-semibold tracking-wide hover:shadow-lg hover:shadow-[#346b00]/20 active:scale-95 transition-all">Prendre RDV</button>
            </div>
          </div>
        </nav>

        {/* Zone de contenu dynamique de la page */}
        <main className="pt-20">
          {children}
        </main>

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
                <li><Link href="/#services" className="hover:text-white transition-colors">Nos Services</Link></li>
                <li><Link href="/#portfolio" className="hover:text-white transition-colors">Portfolio</Link></li>
                <li><Link href="/#temoignages" className="hover:text-white transition-colors">Témoignages</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Services</h4>
              <ul className="space-y-2.5 text-sm text-white/70">
                <li><Link href="/#services" className="hover:text-white transition-colors">Enseignes 3D & Allucobond</Link></li>
                <li><Link href="/#services" className="hover:text-white transition-colors">Impression Offset & Numérique</Link></li>
                <li><Link href="/#services" className="hover:text-white transition-colors">Textile & Goodies Corporate</Link></li>
                <li><Link href="/#services" className="hover:text-white transition-colors">Community Management</Link></li>
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