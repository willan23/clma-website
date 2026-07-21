import React from "react";
import { motion } from "framer-motion";
import { Video, Play, ShieldCheck, Sparkles } from "lucide-react";

export function VideoShowcase() {
  return (
    <section className="py-28 relative overflow-hidden bg-[#08121E]">
      <div className="container relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Text Box */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2 glass-card px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest text-amber-400 border border-amber-400/30">
              <Video className="w-3.5 h-3.5 text-amber-400" />
              Canteiro de Obras Real
            </div>
            <h2 className="text-4xl sm:text-6xl font-black text-white tracking-tight leading-tight">
              Nossas Obras <span className="text-amber-400 italic">em Movimento</span>
            </h2>
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
              Acompanhe a precisão e a dedicação das nossas equipas de montagem diretamente no canteiro de obras. Transparência total do primeiro ao último parafuso.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 pt-4">
              <div className="glass-card p-5 rounded-2xl border border-white/10">
                <h4 className="text-amber-400 font-bold text-xs uppercase tracking-wider mb-1">Montagem Técnica</h4>
                <p className="text-slate-300 text-xs italic">"Precisão milimétrica em estruturas metálicas e Pladur."</p>
              </div>
              <div className="glass-card p-5 rounded-2xl border border-white/10">
                <h4 className="text-amber-400 font-bold text-xs uppercase tracking-wider mb-1">Acabamentos</h4>
                <p className="text-slate-300 text-xs italic">"Superfícies perfeitas e toque final de excelência CLMA."</p>
              </div>
            </div>
          </div>

          {/* Right Video Player Grid */}
          <div className="lg:col-span-7 grid sm:grid-cols-2 gap-6">
            <div className="relative rounded-[2.5rem] overflow-hidden glass-card border border-amber-400/30 shadow-2xl group aspect-[9/16] sm:aspect-auto sm:h-[440px]">
              <video
                src="/videos/construction-2.mp4"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                autoPlay
                loop
                muted
                playsInline
                controls
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#08121E] via-transparent to-transparent pointer-events-none opacity-80" />
              <div className="absolute bottom-6 left-6 right-6 p-4 glass-card rounded-2xl border border-white/20 pointer-events-none">
                <p className="text-white text-xs font-black uppercase tracking-wider">Canteiro Principal • Montagem</p>
                <p className="text-[10px] text-slate-300">Luanda, Angola</p>
              </div>
            </div>

            <div className="relative rounded-[2.5rem] overflow-hidden glass-card border border-sky-400/30 shadow-2xl group aspect-[9/16] sm:aspect-auto sm:h-[440px]">
              <video
                src="/videos/construction-1.mp4"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                autoPlay
                loop
                muted
                playsInline
                controls
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#08121E] via-transparent to-transparent pointer-events-none opacity-80" />
              <div className="absolute bottom-6 left-6 right-6 p-4 glass-card rounded-2xl border border-white/20 pointer-events-none">
                <p className="text-white text-xs font-black uppercase tracking-wider">Execução & Detalhes</p>
                <p className="text-[10px] text-slate-300">Talatona, Luanda</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
