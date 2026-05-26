import { LogoNF } from '@/components/shared/logo-nf'

export function PublicFooter() {
  return (
    <footer className="border-t border-white/10 bg-[#050505] text-zinc-400 pt-20 pb-10">
      <div className="container mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-12 border-b border-white/10 pb-16">
          <div className="col-span-1 md:col-span-2">
            
            {/* NOVO LOGO MONOGRAMA */}
            <div className="flex items-center gap-3 mb-6">
              <LogoNF className="h-8 w-8 text-white" />
              <span className="text-xl font-bold text-white tracking-tight">Nutri Fyzen</span>
            </div>
            
            <p className="max-w-xs text-sm leading-relaxed">
              A plataforma inteligente que redefine a conexão entre nutricionistas integrativos e pacientes.
            </p>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-4">Produto</h3>
            <ul className="space-y-3 text-sm">
              <li className="hover:text-[#D9F845] cursor-pointer transition-colors">Para Nutricionistas</li>
              <li className="hover:text-[#D9F845] cursor-pointer transition-colors">Para Pacientes</li>
              <li className="hover:text-[#D9F845] cursor-pointer transition-colors">Preços</li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-4">Legal</h3>
            <ul className="space-y-3 text-sm">
              <li className="hover:text-white cursor-pointer transition-colors">Termos de Uso</li>
              <li className="hover:text-white cursor-pointer transition-colors">Privacidade</li>
              <li className="hover:text-white cursor-pointer transition-colors">Cookies</li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-4">Social</h3>
            <ul className="space-y-3 text-sm">
              <li className="hover:text-white cursor-pointer transition-colors">Instagram</li>
              <li className="hover:text-white cursor-pointer transition-colors">LinkedIn</li>
              <li className="hover:text-white cursor-pointer transition-colors">Twitter (X)</li>
            </ul>
          </div>
        </div>
        <div className="mt-8 flex flex-col md:flex-row justify-between items-center text-xs">
          <p>© {new Date().getFullYear()} Nutri Fyzen Inc. Todos os direitos reservados.</p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <span className="flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-[#D9F845]"></span> Sistema Operacional</span>
          </div>
        </div>
      </div>
    </footer>
  )
}