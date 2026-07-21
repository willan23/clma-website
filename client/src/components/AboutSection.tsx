import React from "react";
import { motion } from "framer-motion";
import { ShieldCheck, Award, Users, Clock, Target } from "lucide-react";

export function AboutSection() {
  const differentiators = [
    {
      title: "Energia Jovem & Visão de Futuro",
      desc: "Proatividade total para resolver desafios técnicos no canteiro e aplicar as últimas tendências internacionais de design interior.",
      icon: Users,
    },
    {
      title: "15+ Anos de Know-How Prático",
      desc: "Bagagem técnica acumulada em centenas de projetos em Angola, garantindo precisão em cada corte, caixilho ou acabamento.",
      icon: Award,
    },
    {
      title: "Respeito Sagrado aos Prazos",
      desc: "Entendemos que o seu tempo é valioso. Trabalhamos com cronograma estrito e acompanhamento semanal detalhado.",
      icon: Clock,
    },
    {
      title: "Acompanhamento Técnico Direto",
      desc: "Supervisão direta do fundador e encarregados em cada obra, cuidando do seu imóvel como se fosse a nossa própria marca.",
      icon: Target,
    },
  ];

  return (
    <section id="sobre" className="py-28 relative overflow-hidden bg-white border-y border-slate-200">
      <div className="container relative z-10">
        <div className="grid lg:grid-cols-12 gap-16 items-center">
          {/* Left Grid with Images & Floating Experience Badges */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-6 relative"
          >
            <div className="grid grid-cols-2 gap-6 relative z-10">
              <div className="space-y-6">
                <div className="relative rounded-[2rem] overflow-hidden bg-slate-100 border border-slate-200 shadow-xl h-80">
                  <img
                    src="/images/clma-essa.jpg"
                    alt="Acabamento Ripado CLMA"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="bg-[#0D2847] p-8 rounded-[2rem] border border-blue-900 text-white shadow-xl">
                  <p className="text-5xl font-black font-mono text-amber-400">15+</p>
                  <p className="text-xs font-bold uppercase tracking-widest mt-2 text-slate-200">Anos de Bagagem Técnica</p>
                </div>
              </div>

              <div className="space-y-6 pt-12">
                <div className="bg-[#3D7EB3] p-8 rounded-[2rem] border border-blue-400 text-white shadow-xl">
                  <p className="text-5xl font-black font-mono text-white">150+</p>
                  <p className="text-xs font-bold uppercase tracking-widest mt-2 text-slate-100">Obras Concluídas</p>
                </div>
                <div className="relative rounded-[2rem] overflow-hidden bg-slate-100 border border-slate-200 shadow-xl h-80">
                  <img
                    src="/images/clma-essee.jpg"
                    alt="Obra Pladur CLMA"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  />
                </div>
              </div>
            </div>

            {/* Backdrop glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-blue-500/5 rounded-full blur-[140px] -z-10" />
          </motion.div>

          {/* Right Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-6 space-y-8"
          >
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 bg-slate-100 px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest text-[#0D2847] border border-slate-200">
                <ShieldCheck className="w-3.5 h-3.5 text-[#3D7EB3]" />
                Quem Somos
              </div>
              <h2 className="text-4xl sm:text-6xl font-black text-[#0D2847] tracking-tight">
                A Força da Inovação com a <span className="text-[#3D7EB3]">Solidez</span> da Experiência
              </h2>
              <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
                A <strong>CLMA – Construção Limitada</strong> nasceu da união entre o dinamismo da nova geração de empreendedores angolanos e mais de 15 anos de expertise técnica acumulada em construção civil, montagem e acabamentos de alto padrão.
              </p>
              <p className="text-slate-500 text-sm leading-relaxed">
                Não somos apenas executores de obras; somos parceiros estratégicos dos nossos clientes. Transformamos plantas e ideias em espaços funcionais, sofisticados e duráveis.
              </p>
            </div>

            {/* Differentiators Grid */}
            <div className="grid gap-4 pt-4">
              {differentiators.map((item, idx) => (
                <div
                  key={idx}
                  className="bg-slate-50 p-5 rounded-2xl border border-slate-200 hover:border-[#3D7EB3] transition-all flex items-start gap-4 group hover:bg-white hover:shadow-md"
                >
                  <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#3D7EB3] flex items-center justify-center flex-shrink-0 border border-blue-200 group-hover:scale-110 transition-transform">
                    <item.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#0D2847] text-sm mb-1 group-hover:text-[#3D7EB3] transition-colors">
                      {item.title}
                    </h4>
                    <p className="text-xs text-slate-500 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
