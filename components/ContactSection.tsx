import React from 'react';
import { MessageCircle, Instagram, Mail, ArrowRight } from 'lucide-react';

const ContactSection: React.FC = () => {
  return (
    <section className="w-full px-6 md:px-12 py-12 max-w-5xl mx-auto mb-8">
      
      <div className="relative rounded-3xl overflow-hidden bg-neutral-900/50 border border-white/10 p-8 md:p-12 text-center">
        {/* Decorative background glow */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-brand-green/10 blur-[80px] rounded-full pointer-events-none -translate-y-1/2 translate-x-1/2"></div>
        
        <div className="relative z-10 flex flex-col items-center">
          <h2 className="text-3xl md:text-4xl font-serif text-white mb-4">
            Fale com João Decor
          </h2>
          <p className="text-neutral-400 max-w-lg mx-auto mb-10 text-sm md:text-base">
            Gostou da seleção? Se tiver dúvidas sobre os itens, medidas ou acabamentos, 
            estou disponível diretamente no WhatsApp.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-2xl">
            {/* WhatsApp Button - Primary */}
            <a 
              href="http://wa.me/555192427079" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group flex items-center justify-between bg-brand-green hover:bg-emerald-400 text-black p-5 rounded-xl transition-all duration-300 shadow-[0_0_20px_rgba(16,185,129,0.1)] hover:shadow-[0_0_30px_rgba(16,185,129,0.3)] hover:-translate-y-1"
            >
              <div className="flex items-center gap-4">
                <div className="bg-black/10 p-2 rounded-lg">
                  <MessageCircle size={28} className="text-black" />
                </div>
                <div className="text-left">
                  <span className="block text-xs font-bold uppercase tracking-wider opacity-70">Atendimento</span>
                  <span className="text-lg font-bold">WhatsApp</span>
                </div>
              </div>
              <ArrowRight size={20} className="opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all" />
            </a>

            {/* Instagram Button - Secondary */}
            <a 
              href="https://www.instagram.com/joaoxavierdecor/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group flex items-center justify-between bg-white/5 hover:bg-white/10 border border-white/5 text-white p-5 rounded-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="flex items-center gap-4">
                <div className="bg-white/5 p-2 rounded-lg">
                  <Instagram size={28} className="text-white" />
                </div>
                <div className="text-left">
                  <span className="block text-xs font-bold uppercase tracking-wider text-brand-green">Portfolio</span>
                  <span className="text-lg font-bold">Instagram</span>
                </div>
              </div>
              <ArrowRight size={20} className="opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all text-neutral-400" />
            </a>
          </div>

          <div className="mt-8 pt-8 border-t border-white/5 w-full max-w-lg flex items-center justify-center gap-2 text-neutral-500 text-sm hover:text-white transition-colors cursor-pointer">
            <Mail size={16} />
            <span>contato@joaodecor.com.br</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;