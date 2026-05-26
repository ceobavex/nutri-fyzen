import { Leaf } from 'lucide-react'

export function PublicFooter() {
  return (
    <footer className="border-t bg-muted/20">
      <div className="container mx-auto max-w-7xl px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <Leaf className="h-6 w-6 text-emerald-600" />
              <span className="text-xl font-bold tracking-tight">Nutri Fyzen</span>
            </div>
            <p className="text-muted-foreground max-w-xs">
              SaaS clínico inteligente para nutricionistas integrativas e marketplace para pacientes exigentes.
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Plataforma</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Para Nutricionistas</li>
              <li>Para Pacientes</li>
              <li>Preços</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Legal</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Termos de Uso</li>
              <li>Política de Privacidade</li>
              <li>Contato</li>
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} Nutri Fyzen. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  )
}