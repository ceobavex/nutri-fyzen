'use client'

import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { CheckCircle2, Minus, Plus } from 'lucide-react'
import Link from 'next/link'

export default function PlanosPage() {
  return (
    <div className="min-h-screen bg-[#050505] text-white pt-32 pb-24 font-sans">
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] left-[20%] w-[50%] h-[50%] bg-[#0A232E] rounded-full mix-blend-screen filter blur-[150px] opacity-50" />
      </div>

      <main className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <Badge className="bg-[#D9F845]/10 text-[#D9F845] border-[#D9F845]/20 mb-6">Transparência Total</Badge>
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight">Preços desenhados para escalar.</h1>
          <p className="text-zinc-400 max-w-2xl mx-auto text-lg">Sem taxas escondidas. O paciente acessa de graça, e você paga de acordo com o crescimento da sua clínica.</p>
        </div>

        {/* CARDS DE PREÇO RESUMIDOS */}
        <div className="grid lg:grid-cols-3 gap-8 items-stretch max-w-6xl mx-auto mb-24">
           {/* FYZEN CORE */}
           <div className="p-8 rounded-3xl bg-white/5 border border-white/10 flex flex-col h-full">
              <h3 className="text-xl font-bold mb-1 text-white">Fyzen Core</h3>
              <p className="text-sm text-zinc-400 mb-6">Organize seus atendimentos.</p>
              <div className="flex items-end gap-1 mb-2"><span className="text-4xl font-bold text-white">R$ 59,90</span><span className="text-zinc-500 mb-1">/mês</span></div>
              <Badge className="bg-cyan-500/10 text-cyan-400 border-cyan-500/20 w-fit mb-6 font-medium">R$ 29,90 nos 3 primeiros meses</Badge>
              <Link href="/cadastro" className="mt-auto"><Button variant="outline" className="w-full bg-transparent border-white/20 hover:bg-white/10 text-white">Assinar Core</Button></Link>
            </div>
            
            {/* FYZEN PRO */}
            <div className="p-8 rounded-3xl bg-gradient-to-b from-[#111] to-[#050505] border border-[#D9F845]/50 flex flex-col h-full transform lg:scale-105 shadow-[0_0_40px_rgba(217,248,69,0.15)] relative z-10">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2"><Badge className="bg-[#D9F845] text-black hover:bg-[#D9F845] px-4 py-1 uppercase tracking-wider text-[10px] font-bold">Mais Escolhido</Badge></div>
              <h3 className="text-xl font-bold mb-1 text-white">Fyzen Pro</h3>
              <p className="text-sm text-zinc-400 mb-6">Automatize e escale sua clínica.</p>
              <div className="flex items-end gap-1 mb-2"><span className="text-5xl font-extrabold text-white">R$ 149,90</span><span className="text-zinc-500 mb-1">/mês</span></div>
              <Badge className="bg-[#D9F845]/10 text-[#D9F845] border-[#D9F845]/20 w-fit mb-6 font-medium">🎁 7 dias grátis para testar</Badge>
              <Link href="/cadastro" className="mt-auto"><Button className="w-full bg-[#D9F845] hover:bg-[#c2e03b] text-black font-bold h-12">Assinar Pro</Button></Link>
            </div>

            {/* FYZEN CLINIC */}
            <div className="p-8 rounded-3xl bg-white/5 border border-white/10 flex flex-col h-full">
              <h3 className="text-xl font-bold mb-1 text-white">Fyzen Clinic</h3>
              <p className="text-sm text-zinc-400 mb-6">Operação profissional completa.</p>
              <div className="flex items-end gap-1 mb-6"><span className="text-4xl font-bold text-white">R$ 399</span><span className="text-zinc-500 mb-1">/mês</span></div>
              <Link href="/cadastro" className="mt-auto"><Button variant="outline" className="w-full bg-transparent border-white/20 hover:bg-white/10 text-white">Falar com Vendas</Button></Link>
            </div>
        </div>

        {/* TABELA DE COMPARAÇÃO DETALHADA */}
        <div className="max-w-6xl mx-auto mb-24">
          <h3 className="text-2xl font-bold mb-10 text-center">O que está incluso em cada plano?</h3>
          
          <div className="overflow-x-auto border border-white/10 rounded-2xl bg-white/[0.02]">
            <table className="w-full text-left text-sm whitespace-nowrap">
              <thead className="bg-white/5 border-b border-white/10">
                <tr>
                  <th className="p-6 font-medium text-zinc-400 w-1/4">Funcionalidades e Limites</th>
                  <th className="p-6 font-bold text-white w-1/4">Fyzen Core</th>
                  <th className="p-6 font-bold text-[#D9F845] w-1/4">Fyzen Pro</th>
                  <th className="p-6 font-bold text-white w-1/4">Fyzen Clinic</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5 text-zinc-300">
                {/* LIMITE DE PACIENTES */}
                <tr className="hover:bg-white/5 transition-colors">
                  <td className="p-6 font-medium text-white">Pacientes Ativos Inclusos</td>
                  <td className="p-6">Até 25 pacientes</td>
                  <td className="p-6 font-medium text-white">Até 50 pacientes</td>
                  <td className="p-6">Ilimitado</td>
                </tr>
                <tr className="hover:bg-white/5 transition-colors">
                  <td className="p-6 font-medium text-white">Custo por Paciente Extra</td>
                  <td className="p-6 text-zinc-400">+ R$ 3,00 /mês</td>
                  <td className="p-6 text-zinc-400">+ R$ 2,50 /mês</td>
                  <td className="p-6 text-zinc-400">Sem custos extras</td>
                </tr>

                {/* EQUIPE */}
                <tr className="hover:bg-white/5 transition-colors bg-white/[0.01]">
                  <td className="p-6 font-medium text-white">Membros da Equipe</td>
                  <td className="p-6">Apenas o Nutricionista</td>
                  <td className="p-6 font-medium text-white">Até 3 Usuários</td>
                  <td className="p-6">Usuários Ilimitados</td>
                </tr>
                <tr className="hover:bg-white/5 transition-colors bg-white/[0.01]">
                  <td className="p-6 font-medium text-white">Custo por Usuário Extra</td>
                  <td className="p-6 text-zinc-500"><Minus className="h-4 w-4" /></td>
                  <td className="p-6 text-zinc-400">+ R$ 24,90 /mês</td>
                  <td className="p-6 text-zinc-400">Sem custos extras</td>
                </tr>
                <tr className="hover:bg-white/5 transition-colors bg-white/[0.01]">
                  <td className="p-6 font-medium text-white">Controle de Permissões (Roles)</td>
                  <td className="p-6 text-zinc-500"><Minus className="h-4 w-4" /></td>
                  <td className="p-6"><CheckCircle2 className="h-5 w-5 text-[#D9F845]" /> (Recepção/Financeiro)</td>
                  <td className="p-6"><CheckCircle2 className="h-5 w-5 text-white" /> (Customizadas)</td>
                </tr>

                {/* CLÍNICA & IA */}
                <tr className="hover:bg-white/5 transition-colors">
                  <td className="p-6 font-medium text-white">Prontuário e Evolução</td>
                  <td className="p-6"><CheckCircle2 className="h-5 w-5 text-white" /> Básico</td>
                  <td className="p-6"><CheckCircle2 className="h-5 w-5 text-[#D9F845]" /> Avançado</td>
                  <td className="p-6"><CheckCircle2 className="h-5 w-5 text-white" /> Avançado + Analytics</td>
                </tr>
                <tr className="hover:bg-white/5 transition-colors">
                  <td className="p-6 font-medium text-white">Anamnese com IA Dinâmica</td>
                  <td className="p-6 text-zinc-500"><Minus className="h-4 w-4" /> (Apenas Formulário Padrão)</td>
                  <td className="p-6"><CheckCircle2 className="h-5 w-5 text-[#D9F845]" /> Sim, inclusa</td>
                  <td className="p-6"><CheckCircle2 className="h-5 w-5 text-white" /> Sim, inclusa</td>
                </tr>
                <tr className="hover:bg-white/5 transition-colors">
                  <td className="p-6 font-medium text-white">Consultas Online Integradas</td>
                  <td className="p-6 text-zinc-500"><Minus className="h-4 w-4" /></td>
                  <td className="p-6"><CheckCircle2 className="h-5 w-5 text-[#D9F845]" /></td>
                  <td className="p-6"><CheckCircle2 className="h-5 w-5 text-white" /></td>
                </tr>
                <tr className="hover:bg-white/5 transition-colors">
                  <td className="p-6 font-medium text-white">Marketplace & Captação</td>
                  <td className="p-6 text-zinc-500"><Minus className="h-4 w-4" /></td>
                  <td className="p-6"><CheckCircle2 className="h-5 w-5 text-[#D9F845]" /> Perfil Público Ativo</td>
                  <td className="p-6"><CheckCircle2 className="h-5 w-5 text-white" /> Destaque de Clínica</td>
                </tr>

                {/* EMPRESARIAL */}
                <tr className="hover:bg-white/5 transition-colors bg-white/[0.01]">
                  <td className="p-6 font-medium text-white">Suporte Técnico</td>
                  <td className="p-6">Chat Padrão</td>
                  <td className="p-6 text-[#D9F845]">Fila Prioritária (WhatsApp)</td>
                  <td className="p-6 text-cyan-400">Gerente de Conta Dedicado</td>
                </tr>
                <tr className="hover:bg-white/5 transition-colors bg-white/[0.01]">
                  <td className="p-6 font-medium text-white">Múltiplos Nutricionistas (CNPJ)</td>
                  <td className="p-6 text-zinc-500"><Minus className="h-4 w-4" /></td>
                  <td className="p-6 text-zinc-500"><Minus className="h-4 w-4" /></td>
                  <td className="p-6"><CheckCircle2 className="h-5 w-5 text-white" /> Com divisão financeira</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

      </main>
    </div>
  )
}