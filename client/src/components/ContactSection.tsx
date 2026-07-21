import React, { useState } from "react";
import { motion } from "framer-motion";
import { Phone, MapPin, Clock, Send, MessageSquare, ArrowRight, CheckCircle2 } from "lucide-react";

export function ContactSection() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [location, setLocation] = useState("");
  const [service, setService] = useState("Pladur e Tetos Falsos");
  const [message, setMessage] = useState("");

  const phoneContact = "+244 952 450 874";
  const whatsappNumber = "+244 938 667 695";

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Olá CLMA! Meu nome é ${name}.
• Telefone: ${phone}
• Localização da Obra: ${location}
• Serviço Desejado: ${service}
• Detalhes do Projeto: ${message}`;

    const url = `https://wa.me/244938667695?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank");
  };

  return (
    <section id="contato" className="py-28 relative overflow-hidden bg-[#08121E]">
      <div className="container relative z-10">
        <div className="text-center max-w-4xl mx-auto mb-20 space-y-6">
          <div className="inline-flex items-center gap-2 glass-card px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest text-amber-400 border border-amber-400/30">
            <MessageSquare className="w-3.5 h-3.5 text-amber-400" />
            Fale Diretamente Conosco
          </div>
          <h2 className="text-4xl sm:text-7xl font-black text-white tracking-tight leading-none">
            VAMOS CONSTRUIR <span className="text-amber-400 italic">JUNTOS</span>?
          </h2>
          <p className="text-slate-300 text-base sm:text-xl font-normal max-w-2xl mx-auto">
            Agende uma visita técnica ou peça o seu orçamento sem compromisso. Nossa equipa em Luanda responde em menos de 1 hora.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 items-start max-w-5xl mx-auto">
          {/* Left Contact Cards */}
          <div className="lg:col-span-5 space-y-6">
            <div className="glass-card p-8 rounded-[2.5rem] border border-white/15 space-y-6">
              <h3 className="text-2xl font-black text-white">Canais de Atendimento</h3>

              <div className="space-y-4">
                <a
                  href={`https://wa.me/244938667695`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-2xl bg-amber-500/10 border border-amber-500/30 hover:bg-amber-500/20 transition-colors group"
                >
                  <div className="w-12 h-12 rounded-xl bg-amber-400 text-slate-950 flex items-center justify-center flex-shrink-0 font-bold group-hover:scale-110 transition-transform">
                    <Phone className="w-6 h-6 fill-slate-950" />
                  </div>
                  <div>
                    <p className="text-[10px] text-amber-400 font-extrabold uppercase tracking-widest">WhatsApp Direto</p>
                    <p className="text-base font-black text-white font-mono">{whatsappNumber}</p>
                  </div>
                </a>

                <div className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/10">
                  <div className="w-12 h-12 rounded-xl bg-sky-500/20 text-sky-400 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-[10px] text-slate-400 font-extrabold uppercase tracking-widest">Linha Telefónica</p>
                    <p className="text-base font-black text-white font-mono">{phoneContact}</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/10">
                  <div className="w-12 h-12 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-[10px] text-slate-400 font-extrabold uppercase tracking-widest">Horário de Atendimento</p>
                    <p className="text-sm font-bold text-white">Segunda a Sábado: 8h às 18h</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/10">
                  <div className="w-12 h-12 rounded-xl bg-purple-500/20 text-purple-400 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-[10px] text-slate-400 font-extrabold uppercase tracking-widest">Sede & Canteiro</p>
                    <p className="text-sm font-bold text-white">Luanda, Angola</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Direct Quote Request Form */}
          <div className="lg:col-span-7 glass-card p-8 sm:p-10 rounded-[2.5rem] border border-amber-400/30 shadow-2xl space-y-6">
            <div className="space-y-1">
              <h3 className="text-2xl font-black text-white">Solicitar Atendimento Imediato</h3>
              <p className="text-xs text-slate-300">Preencha abaixo para gerar o seu pedido oficial direto no WhatsApp da CLMA.</p>
            </div>

            <form onSubmit={handleFormSubmit} className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-300">Seu Nome Completo</label>
                  <input
                    type="text"
                    required
                    placeholder="Ex: João Silva"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-amber-400 transition-colors"
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-300">Telefone / WhatsApp</label>
                  <input
                    type="tel"
                    required
                    placeholder="Ex: 923 000 000"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-amber-400 transition-colors"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-300">Localização da Obra</label>
                  <input
                    type="text"
                    required
                    placeholder="Ex: Talatona, Luanda"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-amber-400 transition-colors"
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-300">Serviço Principal</label>
                  <select
                    value={service}
                    onChange={(e) => setService(e.target.value)}
                    className="w-full bg-[#0F2338] border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-amber-400 transition-colors"
                  >
                    <option value="Pladur e Tetos Falsos">Pladur e Tetos Falsos</option>
                    <option value="Ripados e Boiserie">Ripados e Boiserie</option>
                    <option value="Caixilharia de Alumínio">Caixilharia de Alumínio</option>
                    <option value="Montagem de Mobiliário">Montagem de Mobiliário</option>
                    <option value="Reforma Completa">Reforma Completa</option>
                  </select>
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-300">Detalhes do Projeto / Mensagem</label>
                <textarea
                  rows={3}
                  placeholder="Descreva brevemente o espaço, prazos ou necessidades específicas..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-amber-400 transition-colors"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-amber-500 via-amber-400 to-amber-500 text-slate-950 font-black py-4 rounded-xl text-center text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-xl shadow-amber-500/20 hover:scale-[1.01] active:scale-95 transition-all"
              >
                <Send className="w-4 h-4" />
                <span>ENVIAR MENSAGEM DIRETA PARA O WHATSAPP</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
