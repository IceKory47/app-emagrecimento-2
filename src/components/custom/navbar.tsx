'use client';

import Link from 'next/link';
import { Menu, X, Dumbbell } from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 font-bold text-xl">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center">
              <Dumbbell className="w-5 h-5 text-white" />
            </div>
            <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
              FitLife
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <Link href="/#funcionalidades" className="text-gray-600 hover:text-emerald-600 transition-colors">
              Funcionalidades
            </Link>
            <Link href="/planos" className="text-gray-600 hover:text-emerald-600 transition-colors">
              Planos
            </Link>
            <Link href="/#sobre" className="text-gray-600 hover:text-emerald-600 transition-colors">
              Sobre
            </Link>
            <Link 
              href="/cadastro" 
              className="px-6 py-2 bg-gradient-to-r from-emerald-500 to-teal-600 text-white rounded-full hover:shadow-lg hover:scale-105 transition-all duration-300"
            >
              Começar Agora
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden py-4 space-y-4">
            <Link 
              href="/#funcionalidades" 
              className="block text-gray-600 hover:text-emerald-600 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Funcionalidades
            </Link>
            <Link 
              href="/planos" 
              className="block text-gray-600 hover:text-emerald-600 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Planos
            </Link>
            <Link 
              href="/#sobre" 
              className="block text-gray-600 hover:text-emerald-600 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Sobre
            </Link>
            <Link 
              href="/cadastro" 
              className="block w-full text-center px-6 py-2 bg-gradient-to-r from-emerald-500 to-teal-600 text-white rounded-full"
              onClick={() => setIsOpen(false)}
            >
              Começar Agora
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
