import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { Badge } from '@/components/ui/badge'
import { ArrowRight, BrainCircuit, Activity, Users, Calendar, Sparkles } from 'lucide-react'
import Link from 'next/link'

export default function LandingPage() {
  return (
    <div className="flex flex-col w-full">
      {/* HERO SECTION */}
      <section className="px-4 pt-24 pb-32 max-w-7xl mx-auto text-center">
        <Badge variant="secondary" className="mb-6 px-4 py-1 text-sm bg-emerald-100 text-emerald-800 hover:bg-emerald-100 border-none">
          Lançamento Oficial 🚀
        </Badge>
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6 text-slate-900">
          Inteligência Clínica e <br className="hidden md:block" />
          Nutrição Integrativa em um só lugar.
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
          Para nutricionistas: um ecossistema completo com anamnese dinâmica. 
          Para pacientes: encontre profissionais de excelência e acompanhe sua evolução em tempo real.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link href="/cadastro?role=nutri">
            <Button size="lg" className="h-12 px-8 bg-emerald-600 hover:bg-emerald-700 text-white w-full sm:w-auto text-base">
              Sou Nutricionista
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
          <Link href="/cadastro?role=paciente">
            <Button size="lg" variant="outline" className="h-12 px-8 w-full sm:w-auto text-base">
              Sou Paciente
            </Button>
          </Link>
        </div>
      </section>

      {/* FEATURES SECTION */}
      <section id="features" className="py-24 bg-slate-50 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Tudo o que você precisa para evoluir</h2>
            <p className="text-muted-foreground">Funcionalidades desenhadas para a prática clínica real.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Activity, title: "Prontuário Completo", desc: "Histórico, evolução, exames e condutas organizadas de forma intuitiva." },
              { icon: Calendar, title: "Gestão de Agenda", desc: "Agendamento online, lembretes automáticos e controle financeiro." },
              { icon: Users, title: "Portal do Paciente", desc: "Seus pacientes acessam planos alimentares e interagem via aplicativo web." }
            ].map((feat, i) => (
              <Card key={i} className="border-none shadow-sm">
                <CardHeader>
                  <div className="h-12 w-12 bg-emerald-100 rounded-lg flex items-center justify-center mb-4">
                    <feat.icon className="h-6 w-6 text-emerald-600" />
                  </div>
                  <CardTitle>{feat.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{feat.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* SMART ANAMNESIS SECTION */}
      <section id="anamnese" className="py-24 bg-slate-900 text-white px-4">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <Badge variant="outline" className="text-emerald-400 border-emerald-400 mb-6">Exclusividade Nutri Fyzen</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Anamnese Dinâmica Inteligente
            </h2>
            <p className="text-slate-300 text-lg mb-8 leading-relaxed">
              Esqueça os formulários estáticos. Nossa IA clínica adapta as perguntas da anamnese em tempo real baseado nas respostas anteriores, criando uma árvore de correlação de sintomas e sugestões de protocolos automáticos.
            </p>
            <ul className="space-y-4">
              {[
                "Lógica Condicional (Se/Então)",
                "Árvore Clínica Visual",
                "Correlação de Sintomas e Sinais"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-slate-300">
                  <BrainCircuit className="h-5 w-5 text-emerald-500" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-slate-800 rounded-2xl p-8 border border-slate-700 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 p-4 opacity-10">
              <Sparkles className="h-32 w-32" />
            </div>
            <div className="space-y-4 relative z-10">
              <div className="p-4 bg-slate-700 rounded-lg">
                <p className="text-sm text-emerald-400 mb-1">Pergunta Clínica</p>
                <p className="font-medium">O paciente relatou fadiga crônica pós-prandial?</p>
              </div>
              <div className="pl-6 border-l-2 border-emerald-500 space-y-4">
                <div className="p-4 bg-slate-700/50 rounded-lg">
                  <p className="text-xs text-slate-400 mb-1">Condição Ativada: Investigar Resistência à Insulina</p>
                  <p className="text-sm">Nova aba de exames laboratoriais adicionada ao fluxo.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PRICING SECTION */}
      <section id="planos" className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Planos para Nutricionistas</h2>
            <p className="text-muted-foreground">Escolha o modelo ideal para a sua clínica. Pacientes acessam de graça.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Card 1 */}
            <Card className="flex flex-col">
              <CardHeader>
                <CardTitle>Iniciante</CardTitle>
                <CardDescription>Para recém-formados.</CardDescription>
                <div className="mt-4 text-3xl font-bold">R$ 97<span className="text-base font-normal text-muted-foreground">/mês</span></div>
              </CardHeader>
              <CardContent className="flex-1 flex flex-col justify-between">
                <ul className="space-y-2 text-sm text-muted-foreground mb-6">
                  <li>Até 50 pacientes ativos</li>
                  <li>Prontuário Básico</li>
                  <li>Agendamento Padrão</li>
                </ul>
                <Button variant="outline" className="w-full">Começar Grátis</Button>
              </CardContent>
            </Card>
            {/* Card 2 - Destaque */}
            <Card className="flex flex-col border-emerald-600 shadow-lg relative">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <Badge className="bg-emerald-600 hover:bg-emerald-700 text-white">Mais Popular</Badge>
              </div>
              <CardHeader>
                <CardTitle>Pro Integrativo</CardTitle>
                <CardDescription>Para clínicas em crescimento.</CardDescription>
                <div className="mt-4 text-3xl font-bold text-emerald-600">R$ 197<span className="text-base font-normal text-muted-foreground">/mês</span></div>
              </CardHeader>
              <CardContent className="flex-1 flex flex-col justify-between">
                <ul className="space-y-2 text-sm font-medium mb-6">
                  <li>Pacientes Ilimitados</li>
                  <li>Anamnese Inteligente Dinâmica</li>
                  <li>Prescrição de Manipulados</li>
                  <li>Marketplace de Consultas</li>
                </ul>
                <Button className="w-full bg-emerald-600 hover:bg-emerald-700 text-white">Assinar Pro</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section id="faq" className="py-24 bg-slate-50 px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-10 text-center">Perguntas Frequentes</h2>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>O sistema atende nutricionistas e pacientes?</AccordionTrigger>
              <AccordionContent>
                Sim. Nutricionistas utilizam a plataforma como um software de gestão clínica (SaaS), enquanto os pacientes recebem acesso a um portal dedicado para ver seus planos alimentares e podem buscar profissionais no nosso Marketplace.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>O que é a Anamnese Dinâmica Inteligente?</AccordionTrigger>
              <AccordionContent>
                É uma tecnologia exclusiva do Nutri Fyzen. Em vez de formulários longos e iguais para todos, o questionário se adapta. Se o paciente responde "Sim" para um sintoma, novas perguntas correlatas aparecem automaticamente para aprofundar a investigação.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>Como funciona o pagamento das consultas online?</AccordionTrigger>
              <AccordionContent>
                Pacientes podem pagar as consultas diretamente pelo Marketplace via Pix ou Cartão. O valor é repassado automaticamente para a conta bancária da nutricionista (descontando apenas a taxa da plataforma).
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>
    </div>
  )
}