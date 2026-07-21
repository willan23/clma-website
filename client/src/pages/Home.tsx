import React from "react";
import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { ServicesSection } from "@/components/ServicesSection";
import { BudgetCalculator } from "@/components/BudgetCalculator";
import { PortfolioSection } from "@/components/PortfolioSection";
import { ProcessTimeline } from "@/components/ProcessTimeline";
import { VideoShowcase } from "@/components/VideoShowcase";
import { AboutSection } from "@/components/AboutSection";
import { ContactSection } from "@/components/ContactSection";
import { FloatingActions } from "@/components/FloatingActions";
import { Phone, Clock, ArrowRight, ShieldCheck } from "lucide-react";

export default function Home() {
  const phoneContact = "+244 952 450 874";
  const whatsappNumber = "+244 938 667 695";

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-[#0D2847] selection:bg-blue-500/20 selection:text-[#3D7EB3]">
      {/* Sticky Header Navigation */}
      <Navbar />

      {/* Hero Section */}
      <HeroSection />

      {/* Specialty Services */}
      <ServicesSection />

      {/* Instant Budget Calculator */}
      <BudgetCalculator />

      {/* Filterable Portfolio */}
      <PortfolioSection />

      {/* 4-Step Methodology Process */}
      <ProcessTimeline />

      {/* Video Showcase */}
      <VideoShowcase />

      {/* Company Story & Differentiators */}
      <AboutSection />

      {/* Contact & WhatsApp Lead Generator */}
      <ContactSection />

      {/* Floating Quick Action Widget */}
      <FloatingActions />

      {/* Premium Executive Footer */}
      <footer className="bg-[#0B192C] text-slate-300 py-20 border-t border-slate-800 relative overflow-hidden">
        <div className="container relative z-10">
          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-12 mb-16">
            {/* Brand Col */}
            <div className="space-y-6">
              <div className="flex items-center gap-3.5">
                <img
                  src="/images/clma-logo.jpg"
                  alt="CLMA Logo"
                  className="h-12 w-auto rounded-xl border border-white/20 object-contain bg-white p-1 shadow-lg"
                />
                <div>
                  <h4 className="font-black text-white text-2xl tracking-tighter">CLMA</h4>
                  <p className="text-[10px] text-amber-400 font-extrabold tracking-widest uppercase">
                    Construção Ltda
                  </p>
                </div>
              </div>
              <p className="text-xs leading-relaxed text-slate-300">
                Excelência construtiva em Angola. Edificando o amanhã com compromisso, rigor técnico e solidez em acabamentos de alto padrão.
              </p>
              <div className="flex items-center gap-2 text-xs font-bold text-amber-400">
                <ShieldCheck className="w-4 h-4" />
                <span>Empresa Registada & Licenciada</span>
              </div>
            </div>

            {/* Quick Links */}
            <div className="space-y-6">
              <h5 className="font-black text-white tracking-widest uppercase text-xs">Navegação Rápida</h5>
              <ul className="space-y-3 text-xs font-bold">
                <li><a href="#servicos" className="hover:text-amber-400 transition-colors uppercase">Especialidades</a></li>
                <li><a href="#calculadora" className="hover:text-amber-400 transition-colors uppercase">Calculadora m²</a></li>
                <li><a href="#projetos" className="hover:text-amber-400 transition-colors uppercase">Portfólio de Obras</a></li>
                <li><a href="#processo" className="hover:text-amber-400 transition-colors uppercase">Processo de Trabalho</a></li>
                <li><a href="#sobre" className="hover:text-amber-400 transition-colors uppercase">Sobre a CLMA</a></li>
                <li><a href="#contato" className="hover:text-amber-400 transition-colors uppercase">Contacto Direto</a></li>
              </ul>
            </div>

            {/* Contact Details */}
            <div className="space-y-6">
              <h5 className="font-black text-white tracking-widest uppercase text-xs">Contacto Direto</h5>
              <div className="space-y-4 text-xs">
                <div className="flex items-center gap-3">
                  <Phone className="text-amber-400 w-4 h-4 flex-shrink-0" />
                  <div>
                    <p className="text-[10px] uppercase font-bold text-slate-400">Linha Principal</p>
                    <p className="font-bold text-white font-mono">{phoneContact}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="text-amber-400 w-4 h-4 flex-shrink-0" />
                  <div>
                    <p className="text-[10px] uppercase font-bold text-slate-400">WhatsApp Comercial</p>
                    <p className="font-bold text-white font-mono">{whatsappNumber}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="text-amber-400 w-4 h-4 flex-shrink-0" />
                  <div>
                    <p className="text-[10px] uppercase font-bold text-slate-400">Horário</p>
                    <p className="text-white">Segunda a Sábado, 8h às 18h</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Newsletter */}
            <div className="space-y-6">
              <h5 className="font-black text-white tracking-widest uppercase text-xs">Newsletter Técnica</h5>
              <p className="text-xs text-slate-300">Receba tendências de acabamentos e soluções para a sua obra.</p>
              <form onSubmit={(e) => e.preventDefault()} className="flex gap-2">
                <input
                  type="email"
                  placeholder="Seu e-mail"
                  className="bg-white/10 border border-white/20 rounded-xl px-4 py-2.5 text-xs w-full focus:outline-none focus:border-amber-400 transition-colors text-white"
                />
                <button
                  type="submit"
                  className="bg-amber-400 text-slate-950 p-2.5 rounded-xl hover:bg-amber-300 transition-colors"
                >
                  <ArrowRight className="w-4 h-4" />
                </button>
              </form>
            </div>
          </div>

          <div className="border-t border-slate-800 pt-8 flex flex-col sm:flex-row items-center justify-between text-[11px] font-bold text-slate-400 gap-4">
            <p>&copy; {new Date().getFullYear()} CLMA Construção Limitada • Todos os direitos reservados.</p>
            <p className="uppercase tracking-widest text-amber-400">Rigor • Inovação • Excelência</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
