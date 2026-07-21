import React from "react";
import { motion } from "framer-motion";
import { Compass, FileText, Wrench, CheckCircle2, ShieldCheck, ArrowRight } from "lucide-react";

export function ProcessTimeline() {
  const steps = [
    {
      num: "01",
      icon: Compass,
      title: "Diagnóstico & Medição no Local",
      desc: "Análise técnica do espaço por engenheiro ou mestre de obra CLMA, identificando especificações estruturais e necessidades de acabamento.",
      highlight: "Sem compromisso inicial"
    },
    {
      num: "02",
      icon: FileText,
      title: "Projeto & Proposta Transparente",
      desc: "Envio de plano detalhado de montagem com lista quantitativa de materiais, simulação de acabamento e cronograma de prazos rigorosos.",
      highlight: "Orçamento sem custos ocultos"
    },
    {
      num: "03",
      icon: Wrench,
      title: "Execução & Montagem Especializada",
      desc: "Início das obras com equipa própria de carpintaria, pladur e revestimento sob supervisão diária do encarregado de obra.",
      highlight: "Supervisão diária contínua"
    },
    {
      num: "04",
      icon: CheckCircle2,
      title: "Vistoria Final & Chave na Mão",
      desc: "Checklist de qualidade com o cliente, limpeza do canteiro de obras e entrega oficial dos espaços prontos a habitar.",
      highlight: "100% de Rigor & Garantia"
    }
  ];

  return (
    <section id="processo" className="py-28 relative overflow-hidden bg-[#08121E]">
      <div className="container relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <div className="inline-flex items-center gap-2 glass-card px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest text-amber-400 border border-amber-400/30">
            <ShieldCheck className="w-3.5 h-3.5 text-amber-400" />
            Metodologia CLMA
          </div>
          <h2 className="text-4xl sm:text-6xl font-black text-white tracking-tight">
            Como Transformamos o Seu <span className="text-amber-400">Projeto</span>
          </h2>
          <p className="text-slate-300 text-base sm:text-lg">
            Processo estruturado em 4 etapas para garantir tranquilidade, precisão e zero imprevistos na entrega final.
          </p>
        </div>

        {/* Timeline Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {steps.map((step, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className="glass-card glass-card-hover p-8 rounded-[2.5rem] border border-white/10 flex flex-col justify-between relative group"
            >
              {/* Step Number Badge */}
              <div className="flex items-center justify-between mb-8">
                <span className="text-4xl font-black font-mono text-amber-400/40 group-hover:text-amber-400 transition-colors">
                  {step.num}
                </span>
                <div className="w-12 h-12 rounded-2xl bg-amber-500/20 text-amber-400 border border-amber-500/30 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <step.icon className="w-6 h-6" />
                </div>
              </div>

              {/* Step Title & Content */}
              <div className="space-y-3 mb-6">
                <h3 className="text-xl font-black text-white group-hover:text-amber-400 transition-colors">
                  {step.title}
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed font-normal">
                  {step.desc}
                </p>
              </div>

              {/* Highlight Footer */}
              <div className="pt-4 border-t border-white/10">
                <span className="text-[10px] font-extrabold uppercase tracking-wider text-sky-400 bg-sky-500/10 px-3 py-1 rounded-full border border-sky-500/20">
                  {step.highlight}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
