import React from 'react';
import { ExternalLink, Tag } from 'lucide-react';
import { ProductItem } from '../types';

interface ProductCardProps {
  product: ProductItem;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="bg-brand-surface rounded-xl overflow-hidden border border-white/5 hover:border-brand-green/30 transition-all duration-300 group flex flex-col h-full">
      <div className="relative aspect-square overflow-hidden bg-neutral-800">
        <img 
          src={product.imageUrl} 
          alt={product.name} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 opacity-90 group-hover:opacity-100"
        />
        <div className="absolute top-3 left-3 bg-black/60 backdrop-blur-sm px-2 py-1 rounded text-xs text-white uppercase tracking-wider flex items-center gap-1">
            <Tag size={10} className="text-brand-green"/>
            {product.category}
        </div>
      </div>
      
      <div className="p-5 flex flex-col flex-grow">
        <h3 className="text-lg font-medium text-white leading-tight mb-2 group-hover:text-brand-green transition-colors">
          {product.name}
        </h3>
        
        {product.description && (
          <p className="text-neutral-400 text-xs mb-4 line-clamp-2">
            {product.description}
          </p>
        )}
        
        <div className="mt-auto pt-4 border-t border-white/5 flex items-center justify-between">
          <div>
            <span className="text-xs text-neutral-500 block">Estimativa</span>
            <span className="text-white font-semibold">{product.priceEstimate || "Sob consulta"}</span>
          </div>
          
          <a 
            href={product.purchaseUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-brand-green hover:bg-emerald-400 text-black px-4 py-2 rounded-lg text-sm font-bold transition-colors shadow-[0_0_15px_rgba(16,185,129,0.2)] hover:shadow-[0_0_20px_rgba(16,185,129,0.4)]"
          >
            Comprar
            <ExternalLink size={14} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;