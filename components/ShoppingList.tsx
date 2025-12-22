import React from 'react';
import { ShoppingBag } from 'lucide-react';
import { SHOPPING_LIST } from '../constants';
import ProductCard from './ProductCard';

const ShoppingList: React.FC = () => {
  return (
    <section className="px-6 md:px-12 py-12 max-w-7xl mx-auto">
      <div className="flex items-center gap-3 mb-8">
        <div className="p-2 bg-brand-green/10 rounded-full">
            <ShoppingBag className="text-brand-green" size={24} />
        </div>
        <div>
            <h2 className="text-2xl font-serif text-white">Lista de Compras</h2>
            <p className="text-neutral-400 text-sm">Itens selecionados para o seu projeto</p>
        </div>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {SHOPPING_LIST.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
};

export default ShoppingList;