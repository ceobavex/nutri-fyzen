import { LogoNF } from "@/components/shared/logo-nf"
import Link from "next/link"
import { Calendar, FileText, TrendingUp } from "lucide-react"

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="relative h-screen overflow-hidden bg-[#111214] text-white">
      <div className="flex h-screen">
        <aside className="relative hidden h-screen w-1/2 overflow-hidden lg:flex">
          <div
            className="absolute inset-0 bg-[length:120%] bg-center bg-no-repeat"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=2070&auto=format&fit=crop')",
            }}
          />

          <div className="absolute inset-0 bg-black/55" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/45 via-black/35 to-black/70" />

          <div className="relative z-10 flex w-full flex-col justify-center px-24">
            <Link href="/" className="mb-7 flex items-center gap-3">
              <LogoNF className="h-12 w-12 text-emerald-400" />
              <span className="text-4xl font-bold tracking-tight">
                Nutri Fyzen
              </span>
            </Link>

            <h1 className="mb-12 max-w-xl text-[32px] font-medium leading-tight">
              Mais tempo para cuidar,
              <br />
              menos para se preocupar
            </h1>

            <div className="space-y-7">
              <Feature
                icon={<Calendar className="h-6 w-6" />}
                title="Agenda inteligente"
                text="Organize consultas, horários e retornos em um fluxo simples e automatizado."
              />

              <Feature
                icon={<FileText className="h-6 w-6" />}
                title="Planos alimentares"
                text="Crie prescrições personalizadas e acompanhe a rotina alimentar dos pacientes."
              />

              <Feature
                icon={<TrendingUp className="h-6 w-6" />}
                title="Evolução dos pacientes"
                text="Acompanhe resultados, medidas, progresso e indicadores em tempo real."
              />
            </div>
          </div>
        </aside>

        <main className="relative flex h-screen w-full items-center justify-center overflow-hidden px-6 lg:w-1/2">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.07),transparent_35%)]" />

          <div className="pointer-events-none absolute right-12 bottom-12 hidden text-zinc-400 lg:block">
            <Sparkle />
          </div>

          <div className="relative z-10 w-full max-w-[520px]">{children}</div>
        </main>
      </div>
    </div>
  )
}

function Feature({
  icon,
  title,
  text,
}: {
  icon: React.ReactNode
  title: string
  text: string
}) {
  return (
    <div className="flex gap-4">
      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/15 text-white shadow-lg backdrop-blur">
        {icon}
      </div>

      <div>
        <h3 className="text-xl font-semibold text-white">{title}</h3>
        <p className="mt-1 max-w-[430px] text-base leading-relaxed text-white/70">
          {text}
        </p>
      </div>
    </div>
  )
}

function Sparkle() {
  return (
    <svg width="58" height="58" viewBox="0 0 58 58" fill="none">
      <path
        d="M29 0C33.2 17.4 40.6 24.8 58 29C40.6 33.2 33.2 40.6 29 58C24.8 40.6 17.4 33.2 0 29C17.4 24.8 24.8 17.4 29 0Z"
        fill="currentColor"
      />
    </svg>
  )
}