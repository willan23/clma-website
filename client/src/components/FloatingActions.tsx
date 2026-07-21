import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, ArrowUp } from "lucide-react";

export function FloatingActions() {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const whatsappNumber = "+244 938 667 695";
  const whatsappLink = `https://wa.me/${whatsappNumber.replace(/\D/g, "")}?text=Olá%20CLMA,%20gostaria%20de%20um%20atendimento%20rápido.`;

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-center gap-3">
      {/* Scroll To Top Button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.5, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.5, y: 20 }}
            onClick={scrollToTop}
            className="w-11 h-11 rounded-full glass-card hover:bg-amber-400 hover:text-slate-950 text-white border border-white/20 shadow-xl flex items-center justify-center transition-all duration-300"
            aria-label="Voltar ao Topo"
          >
            <ArrowUp className="w-5 h-5" />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Floating WhatsApp Action Button */}
      <a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="relative group flex items-center justify-center"
        aria-label="WhatsApp CLMA"
      >
        {/* Pulsing Ripple */}
        <div className="absolute inset-0 rounded-full bg-emerald-500 animate-ping opacity-30 pointer-events-none" />

        <div className="relative w-14 h-14 rounded-full bg-gradient-to-r from-emerald-500 to-emerald-600 text-white flex items-center justify-center shadow-2xl shadow-emerald-500/40 hover:scale-110 active:scale-95 transition-transform duration-300 border border-white/20">
          <Phone className="w-6 h-6 fill-white" />
        </div>

        {/* Hover Tooltip */}
        <div className="absolute right-16 bg-[#0F2338] text-white text-xs font-bold px-3 py-1.5 rounded-xl border border-white/10 shadow-xl whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
          💬 Atendimento WhatsApp
        </div>
      </a>
    </div>
  );
}
