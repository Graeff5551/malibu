/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { 
  Instagram, 
  MessageCircle, 
  MapPin, 
  Phone, 
  Clock, 
  Eye, 
  Glasses, 
  ShieldCheck, 
  Sparkles, 
  ChevronRight, 
  Menu, 
  X, 
  Star,
  ArrowRight,
  CheckCircle2
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

// Using the direct link format for Google Drive
const LOGO_URL = 'https://lh3.googleusercontent.com/d/1vIxCSupeH-0WLewTa_Pds0cmnKXNR_hE';
const WHATSAPP_LINK = 'https://api.whatsapp.com/send?phone=5551992879595';
const PHONE_DISPLAY = '51 9287-9595';

// --- Components ---

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Início', href: '#home' },
    { name: 'Sobre', href: '#about' },
    { name: 'Serviços', href: '#services' },
    { name: 'Contato', href: '#contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-primary py-3 shadow-lg' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-2" translate="no">
          <img src={LOGO_URL} alt="Óticas Malibu" className="h-10 w-10 rounded-full object-cover border-2 border-white/20 shadow-sm" referrerPolicy="no-referrer" />
          <span className="text-xl font-bold serif tracking-wide text-white">Óticas Malibu</span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              translate="no"
              className="text-white/90 hover:text-accent transition-colors font-medium text-sm uppercase tracking-widest"
            >
              {link.name}
            </a>
          ))}
          <a 
            href={WHATSAPP_LINK} 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-accent hover:bg-accent-hover text-primary px-6 py-2 rounded-full font-bold transition-all transform hover:scale-105 flex items-center gap-2 shadow-md"
          >
            <MessageCircle size={18} />
            Agendar
          </a>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-white" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden bg-primary border-t border-white/10 absolute w-full left-0 py-6 px-4 flex flex-col gap-4 shadow-xl"
          >
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                translate="no"
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-white text-lg font-medium py-2 border-b border-white/5"
              >
                {link.name}
              </a>
            ))}
            <a 
              href={WHATSAPP_LINK} 
              className="bg-accent text-primary text-center py-3 rounded-xl font-bold mt-4 flex items-center justify-center gap-2"
            >
              <MessageCircle size={20} />
              Agendar via WhatsApp
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background with beach vibe */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1511497584788-8767fe7d9d5d?q=80&w=2000&auto=format&fit=crop" 
          alt="Beach Background" 
          className="w-full h-full object-cover scale-105"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-primary/60 backdrop-blur-[2px]"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 text-center text-white">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block bg-accent/20 text-accent px-4 py-1 rounded-full text-sm font-bold uppercase tracking-widest mb-6 border border-accent/30">
            A Tua Ótica da Praia
          </span>
          <h1 className="text-5xl md:text-8xl font-bold serif mb-6 leading-tight">
            Estilo e Visão <br /> 
            <span className="italic text-accent">em Harmonia</span>
          </h1>
          <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto mb-10 leading-relaxed">
            Descubra a sofisticação de Malibu com o frescor de Tramandaí. Qualidade visual e design exclusivo para o seu bem-estar.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a 
              href={WHATSAPP_LINK} 
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto bg-white text-primary px-10 py-4 rounded-full font-bold text-lg hover:bg-accent hover:text-primary transition-all flex items-center justify-center gap-2 shadow-xl"
            >
              Falar no WhatsApp <MessageCircle size={20} />
            </a>
            <a 
              href="#contact" 
              className="w-full sm:w-auto border-2 border-white/30 text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-white/10 transition-all flex items-center justify-center gap-2"
            >
              Nossa Loja <MapPin size={20} />
            </a>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/50"
      >
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2">
          <div className="w-1 h-2 bg-white/50 rounded-full"></div>
        </div>
      </motion.div>
    </section>
  );
};

