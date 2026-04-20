import { Zap, Phone, Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { label: 'Главная', href: '#home' },
    { label: 'Услуги', href: '#services' },
    { label: 'О нас', href: '#about' },
    { label: 'Контакты', href: '#contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-gray-950/95 backdrop-blur-sm border-b border-yellow-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <div className="w-9 h-9 bg-yellow-500 rounded-lg flex items-center justify-center">
              <Zap className="w-5 h-5 text-gray-950" fill="currentColor" />
            </div>
            <span className="text-white font-bold text-xl tracking-wide">ЭЛМОНТ</span>
          </div>

          <nav className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-gray-400 hover:text-yellow-400 transition-colors text-sm font-medium"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <a
            href="tel:+996555112655"
            className="hidden md:flex items-center gap-2 bg-yellow-500 hover:bg-yellow-400 text-gray-950 font-semibold text-sm px-4 py-2 rounded-lg transition-colors"
          >
            <Phone className="w-4 h-4" />
            +996 555-112-655
          </a>

          <button
            className="md:hidden text-gray-400 hover:text-white"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-gray-950 border-t border-yellow-500/20 px-4 py-4 flex flex-col gap-4">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-gray-300 hover:text-yellow-400 transition-colors text-sm font-medium"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            href="tel:+996555112655"
            className="flex items-center gap-2 bg-yellow-500 text-gray-950 font-semibold text-sm px-4 py-2 rounded-lg w-fit"
          >
            <Phone className="w-4 h-4" />
            +996 555-112-655
          </a>
        </div>
      )}
    </header>
  );
}
