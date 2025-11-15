import Link from 'next/link';
import { Dumbbell, Mail, Instagram, Facebook, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo e Descrição */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center">
                <Dumbbell className="w-5 h-5 text-white" />
              </div>
              <span className="font-bold text-xl text-white">FitLife</span>
            </div>
            <p className="text-sm text-gray-400">
              Transforme sua vida com hábitos saudáveis e alcance seus objetivos de forma sustentável.
            </p>
          </div>

          {/* Links Rápidos */}
          <div>
            <h3 className="font-semibold text-white mb-4">Links Rápidos</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/#funcionalidades" className="hover:text-emerald-400 transition-colors">Funcionalidades</Link></li>
              <li><Link href="/planos" className="hover:text-emerald-400 transition-colors">Planos</Link></li>
              <li><Link href="/#sobre" className="hover:text-emerald-400 transition-colors">Sobre Nós</Link></li>
              <li><Link href="/cadastro" className="hover:text-emerald-400 transition-colors">Cadastrar</Link></li>
            </ul>
          </div>

          {/* Suporte */}
          <div>
            <h3 className="font-semibold text-white mb-4">Suporte</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="#" className="hover:text-emerald-400 transition-colors">Central de Ajuda</Link></li>
              <li><Link href="#" className="hover:text-emerald-400 transition-colors">Termos de Uso</Link></li>
              <li><Link href="#" className="hover:text-emerald-400 transition-colors">Política de Privacidade</Link></li>
              <li><Link href="#" className="hover:text-emerald-400 transition-colors">Contato</Link></li>
            </ul>
          </div>

          {/* Redes Sociais */}
          <div>
            <h3 className="font-semibold text-white mb-4">Conecte-se</h3>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-emerald-600 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-emerald-600 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-emerald-600 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-emerald-600 transition-colors">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
          <p>&copy; 2024 FitLife. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
