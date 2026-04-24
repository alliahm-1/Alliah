import React from 'react';
import { motion } from 'motion/react';
import { ArrowLeft, ArrowRight, FlaskConical, Leaf, Transgender, Package } from 'lucide-react';
import { PRODUCTS } from '../constants';
import ProductCard from '../components/ProductCard';
import { Link } from 'react-router-dom';

const CONCERNS = [
  {
    id: '01',
    title: 'Hydration',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCA5w_jaumxK9786lOXQADhaS15bhpxR0JVNAlhrJSMvydOtU6Idyu_rZNGnbmzMNysMQ0y1GxU2MZRVt4OlyDO7aEXLNa6Z03CYKRkU5y9KfVIssrxyZySLUIjxlsfP81dCE1ytFyIN7pfZOBU_1Cab-sumai-JrZ8cOMctU7wDYt8dRPNyNVjJXb9veUgLuh9VurTGAcpKLwIgOMRUWt-eUScg6eSTTOFpm4e25F4YAkqOsqiCJcDp6jQQuHulxNorH9BxGd6FA',
    span: 'col-span-2 row-span-2'
  },
  {
    id: '02',
    title: 'Dullness',
    icon: 'Sun',
    span: 'col-span-1 row-span-1'
  },
  {
    id: '03',
    title: 'Signs of Aging',
    icon: 'History',
    span: 'col-span-1 row-span-1'
  },
  {
    id: '04',
    title: 'Congestion',
    description: 'Targeted treatments for blemish-prone skin and texture irregularities.',
    span: 'col-span-2 row-span-1',
    dark: true
  }
];

