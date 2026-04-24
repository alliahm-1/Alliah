import React from 'react';
import { motion } from 'motion/react';
import { Product } from '../types';

interface ProductCardProps {
  product: Product;
  key?: string | number;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="group bg-white p-6 border border-transparent hover:border-primary transition-all duration-300"
    >
      <div className="aspect-square bg-surface-container-low mb-6 flex items-center justify-center relative overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-contain mix-blend-multiply group-hover:scale-105 transition-transform duration-500 p-8"
          referrerPolicy="no-referrer"
        />
        <div className="absolute top-4 left-4 flex flex-col gap-2">
          {product.isBestseller && (
            <span className="bg-primary text-white px-2 py-1 label-caps text-[10px]">
              Bestseller
            </span>
          )}
          {product.isNew && (
            <span className="bg-secondary text-on-secondary px-2 py-1 label-caps text-[10px]">
              New Formula
            </span>
          )}
        </div>
      </div>

      <div className="space-y-2">
        <h3 className="font-headline text-lg font-bold tracking-tight uppercase leading-tight">
          {product.name}
        </h3>
        <p className="text-sm text-on-surface-variant line-clamp-2 min-h-[40px]">
          {product.description}
        </p>
        <div className="flex items-center gap-2 pt-2">
          <span className="text-primary font-label text-sm">${product.price.toFixed(2)} USD</span>
          <span className="text-[10px] text-on-surface-variant px-2 border border-surface-container">
            {product.volume}
          </span>
        </div>
      </div>

      <button className="w-full mt-6 py-4 bg-on-surface text-white label-caps text-[11px] hover:bg-primary transition-colors duration-300">
        Add to Bag
      </button>
    </motion.div>
  );
}
