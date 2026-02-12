import React from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Phone, MapPin, Clock, ArrowRight, Building2, Hammer, PaintBucket } from "lucide-react";

/**
 * CLMA Website - Home Page
 * Design: Modernismo Industrial Elegante
 * Colors: Azul Profundo (#003366), Laranja Quente (#FF6B35), Cinzento Claro (#F5F5F5)
 * Typography: Poppins Bold para títulos, IBM Plex Mono para dados
 */

export default function Home() {
  const whatsappNumber = "+244928594960";
  const whatsappLink = `https://wa.me/${whatsappNumber.replace(/\D/g, "")}?text=Olá%20CLMA,%20gostaria%20de%20saber%20mais%20sobre%20seus%20serviços`;

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation Header */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-border shadow-sm">
        <div className="container flex items-center justify-between py-4">
          <div className="flex items-center gap-3">
            <img
              src="/images/clma-logo.jpg"
              alt="CLMA Logo"
              className="h-12 w-auto"
            />
            <div className="hidden sm:block">
              <h1 className="text-xl font-black text-primary tracking-tighter">CLMA</h1>
              <p className="text-[10px] text-muted-foreground uppercase tracking-widest font-bold">Construção Limitada</p>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-8">
            <a href="#servicos" className="text-sm font-semibold text-muted-foreground hover:text-primary transition-colors">
              Serviços
            </a>
            <a href="#sobre" className="text-sm font-semibold text-muted-foreground hover:text-primary transition-colors">
              Sobre
            </a>
            <a href="#projetos" className="text-sm font-semibold text-muted-foreground hover:text-primary transition-colors">
              Projetos
            </a>
            <a href="#contato" className="text-sm font-semibold text-muted-foreground hover:text-primary transition-colors">
              Contacto
            </a>
          </nav>

          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-secondary hover:bg-secondary/90 text-white px-6 py-2.5 rounded-full font-bold transition-all duration-300 flex items-center gap-2 text-sm shadow-md hover:shadow-lg active:scale-95"
          >
            <Phone className="w-4 h-4" />
            <span>WhatsApp</span>
          </a>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary to-[#1E4D7B] text-white py-24 md:py-40">
        {/* Background Crises/Patterns */}
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 pointer-events-none">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <path d="M0,0 L100,0 L100,100 L0,80 Z" fill="currentColor" />
          </svg>
        </div>

        <div className="container grid md:grid-cols-2 gap-16 items-center relative z-10">
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-block bg-secondary/20 text-secondary border border-secondary/30 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest">
                Referência em Angola
              </div>
              <h1 className="text-5xl md:text-7xl font-black leading-[1.1] tracking-tight">
                Construindo com <span className="text-secondary">Rigor</span> e Excelência
              </h1>
              <p className="text-xl text-blue-100/80 max-w-lg leading-relaxed font-light">
                Soluções integradas de construção, montagem e acabamento para projetos que exigem o mais alto padrão de qualidade.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-5 pt-4">
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-secondary hover:bg-secondary/90 text-white px-10 py-5 rounded-xl font-black transition-all duration-300 flex items-center justify-center gap-3 group shadow-xl shadow-black/20"
              >
                SOLICITAR ORÇAMENTO
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <button className="border-2 border-white/20 bg-white/5 backdrop-blur-sm text-white hover:bg-white hover:text-primary px-10 py-5 rounded-xl font-black transition-all duration-300 uppercase text-sm tracking-tighter">
                Portfólio Completo
              </button>
            </div>
          </div>

          <div className="hidden md:block relative group">
            <div className="absolute -inset-6 bg-secondary/10 rounded-[3rem] blur-3xl animate-pulse"></div>
            <div className="relative overflow-hidden rounded-[2.5rem] shadow-2xl border border-white/10 group-hover:translate-y-[-10px] transition-transform duration-500">
              <img
                src="/images/hero-construction.jpg"
                alt="CLMA Construction Excellence"
                className="w-full h-[550px] object-cover scale-105 group-hover:scale-100 transition-transform duration-700"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-primary/90 to-transparent p-10">
                <p className="text-sm font-bold uppercase tracking-widest text-secondary mb-2">Obra em Destaque</p>
                <h3 className="text-2xl font-bold">Complexo Residencial Luanda Sul</h3>
              </div>
            </div>
          </div>
        </div>

        {/* Slanted divider */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-background" style={{
          clipPath: "polygon(0 100%, 100% 0, 100% 100%, 0 100%)"
        }}></div>
      </section>

      {/* Services Section */}
      <section id="servicos" className="py-24 md:py-32">
        <div className="container">
          <div className="text-center mb-24">
            <h2 className="text-4xl md:text-6xl font-black text-primary mb-8 tracking-tighter">
              O Que <span className="text-secondary">Fazemos</span>
            </h2>
            <div className="w-40 h-2 bg-secondary/20 mx-auto mb-8 rounded-full flex justify-center">
              <div className="w-16 h-full bg-secondary rounded-full"></div>
            </div>
            <p className="text-muted-foreground max-w-3xl mx-auto text-xl leading-relaxed">
              Três pilares fundamentais para transformar sua visão em realidade estrutural.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-12">
            {[
              {
                icon: Hammer,
                title: "Montagem & Instalação",
                desc: "Soluções precisas de montagem técnica para diversos fins.",
                items: ["Raker com painéis luminosos", "Mobiliário", "Teto Falso", "Espelhos"]
              },
              {
                icon: PaintBucket,
                title: "Acabamentos & Revestimentos",
                desc: "O toque final de estética e elegância no seu projeto.",
                items: ["Papel de Parede", "Ripados", "Vinil Autocolante", "Molduras Bousery"]
              },
              {
                icon: Building2,
                title: "Fabricação Sob Medida",
                desc: "Estruturas personalizadas criadas especificamente para o seu espaço.",
                items: ["Portas e Janelas", "Armários em Pladur", "Prateleiras", "Balcões"]
              }
            ].map((service, idx) => (
              <Card key={idx} className="group p-12 hover:shadow-2xl transition-all duration-500 border-none bg-slate-50 relative overflow-hidden flex flex-col items-center text-center">
                <div className="absolute top-0 right-0 w-40 h-40 bg-primary/5 -mr-20 -mt-20 rounded-full group-hover:bg-primary/10 transition-colors"></div>
                <div className="w-20 h-20 bg-white rounded-2xl shadow-xl shadow-primary/5 flex items-center justify-center mb-10 relative z-10 group-hover:scale-110 transition-transform">
                  <service.icon className="w-10 h-10 text-secondary" />
                </div>
                <h3 className="text-2xl font-black text-primary mb-5 relative z-10">{service.title}</h3>
                <p className="text-muted-foreground mb-10 text-lg relative z-10 leading-relaxed">
                  {service.desc}
                </p>
                <div className="flex flex-wrap justify-center gap-3 relative z-10 mt-auto">
                  {service.items.map((item, i) => (
                    <span key={i} className="bg-white border border-border px-4 py-1.5 rounded-full text-xs font-bold text-primary uppercase shadow-sm">
                      {item}
                    </span>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-24 bg-white relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div className="max-w-2xl">
              <h2 className="text-4xl md:text-5xl font-black text-primary leading-tight mb-4 tracking-tighter">O QUE NOS MOVE</h2>
              <p className="text-lg text-slate-600 font-medium">Transformamos desafios técnicos em resultados de excelência, com rigor e compromisso.</p>
            </div>
            <Dialog>
              <DialogTrigger asChild>
                <Button className="bg-primary hover:bg-primary/90 text-white px-8 py-6 rounded-full text-lg font-black tracking-tight shadow-xl hover:shadow-2xl transition-all flex items-center gap-3">
                  VER GALERIA COMPLETA <ArrowRight className="w-6 h-6" />
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-5xl h-[80vh] overflow-y-auto bg-white/95 backdrop-blur-md border-none shadow-2xl">
                <DialogHeader>
                  <DialogTitle className="text-3xl font-black text-primary tracking-tighter mb-8">Nossos Projetos & Obras</DialogTitle>
                </DialogHeader>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-2">
                  {[
                    "project-1.jpg", "project-2.jpg", "project-3.jpg", "project-4.jpg",
                    "montagem-acabamento.jpg", "team-construction.jpg", "hero-construction.jpg",
                    "work-site-1.jpg", "work-site-2.jpg"
                  ].map((img, i) => (
                    <div key={i} className="group relative aspect-video rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all cursor-zoom-in">
                      <img
                        src={`/images/${img}`}
                        alt="Project detail"
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                        <span className="text-white font-bold text-sm bg-primary/40 px-4 py-2 rounded-full backdrop-blur-sm border border-white/20">Expandir Imagem</span>
                      </div>
                    </div>
                  ))}
                </div>
              </DialogContent>
            </Dialog>
          </div>

          <div className="grid lg:grid-cols-3 gap-12">
            {[
              { img: "project-1.jpg", tag: "REFORMA LUXO", city: "Luanda", title: "Acabamentos Premium" },
              { img: "project-2.jpg", tag: "ESTRUTURAL", city: "Talatona", title: "Montagem de Precisão" },
              { img: "project-3.jpg", tag: "INDUSTRIAL", city: "Viana", title: "Galpão Logístico" }
            ].map((proj, i) => (
              <div key={i} className="group cursor-pointer">
                <div className="relative h-[450px] overflow-hidden rounded-[2rem] shadow-xl">
                  <img
                    src={`/images/${proj.img}`}
                    alt={proj.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent opacity-60 group-hover:opacity-90 transition-opacity"></div>
                  <div className="absolute bottom-0 left-0 p-8 text-white">
                    <span className="text-[10px] font-black tracking-widest text-secondary mb-3 block uppercase bg-white/10 backdrop-blur-md w-fit px-3 py-1 rounded-sm">{proj.tag}</span>
                    <h3 className="text-2xl font-black mb-1">{proj.title}</h3>
                    <p className="flex items-center gap-2 text-blue-100/80 text-sm font-medium">
                      <MapPin className="w-3 h-3 text-secondary" />
                      {proj.city}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Showcase Section */}
      <section className="py-24 md:py-32 bg-primary overflow-hidden">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-8">
              <span className="text-secondary font-black text-xs uppercase tracking-[0.3em] border-l-2 border-secondary pl-4">Work in Progress</span>
              <h2 className="text-4xl md:text-6xl font-black text-white leading-tight tracking-tighter">
                Nossas Obras <span className="text-secondary italic">em Movimento</span>
              </h2>
              <p className="text-xl text-blue-100/60 leading-relaxed max-w-xl">
                Transparência e rigor em cada etapa. Acompanhe o dia a dia de nossas equipes de montagem e construção civil diretamente no canteiro de obras.
              </p>
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="bg-white/5 backdrop-blur-sm p-6 rounded-2xl border border-white/10">
                  <h4 className="text-secondary font-black text-sm uppercase mb-2">Montagem</h4>
                  <p className="text-white/60 text-sm italic">"Precisão milimétrica em estruturas metálicas."</p>
                </div>
                <div className="bg-white/5 backdrop-blur-sm p-6 rounded-2xl border border-white/10">
                  <h4 className="text-secondary font-black text-sm uppercase mb-2">Acabamento</h4>
                  <p className="text-white/60 text-sm italic">"O toque final de excelência CLMA."</p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-8">
              <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white/10 aspect-video group">
                <video
                  src="/videos/construction-2.mp4"
                  className="w-full h-full object-cover"
                  autoPlay
                  loop
                  controls
                  playsInline
                />
                <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-colors"></div>
                <div className="absolute bottom-6 left-6 right-6 p-6 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20">
                  <p className="text-white text-sm font-bold uppercase tracking-widest">Canteiro de Obras Principal</p>
                </div>
              </div>
              <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white/10 aspect-video group h-64">
                <video
                  src="/videos/construction-1.mp4"
                  className="w-full h-full object-cover"
                  autoPlay
                  loop
                  controls
                  playsInline
                />
                <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-colors"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="sobre" className="py-24 md:py-40 bg-white overflow-hidden">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-24 items-center">
            <div className="relative">
              <div className="grid grid-cols-2 gap-6 relative z-10">
                <div className="space-y-6">
                  <img src="/images/work-site-1.jpg" className="w-full h-80 object-cover rounded-[2rem] shadow-lg" alt="On site" />
                  <div className="bg-secondary p-10 rounded-[2rem] text-white shadow-xl">
                    <p className="text-4xl font-black">15+</p>
                    <p className="text-sm font-bold uppercase tracking-widest mt-2">Anos de Experiência</p>
                  </div>
                </div>
                <div className="space-y-6 pt-16">
                  <div className="bg-primary p-10 rounded-[2rem] text-white shadow-xl">
                    <p className="text-4xl font-black">150+</p>
                    <p className="text-sm font-bold uppercase tracking-widest mt-2">Obras Concluídas</p>
                  </div>
                  <img src="/images/work-site-2.jpg" className="w-full h-80 object-cover rounded-[2rem] shadow-lg" alt="Team" />
                </div>
              </div>
              {/* Abstract element */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-slate-50 -z-10 rounded-full blur-3xl opacity-50"></div>
            </div>

            <div className="space-y-10">
              <div className="space-y-6">
                <span className="text-secondary font-black text-xs uppercase tracking-[0.3em]">Quem Somos</span>
                <h2 className="text-4xl md:text-6xl font-black text-primary leading-tight tracking-tighter">
                  Sua Visão, Nossa <span className="text-secondary">Estrutura</span>
                </h2>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  A CLMA nasceu do desejo de elevar o padrão construtivo em Angola. Hoje, somos referência em projetos que exigem simultaneamente solidez técnica e acabamentos de alto luxo.
                </p>
              </div>

              <div className="space-y-6">
                {[
                  { t: "Rigor Técnico", d: "Seguimos normas internacionais em cada viga lançada." },
                  { t: "Gestão de Prazos", d: "Cronograma é compromisso sagrado para nossa equipe." },
                  { t: "Materiais Certificados", d: "Trabalhamos apenas com o que há de melhor no mercado." }
                ].map((item, i) => (
                  <div key={i} className="flex gap-6 items-start">
                    <div className="flex-shrink-0 w-12 h-12 bg-slate-100 rounded-xl flex items-center justify-center">
                      <ArrowRight className="w-6 h-6 text-secondary" />
                    </div>
                    <div>
                      <h4 className="font-black text-primary uppercase text-sm tracking-widest mb-1">{item.t}</h4>
                      <p className="text-muted-foreground">{item.d}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contato" className="py-24 md:py-40 bg-primary relative overflow-hidden text-center">
        {/* Pattern Background */}
        <div className="absolute inset-0 opacity-5 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/cubic-maze.png')]"></div>

        <div className="container relative z-10">
          <h2 className="text-5xl md:text-8xl font-black text-white mb-12 tracking-tighter max-w-5xl mx-auto">
            VAMOS CONSTRUIR <span className="text-secondary italic">JUNTOS</span>?
          </h2>
          <p className="text-blue-100 text-xl md:text-3xl font-light max-w-3xl mx-auto mb-20 opacity-80 leading-relaxed">
            Seja um projeto residencial, comercial ou industrial, a CLMA tem a expertise que você procura.
          </p>

          <div className="flex flex-col md:flex-row justify-center items-center gap-8">
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-secondary text-white px-12 py-6 rounded-2xl font-black text-xl hover:bg-secondary/90 transition-all shadow-2xl shadow-black/40 flex items-center gap-4 group hover:-translate-y-2 active:scale-95"
            >
              FALAR NO WHATSAPP
              <Phone className="w-8 h-8 group-hover:rotate-12 transition-transform" />
            </a>
            <div className="text-left text-white/60">
              <p className="text-xs font-bold uppercase tracking-widest mb-1">Linha Direta Luanda</p>
              <p className="text-2xl font-black text-white px-2 py-1 bg-white/10 rounded-lg backdrop-blur-sm border border-white/10">CLMA Construção</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#040D18] text-slate-500 py-24">
        <div className="container">
          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-20 mb-24">
            <div className="space-y-8">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-secondary rounded-xl flex items-center justify-center font-black text-white text-2xl">C</div>
                <h4 className="font-black text-white text-3xl tracking-tighter">CLMA</h4>
              </div>
              <p className="text-base leading-relaxed">
                Excelência construtiva em solo angolano. Edificando o amanhã com compromisso e solidez.
              </p>
            </div>

            <div className="space-y-8">
              <h5 className="font-black text-white tracking-widest uppercase text-sm">Navegação</h5>
              <ul className="space-y-5 text-sm font-bold">
                <li><a href="#servicos" className="hover:text-secondary transition-colors uppercase">Serviços</a></li>
                <li><a href="#sobre" className="hover:text-secondary transition-colors uppercase">Empresa</a></li>
                <li><a href="#projetos" className="hover:text-secondary transition-colors uppercase">Projetos</a></li>
                <li><a href="#contato" className="hover:text-secondary transition-colors uppercase">Contato</a></li>
              </ul>
            </div>

            <div className="space-y-8">
              <h5 className="font-black text-white tracking-widest uppercase text-sm">Contato</h5>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <MapPin className="text-secondary w-5 h-5 flex-shrink-0" />
                  <span className="text-sm">Luanda, Angola</span>
                </div>
                <div className="flex items-center gap-4">
                  <Phone className="text-secondary w-5 h-5 flex-shrink-0" />
                  <span className="text-sm font-bold text-white">{whatsappNumber}</span>
                </div>
                <div className="flex items-center gap-4">
                  <Clock className="text-secondary w-5 h-5 flex-shrink-0" />
                  <span className="text-sm">Seg - Sex, 8h as 18h</span>
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <h5 className="font-black text-white tracking-widest uppercase text-sm">Newsletter</h5>
              <p className="text-sm">Receba novidades sobre o mercado construtivo.</p>
              <div className="flex gap-2">
                <input type="email" placeholder="Seu e-mail" className="bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-sm w-full focus:outline-none focus:border-secondary transition-colors" />
                <button className="bg-secondary text-white p-3 rounded-lg hover:opacity-80 transition-opacity"><ArrowRight className="w-5 h-5" /></button>
              </div>
            </div>
          </div>

          <div className="border-t border-white/5 pt-12 text-center text-xs font-bold uppercase tracking-[0.2em]">
            <p>&copy; {new Date().getFullYear()} CLMA Construção Limitada • Todos os direitos reservados</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