const About = () => {
  return (
    <section id="about" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1574258495973-f010dfbb5371?q=80&w=1000&auto=format&fit=crop" 
                alt="Sobre Óticas Malibu" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-10 -right-10 bg-primary p-8 rounded-3xl text-white shadow-xl hidden lg:block max-w-[280px]">
              <h3 className="text-4xl font-bold serif mb-2">10+ Anos</h3>
              <p className="text-white/70 text-sm leading-relaxed">
                De experiência cuidando da saúde visual e do estilo da nossa comunidade em Tramandaí.
              </p>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-primary font-bold uppercase tracking-widest text-sm mb-4 block">Nossa História</span>
            <h2 className="text-4xl md:text-5xl font-bold serif text-primary mb-8 leading-tight">
              Compromisso com a sua <br /> <span className="italic">Saúde e Estilo</span>
            </h2>
            <div className="space-y-6 text-gray-600 leading-relaxed">
              <p>
                A Óticas Malibu nasceu da paixão por unir o cuidado técnico da saúde ocular com as tendências mundiais de moda. Com mais de uma década de atuação, nos tornamos referência em Tramandaí por oferecer um atendimento humanizado e especializado.
              </p>
              <p>
                Nossa missão é proporcionar não apenas óculos, mas uma nova forma de enxergar o mundo: com clareza, conforto e confiança. Valorizamos a transparência, a inovação em lentes e a curadoria rigorosa de armações que expressam a personalidade de cada cliente.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-8 mt-12">
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-xl text-primary">
                  <ShieldCheck size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-primary mb-1">Qualidade</h4>
                  <p className="text-sm text-gray-500">Lentes de alta tecnologia.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-xl text-primary">
                  <Sparkles size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-primary mb-1">Curadoria</h4>
                  <p className="text-sm text-gray-500">Modelos exclusivos.</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Services = () => {
  const services = [
    {
      title: "Exames de Vista",
      desc: "Parcerias com os melhores especialistas para garantir uma prescrição precisa e atualizada.",
      icon: <Eye className="w-8 h-8" />,
    },
    {
      title: "Consultoria de Estilo",
      desc: "Nossos especialistas ajudam você a encontrar a armação perfeita para o seu formato de rosto e estilo.",
      icon: <Glasses className="w-8 h-8" />,
    },
    {
      title: "Lentes de Contato",
      desc: "Adaptação e venda de lentes de contato das principais marcas, com foco no seu conforto.",
      icon: <CheckCircle2 className="w-8 h-8" />,
    },
    {
      title: "Manutenção",
      desc: "Ajustes, limpeza e pequenos reparos para que seus óculos estejam sempre como novos.",
      icon: <ShieldCheck className="w-8 h-8" />,
    },
  ];

  return (
    <section id="services" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-primary font-bold uppercase tracking-widest text-sm mb-4 block">O que fazemos</span>
          <h2 className="text-4xl md:text-5xl font-bold serif text-primary mb-6">Serviços Especializados</h2>
          <p className="text-gray-600">Oferecemos uma experiência completa para cuidar da sua visão, desde a consulta até a escolha do acessório perfeito.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-xl transition-all group border border-gray-100"
            >
              <div className="bg-primary/5 w-16 h-16 rounded-2xl flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-primary mb-4">{service.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Testimonials = () => {
  const testimonials = [
    { name: "Mariana Silva", role: "Cliente há 3 anos", text: "Atendimento impecável! Encontrei o óculos perfeito que combina com meu rosto e ainda tive todo o suporte técnico para minhas lentes multifocais.", rating: 5 },
    { name: "Ricardo Santos", role: "Cliente de Verão", text: "Sempre que venho para Tramandaí passo na Malibu. A curadoria de óculos de sol é a melhor da região, modelos que não vejo em lugar nenhum.", rating: 5 },
    { name: "Ana Paula", role: "Mãe do Pedro", text: "Levei meu filho para fazer o primeiro óculos e a paciência e carinho da equipe foram fundamentais. Ele amou a armação nova!", rating: 5 },
  ];

  return (
    <section className="py-24 bg-primary text-white overflow-hidden relative">
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl -mr-48 -mt-48"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl -ml-48 -mb-48"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold serif mb-6">O que dizem nossos clientes</h2>
          <div className="flex justify-center gap-1">
            {[1, 2, 3, 4, 5].map(i => <Star key={i} className="fill-accent text-accent" size={20} />)}
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white/5 backdrop-blur-sm p-10 rounded-3xl border border-white/10"
            >
              <p className="text-white/80 italic mb-8 leading-relaxed">"{t.text}"</p>
              <div>
                <h4 className="font-bold text-accent">{t.name}</h4>
                <p className="text-white/40 text-sm">{t.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-primary font-bold uppercase tracking-widest text-sm mb-4 block">Contato</span>
          <h2 className="text-4xl md:text-5xl font-bold serif text-primary mb-8">Visite nossa loja</h2>
          <p className="text-gray-600 mb-16 leading-relaxed text-lg">
            Estamos localizados no coração de Tramandaí, prontos para oferecer o melhor atendimento e as melhores soluções para sua visão.
          </p>

          <div className="grid md:grid-cols-3 gap-12 text-left">
            <div className="flex flex-col items-center text-center gap-6 p-8 bg-gray-50 rounded-3xl border border-gray-100">
              <div className="bg-primary/10 p-4 rounded-2xl text-primary">
                <MapPin size={32} />
              </div>
              <div>
                <h4 className="font-bold text-primary mb-2 text-xl">Endereço</h4>
                <p className="text-gray-500">R. 24 de Setembro, 241 - loja 06<br />Centro, Tramandaí - RS</p>
              </div>
            </div>
            
            <div className="flex flex-col items-center text-center gap-6 p-8 bg-gray-50 rounded-3xl border border-gray-100">
              <div className="bg-primary/10 p-4 rounded-2xl text-primary">
                <Phone size={32} />
              </div>
              <div>
                <h4 className="font-bold text-primary mb-2 text-xl">Contato</h4>
                <p className="text-gray-500 font-bold text-lg mb-1">{PHONE_DISPLAY}</p>
                <a 
                  href={WHATSAPP_LINK} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-accent hover:text-accent-hover font-bold flex items-center justify-center gap-2"
                >
                  <MessageCircle size={18} /> Chamar no Whats
                </a>
              </div>
            </div>

            <div className="flex flex-col items-center text-center gap-6 p-8 bg-gray-50 rounded-3xl border border-gray-100">
              <div className="bg-primary/10 p-4 rounded-2xl text-primary">
                <Clock size={32} />
              </div>
              <div>
                <h4 className="font-bold text-primary mb-2 text-xl">Horário</h4>
                <p className="text-gray-500">Segunda a Sexta: 09:00 - 18:30<br />Sábado: 09:00 - 13:00</p>
              </div>
            </div>
          </div>

          <div className="mt-16 flex justify-center gap-6">
            <a href="https://www.instagram.com/oticas.malibu" target="_blank" rel="noopener noreferrer" className="bg-primary text-white p-5 rounded-2xl hover:bg-primary/90 transition-all shadow-lg hover:-translate-y-1">
              <Instagram size={28} />
            </a>
            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="bg-primary text-white p-5 rounded-2xl hover:bg-primary/90 transition-all shadow-lg hover:-translate-y-1">
              <MessageCircle size={28} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-primary text-white pt-24 pb-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-16 mb-20">
          <div className="space-y-8">
            <a href="#home" className="flex items-center gap-3" translate="no">
              <img src={LOGO_URL} alt="Óticas Malibu" className="h-12 w-12 rounded-full object-cover" referrerPolicy="no-referrer" />
              <span className="text-2xl font-bold serif tracking-wide">Óticas Malibu</span>
            </a>
            <p className="text-white/60 leading-relaxed">
              Cuidando da sua visão com estilo e profissionalismo há mais de 10 anos. A sua ótica de confiança no litoral gaúcho.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-8 border-b border-white/10 pb-4">Navegação</h4>
            <ul className="space-y-4">
              {['Início', 'Sobre Nós', 'Serviços', 'Contato'].map(item => (
                <li key={item}>
                  <a href={`#${item.toLowerCase().replace(' ', '-')}`} translate="no" className="text-white/60 hover:text-accent transition-colors">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-8 border-b border-white/10 pb-4">Contato Direto</h4>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 text-white/60">
                <Phone size={18} className="text-accent" />
                {PHONE_DISPLAY}
              </li>
              <li className="flex items-center gap-3 text-white/60">
                <MessageCircle size={18} className="text-accent" />
                WhatsApp: {PHONE_DISPLAY}
              </li>
              <li className="flex items-center gap-3 text-white/60">
                <MapPin size={18} className="text-accent" />
                Tramandaí - RS
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-white/30 text-sm">
            © 2026 Óticas Malibu. Todos os direitos reservados.
          </p>
          <div className="flex gap-8 text-white/30 text-sm">
            <a href="#" className="hover:text-white transition-colors">Privacidade</a>
            <a href="#" className="hover:text-white transition-colors">Termos de Uso</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

// --- Main App ---

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Testimonials />
        <Contact />
      </main>
      <Footer />

      {/* Floating WhatsApp Button */}
      <a 
        href={WHATSAPP_LINK} 
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform flex items-center justify-center"
      >
        <MessageCircle size={32} />
      </a>
    </div>
  );
}
