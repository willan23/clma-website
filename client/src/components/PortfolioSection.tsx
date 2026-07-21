import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, Maximize2, X, Filter, ArrowRight } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";

interface ProjectItem {
  id: number;
  img: string;
  category: string;
  tag: string;
  title: string;
  city: string;
  desc: string;
}

export function PortfolioSection() {
  const [selectedFilter, setSelectedFilter] = useState<string>("todos");
  const [selectedImage, setSelectedImage] = useState<ProjectItem | null>(null);

  const projects: ProjectItem[] = [
    {
      id: 1,
      img: "clma-ess.jpg",
      category: "acabamentos",
      tag: "Acabamento Técnico",
      title: "Residência de Luxo em Talatona",
      city: "Talatona, Luanda",
      desc: "Instalação de molduras boiserie personalizadas com iluminação indireta integrada e pintura acetinada de alta gama."
    },
    {
      id: 2,
      img: "clma-essee.jpg",
      category: "pladur",
      tag: "Pladur & Gesso",
      title: "Mobiliário Integrado em Pladur",
      city: "Luanda Sul",
      desc: "Criação de estante cênica e painel de TV em pladur reforçado com nichos retroiluminados."
    },
    {
      id: 3,
      img: "clma-essa.jpg",
      category: "revestimentos",
      tag: "Revestimentos Ripados",
      title: "Painel Ripado Moderno",
      city: "Viana, Luanda",
      desc: "Aplicação técnica de ripados e revestimentos decorativos para ambiente corporativo contemporâneo."
    },
    {
      id: 4,
      img: "clma-esse.jpg",
      category: "pladur",
      tag: "Teto Suspenso",
      title: "Design de Teto Falso Cênico",
      city: "Miramar, Luanda",
      desc: "Construção de sanca aberta em pladur com isolamento acústico superior e spots direcionais."
    },
    {
      id: 5,
      img: "clma-esa.jpg",
      category: "acabamentos",
      tag: "Pintura & Finalização",
      title: "Acabamento Interior de Escritório",
      city: "Ingombota, Luanda",
      desc: "Alinhamento técnico de superfícies e pintura com efeito velvet para ambiente executivo."
    },
    {
      id: 6,
      img: "clma-wee.jpg",
      category: "montagem",
      tag: "Montagem & Caixilharia",
      title: "Montagem de Caixilhos e Vidro",
      city: "Camama, Luanda",
      desc: "Montagem técnica de divisórias de alumínio e caixilharia de alta resistência."
    },
    {
      id: 7,
      img: "clma-add.jpg",
      category: "revestimentos",
      tag: "Papel de Parede",
      title: "Instalação de Revestimento Vinílico",
      city: "Kilandamba, Luanda",
      desc: "Aplicação sem emendas visíveis de papel de parede texturizado importado."
    },
    {
      id: 8,
      img: "clma-edddd.jpg",
      category: "montagem",
      tag: "Mobiliário Comercial",
      title: "Montagem de Espaço Comercial",
      city: "Luanda Centro",
      desc: "Montagem e alinhamento de balcões e estruturas sob medida para atendimento ao público."
    },
    {
      id: 9,
      img: "new-project-1.jpg",
      category: "acabamentos",
      tag: "Obra Chave na Mão",
      title: "Projeto de Reforma Completa",
      city: "Talatona, Luanda",
      desc: "Transformação integral de moradia com execução de pladur, piso, revestimentos e iluminação."
    }
  ];

  const filterTabs = [
    { id: "todos", label: "Todos os Projetos" },
    { id: "acabamentos", label: "Acabamentos & Boiserie" },
    { id: "pladur", label: "Pladur & Tetos Falsos" },
    { id: "revestimentos", label: "Ripados & Revestimentos" },
    { id: "montagem", label: "Montagem & Carpintaria" }
  ];

  const filteredProjects = selectedFilter === "todos"
    ? projects
    : projects.filter((p) => p.category === selectedFilter);

  return (
    <section id="projetos" className="py-28 relative overflow-hidden bg-[#08121E]">
      <div className="container relative z-10">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-8">
          <div className="max-w-2xl space-y-4">
            <div className="inline-flex items-center gap-2 glass-card px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest text-amber-400 border border-amber-400/30">
              <Filter className="w-3.5 h-3.5 text-amber-400" />
              Galeria de Obras Executadas
            </div>
            <h2 className="text-4xl sm:text-6xl font-black text-white tracking-tight">
              Portfólio de <span className="text-amber-400">Projetos</span>
            </h2>
            <p className="text-slate-300 text-base sm:text-lg">
              Transformando visões em realidade física com rigor técnico, pontualidade e acabamentos que impressionam à primeira vista.
            </p>
          </div>

          {/* Full Gallery Dialog Launcher */}
          <Dialog>
            <DialogTrigger asChild>
              <button className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 px-8 py-4 rounded-2xl font-black text-xs uppercase tracking-wider flex items-center gap-3 shadow-xl shadow-amber-500/20 transition-all hover:scale-105 active:scale-95">
                <span>VER GALERIA COMPLETA (15+ OBRAS)</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </DialogTrigger>
            <DialogContent className="max-w-6xl h-[85vh] overflow-y-auto bg-[#08121E]/95 border-amber-400/30 text-white rounded-3xl p-6 sm:p-10 backdrop-blur-2xl">
              <DialogHeader>
                <DialogTitle className="text-3xl font-black text-amber-400 mb-6">
                  Acervo de Obras Concluídas CLMA
                </DialogTitle>
              </DialogHeader>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  "clma-ess.jpg", "clma-essee.jpg", "clma-essa.jpg", "clma-esse.jpg",
                  "clma-esa.jpg", "clma-ese.jpg", "clma-wee.jpg", "clma-add.jpg",
                  "clma-edddd.jpg", "clma-desse.jpg", "clma-ase.jpg", "clma-asse.jpg",
                  "new-project-1.jpg", "new-project-2.jpg", "project-3.jpg"
                ].map((img, idx) => (
                  <div key={idx} className="group relative aspect-video rounded-2xl overflow-hidden glass-card border border-white/10 shadow-lg">
                    <img
                      src={`/images/${img}`}
                      alt={`Obra CLMA ${idx + 1}`}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-slate-950/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <span className="text-xs font-black text-amber-400 bg-black/60 px-4 py-2 rounded-full border border-amber-400/40">
                        CLMA Obra #{idx + 1}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </DialogContent>
          </Dialog>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap gap-3 mb-12 border-b border-white/10 pb-6">
          {filterTabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setSelectedFilter(tab.id)}
              className={`px-5 py-2.5 rounded-full text-xs font-bold transition-all ${
                selectedFilter === tab.id
                  ? "bg-amber-400 text-slate-950 font-black shadow-lg shadow-amber-400/20 scale-105"
                  : "glass-card text-slate-300 hover:text-white hover:bg-white/10"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Animated Project Grid */}
        <motion.div layout className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filteredProjects.map((proj) => (
              <motion.div
                key={proj.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="group glass-card glass-card-hover rounded-[2.5rem] overflow-hidden border border-white/10 flex flex-col h-[480px] relative cursor-pointer"
                onClick={() => setSelectedImage(proj)}
              >
                {/* Background Image Container */}
                <div className="relative h-full overflow-hidden">
                  <img
                    src={`/images/${proj.img}`}
                    alt={proj.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#08121E] via-[#08121E]/60 to-transparent opacity-90 group-hover:opacity-95 transition-opacity" />

                  {/* Top Tag */}
                  <div className="absolute top-6 left-6 z-10">
                    <span className="text-[10px] font-black uppercase tracking-widest text-amber-400 bg-[#08121E]/80 backdrop-blur-md px-3 py-1.5 rounded-lg border border-amber-400/30">
                      {proj.tag}
                    </span>
                  </div>

                  {/* Expand Icon */}
                  <div className="absolute top-6 right-6 z-10 w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity border border-white/20">
                    <Maximize2 className="w-4 h-4 text-amber-400" />
                  </div>

                  {/* Bottom Information */}
                  <div className="absolute bottom-0 left-0 right-0 p-8 space-y-3 z-10">
                    <div className="flex items-center gap-2 text-xs font-bold text-sky-400">
                      <MapPin className="w-3.5 h-3.5" />
                      <span>{proj.city}</span>
                    </div>
                    <h3 className="text-2xl font-black text-white leading-tight group-hover:text-amber-400 transition-colors">
                      {proj.title}
                    </h3>
                    <p className="text-xs text-slate-300 line-clamp-2 leading-relaxed font-normal">
                      {proj.desc}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Modal Lightbox for Selected Image */}
        <AnimatePresence>
          {selectedImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-black/90 backdrop-blur-xl flex items-center justify-center p-4 sm:p-8"
              onClick={() => setSelectedImage(null)}
            >
              <motion.div
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.9 }}
                className="relative max-w-4xl w-full glass-card p-6 sm:p-8 rounded-[2.5rem] border border-amber-400/40 text-white space-y-6"
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  onClick={() => setSelectedImage(null)}
                  className="absolute top-6 right-6 w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-amber-400 hover:text-slate-950 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>

                <div className="relative aspect-video rounded-2xl overflow-hidden border border-white/10">
                  <img
                    src={`/images/${selectedImage.img}`}
                    alt={selectedImage.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="space-y-2">
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-black uppercase text-amber-400 bg-amber-500/20 px-3 py-1 rounded-full border border-amber-500/30">
                      {selectedImage.tag}
                    </span>
                    <span className="text-xs font-bold text-sky-400 flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5" />
                      {selectedImage.city}
                    </span>
                  </div>
                  <h3 className="text-2xl font-black text-white">{selectedImage.title}</h3>
                  <p className="text-sm text-slate-300">{selectedImage.desc}</p>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
