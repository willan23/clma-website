import React, { useState } from "react";
import { motion } from "framer-motion";
import { Calculator, Phone, CheckCircle, ArrowRight, Sparkles, Sliders } from "lucide-react";

export function BudgetCalculator() {
  const [serviceType, setServiceType] = useState<string>("pladur");
  const [areaSize, setAreaSize] = useState<number>(50);
  const [finishLevel, setFinishLevel] = useState<string>("executivo");

  const services = [
    { id: "pladur", name: "Pladur & Tetos Falsos", basePerM2: 12000, desc: "Sancas, iluminação embutida e divisórias" },
    { id: "boiserie", name: "Design de Interiores & Boiserie", basePerM2: 18000, desc: "Ripados decorativos, painéis e molduras" },
    { id: "caixilharia", name: "Caixilharia & Carpintaria", basePerM2: 22000, desc: "Portas, janelas em alumínio e caixilhos" },
    { id: "montagem", name: "Montagem & Finalização", basePerM2: 9000, desc: "Mobiliário, espelhos e toque final técnico" },
    { id: "completo", name: "Obra / Reforma Completa", basePerM2: 35000, desc: "Execução chave na mão com supervisão" },
  ];

  const finishLevels = [
    { id: "essencial", name: "Essencial", multiplier: 1, desc: "Materiais padrão de alta resistência" },
    { id: "executivo", name: "Executivo", multiplier: 1.3, desc: "Acabamentos modernos recomendados CLMA" },
    { id: "premium", name: "Premium Luxury", multiplier: 1.6, desc: "Materiais de topo com especificações exclusivas" },
  ];

  const selectedService = services.find((s) => s.id === serviceType) || services[0];
  const selectedLevel = finishLevels.find((l) => l.id === finishLevel) || finishLevels[1];

  // Calculated approximate estimate range in AOA
  const baseCost = selectedService.basePerM2 * areaSize * selectedLevel.multiplier;
  const minEst = Math.round(baseCost * 0.9);
  const maxEst = Math.round(baseCost * 1.15);

  const formatAOA = (num: number) => {
    return new Intl.NumberFormat("pt-AO", { style: "currency", currency: "AOA", maximumFractionDigits: 0 }).format(num);
  };

  const generateWhatsappUrl = () => {
    const text = `Olá CLMA! Fiz uma simulação no site:
• Serviço: ${selectedService.name}
• Área Estimada: ${areaSize} m²
• Nível de Acabamento: ${selectedLevel.name}
• Estimativa Aproximada: ${formatAOA(minEst)} - ${formatAOA(maxEst)}

Gostaria de agendar uma visita técnica / medição final no meu espaço.`;
    return `https://wa.me/244938667695?text=${encodeURIComponent(text)}`;
  };

  return (
    <section id="calculadora" className="py-24 relative overflow-hidden bg-[#08121E]">
      {/* Background Subtle Gradient */}
      <div className="absolute inset-0 pointer-events-none opacity-30">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-gradient-to-r from-amber-500/10 via-sky-500/10 to-amber-500/10 rounded-full blur-[160px]" />
      </div>

      <div className="container relative z-10">
        {/* Header Title */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 glass-card px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest text-amber-400 border border-amber-400/30">
            <Calculator className="w-3.5 h-3.5 text-amber-400" />
            Simulador de Investimento
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            Calculadora de Orçamento <span className="text-amber-400">Instântanea</span>
          </h2>
          <p className="text-slate-300 text-base sm:text-lg">
            Selecione as especificações do seu projeto e obtenha uma estimativa preliminar transparente em segundos.
          </p>
        </div>

        {/* Calculator Main Grid */}
        <div className="grid lg:grid-cols-12 gap-8 items-start max-w-5xl mx-auto">
          {/* Controls Column */}
          <div className="lg:col-span-7 glass-card p-6 sm:p-8 rounded-[2rem] border border-white/15 space-y-8">
            {/* Step 1: Service Type */}
            <div className="space-y-4">
              <label className="text-xs font-black uppercase tracking-wider text-amber-400 flex items-center gap-2">
                <span className="w-5 h-5 rounded-full bg-amber-400/20 flex items-center justify-center text-[10px] text-amber-400">1</span>
                Selecione o Tipo de Serviço
              </label>
              <div className="grid sm:grid-cols-2 gap-3">
                {services.map((svc) => (
                  <button
                    key={svc.id}
                    onClick={() => setServiceType(svc.id)}
                    className={`p-4 rounded-xl text-left border transition-all text-xs font-bold ${
                      serviceType === svc.id
                        ? "bg-amber-500/20 border-amber-400 text-white shadow-lg shadow-amber-500/10"
                        : "bg-white/5 border-white/10 text-slate-300 hover:bg-white/10"
                    }`}
                  >
                    <p className="font-extrabold text-sm mb-1">{svc.name}</p>
                    <p className="text-[11px] text-slate-400 font-normal">{svc.desc}</p>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Area Size Slider */}
            <div className="space-y-4 pt-4 border-t border-white/10">
              <div className="flex items-center justify-between">
                <label className="text-xs font-black uppercase tracking-wider text-amber-400 flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-amber-400/20 flex items-center justify-center text-[10px] text-amber-400">2</span>
                  Área do Espaço (m²)
                </label>
                <span className="text-lg font-black font-mono text-white bg-amber-500/20 px-3 py-1 rounded-lg border border-amber-500/30">
                  {areaSize} m²
                </span>
              </div>
              <input
                type="range"
                min="10"
                max="300"
                step="5"
                value={areaSize}
                onChange={(e) => setAreaSize(Number(e.target.value))}
                className="w-full h-2.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-amber-400"
              />
              <div className="flex justify-between text-[10px] text-slate-400 font-mono">
                <span>10 m² (Pequeno)</span>
                <span>150 m² (Médio)</span>
                <span>300+ m² (Grande)</span>
              </div>
            </div>

            {/* Step 3: Finish Level */}
            <div className="space-y-4 pt-4 border-t border-white/10">
              <label className="text-xs font-black uppercase tracking-wider text-amber-400 flex items-center gap-2">
                <span className="w-5 h-5 rounded-full bg-amber-400/20 flex items-center justify-center text-[10px] text-amber-400">3</span>
                Nível de Acabamento & Especificação
              </label>
              <div className="grid grid-cols-3 gap-3">
                {finishLevels.map((lvl) => (
                  <button
                    key={lvl.id}
                    onClick={() => setFinishLevel(lvl.id)}
                    className={`p-3 rounded-xl text-center border transition-all text-xs font-bold ${
                      finishLevel === lvl.id
                        ? "bg-sky-500/20 border-sky-400 text-white shadow-lg shadow-sky-500/10"
                        : "bg-white/5 border-white/10 text-slate-300 hover:bg-white/10"
                    }`}
                  >
                    <p className="font-extrabold text-xs mb-1">{lvl.name}</p>
                    <p className="text-[10px] text-slate-400 font-normal hidden sm:block">{lvl.desc}</p>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Results Column */}
          <div className="lg:col-span-5 glass-card p-8 rounded-[2rem] border border-amber-400/30 shadow-2xl space-y-6 relative overflow-hidden bg-gradient-to-b from-[#0F2338] to-[#0B192C]">
            <div className="space-y-2">
              <span className="text-[10px] font-extrabold uppercase tracking-widest text-amber-400">Resumo da Simulação</span>
              <h3 className="text-xl font-black text-white">{selectedService.name}</h3>
            </div>

            <div className="space-y-3 py-4 border-y border-white/10 text-xs text-slate-300">
              <div className="flex justify-between">
                <span className="text-slate-400">Dimensão Selecionada:</span>
                <span className="font-bold text-white font-mono">{areaSize} m²</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">Padrão de Acabamento:</span>
                <span className="font-bold text-amber-400">{selectedLevel.name}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">Mão de Obra & Supervisão:</span>
                <span className="font-bold text-emerald-400">Incluída</span>
              </div>
            </div>

            {/* Price Output Range */}
            <div className="space-y-2 bg-slate-900/80 p-5 rounded-2xl border border-white/10 text-center">
              <p className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">Estimativa de Investimento</p>
              <p className="text-2xl sm:text-3xl font-black text-white font-mono text-amber-400">
                {formatAOA(minEst)} – {formatAOA(maxEst)}
              </p>
              <p className="text-[10px] text-slate-400 italic">*Valor indicativo sujeito a confirmação técnica no local.</p>
            </div>

            {/* Direct WhatsApp Action Button */}
            <a
              href={generateWhatsappUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-black py-4 rounded-xl text-center text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-xl shadow-amber-500/20 transition-all hover:scale-[1.02] active:scale-95"
            >
              <Phone className="w-4 h-4 fill-slate-950" />
              <span>Enviar Projeto via WhatsApp</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
