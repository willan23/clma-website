import React from "react";
import { motion, Variants } from "framer-motion";
import { ArrowRight, ShieldCheck, Award, Hammer, Calculator, Sparkles } from "lucide-react";

export function HeroSection() {
  const whatsappNumber = "+244 938 667 695";
  const whatsappLink = `https://wa.me/${whatsappNumber.replace(/\D/g, "")}?text=Olá%20CLMA,%20gostaria%20de%20saber%20mais%20sobre%20seus%20serviços%20de%20construção%20e%20acabamento.`;

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
  };

  return (
    <section className="relative min-h-screen pt-32 pb-24 flex items-center overflow-hidden bg-gradient-to-b from-[#F8FAFC] via-[#F1F5F9] to-white">
      {/* Background Light Ambient Blobs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 40, 0],
            y: [0, -30, 0],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-32 -left-32 w-96 h-96 bg-blue-500/10 rounded-full blur-[120px]"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            x: [0, -50, 0],
            y: [0, 40, 0],
          }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/3 -right-32 w-[500px] h-[500px] bg-amber-500/10 rounded-full blur-[140px]"
        />
        {/* Architectural Fine Grid Pattern */}
        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage: `radial-gradient(#0D2847 1px, transparent 1px)`,
            backgroundSize: "32px 32px",
          }}
        />
      </div>

      <div className="container relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Main Hero Left Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-7 space-y-8"
          >
            {/* Top Badge */}
            <motion.div variants={itemVariants} className="inline-flex items-center gap-2">
              <span className="flex h-2.5 w-2.5 rounded-full bg-[#3D7EB3] animate-ping" />
              <span className="bg-white/90 shadow-sm px-4 py-1.5 rounded-full text-xs font-extrabold uppercase tracking-widest text-[#0D2847] flex items-center gap-2 border border-slate-200">
                <Sparkles className="w-3.5 h-3.5 text-[#3D7EB3]" />
                Líder em Acabamentos e Construção em Angola
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              variants={itemVariants}
              className="text-4xl sm:text-6xl xl:text-7xl font-black tracking-tight leading-[1.08] text-[#0D2847]"
            >
              Edificando com <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3D7EB3] via-[#0D2847] to-[#F59E0B]">Rigor Técnico</span> & Sofisticação
            </motion.h1>

            {/* Paragraph */}
            <motion.p variants={itemVariants} className="text-base sm:text-xl text-slate-600 leading-relaxed font-normal max-w-2xl">
              Soluções integradas de construção civil, caixilharia de alumínio, mobiliário em Pladur, boiserie e acabamentos de alto padrão para quem exige perfeição e pontualidade.
            </motion.p>

            {/* Action Buttons */}
            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 pt-2">
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="relative group overflow-hidden bg-gradient-to-r from-[#0D2847] via-[#3D7EB3] to-[#0D2847] text-white px-8 py-4 rounded-2xl font-black text-sm uppercase tracking-wider flex items-center justify-center gap-3 shadow-xl shadow-blue-900/15 hover:shadow-blue-900/30 hover:scale-[1.02] active:scale-95 transition-all duration-300"
              >
                <span>SOLICITAR ORÇAMENTO RÁPIDO</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="#calculadora"
                className="glass-card glass-card-hover px-8 py-4 rounded-2xl font-black text-sm uppercase tracking-wider text-[#0D2847] flex items-center justify-center gap-2 border border-slate-300/80 shadow-sm"
              >
                <Calculator className="w-4 h-4 text-[#3D7EB3]" />
                <span>Simular Orçamento (m²)</span>
              </a>
            </motion.div>

            {/* Stats Counter Bar */}
            <motion.div
              variants={itemVariants}
              className="grid grid-cols-3 gap-4 pt-6 border-t border-slate-200"
            >
              <div className="space-y-1">
                <div className="flex items-baseline gap-1">
                  <span className="text-3xl sm:text-4xl font-black font-mono text-[#0D2847]">15</span>
                  <span className="text-[#3D7EB3] font-bold text-xl">+</span>
                </div>
                <p className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">Anos de Know-How</p>
              </div>

              <div className="space-y-1 border-x border-slate-200 px-4">
                <div className="flex items-baseline gap-1">
                  <span className="text-3xl sm:text-4xl font-black font-mono text-[#0D2847]">150</span>
                  <span className="text-[#3D7EB3] font-bold text-xl">+</span>
                </div>
                <p className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">Obras Entregues</p>
              </div>

              <div className="space-y-1 pl-2">
                <div className="flex items-baseline gap-1">
                  <span className="text-3xl sm:text-4xl font-black font-mono text-[#0D2847]">100</span>
                  <span className="text-[#3D7EB3] font-bold text-xl">%</span>
                </div>
                <p className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">Rigor & Prazo</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Hero Visual Right Feature Showcase */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 40 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.3 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative group mx-auto max-w-md lg:max-w-none">
              {/* Outer Subtle Glow Halo */}
              <div className="absolute -inset-4 bg-gradient-to-tr from-blue-500/15 via-amber-500/10 to-blue-500/10 rounded-[3rem] blur-2xl group-hover:opacity-100 transition duration-700"></div>

              {/* Light Glass Showcase Card */}
              <div className="relative overflow-hidden rounded-[2.5rem] bg-white border border-slate-200 shadow-2xl p-6">
                <div className="relative h-[380px] sm:h-[440px] rounded-[2rem] overflow-hidden bg-slate-50 flex items-center justify-center border border-slate-100">
                  <img
                    src="/images/clma-logo.jpg"
                    alt="CLMA Construção Limitada"
                    className="w-full h-full object-contain p-6 group-hover:scale-105 transition-transform duration-700"
                  />

                  {/* Overlaid Badges */}
                  <div className="absolute bottom-6 left-6 right-6 p-5 bg-white/95 backdrop-blur-md rounded-2xl border border-slate-200/80 shadow-lg space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <ShieldCheck className="w-5 h-5 text-[#3D7EB3]" />
                        <span className="text-xs font-black uppercase text-[#0D2847] tracking-wider">CLMA Construção Ltda</span>
                      </div>
                      <span className="text-[10px] font-extrabold uppercase px-2 py-0.5 rounded bg-emerald-50 text-emerald-600 border border-emerald-200">
                        Ativo em Luanda
                      </span>
                    </div>
                    <p className="text-xs text-slate-600">
                      Montagem técnica, caixilharia, boiserie e soluções em Pladur com garantia de execução.
                    </p>
                  </div>
                </div>
              </div>

              {/* Floating Badge 1 */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-6 -left-6 bg-white p-4 rounded-2xl border border-slate-200 shadow-xl hidden sm:flex items-center gap-3"
              >
                <div className="w-10 h-10 rounded-xl bg-amber-50 flex items-center justify-center border border-amber-200">
                  <Award className="w-5 h-5 text-[#F59E0B]" />
                </div>
                <div>
                  <p className="text-xs font-black text-[#0D2847]">Qualidade Premium</p>
                  <p className="text-[10px] text-slate-500">Padrão Internacional</p>
                </div>
              </motion.div>

              {/* Floating Badge 2 */}
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-6 -right-6 bg-white p-4 rounded-2xl border border-slate-200 shadow-xl hidden sm:flex items-center gap-3"
              >
                <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center border border-blue-200">
                  <Hammer className="w-5 h-5 text-[#3D7EB3]" />
                </div>
                <div>
                  <p className="text-xs font-black text-[#0D2847]">Equipa Própria</p>
                  <p className="text-[10px] text-slate-500">Especialistas com 15+ Anos</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
