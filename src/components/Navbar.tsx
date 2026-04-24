import React from 'react';
import { ShoppingBag, User, Menu } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const location = useLocation();

  const links = [
    { name: 'Shop All', path: '/catalog' },
    { name: 'Routine Builder', path: '#' },
    { name: 'Ingredients', path: '#' },
    { name: 'Clinical Hub', path: '#' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-white border-b border-surface-container py-4 px-margin-edge">
      <div className="max-w-[1440px] mx-auto flex items-center justify-between">
        <div className="flex items-center gap-12">
          <Link to="/" className="font-headline text-xl font-extrabold uppercase tracking-tighter">
            THE ORDINARY
          </Link>
          <nav className="hidden md:flex gap-8">
            {links.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`font-headline text-sm uppercase tracking-widest font-medium transition-all duration-200 border-b-2 pb-1 ${
                  location.pathname === link.path
                    ? 'border-on-surface text-on-surface'
                    : 'border-transparent text-on-surface-variant hover:text-on-surface'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>
        </div>

        <div className="flex items-center gap-6">
          <button className="text-on-surface hover:opacity-70 transition-opacity">
            <ShoppingBag size={20} strokeWidth={1.5} />
          </button>
          <button className="text-on-surface hover:opacity-70 transition-opacity">
            <User size={20} strokeWidth={1.5} />
          </button>
          <button className="md:hidden text-on-surface">
            <Menu size={20} strokeWidth={1.5} />
          </button>
        </div>
      </div>
    </header>
  );
}
