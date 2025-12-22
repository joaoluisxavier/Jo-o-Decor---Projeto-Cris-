import React from 'react';
import { MapPin } from 'lucide-react';
import { CLIENT_DATA } from '../constants';

const Header: React.FC = () => {
  return (
    <header className="w-full pt-16 pb-6 px-6 md:px-12 flex flex-col items-center justify-center text-center bg-transparent relative">
      
      <div className="flex flex-col items-center gap-3 mb-4">
        <h2 className="text-3xl font-serif text-white font-bold tracking-widest uppercase drop-shadow-md">
            João Decor
        </h2>
        
        <span className="inline-block bg-white/5 border border-white/10 rounded-full px-4 py-1 text-brand-green text-[10px] font-bold tracking-[0.2em] uppercase backdrop-blur-sm">
          Projeto Exclusivo
        </span>
      </div>
      
      <h1 className="font-serif text-5xl md:text-7xl text-white mb-4 tracking-tight leading-none">
        {CLIENT_DATA.name}
      </h1>
      
      <div className="flex items-center gap-2 text-neutral-400 text-sm font-light">
        <MapPin size={14} className="text-brand-green" />
        <span>{CLIENT_DATA.city}, {CLIENT_DATA.state}</span>
      </div>
    </header>
  );
};

export default Header;