import React, { useState } from "react";
import { motion } from "framer-motion";
import { Phone, MapPin, Clock, Send, MessageSquare } from "lucide-react";

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
    <section id="contato" className="py-28 relative overflow-hidden bg-[#F8FAFC]">
      <div className="container relative z-10">
        <div className="text-center max-w-4xl mx-auto mb-20 space-y-6">
          <div className="inline-flex items-center gap-2 bg-white shadow-sm px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest text-[#0D2847] border border-slate-200">
            <MessageSquare className="w-3.5 h-3.5 text-[#3D7EB3]" />
            Fale Diretamente Conosco
          </div>
          <h2 className="text-4xl sm:text-7xl font-black text-[#0D2847] tracking-tight leading-none">
            VAMOS CONSTRUIR <span className="text-[#3D7EB3] italic">JUNTOS</span>?
          </h2>
          <p className="text-slate-600 text-base sm:text-xl font-normal max-w-2xl mx-auto">
            Agende uma visita técnica ou peça o seu orçamento sem compromisso. Nossa equipa em Luanda responde em menos de 1 hora.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 items-start max-w-5xl mx-auto">
          {/* Left Contact Cards */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white p-8 rounded-[2.5rem] border border-slate-200 shadow-xl space-y-6">
              <h3 className="text-2xl font-black text-[#0D2847]">Canais de Atendimento</h3>

              <div className="space-y-4">
                <a
                  href={`https://wa.me/244938667695`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-2xl bg-blue-50 border border-blue-200 hover:bg-blue-100 transition-colors group"
                >
                  <div className="w-12 h-12 rounded-xl bg-[#3D7EB3] text-white flex items-center justify-center flex-shrink-0 font-bold group-hover:scale-110 transition-transform">
                    <Phone className="w-6 h-6 fill-white" />
                  </div>
                  <div>
                    <p className="text-[10px] text-[#3D7EB3] font-extrabold uppercase tracking-widest">WhatsApp Direto</p>
                    <p className="text-base font-black text-[#0D2847] font-mono">{whatsappNumber}</p>
                  </div>
                </a>

                <div className="flex items-center gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-200">
                  <div className="w-12 h-12 rounded-xl bg-slate-200 text-[#0D2847] flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-[10px] text-slate-500 font-extrabold uppercase tracking-widest">Linha Telefónica</p>
                    <p className="text-base font-black text-[#0D2847] font-mono">{phoneContact}</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-200">
                  <div className="w-12 h-12 rounded-xl bg-amber-50 text-[#F59E0B] flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-[10px] text-slate-500 font-extrabold uppercase tracking-widest">Horário de Atendimento</p>
                    <p className="text-sm font-bold text-[#0D2847]">Segunda a Sábado: 8h às 18h</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-200">
                  <div className="w-12 h-12 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-[10px] text-slate-500 font-extrabold uppercase tracking-widest">Sede & Canteiro</p>
                    <p className="text-sm font-bold text-[#0D2847]">Luanda, Angola</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Direct Quote Request Form */}
          <div className="lg:col-span-7 bg-white p-8 sm:p-10 rounded-[2.5rem] border border-slate-200 shadow-xl space-y-6">
            <div className="space-y-1">
              <h3 className="text-2xl font-black text-[#0D2847]">Solicitar Atendimento Imediato</h3>
              <p className="text-xs text-slate-500">Preencha abaixo para gerar o seu pedido oficial direto no WhatsApp da CLMA.</p>
            </div>

            <form onSubmit={handleFormSubmit} className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-700">Seu Nome Completo</label>
                  <input
                    type="text"
                    required
                    placeholder="Ex: João Silva"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm text-[#0D2847] focus:outline-none focus:border-[#3D7EB3] transition-colors"
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-700">Telefone / WhatsApp</label>
                  <input
                    type="tel"
                    required
                    placeholder="Ex: 923 000 000"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm text-[#0D2847] focus:outline-none focus:border-[#3D7EB3] transition-colors"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-700">Localização da Obra</label>
                  <input
                    type="text"
                    required
                    placeholder="Ex: Talatona, Luanda"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm text-[#0D2847] focus:outline-none focus:border-[#3D7EB3] transition-colors"
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-700">Serviço Principal</label>
                  <select
                    value={service}
                    onChange={(e) => setService(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm text-[#0D2847] focus:outline-none focus:border-[#3D7EB3] transition-colors"
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
                <label className="text-xs font-bold text-slate-700">Detalhes do Projeto / Mensagem</label>
                <textarea
                  rows={3}
                  placeholder="Descreva brevemente o espaço, prazos ou necessidades específicas..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm text-[#0D2847] focus:outline-none focus:border-[#3D7EB3] transition-colors"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-[#0D2847] via-[#3D7EB3] to-[#0D2847] text-white font-black py-4 rounded-xl text-center text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg hover:scale-[1.01] active:scale-95 transition-all"
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
