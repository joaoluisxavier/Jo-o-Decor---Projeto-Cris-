import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="w-full py-8 text-center border-t border-white/5 mt-12 bg-black">
      <p className="text-neutral-500 text-xs">
        Desenvolvido exclusivamente para Cris.
      </p>
      <p className="text-neutral-600 text-[10px] mt-2 uppercase tracking-widest">
        Design de Interiores &copy; {new Date().getFullYear()}
      </p>
    </footer>
  );
};

export default Footer;