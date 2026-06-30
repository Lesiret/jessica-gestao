/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, useScroll, useTransform, AnimatePresence } from "motion/react";
import { 
  CheckCircle2, 
  Clock, 
  Mail, 
  MessageSquare, 
  Phone, 
  Calendar, 
  BarChart3, 
  Users, 
  ArrowRight,
  Menu,
  X,
  Instagram,
  Music
} from "lucide-react";
import { useState, useEffect } from "react";

const FORM_URL = "https://docs.google.com/forms/d/e/1FAIpQLSfMCt0w034W9JP6peLv62p5zTvpeYfyPNNnStEsy8f5T5TnUg/viewform";
const WHATSAPP_URL = "https://wa.me/5548988679214";
const INSTAGRAM_URL = "https://www.instagram.com/jessica_kleinowski/";
const TIKTOK_URL = "https://www.tiktok.com/@jessica_kleinowski?_r=1&_t=ZS-95SMJjH3n0u&fbclid=IwZXh0bgNhZW0CMTAAYnJpZBExNXdCa2xvMjZ0Q1pqelJlOHNydGMGYXBwX2lkEDIyMjAzOTE3ODgyMDA4OTIAAR4n-AQCEfFpBCColsDcODgP0PAdeyo7eMUQPHYm55-7bOlytkuvCJgerurR_w_aem_lhH_Gw92bKPzGSvpAys6uQ";

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.05], [1, 0.8]);

  const services = [
    {
      title: "Gestão Administrativa",
      description: "Organização de e-mails, agenda, documentos e suporte operacional completo para o seu dia a dia.",
      icon: <Calendar className="w-6 h-6" />,
    },
    {
      title: "Suporte ao Cliente",
      description: "Atendimento humanizado e eficiente via chat, e-mail ou WhatsApp, garantindo a satisfação dos seus clientes.",
      icon: <MessageSquare className="w-6 h-6" />,
    },
    {
      title: "Gestão Financeira",
      description: "Controle de contas a pagar/receber, emissão de notas fiscais e organização de fluxo de caixa.",
      icon: <BarChart3 className="w-6 h-6" />,
    },
    {
      title: "Redes Sociais",
      description: "Agendamento de posts, interação com seguidores e suporte na gestão básica de perfis profissionais.",
      icon: <Users className="w-6 h-6" />,
    },
  ];

  const benefits = [
    "Redução de custos operacionais",
    "Mais tempo para focar no seu core business",
    "Flexibilidade e escalabilidade",
    "Profissionalismo e organização",
    "Suporte sob demanda",
  ];

  return (
    <div className="min-h-screen selection:bg-brand-gold selection:text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 glass py-4 px-6 md:px-12 flex justify-between items-center">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex flex-col"
        >
          <span className="text-lg md:text-2xl font-serif font-bold text-brand-brown leading-tight">
            Jessica Kleinowski
          </span>
          <span className="text-[10px] md:text-xs text-brand-gold font-bold uppercase tracking-widest">
            Consultoria e Gestão
          </span>
        </motion.div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex gap-8 items-center font-medium">
          <a href="#servicos" className="hover:text-brand-gold transition-colors">Serviços</a>
          <a href="#beneficios" className="hover:text-brand-gold transition-colors">Benefícios</a>
          <a href="#sobre" className="hover:text-brand-gold transition-colors">Sobre</a>
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn-primary py-2 text-sm">
            Contato
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="lg:hidden text-brand-brown p-2 hover:bg-brand-beige/50 rounded-lg transition-colors" 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle Menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu Overlay (Side Drawer) */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMenuOpen(false)}
              className="fixed inset-0 z-40 bg-brand-brown/20 backdrop-blur-sm"
            />
            
            {/* Drawer */}
            <motion.div 
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed inset-y-0 right-0 z-50 w-[280px] md:w-[350px] bg-brand-offwhite shadow-2xl flex flex-col p-8 pt-24"
            >
              <button 
                onClick={() => setIsMenuOpen(false)}
                className="absolute top-8 right-8 text-brand-brown hover:text-brand-gold transition-colors"
              >
                <X size={32} />
              </button>

              <div className="flex flex-col gap-8 text-2xl font-serif text-brand-brown mt-8">
                <a 
                  href="#servicos" 
                  onClick={() => setIsMenuOpen(false)}
                  className="hover:text-brand-gold transition-colors border-b border-brand-brown/5 pb-4 flex items-center justify-between group"
                >
                  Serviços
                  <ArrowRight className="w-5 h-5 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                </a>
                <a 
                  href="#beneficios" 
                  onClick={() => setIsMenuOpen(false)}
                  className="hover:text-brand-gold transition-colors border-b border-brand-brown/5 pb-4 flex items-center justify-between group"
                >
                  Benefícios
                  <ArrowRight className="w-5 h-5 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                </a>
                <a 
                  href="#sobre" 
                  onClick={() => setIsMenuOpen(false)}
                  className="hover:text-brand-gold transition-colors border-b border-brand-brown/5 pb-4 flex items-center justify-between group"
                >
                  Sobre
                  <ArrowRight className="w-5 h-5 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                </a>
              </div>
              
              <div className="mt-auto space-y-4">
                <p className="text-xs uppercase tracking-widest text-brand-gold font-semibold mb-4">Vamos conversar?</p>
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn-primary w-full block text-center">
                  WhatsApp
                </a>
                <a href={FORM_URL} target="_blank" rel="noopener noreferrer" className="btn-outline w-full block text-center bg-white">
                  Formulário
                </a>
                
                <div className="flex justify-center gap-8 pt-8 border-t border-brand-brown/5 mt-8">
                  <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="text-brand-brown hover:text-brand-gold transition-colors">
                    <Instagram size={24} />
                  </a>
                  <a href={TIKTOK_URL} target="_blank" rel="noopener noreferrer" className="text-brand-brown hover:text-brand-gold transition-colors">
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      viewBox="0 0 24 24" 
                      fill="currentColor" 
                      className="w-6 h-6"
                    >
                      <path d="M12.75 2h2.25a4.5 4.5 0 0 0 4.5 4.5v2.25a6.75 6.75 0 0 1-4.5-1.7v6.7a5.25 5.25 0 1 1-5.25-5.25c.3 0 .6.03.88.08v2.28a3 3 0 1 0 2.12 2.87V2z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 md:px-12 overflow-hidden">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-20 items-center min-h-[60vh]">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-left"
          >
            <span className="inline-block py-1 px-4 rounded-full bg-brand-beige text-brand-gold text-sm font-semibold mb-6 tracking-wider uppercase">
              Sua parceira estratégica
            </span>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif leading-tight mb-6 md:mb-8">
              Estruture seu negócio e <br className="hidden lg:block" />
              <span className="italic text-brand-gold">volte a crescer com clareza.</span>
            </h1>
            <p className="text-base md:text-xl text-brand-brown/80 mb-8 md:mb-10 leading-relaxed max-w-lg">
              Consultoria e gestão administrativa para pequenas empresas que querem sair do caos e crescer com estrutura.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href={FORM_URL} target="_blank" rel="noopener noreferrer" className="btn-outline flex items-center justify-center gap-2">
                Preencher Formulário <ArrowRight className="w-4 h-4" />
              </a>
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn-outline flex items-center justify-center gap-2">
                Falar no WhatsApp <Phone className="w-4 h-4" />
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.2 }}
            className="relative w-full max-w-[320px] md:max-w-[400px] lg:max-w-[480px] mx-auto"
          >
            <div className="aspect-[3/4] rounded-2xl bg-brand-beige overflow-hidden relative z-10 shadow-2xl border-8 border-white">
              <img 
                src="/images/img-intro.jpg" 
                alt="Jéssica Kleinowski" 
                className="w-full h-full object-cover object-center"
                referrerPolicy="no-referrer"
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-12 -right-12 w-48 h-48 bg-brand-gold/20 rounded-full blur-3xl -z-0" />
            <div className="absolute -bottom-12 -left-12 w-72 h-72 bg-brand-brown/10 rounded-full blur-3xl -z-0" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] border border-brand-gold/10 rounded-3xl -z-0" />
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section id="servicos" className="py-24 bg-brand-beige/30 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl mb-6">Como posso te ajudar?</h2>
            <p className="text-brand-brown/70 max-w-2xl mx-auto text-lg">
              Soluções personalizadas para otimizar sua rotina e potencializar seus resultados.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -10 }}
                className="bg-white p-8 rounded-2xl shadow-sm border border-brand-beige hover:border-brand-gold/30 transition-all"
              >
                <div className="w-12 h-12 bg-brand-beige rounded-xl flex items-center justify-center text-brand-gold mb-6">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold mb-4">{service.title}</h3>
                <p className="text-brand-brown/70 leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="beneficios" className="py-24 px-6 md:px-12">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="relative w-full max-w-[320px] md:max-w-[450px] lg:max-w-none mx-auto">
            <div className="grid grid-cols-2 gap-4">
              <div className="aspect-[3/4] rounded-full bg-brand-gold/20 overflow-hidden">
                <img src="/images/img1.png" alt="Productivity" className="w-full h-full object-cover grayscale" referrerPolicy="no-referrer" />
              </div>
              <div className="aspect-[3/4] rounded-full bg-brand-brown/20 overflow-hidden mt-8 lg:mt-12">
                <img src="/images/img2.png" alt="Focus" className="w-full h-full object-cover grayscale" referrerPolicy="no-referrer" />
              </div>
            </div>
          </div>
          
          <div className="order-1 lg:order-2 text-left">
            <h2 className="text-4xl md:text-5xl mb-8">Por que estruturar o seu negócio?</h2>
            <div className="space-y-6">
              {benefits.map((benefit, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-4"
                >
                  <div className="flex-shrink-0 w-6 h-6 text-brand-gold">
                    <CheckCircle2 className="w-full h-full" />
                  </div>
                  <p className="text-lg font-medium">{benefit}</p>
                </motion.div>
              ))}
            </div>
            <div className="mt-12">
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn-outline inline-flex items-center gap-2">
                Quero saber mais <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="sobre" className="py-16 bg-brand-brown text-brand-offwhite px-6 md:px-12 relative overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-brand-gold/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-brand-gold/5 rounded-full blur-3xl translate-x-1/3 translate-y-1/3" />
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-brand-gold font-bold uppercase tracking-[0.3em] text-xs mb-4 block">Especialista em Estruturação</span>
            <h2 className="text-4xl md:text-5xl mb-8 text-brand-gold">Sobre a Jessica Kleinowski</h2>
            
            <div className="text-xl leading-relaxed opacity-90 mb-8 space-y-4 max-w-3xl mx-auto font-light">
              <p>
                Sou Gestora Administrativa especializada em estruturação de negócios para pequenas empresas. Acredito que toda pequena empresa merece operar com processos bem definidos, atendimento de qualidade e uma rotina que não dependa exclusivamente do dono para funcionar.
              </p>
              <p>
                Por isso ofereço uma parceria completa: diagnóstico, plano de crescimento e execução, tudo junto, do começo ao fim.
              </p>
            </div>

            <div className="relative py-8 px-8">
              <div className="absolute inset-0 flex items-center justify-center opacity-10">
                <div className="w-full h-px bg-brand-gold" />
              </div>
              <p className="text-2xl md:text-3xl font-serif italic text-brand-gold relative z-10 bg-brand-brown px-6 inline-block">
                “Organização não é luxo — é o que separa empresas que sobrevivem das que crescem.”
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-24 px-6 md:px-12 text-center">
        <div className="max-w-3xl mx-auto bg-brand-beige p-12 md:p-20 rounded-[3rem] shadow-xl border border-brand-gold/20">
          <h2 className="text-4xl md:text-5xl mb-8">Pronto para estruturar seu negócio?</h2>
          <p className="text-xl text-brand-brown/80 mb-12">
            Escolha a melhor forma de darmos o primeiro passo juntos.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center">
            <a href={FORM_URL} target="_blank" rel="noopener noreferrer" className="btn-outline px-10">
              Preencher Formulário
            </a>
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn-outline px-10 bg-white">
              Chamar no WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-brand-beige/20 pt-20 pb-10 px-6 md:px-12 border-t border-brand-gold/10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
            {/* Brand Column */}
            <div className="md:col-span-2">
              <div className="text-2xl font-serif font-bold text-brand-brown mb-4">
                Jessica Kleinowski
              </div>
              <p className="text-brand-brown/70 max-w-sm leading-relaxed mb-6">
                Especialista em Consultoria e Gestão Administrativa, ajudando empreendedores a recuperarem seu tempo e foco estratégico.
              </p>
              <div className="flex gap-4">
                <a 
                  href={INSTAGRAM_URL} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="w-10 h-10 rounded-full bg-brand-brown text-brand-offwhite flex items-center justify-center hover:bg-brand-gold transition-all duration-300"
                >
                  <Instagram size={20} />
                </a>
                <a 
                  href={TIKTOK_URL} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="w-10 h-10 rounded-full bg-brand-brown text-brand-offwhite flex items-center justify-center hover:bg-brand-gold transition-all duration-300"
                >
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    viewBox="0 0 24 24" 
                    fill="currentColor" 
                    className="w-5 h-5"
                  >
                    <path d="M12.75 2h2.25a4.5 4.5 0 0 0 4.5 4.5v2.25a6.75 6.75 0 0 1-4.5-1.7v6.7a5.25 5.25 0 1 1-5.25-5.25c.3 0 .6.03.88.08v2.28a3 3 0 1 0 2.12 2.87V2z"/>
                  </svg>
                </a>
              </div>
            </div>

            {/* Links Column */}
            <div>
              <h4 className="text-brand-brown font-bold uppercase tracking-widest text-sm mb-6">Navegação</h4>
              <ul className="space-y-4">
                <li><a href="#servicos" className="text-brand-brown/70 hover:text-brand-gold transition-colors">Serviços</a></li>
                <li><a href="#beneficios" className="text-brand-brown/70 hover:text-brand-gold transition-colors">Benefícios</a></li>
                <li><a href="#sobre" className="text-brand-brown/70 hover:text-brand-gold transition-colors">Sobre</a></li>
              </ul>
            </div>

            {/* Contact Column */}
            <div>
              <h4 className="text-brand-brown font-bold uppercase tracking-widest text-sm mb-6">Contato</h4>
              <ul className="space-y-4">
                <li>
                  <a 
                    href={WHATSAPP_URL} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="flex items-center gap-3 text-brand-brown/70 hover:text-brand-gold transition-colors"
                  >
                    <Phone size={18} />
                    <span>WhatsApp</span>
                  </a>
                </li>
                <li>
                  <a 
                    href={FORM_URL} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="flex items-center gap-3 text-brand-brown/70 hover:text-brand-gold transition-colors"
                  >
                    <Mail size={18} />
                    <span>Formulário</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="pt-8 border-t border-brand-gold/10 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-brand-brown/50 text-sm">
              © 2026 Jessica Kleinowski. Todos os direitos reservados.
            </p>
            <div className="flex gap-6 text-xs font-medium uppercase tracking-widest text-brand-brown/40">
              <span>Consultoria</span>
              <span>Gestão</span>
              <span>Excelência</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
