'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Compass, Menu, X } from 'lucide-react';
import Link from 'next/link';

const navLinks = [
  { label: 'Jobs', href: '#jobs' },
  { label: 'Destinations', href: '#destinations' },
  { label: 'Resources', href: '#resources' },
  { label: 'Community', href: '#community' },
];

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link href="/" className="flex items-center gap-2">
            <Compass className={`w-8 h-8 ${isScrolled ? 'text-[#0f766e]' : 'text-white'}`} />
            <span
              className={`text-2xl font-bold font-poppins ${
                isScrolled ? 'text-[#0f766e]' : 'text-white'
              }`}
            >
              NomadGate
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className={`font-medium transition-colors duration-300 hover:text-[#f97316] ${
                  isScrolled ? 'text-foreground' : 'text-white'
                }`}
              >
                {link.label}
              </a>
            ))}

            <Link href="/login">
              <Button
                size="sm"
                className={`rounded-full transition-all duration-300 ${
                  isScrolled
                    ? 'bg-[#0f766e] hover:bg-[#0d6561] text-white'
                    : 'bg-white/20 hover:bg-white/30 text-white backdrop-blur-sm'
                }`}
              >
                Sign In
              </Button>
            </Link>

            <Button
              size="sm"
              className="bg-[#f97316] hover:bg-[#ea580c] text-white rounded-full"
            >
              Get Started
            </Button>
          </div>

          <button
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className={`w-6 h-6 ${isScrolled ? 'text-foreground' : 'text-white'}`} />
            ) : (
              <Menu className={`w-6 h-6 ${isScrolled ? 'text-foreground' : 'text-white'}`} />
            )}
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="px-4 py-6 space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="block text-foreground font-medium hover:text-[#f97316] transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <div className="flex flex-col gap-2 pt-4">
              <Link href="/login" className="w-full">
                <Button
                  size="sm"
                  variant="outline"
                  className="w-full rounded-full border-[#0f766e] text-[#0f766e] hover:bg-[#0f766e] hover:text-white"
                >
                  Sign In
                </Button>
              </Link>
              <Button size="sm" className="w-full bg-[#f97316] hover:bg-[#ea580c] text-white rounded-full">
                Get Started
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
