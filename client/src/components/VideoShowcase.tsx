import React from "react";
import { motion } from "framer-motion";
import { Video } from "lucide-react";

export function VideoShowcase() {
  return (
    <section className="py-28 relative overflow-hidden bg-[#F8FAFC]">
      <div className="container relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Text Box */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2 bg-white shadow-sm px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest text-[#0D2847] border border-slate-200">
              <Video className="w-3.5 h-3.5 text-[#3D7EB3]" />
              Canteiro de Obras Real
            </div>
            <h2 className="text-4xl sm:text-6xl font-black text-[#0D2847] tracking-tight leading-tight">
              Nossas Obras <span className="text-[#3D7EB3] italic">em Movimento</span>
            </h2>
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
              Acompanhe a precisão e a dedicação das nossas equipas de montagem diretamente no canteiro de obras. Transparência total do primeiro ao último parafuso.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 pt-4">
              <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm">
                <h4 className="text-[#0D2847] font-bold text-xs uppercase tracking-wider mb-1">Montagem Técnica</h4>
                <p className="text-slate-500 text-xs italic">"Precisão milimétrica em estruturas metálicas e Pladur."</p>
              </div>
              <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm">
                <h4 className="text-[#0D2847] font-bold text-xs uppercase tracking-wider mb-1">Acabamentos</h4>
                <p className="text-slate-500 text-xs italic">"Superfícies perfeitas e toque final de excelência CLMA."</p>
              </div>
            </div>
          </div>

          {/* Right Video Player Grid */}
          <div className="lg:col-span-7 grid sm:grid-cols-2 gap-6">
            <div className="relative rounded-[2.5rem] overflow-hidden bg-white border border-slate-200 shadow-xl group aspect-[9/16] sm:aspect-auto sm:h-[440px]">
              <video
                src="/videos/construction-2.mp4"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                autoPlay
                loop
                muted
                playsInline
                controls
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0D2847]/80 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-6 left-6 right-6 p-4 bg-white/90 backdrop-blur-md rounded-2xl border border-slate-200/80 shadow-md pointer-events-none">
                <p className="text-[#0D2847] text-xs font-black uppercase tracking-wider">Canteiro Principal • Montagem</p>
                <p className="text-[10px] text-slate-500">Luanda, Angola</p>
              </div>
            </div>

            <div className="relative rounded-[2.5rem] overflow-hidden bg-white border border-slate-200 shadow-xl group aspect-[9/16] sm:aspect-auto sm:h-[440px]">
              <video
                src="/videos/construction-1.mp4"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                autoPlay
                loop
                muted
                playsInline
                controls
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0D2847]/80 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-6 left-6 right-6 p-4 bg-white/90 backdrop-blur-md rounded-2xl border border-slate-200/80 shadow-md pointer-events-none">
                <p className="text-[#0D2847] text-xs font-black uppercase tracking-wider">Execução & Detalhes</p>
                <p className="text-[10px] text-slate-500">Talatona, Luanda</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
