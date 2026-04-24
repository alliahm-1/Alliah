import React from 'react';
import { Share2, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="w-full bg-zinc-50 border-t border-surface-container py-16 px-margin-edge">
      <div className="max-w-[1440px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="flex flex-col gap-8">
          <div className="font-headline font-bold uppercase tracking-widest">THE ORDINARY</div>
          <div className="flex flex-wrap gap-x-8 gap-y-4">
            {['Privacy Policy', 'Terms of Use', 'Sustainability', 'Science & Technology'].map((item) => (
              <a 
                key={item} 
                href="#" 
                className="text-xs text-on-surface-variant hover:underline transition-all"
              >
                {item}
              </a>
            ))}
          </div>
        </div>

        <div className="flex flex-col justify-between items-end text-right gap-8">
          <p className="text-xs text-on-surface-variant max-w-xs leading-relaxed">
            © DECIEM BEAUTY GROUP INC. 24. CLINICAL FORMULATIONS WITH INTEGRITY.
          </p>
          <div className="flex gap-4">
            <button className="text-on-surface-variant hover:text-on-surface transition-colors">
              <Share2 size={16} strokeWidth={1.5} />
            </button>
            <button className="text-on-surface-variant hover:text-on-surface transition-colors">
              <Mail size={16} strokeWidth={1.5} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
