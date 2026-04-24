import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, ChevronLeft, ChevronRight } from 'lucide-react';
import { PRODUCTS } from '../constants';
import ProductCard from '../components/ProductCard';

const FILTERS = {
  Concern: [
    'Blemishes',
    'Hydration',
    'Signs of Aging',
    'Textural Irregularities',
  ],
  Ingredient: ['Vitamin C', 'Retinoids', 'Acids', 'Peptides'],
  Type: ['Serums', 'Cleansers', 'Moisturizers'],
};

export default function Catalog() {
  const [selectedConcerns, setSelectedConcerns] = useState<string[]>(['Textural Irregularities']);
  const [selectedType, setSelectedType] = useState<string>('Serums');

  const filteredProducts = PRODUCTS.filter(p => {
    const matchesConcern = selectedConcerns.length === 0 || p.concern.some(c => selectedConcerns.includes(c));
    const matchesType = !selectedType || p.category === selectedType;
    return matchesConcern && matchesType;
  });

  const toggleConcern = (concern: string) => {
    setSelectedConcerns(prev => 
      prev.includes(concern) ? prev.filter(c => c !== concern) : [...prev, concern]
    );
  };

  return (
    <div className="max-w-[1440px] mx-auto px-margin-edge py-stack-md">
      {/* Page Header */}
      <section className="mb-stack-lg border-b border-surface-container pb-12">
        <motion.h1 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-5xl font-headline tracking-tighter uppercase mb-6"
        >
          The Clinical Formulation Catalog
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.1 }}
          className="text-lg text-on-surface-variant max-w-2xl leading-relaxed font-medium"
        >
          High-integrity formulations focused on single-ingredient efficacy and clinical transparency.
        </motion.p>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
        {/* Sidebar */}
        <aside className="md:col-span-3 space-y-12">
          {Object.entries(FILTERS).map(([category, options]) => (
            <div key={category} className="space-y-6">
              <h3 className="label-caps border-b border-surface-container pb-2">{category}</h3>
              <div className="flex flex-col gap-3">
                {options.map((option) => {
                  const isChecked = category === 'Concern' 
                    ? selectedConcerns.includes(option)
                    : category === 'Type' ? selectedType === option : false;

                  return (
                    <label 
                      key={option} 
                      className="flex items-center gap-3 cursor-pointer group"
                      onClick={() => category === 'Concern' ? toggleConcern(option) : category === 'Type' ? setSelectedType(option) : null}
                    >
                      <div className={`w-4 h-4 border transition-colors flex items-center justify-center ${
                        isChecked ? 'bg-primary border-primary' : 'border-surface-dim group-hover:border-primary'
                      }`}>
                        {isChecked && <div className="w-1.5 h-1.5 bg-white" />}
                      </div>
                      <span className={`text-sm transition-all ${isChecked ? 'text-primary font-bold' : 'text-on-surface-variant group-hover:text-primary'}`}>
                        {option}
                      </span>
                    </label>
                  );
                })}
              </div>
            </div>
          ))}
        </aside>

        {/* Content */}
        <div className="md:col-span-9">
          <div className="flex justify-between items-center mb-10">
            <span className="label-caps text-on-surface-variant">SHOWING {filteredProducts.length} FORMULATIONS</span>
            <div className="flex items-center gap-2 cursor-pointer text-on-surface-variant hover:text-on-surface transition-colors">
              <span className="label-caps">SORT BY: RELEVANCE</span>
              <ChevronDown size={14} />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence mode="popLayout">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </AnimatePresence>
          </div>

          {/* Pagination */}
          <div className="mt-20 flex justify-center items-center gap-6">
            <button className="p-3 border border-surface-container hover:bg-surface-container transition-colors">
              <ChevronLeft size={20} strokeWidth={1.5} />
            </button>
            <span className="label-caps text-xs">PAGE 01 / 04</span>
            <button className="p-3 border border-surface-container hover:bg-surface-container transition-colors">
              <ChevronRight size={20} strokeWidth={1.5} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
