import React from 'react';

const ProjectRenders: React.FC = () => {
  // Using the embed version of the provided Kuula link for a cleaner integration
  const KUULA_EMBED_URL = "https://kuula.co/share/collection/7HDgV?logo=1&info=1&fs=1&vr=0&sd=1&thumbs=1";

  return (
    <section className="w-full pb-8">
      <div className="px-6 md:px-12 mb-4 text-center md:text-left pt-6">
        <h2 className="text-2xl font-serif text-white">Tour Virtual 360º</h2>
        <p className="text-neutral-400 text-sm mt-1">
          Navegue pelo ambiente interativo abaixo.
        </p>
      </div>

      {/* 
        Updated dimensions to match Instagram Stories/Reels format (9:16 aspect ratio).
        On mobile: It takes full width and maintains 9:16 vertical ratio.
        On desktop: It is constrained by height to fit the screen, maintaining the vertical phone-like aspect ratio.
      */}
      <div 
        className="w-full md:w-auto md:h-[85vh] mx-auto bg-neutral-900 border-y border-white/10 relative overflow-hidden shadow-2xl"
        style={{ aspectRatio: '9/16' }}
      >
         <iframe 
            width="100%" 
            height="100%" 
            style={{ border: 'none' }} 
            allow="xr-spatial-tracking; gyroscope; accelerometer" 
            allowFullScreen 
            scrolling="no" 
            src={KUULA_EMBED_URL}
            className="w-full h-full"
            title="Tour Virtual 360"
         ></iframe>
      </div>
    </section>
  );
};

export default ProjectRenders;