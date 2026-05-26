import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { LogoNF } from '@/components/shared/logo-nf'

export function PublicNavbar() {
  return (
    <header className="fixed top-0 z-50 w-full border-b border-white/10 bg-black/50 backdrop-blur-md">
      <div className="container mx-auto max-w-7xl px-6 flex h-20 items-center justify-between">
        
        {/* NOVO LOGO MONOGRAMA */}
        <Link href="/" className="flex items-center gap-3 group">
          <LogoNF className="h-9 w-9 text-white group-hover:text-zinc-200 transition-colors" />
          <span className="text-xl font-bold tracking-tight text-white">Nutri Fyzen</span>
        </Link>
        
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-400">
          <Link href="#features" className="hover:text-white transition-colors">Diferenciais</Link>
          <Link href="#how-it-works" className="hover:text-white transition-colors">Como Funciona</Link>
          <Link href="#showcase" className="hover:text-white transition-colors">Plataforma</Link>
          <Link href="#anamnese" className="hover:text-[#D9F845] transition-colors">IA Anamnese</Link>
        </nav>

        <div className="flex items-center gap-4">
          <Link href="/login">
            <Button variant="ghost" className="bg-transparent text-zinc-300 hover:text-white hover:bg-white/10">
              Entrar
            </Button>
          </Link>
          <Link href="/cadastro">
            <Button className="bg-[#D9F845] hover:bg-[#c2e03b] text-black font-semibold rounded-full px-6">
              Começar Agora
            </Button>
          </Link>
        </div>
      </div>
    </header>
  )
}