export default function Home() {
  const bestSellers = PRODUCTS.filter(p => p.isBestseller || p.id === '2' || p.id === '3' || p.id === '6');

  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="relative min-h-[85vh] flex items-center px-margin-edge overflow-hidden bg-white">
        <div className="absolute inset-0 lab-grid opacity-30"></div>
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 relative z-10 w-full max-w-[1440px]">
          <div className="md:col-span-6 flex flex-col justify-center gap-8">
            <motion.span 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="label-caps text-primary"
            >
              Clinical Formulations with Integrity.
            </motion.span>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-[clamp(40px,5vw,72px)] leading-[1.05] font-extrabold max-w-xl"
            >
              Scientific honesty. <br/>Visible results.
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg text-on-surface-variant max-w-lg leading-relaxed"
            >
              The Ordinary is an evolving collection of treatments offering familiar, effective clinical technologies positioned to raise pricing and communication integrity in skincare.
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="mt-4"
            >
              <Link to="/catalog" className="inline-block bg-on-surface text-white label-caps px-10 py-5 hover:opacity-90 transition-opacity">
                Shop The Collection
              </Link>
            </motion.div>
          </div>
          <div className="md:col-span-6 flex justify-end items-center">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="relative w-full aspect-square max-w-xl"
            >
              <img 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuB9dsZjrZWknHgn0tM5hvwQNw21aQlRCzPx1hb2m9Jnwiir2jhOUEmTILO9K8eutEJw4vRWxdRdr0wlAphZe1GMFwdM2pnA_Qho9kOLuwwFn4knVYpn2P8Wu12Dx70pKPkvIgyEqwhUMfx360S6oT-60rX18LC7-esSsLYlLNOYMj38S7PBUVFk742TuVlRRjWYsWBxZbF7--YUO7DmbMDAolrEVHj3YycLM_1XYNCUiHNng0p6wUR7MvpksjCGxMRH5fO7MaP-8g" 
                alt="Laboratory aesthetic"
                className="w-full h-full object-cover grayscale brightness-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute -bottom-8 -left-8 bg-secondary text-on-secondary px-6 py-4 label-caps">
                NEW: MULTI-PEPTIDE + HA SERUM
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Shop by Concern */}
      <section className="py-stack-lg px-margin-edge bg-surface">
        <div className="container mx-auto max-w-[1440px]">
          <div className="flex justify-between items-end mb-stack-md">
            <h2 className="text-3xl font-headline tracking-tighter uppercase">Shop by Concern</h2>
            <a href="#" className="label-caps text-on-surface-variant border-b border-surface-dim hover:text-on-surface transition-colors pb-1">
              VIEW ALL CONCERNS
            </a>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 h-auto md:h-[600px]">
            {CONCERNS.map((concern) => (
              <motion.div 
                key={concern.id}
                whileHover={{ y: -5 }}
                className={`${concern.span} relative group overflow-hidden ${concern.dark ? 'bg-on-surface text-white' : 'bg-white border border-surface-container'} p-8 flex flex-col justify-between`}
              >
                {concern.image && (
                  <img 
                    src={concern.image} 
                    className="absolute inset-0 w-full h-full object-cover opacity-20 grayscale group-hover:scale-105 transition-transform duration-700" 
                    alt={concern.title}
                    referrerPolicy="no-referrer"
                  />
                )}
                <div className="relative z-10">
                  <span className={`label-caps ${concern.dark ? 'text-secondary' : 'text-primary'}`}>{concern.id}</span>
                  <h3 className="text-2xl font-headline font-bold mt-4 tracking-tight">{concern.title}</h3>
                  {concern.description && <p className="mt-4 text-on-surface-variant max-w-xs">{concern.description}</p>}
                </div>
                {!concern.dark ? (
                  <button className="relative z-10 self-start label-caps border-b border-on-surface py-1">EXPLORE SOLUTIONS</button>
                ) : null}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Best Sellers */}
      <section className="py-stack-lg px-margin-edge">
        <div className="container mx-auto max-w-[1440px]">
          <div className="flex justify-between items-end mb-stack-md">
            <h2 className="text-3xl font-headline tracking-tighter uppercase">Best Sellers</h2>
            <div className="flex gap-4">
              <button className="w-12 h-12 flex items-center justify-center border border-surface-container hover:bg-surface-container transition-colors">
                <ArrowLeft size={20} strokeWidth={1} />
              </button>
              <button className="w-12 h-12 flex items-center justify-center border border-surface-container hover:bg-surface-container transition-colors">
                <ArrowRight size={20} strokeWidth={1} />
              </button>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-gutter">
            {bestSellers.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-stack-lg bg-white border-y border-surface-container px-margin-edge">
        <div className="container mx-auto max-w-[1440px] grid grid-cols-1 md:grid-cols-2 gap-stack-lg items-center">
          <div className="flex flex-col gap-stack-md">
            <h2 className="text-4xl font-headline tracking-tight uppercase">The Philosophy of Transparency</h2>
            <p className="text-lg text-on-surface-variant leading-relaxed">
              We believe that skincare should be focused on active ingredients and clinical evidence rather than marketing fluff. Our commitment to transparency means providing high-potency ingredients at fair prices.
            </p>
            <div className="flex flex-col gap-8 mt-4">
              {[
                { label: 'INGREDIENT PURITY', value: 99.8 },
                { label: 'EFFICACY RATING', value: 94.0 }
              ].map((stat) => (
                <div key={stat.label} className="flex flex-col gap-3">
                  <div className="flex justify-between items-end">
                    <span className="label-caps text-[10px]">{stat.label}</span>
                    <span className="label-caps text-[10px]">{stat.value}%</span>
                  </div>
                  <div className="h-px w-full bg-surface-container relative">
                    <motion.div 
                      initial={{ width: 0 }}
                      whileInView={{ width: `${stat.value}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, ease: "easeOut" }}
                      className="h-[2px] bg-primary absolute -top-[0.5px]"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[
              { icon: <FlaskConical size={24} />, label: 'CLINICALLY TESTED', color: 'bg-surface-container text-primary' },
              { icon: <Leaf size={24} />, label: 'CRUELTY FREE', color: 'bg-[#efe0d6] text-[#5d534c]' },
              { icon: <Transgender size={24} />, label: 'GENDER NEUTRAL', color: 'bg-secondary text-on-secondary-container' },
              { icon: <Package size={24} />, label: 'MINIMAL PACKAGING', color: 'bg-surface-container-low text-on-surface' }
            ].map((box) => (
              <div key={box.label} className={`aspect-square ${box.color} p-8 flex flex-col items-center justify-center text-center gap-4`}>
                <div className="w-12 h-12 flex items-center justify-center">
                  {box.icon}
                </div>
                <h5 className="label-caps text-[11px] leading-tight">{box.label}</h5>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Routine */}
      <section className="py-stack-lg px-margin-edge">
        <div className="container mx-auto max-w-[1440px] bg-on-surface text-white p-12 md:p-32 flex flex-col items-center text-center gap-8 relative overflow-hidden">
          <div className="absolute inset-0 opacity-10 lab-grid"></div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="z-10 flex flex-col items-center gap-8"
          >
            <h2 className="text-4xl md:text-5xl font-headline tracking-tighter uppercase max-w-2xl">Find Your Clinical Routine</h2>
            <p className="text-lg text-white/60 max-w-2xl">
              Not sure where to start? Answer a few questions about your skin concerns and we'll build a science-backed routine tailored specifically for you.
            </p>
            <button className="bg-white text-on-surface label-caps px-12 py-6 hover:bg-secondary transition-colors">
              Start Routine Builder
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
