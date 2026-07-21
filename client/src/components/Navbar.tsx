import React, { useState, useEffect } from "react";
import { motion, useScroll, useSpring, AnimatePresence } from "framer-motion";
import { Phone, Menu, X, ArrowUpRight, ShieldCheck } from "lucide-react";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const phoneContact = "+244 952 450 874";
  const whatsappNumber = "+244 938 667 695";
  const whatsappLink = `https://wa.me/${whatsappNumber.replace(/\D/g, "")}?text=Olá%20CLMA,%20gostaria%20de%20solicitar%20um%20orçamento%20para%20o%20meu%20projeto.`;

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

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

  const navItems = [
    { label: "Serviços", href: "#servicos" },
    { label: "Calculadora", href: "#calculadora" },
    { label: "Projetos", href: "#projetos" },
    { label: "Processo", href: "#processo" },
    { label: "Sobre a CLMA", href: "#sobre" },
    { label: "Contacto", href: "#contato" },
  ];

  return (
    <>
      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-amber-500 via-amber-400 to-sky-400 z-50 origin-left"
        style={{ scaleX }}
      />

      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
          isScrolled ? "glass-nav py-3 shadow-2xl" : "bg-gradient-to-b from-[#08121E]/90 to-transparent py-5"
        }`}
      >
        <div className="container flex items-center justify-between">
          {/* Brand Logo */}
          <a href="#" className="flex items-center gap-3.5 group">
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-amber-500 to-sky-500 rounded-xl blur-md opacity-40 group-hover:opacity-100 transition duration-500"></div>
              <img
                src="/images/clma-logo.jpg"
                alt="CLMA Logo"
                className="relative h-11 w-auto rounded-lg border border-white/20 object-cover shadow-lg"
              />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="text-xl font-black tracking-tighter text-white group-hover:text-amber-400 transition-colors">
                  CLMA
                </span>
                <span className="text-[9px] font-extrabold uppercase px-1.5 py-0.5 rounded bg-amber-500/20 text-amber-400 border border-amber-500/30">
                  Angola
                </span>
              </div>
              <p className="text-[9.5px] text-slate-400 uppercase tracking-widest font-semibold leading-none">
                Construção & Acabamentos
              </p>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-7 bg-white/5 border border-white/10 backdrop-blur-md px-6 py-2 rounded-full shadow-inner">
            {navItems.map((item, idx) => (
              <a
                key={idx}
                href={item.href}
                className="text-xs font-bold uppercase tracking-wider text-slate-300 hover:text-amber-400 transition-all hover:scale-105"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Right Action Callouts */}
          <div className="hidden sm:flex items-center gap-4">
            <div className="text-right hidden xl:block border-r border-white/10 pr-4">
              <p className="text-[9px] text-slate-400 uppercase font-bold tracking-widest">Atendimento Direto</p>
              <p className="text-xs font-black text-amber-400 font-mono tracking-tight">{phoneContact}</p>
            </div>

            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="relative group overflow-hidden bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 font-black px-5 py-2.5 rounded-full text-xs transition-all duration-300 flex items-center gap-2 shadow-lg shadow-amber-500/20 hover:shadow-amber-500/40 hover:scale-105 active:scale-95"
            >
              <span className="relative z-10 flex items-center gap-1.5">
                <Phone className="w-3.5 h-3.5 fill-slate-950" />
                <span>Orçamento WhatsApp</span>
                <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden text-white p-2.5 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
            aria-label="Alternar Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6 text-amber-400" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer Navigation */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-30 bg-[#08121E]/95 backdrop-blur-2xl pt-24 px-6 pb-8 lg:hidden flex flex-col justify-between"
          >
            <div className="space-y-4">
              <p className="text-[10px] uppercase tracking-widest text-amber-400 font-extrabold border-b border-white/10 pb-2">
                Navegação CLMA
              </p>
              <div className="grid gap-3">
                {navItems.map((item, i) => (
                  <a
                    key={i}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-lg font-black text-white hover:text-amber-400 flex items-center justify-between p-3 rounded-xl hover:bg-white/5 transition-all"
                  >
                    <span>{item.label}</span>
                    <ArrowUpRight className="w-4 h-4 text-slate-500" />
                  </a>
                ))}
              </div>
            </div>

            <div className="space-y-4 pt-6 border-t border-white/10">
              <div className="flex items-center gap-3 text-slate-400 text-xs">
                <ShieldCheck className="w-4 h-4 text-amber-400" />
                <span>Empresa Certificada em Angola • 15+ Anos</span>
              </div>
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 font-black py-4 rounded-xl text-center text-sm flex items-center justify-center gap-2 shadow-xl"
              >
                <Phone className="w-4 h-4 fill-slate-950" />
                <span>SOLICITAR ORÇAMENTO RÁPIDO</span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
