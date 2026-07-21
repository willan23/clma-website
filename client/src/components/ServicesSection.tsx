import React from "react";
import { motion } from "framer-motion";
import { PaintBucket, Hammer, Building2, CheckCircle2, ChevronRight, Layers, Shield } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";

export function ServicesSection() {
  const services = [
    {
      icon: PaintBucket,
      title: "1. Design de Interiores & Revestimentos",
      desc: "Sofisticação e acabamento impecável para transformar qualquer ambiente em uma obra de arte.",
      accentColor: "from-amber-500/10 to-amber-500/0",
      borderColor: "border-amber-200",
      iconBg: "bg-amber-50 text-[#F59E0B]",
      details: [
        { t: "Ripados e Molduras Boiserie", d: "Aplicação técnica de ripados em MDF e molduras clássicas/modernas com corte milimétrico." },
        { t: "Papel de Parede e Vinis Premium", d: "Instalação sem bolhas nem junções visíveis de padrões vinílicos de alta gama." },
        { t: "Painéis Luminosos Rakers", d: "Criação de retroiluminação LED cênica integrada em paredes e tetos." }
      ]
    },
    {
      icon: Hammer,
      title: "2. Pladur, Caixilharia & Carpintaria",
      desc: "Estruturas sob medida com gesso cartonado, caixilharia de alumínio e técnicas avançadas.",
      accentColor: "from-blue-500/10 to-blue-500/0",
      borderColor: "border-blue-200",
      iconBg: "bg-blue-50 text-[#3D7EB3]",
      details: [
        { t: "Mobiliário Integrado em Pladur", d: "Fabricação de armários, estantes, nichos e balcões com reforço de carga." },
        { t: "Tetos Falsos com Isolamento", d: "Montagem de tetos suspensos acústicos/térmicos prontos para spots e sancas." },
        { t: "Caixilharia de Alumínio", d: "Fabricação e instalação de janelas de correr, basculantes e portas de segurança." }
      ]
    },
    {
      icon: Building2,
      title: "3. Montagem & Entrega Chave na Mão",
      desc: "Cuidado absoluto na montagem final do seu mobiliário e entregas prontas a habitar.",
      accentColor: "from-emerald-500/10 to-emerald-500/0",
      borderColor: "border-emerald-200",
      iconBg: "bg-emerald-50 text-emerald-600",
      details: [
        { t: "Montagem de Mobiliário e Espelhos", d: "Fixação e alinhamento perfeito de peças pesadas, espelhos cênicos e armários." },
        { t: "Acabamentos Gerais de Pintura", d: "Tratamento de superfícies, lixamento e pintura com tintas laváveis e duráveis." },
        { t: "Espaços Prontos a Habitar", d: "Verificação rigorosa de checklist técnico antes da entrega final ao cliente." }
      ]
    }
  ];

  return (
    <section id="servicos" className="py-28 relative overflow-hidden bg-[#F8FAFC]">
      <div className="container relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <div className="inline-flex items-center gap-2 bg-white shadow-sm px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest text-[#0D2847] border border-slate-200">
            <Layers className="w-3.5 h-3.5 text-[#3D7EB3]" />
            Nossa Expertise Técnica
          </div>
          <h2 className="text-4xl sm:text-6xl font-black text-[#0D2847] tracking-tight">
            Especialidades de <span className="text-[#3D7EB3]">Excelência</span>
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            Combinação perfeita entre engenharia prática, materiais certificados e atenção artesanal aos detalhes.
          </p>
        </div>

        {/* Services Cards Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {services.map((svc, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className="bg-white p-8 sm:p-10 rounded-[2.5rem] flex flex-col justify-between relative group overflow-hidden border border-slate-200 shadow-xl hover:shadow-2xl transition-all duration-300"
            >
              {/* Background Accent Glow */}
              <div className={`absolute top-0 right-0 w-48 h-48 bg-gradient-to-bl ${svc.accentColor} rounded-full blur-3xl -mr-12 -mt-12 group-hover:scale-150 transition-transform duration-700 pointer-events-none`} />

              <div>
                {/* Header Icon */}
                <div className={`w-16 h-16 rounded-2xl ${svc.iconBg} border ${svc.borderColor} flex items-center justify-center mb-8 shadow-sm group-hover:scale-110 transition-transform duration-500`}>
                  <svc.icon className="w-8 h-8" />
                </div>

                <h3 className="text-2xl font-black text-[#0D2847] mb-4 leading-tight group-hover:text-[#3D7EB3] transition-colors">
                  {svc.title}
                </h3>
                <p className="text-slate-600 text-sm mb-8 leading-relaxed font-normal">
                  {svc.desc}
                </p>

                {/* Sub Features List */}
                <div className="space-y-4 mb-8">
                  {svc.details.map((item, i) => (
                    <div key={i} className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 hover:bg-white transition-colors">
                      <p className="text-xs font-black text-[#0D2847] uppercase tracking-wider mb-1 flex items-center gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#3D7EB3]" />
                        {item.t}
                      </p>
                      <p className="text-[11px] text-slate-500 leading-relaxed font-normal">{item.d}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom CTA Dialog */}
              <Dialog>
                <DialogTrigger asChild>
                  <button className="w-full mt-auto py-3.5 px-5 rounded-xl bg-slate-100 hover:bg-[#0D2847] text-[#0D2847] hover:text-white font-black text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all border border-slate-200">
                    <span>Especificações Técnicas</span>
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </DialogTrigger>
                <DialogContent className="bg-white text-[#0D2847] border-slate-200 max-w-2xl rounded-3xl p-8 shadow-2xl">
                  <DialogHeader>
                    <DialogTitle className="text-2xl font-black text-[#0D2847] flex items-center gap-3">
                      <Shield className="w-6 h-6 text-[#3D7EB3]" />
                      {svc.title}
                    </DialogTitle>
                  </DialogHeader>
                  <div className="space-y-6 pt-4 text-sm text-slate-600">
                    <p className="leading-relaxed">{svc.desc}</p>
                    <div className="grid gap-4">
                      {svc.details.map((d, i) => (
                        <div key={i} className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-1">
                          <h4 className="font-bold text-[#0D2847] text-sm">{d.t}</h4>
                          <p className="text-xs text-slate-500">{d.d}</p>
                        </div>
                      ))}
                    </div>
                    <div className="p-4 rounded-2xl bg-blue-50 border border-blue-200 text-[#0D2847] text-xs">
                      ⚡ <strong>Compromisso CLMA:</strong> Todos os projetos incluem supervisão direta de um técnico encarregado durante 100% da execução.
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
