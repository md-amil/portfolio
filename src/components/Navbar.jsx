import React, { useState, useEffect } from 'react';
import { Download, Menu, X } from 'lucide-react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'ABOUT', href: '#about' },
    { name: 'WORK', href: '#work' },
    { name: 'SKILLS', href: '#skills' },
    { name: 'EXPERIENCE', href: '#experience' },
    { name: 'CONTACT', href: '#contact' },
  ];

  const resumeUrl = '/resume.pdf';

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-cream/90 backdrop-blur-md border-b border-black/5 py-4 shadow-sm' : 'bg-transparent py-6'
    }`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="group flex items-center gap-0.5 text-2xl font-serif font-bold tracking-tight text-charcoal">
          <span>MA</span>
          <span className="text-accent group-hover:scale-125 transition-transform duration-200">.</span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-8 text-xs font-mono tracking-widest text-charcoal/80">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="hover:text-accent transition-colors duration-200 py-1 relative group"
            >
              {link.name}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
          
          <a
            href={resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            download="Md_Amil_Resume.pdf"
            className="flex items-center gap-1.5 pb-0.5 border-b-2 border-charcoal text-charcoal hover:text-accent hover:border-accent font-semibold transition-colors duration-200"
          >
            <span>RESUME</span>
            <Download className="w-3.5 h-3.5" />
          </a>
        </nav>

        {/* Mobile menu button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-charcoal hover:text-accent transition-colors"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-cream border-b border-black/10 px-6 py-6 space-y-4 shadow-lg animate-fadeIn">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block text-sm font-mono tracking-wider text-charcoal hover:text-accent py-2 border-b border-black/5"
            >
              {link.name}
            </a>
          ))}
          <a
            href={resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            download="Md_Amil_Resume.pdf"
            onClick={() => setMobileMenuOpen(false)}
            className="inline-flex items-center gap-2 text-sm font-mono font-bold text-accent pt-2"
          >
            <span>RESUME</span>
            <Download className="w-4 h-4" />
          </a>
        </div>
      )}
    </header>
  );
}
