'use client'

import { Badge } from '@/components/ui/badge'
import { BrainCircuit, Activity, Users, LayoutDashboard, Stethoscope, Smartphone, CreditCard, Search } from 'lucide-react'

export default function ComoFuncionaPage() {
  return (
    <div className="min-h-screen bg-[#050505] text-white pt-32 pb-24 font-sans">
      <main className="relative z-10 max-w-6xl mx-auto px-6">
        
        {/* HEADER */}
        <div className="text-center mb-24">
          <Badge className="bg-[#D9F845]/10 text-[#D9F845] border-[#D9F845]/20 mb-6">Jornada Integrada</Badge>
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight">Como o Nutri Fyzen funciona?</h1>
          <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
            Um ecossistema duplo. Desenhamos duas experiências separadas, mas perfeitamente conectadas, para garantir que você organize sua clínica e seu paciente alcance resultados.
          </p>
        </div>

        {/* JORNADA DO NUTRICIONISTA */}
        <div className="mb-32">
          <div className="flex items-center gap-4 mb-12 border-b border-white/10 pb-6">
            <LayoutDashboard className="h-8 w-8 text-[#D9F845]" />
            <h2 className="text-3xl font-bold">A Jornada do Nutricionista</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-16 relative">
            {/* Linha vertical de conexão (Desktop) */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-white/10 to-transparent -translate-x-1/2" />

            {/* Passo 1 */}
            <div className="md:pr-12 md:text-right">
              <div className="h-12 w-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center md:ml-auto mb-6">
                <LayoutDashboard className="h-6 w-6 text-zinc-300" />
              </div>
              <h3 className="text-2xl font-bold mb-3">1. Organização e Prontuário Centralizado</h3>
              <p className="text-zinc-400 leading-relaxed">
                Ao criar sua conta, você centraliza toda a sua operação. Dê adeus às planilhas soltas e papéis. Você configura sua agenda, cadastra seus pacientes e passa a ter um prontuário eletrônico completo, com histórico, financeiro e evolução. O Nutri Fyzen se torna o seu centro de comando digital.
              </p>
            </div>
            <div className="hidden md:flex items-center justify-start pl-12 text-zinc-700 font-mono text-sm">
              <div className="bg-white/5 p-4 rounded-lg border border-white/10 text-left w-full max-w-[200px]">
                [x] Agenda Ativa<br/>
                [x] Link de Agendamento<br/>
                [x] Prontuário Digital
              </div>
            </div>

            {/* Passo 2 */}
            <div className="hidden md:flex items-center justify-end pr-12 text-zinc-700 font-mono text-sm">
               <div className="bg-[#0A232E]/30 p-4 rounded-lg border border-cyan-900/50 text-left text-cyan-500/50">
                Se: "Fadiga" == True<br/>
                Ativar: Questionário Tireoide
              </div>
            </div>
            <div className="md:pl-12">
              <div className="h-12 w-12 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center mb-6">
                <BrainCircuit className="h-6 w-6 text-cyan-400" />
              </div>
              <h3 className="text-2xl font-bold mb-3">2. Anamnese Guiada por IA</h3>
              <p className="text-zinc-400 leading-relaxed">
                A tecnologia trabalha para você. O paciente recebe um link de pré-consulta. Ao preencher, nossa Inteligência Artificial adapta o questionário em tempo real com base nas respostas dadas. Você recebe os dados pré-analisados e estruturados, economizando muito tempo de consulta.
              </p>
            </div>

            {/* Passo 3 */}
            <div className="md:pr-12 md:text-right">
              <div className="h-12 w-12 rounded-xl bg-[#B052FF]/10 border border-[#B052FF]/20 flex items-center justify-center md:ml-auto mb-6">
                <Stethoscope className="h-6 w-6 text-[#B052FF]" />
              </div>
              <h3 className="text-2xl font-bold mb-3">3. Consulta e Prescrição Ágil</h3>
              <p className="text-zinc-400 leading-relaxed">
                Durante o atendimento presencial ou via telemedicina, você tem tudo na tela. O sistema realiza os cálculos de macronutrientes automaticamente enquanto você monta o plano alimentar. Com um clique, a dieta e a prescrição de manipulados são liberadas direto no portal do paciente.
              </p>
            </div>
            <div className="hidden md:flex items-center justify-start pl-12">
               <div className="bg-white/5 h-20 w-32 rounded-lg border border-white/10 flex items-center justify-center">
                 <Activity className="h-8 w-8 text-zinc-600" />
               </div>
            </div>
          </div>
        </div>

        {/* JORNADA DO PACIENTE */}
        <div>
          <div className="flex items-center gap-4 mb-12 border-b border-white/10 pb-6 mt-16">
            <Smartphone className="h-8 w-8 text-emerald-400" />
            <h2 className="text-3xl font-bold">A Jornada do Paciente</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Passo P1 */}
            <div className="bg-white/5 border border-white/10 p-8 rounded-3xl relative overflow-hidden">
              <Search className="h-8 w-8 text-emerald-400 mb-6 relative z-10" />
              <h3 className="text-xl font-bold mb-3 relative z-10">Encontro e Agendamento</h3>
              <p className="text-zinc-400 text-sm leading-relaxed relative z-10">
                O paciente entra no portal gratuito do Nutri Fyzen, busca por especialidades e encontra seu perfil profissional. Ele escolhe um horário livre na sua agenda e já deixa a consulta marcada sem precisar de longas trocas de mensagens.
              </p>
            </div>

            {/* Passo P2 */}
            <div className="bg-white/5 border border-white/10 p-8 rounded-3xl relative overflow-hidden">
              <CreditCard className="h-8 w-8 text-emerald-400 mb-6 relative z-10" />
              <h3 className="text-xl font-bold mb-3 relative z-10">Pagamento Simplificado</h3>
              <p className="text-zinc-400 text-sm leading-relaxed relative z-10">
                Se a sua consulta for avulsa ou online, o pagamento (Pix ou Cartão) pode ser feito diretamente pelo sistema. O valor cai direto na sua conta, garantindo segurança para ambos os lados antes do atendimento iniciar.
              </p>
            </div>

            {/* Passo P3 */}
            <div className="bg-white/5 border border-white/10 p-8 rounded-3xl relative overflow-hidden">
              <Activity className="h-8 w-8 text-emerald-400 mb-6 relative z-10" />
              <h3 className="text-xl font-bold mb-3 relative z-10">Acompanhamento Contínuo</h3>
              <p className="text-zinc-400 text-sm leading-relaxed relative z-10">
                O paciente acessa o painel dele no celular. Ele visualiza a dieta do dia, dá o "check" nas refeições concluídas, lança o peso na evolução e pode conversar com você via chat, mantendo o engajamento lá no alto.
              </p>
            </div>
          </div>
        </div>

      </main>
    </div>
  )
}