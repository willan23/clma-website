import React, { useState } from "react";
import { motion } from "framer-motion";
import { Calculator, Phone, ArrowRight } from "lucide-react";

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
    <section id="calculadora" className="py-28 relative overflow-hidden bg-white border-y border-slate-200/80">
      <div className="container relative z-10">
        {/* Header Title */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 bg-slate-100 px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest text-[#0D2847] border border-slate-200">
            <Calculator className="w-3.5 h-3.5 text-[#3D7EB3]" />
            Simulador de Investimento
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-[#0D2847] tracking-tight">
            Calculadora de Orçamento <span className="text-[#3D7EB3]">Instântanea</span>
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            Selecione as especificações do seu projeto e obtenha uma estimativa preliminar transparente em segundos.
          </p>
        </div>

        {/* Calculator Main Grid */}
        <div className="grid lg:grid-cols-12 gap-8 items-start max-w-5xl mx-auto">
          {/* Controls Column */}
          <div className="lg:col-span-7 bg-slate-50 p-6 sm:p-8 rounded-[2rem] border border-slate-200 space-y-8 shadow-sm">
            {/* Step 1: Service Type */}
            <div className="space-y-4">
              <label className="text-xs font-black uppercase tracking-wider text-[#0D2847] flex items-center gap-2">
                <span className="w-5 h-5 rounded-full bg-blue-100 flex items-center justify-center text-[10px] text-[#3D7EB3] font-bold">1</span>
                Selecione o Tipo de Serviço
              </label>
              <div className="grid sm:grid-cols-2 gap-3">
                {services.map((svc) => (
                  <button
                    key={svc.id}
                    onClick={() => setServiceType(svc.id)}
                    className={`p-4 rounded-xl text-left border transition-all text-xs font-bold ${
                      serviceType === svc.id
                        ? "bg-[#0D2847] border-[#0D2847] text-white shadow-md"
                        : "bg-white border-slate-200 text-slate-700 hover:border-slate-300"
                    }`}
                  >
                    <p className="font-extrabold text-sm mb-1">{svc.name}</p>
                    <p className={`text-[11px] font-normal ${serviceType === svc.id ? "text-slate-200" : "text-slate-500"}`}>{svc.desc}</p>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Area Size Slider */}
            <div className="space-y-4 pt-4 border-t border-slate-200">
              <div className="flex items-center justify-between">
                <label className="text-xs font-black uppercase tracking-wider text-[#0D2847] flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-blue-100 flex items-center justify-center text-[10px] text-[#3D7EB3] font-bold">2</span>
                  Área do Espaço (m²)
                </label>
                <span className="text-lg font-black font-mono text-[#0D2847] bg-white px-3 py-1 rounded-lg border border-slate-200 shadow-sm">
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
                className="w-full h-2.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#3D7EB3]"
              />
              <div className="flex justify-between text-[10px] text-slate-500 font-mono">
                <span>10 m² (Pequeno)</span>
                <span>150 m² (Médio)</span>
                <span>300+ m² (Grande)</span>
              </div>
            </div>

            {/* Step 3: Finish Level */}
            <div className="space-y-4 pt-4 border-t border-slate-200">
              <label className="text-xs font-black uppercase tracking-wider text-[#0D2847] flex items-center gap-2">
                <span className="w-5 h-5 rounded-full bg-blue-100 flex items-center justify-center text-[10px] text-[#3D7EB3] font-bold">3</span>
                Nível de Acabamento & Especificação
              </label>
              <div className="grid grid-cols-3 gap-3">
                {finishLevels.map((lvl) => (
                  <button
                    key={lvl.id}
                    onClick={() => setFinishLevel(lvl.id)}
                    className={`p-3 rounded-xl text-center border transition-all text-xs font-bold ${
                      finishLevel === lvl.id
                        ? "bg-[#3D7EB3] border-[#3D7EB3] text-white shadow-sm"
                        : "bg-white border-slate-200 text-slate-700 hover:border-slate-300"
                    }`}
                  >
                    <p className="font-extrabold text-xs mb-1">{lvl.name}</p>
                    <p className={`text-[10px] font-normal hidden sm:block ${finishLevel === lvl.id ? "text-slate-100" : "text-slate-500"}`}>{lvl.desc}</p>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Results Column */}
          <div className="lg:col-span-5 bg-[#0D2847] text-white p-8 rounded-[2rem] border border-blue-900 shadow-2xl space-y-6 relative overflow-hidden">
            <div className="space-y-2">
              <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#3D7EB3]">Resumo da Simulação</span>
              <h3 className="text-xl font-black text-white">{selectedService.name}</h3>
            </div>

            <div className="space-y-3 py-4 border-y border-blue-900/60 text-xs text-slate-200">
              <div className="flex justify-between">
                <span className="text-slate-300">Dimensão Selecionada:</span>
                <span className="font-bold text-white font-mono">{areaSize} m²</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-300">Padrão de Acabamento:</span>
                <span className="font-bold text-amber-400">{selectedLevel.name}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-300">Mão de Obra & Supervisão:</span>
                <span className="font-bold text-emerald-400">Incluída</span>
              </div>
            </div>

            {/* Price Output Range */}
            <div className="space-y-2 bg-[#08182B] p-5 rounded-2xl border border-blue-900 text-center">
              <p className="text-[11px] font-bold text-slate-300 uppercase tracking-wider">Estimativa de Investimento</p>
              <p className="text-2xl sm:text-3xl font-black text-amber-400 font-mono">
                {formatAOA(minEst)} – {formatAOA(maxEst)}
              </p>
              <p className="text-[10px] text-slate-400 italic">*Valor indicativo sujeito a confirmação técnica no local.</p>
            </div>

            {/* Direct WhatsApp Action Button */}
            <a
              href={generateWhatsappUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-black py-4 rounded-xl text-center text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-xl transition-all hover:scale-[1.02] active:scale-95"
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
