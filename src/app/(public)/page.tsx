'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { 
  ArrowRight, BrainCircuit, Activity, Users, Calendar, 
  Sparkles, PlayCircle, ShieldCheck, Zap, 
  Stethoscope, CheckCircle2, Plus
} from 'lucide-react'
import Link from 'next/link'

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
}

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
}

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-[#050505] text-white selection:bg-[#D9F845] selection:text-black overflow-hidden font-sans">
      
      {/* BACKGROUND GLOWS */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-[#0A232E] rounded-full mix-blend-screen filter blur-[150px] opacity-70" />
        <div className="absolute top-[20%] right-[-5%] w-[30%] h-[30%] bg-[#B052FF] rounded-full mix-blend-screen filter blur-[150px] opacity-20" />
        <div className="absolute bottom-[-10%] left-[20%] w-[50%] h-[50%] bg-[#1a2f1c] rounded-full mix-blend-screen filter blur-[150px] opacity-40" />
      </div>

      <main className="relative z-10 flex flex-col items-center">
        
        {/* HERO SECTION */}
        <section className="w-full max-w-7xl mx-auto px-6 pt-40 pb-32 flex flex-col lg:flex-row items-center gap-16">
          <motion.div 
            className="flex-1 text-left"
            initial="hidden" animate="visible" variants={staggerContainer}
          >
            <motion.div variants={fadeInUp} className="flex flex-wrap gap-3 mb-8">
              <Badge className="bg-white/5 hover:bg-white/10 text-zinc-300 border border-white/10 px-3 py-1 rounded-full backdrop-blur-sm">
                <ShieldCheck className="h-3 w-3 mr-2 text-[#D9F845]" /> Plataforma SaaS Premium
              </Badge>
              <Badge className="bg-white/5 hover:bg-white/10 text-zinc-300 border border-white/10 px-3 py-1 rounded-full backdrop-blur-sm">
                <Activity className="h-3 w-3 mr-2 text-cyan-400" /> Consultas Online Integradas
              </Badge>
            </motion.div>
            
            <motion.h1 variants={fadeInUp} className="text-5xl lg:text-7xl font-extrabold tracking-tight mb-6 leading-[1.1]">
              A plataforma <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D9F845] to-emerald-400">
                inteligente
              </span> que conecta nutricionistas e pacientes.
            </motion.h1>
            
            <motion.p variants={fadeInUp} className="text-lg text-zinc-400 mb-10 max-w-xl leading-relaxed">
              Anamnese inteligente com IA, consultas online, gestão clínica completa e uma experiência premium em um único ecossistema futurista.
            </motion.p>
            
            <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4">
              <Link href="/cadastro">
                <Button size="lg" className="h-14 px-8 bg-[#D9F845] hover:bg-[#c2e03b] text-black font-bold rounded-full w-full sm:w-auto text-base shadow-[0_0_30px_rgba(217,248,69,0.3)] transition-all">
                  Começar Agora <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Button size="lg" variant="outline" className="bg-transparent h-14 px-8 rounded-full border-white/20 hover:bg-white/10 text-white w-full sm:w-auto text-base backdrop-blur-sm">
                <PlayCircle className="mr-2 h-5 w-5" /> Ver Demonstração
              </Button>
            </motion.div>
          </motion.div>

          {/* MOCKUP GLASSMORPHISM HERO */}
          <motion.div 
            className="flex-1 w-full relative perspective-1000"
            initial={{ opacity: 0, x: 50, rotateY: 10 }}
            animate={{ opacity: 1, x: 0, rotateY: -5 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          >
            <div className="relative w-full aspect-square md:aspect-video lg:aspect-square max-w-[600px] mx-auto rotate-[-2deg] hover:rotate-0 transition-transform duration-700">
              <div className="absolute inset-0 bg-[#111111]/80 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl overflow-hidden flex flex-col">
                <div className="h-12 border-b border-white/10 flex items-center px-4 gap-2">
                  <div className="flex gap-1.5"><div className="h-3 w-3 rounded-full bg-red-500/80"/><div className="h-3 w-3 rounded-full bg-yellow-500/80"/><div className="h-3 w-3 rounded-full bg-green-500/80"/></div>
                  <div className="mx-auto bg-black/50 border border-white/5 h-6 w-1/3 rounded-full"></div>
                </div>
                <div className="flex-1 flex p-4 gap-4">
                  <div className="w-1/4 flex flex-col gap-3">
                    <div className="h-8 w-full bg-white/5 rounded-md"></div>
                    <div className="h-8 w-3/4 bg-white/5 rounded-md"></div>
                    <div className="h-8 w-full bg-white/5 rounded-md"></div>
                  </div>
                  <div className="flex-1 flex flex-col gap-4">
                    <div className="flex justify-between items-center">
                      <div className="h-10 w-1/3 bg-white/5 rounded-lg"></div>
                      <div className="h-10 w-10 bg-white/10 rounded-full"></div>
                    </div>
                    <div className="flex-1 bg-gradient-to-br from-[#0A232E]/50 to-transparent border border-cyan-900/30 rounded-xl p-4 flex flex-col justify-end">
                      <div className="w-full h-1/2 flex items-end gap-2">
                         <div className="flex-1 bg-[#D9F845]/80 h-[40%] rounded-t-sm"></div>
                         <div className="flex-1 bg-[#D9F845]/60 h-[70%] rounded-t-sm"></div>
                         <div className="flex-1 bg-[#D9F845] h-[90%] rounded-t-sm shadow-[0_0_15px_rgba(217,248,69,0.5)]"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <motion.div 
                className="absolute -right-12 bottom-12 w-64 p-4 bg-[#1A1A1A]/90 backdrop-blur-2xl border border-white/10 rounded-xl shadow-[0_20px_40px_rgba(0,0,0,0.5)]"
                animate={{ y: [0, -10, 0] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 bg-[#B052FF]/20 rounded-lg"><BrainCircuit className="h-4 w-4 text-[#B052FF]"/></div>
                  <span className="text-xs font-semibold text-zinc-300">Anamnese Ativa</span>
                </div>
                <div className="space-y-2">
                  <div className="h-2 w-full bg-white/10 rounded-full"></div>
                  <div className="h-2 w-4/5 bg-white/10 rounded-full"></div>
                  <div className="h-2 w-1/2 bg-[#D9F845] rounded-full shadow-[0_0_10px_rgba(217,248,69,0.4)]"></div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </section>

        {/* DIFERENCIAIS */}
        <section id="features" className="w-full max-w-7xl mx-auto px-6 py-24">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Arquitetura de Alta Performance</h2>
            <p className="text-zinc-400 max-w-2xl mx-auto">Construído para profissionais exigentes. Cada detalhe foi projetado para reduzir o atrito e elevar o padrão do seu atendimento.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: BrainCircuit, title: "Anamnese Inteligente", desc: "Questionários dinâmicos que se adaptam em tempo real baseados nas respostas do paciente." },
              { icon: Activity, title: "Consultas Online", desc: "Telemedicina integrada com alta qualidade de vídeo e segurança ponta a ponta." },
              { icon: Users, title: "Gestão Completa", desc: "Controle absoluto sobre equipe, pacientes, agenda e assinaturas da clínica." },
              { icon: Stethoscope, title: "Experiência do Paciente", desc: "Área exclusiva (web e mobile) para acesso a refeições, evolução e chat direto." },
              { icon: Zap, title: "Marketplace Integrado", desc: "Um ecossistema onde pacientes buscam, agendam e pagam consultas online." },
              { icon: Sparkles, title: "Automações PRO", desc: "Geração automática de lembretes, acompanhamento via WhatsApp e relatórios." }
            ].map((feat, i) => (
              <motion.div 
                key={i}
                initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
                className="group p-8 rounded-3xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] hover:border-white/10 transition-all duration-300 relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 p-8 opacity-0 group-hover:opacity-10 transition-opacity">
                  <feat.icon className="w-24 h-24 text-white" />
                </div>
                <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-white/10 to-transparent border border-white/10 flex items-center justify-center mb-6">
                  <feat.icon className="h-6 w-6 text-zinc-100" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-white">{feat.title}</h3>
                <p className="text-zinc-400 text-sm leading-relaxed relative z-10">{feat.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* COMO FUNCIONA (Timeline Horizontal) */}
        <section id="how-it-works" className="w-full max-w-7xl mx-auto px-6 py-24 border-t border-white/5">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Fluxo Perfeito. Zero Atrito.</h2>
          </div>
          <div className="flex flex-col md:flex-row items-start justify-between relative">
            <div className="hidden md:block absolute top-12 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent" />
            {[
              { step: "01", title: "Criação de Conta", desc: "Nutricionista configura a clínica e permissões da equipe em minutos." },
              { step: "02", title: "Onboarding do Paciente", desc: "Paciente entra via convite ou marketplace e responde a IA de pré-consulta." },
              { step: "03", title: "Acompanhamento Contínuo", desc: "Consultas, planos e chats acontecem em um ambiente seguro e elegante." }
            ].map((item, i) => (
              <div key={i} className="relative z-10 flex flex-col items-center text-center max-w-xs mx-auto mb-10 md:mb-0">
                <div className="h-24 w-24 rounded-full bg-[#050505] border-2 border-white/10 flex items-center justify-center mb-6 relative group">
                  <div className="absolute inset-0 bg-[#D9F845]/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                  <span className="text-2xl font-bold text-white relative z-10">{item.step}</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                <p className="text-zinc-400 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* SHOWCASE DOS PAINÉIS (Tabs Interativas) */}
        <section id="showcase" className="w-full max-w-7xl mx-auto px-6 py-24 bg-gradient-to-b from-transparent to-[#0A0A0A] rounded-[3rem] border border-white/5">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Um Ecossistema, Três Visões.</h2>
            <p className="text-zinc-400">Telas desenhadas obsessivamente para cada tipo de usuário.</p>
          </div>
          
          <Tabs defaultValue="nutri" className="w-full flex flex-col items-center">
            <TabsList className="bg-white/5 border border-white/10 rounded-full p-1 h-14 mb-12">
              <TabsTrigger value="admin" className="rounded-full px-6 text-sm data-[state=active]:bg-white/10 data-[state=active]:text-white text-zinc-400">Admin</TabsTrigger>
              <TabsTrigger value="nutri" className="rounded-full px-6 text-sm data-[state=active]:bg-[#D9F845] data-[state=active]:text-black text-zinc-400 font-medium">Nutricionista</TabsTrigger>
              <TabsTrigger value="paciente" className="rounded-full px-6 text-sm data-[state=active]:bg-white/10 data-[state=active]:text-white text-zinc-400">Paciente</TabsTrigger>
            </TabsList>
            
            <div className="w-full aspect-[16/9] max-w-5xl bg-[#111] rounded-2xl border border-white/10 overflow-hidden shadow-2xl relative">
              <div className="absolute top-0 left-0 w-full h-12 bg-[#1A1A1A] border-b border-white/5 flex items-center px-4 gap-2">
                 <div className="flex gap-1.5"><div className="h-3 w-3 rounded-full bg-zinc-600"/><div className="h-3 w-3 rounded-full bg-zinc-600"/><div className="h-3 w-3 rounded-full bg-zinc-600"/></div>
              </div>
              
              <TabsContent value="nutri" className="w-full h-full mt-0 pt-12 p-6 flex gap-6 bg-gradient-to-br from-[#111] to-[#0a1114]">
                <div className="w-48 hidden md:flex flex-col gap-2">
                  {[1,2,3,4,5].map(i => <div key={i} className={`h-8 rounded-md ${i===2 ? 'bg-[#D9F845]/20 border border-[#D9F845]/30' : 'bg-white/5'}`} />)}
                </div>
                <div className="flex-1 flex flex-col gap-4">
                  <div className="flex justify-between items-end"><h3 className="text-2xl font-semibold">Olá, Dra. Sarah</h3><div className="h-8 w-24 bg-white/10 rounded-full"/></div>
                  <div className="grid grid-cols-3 gap-4">
                    {[1,2,3].map(i => <div key={i} className="h-24 bg-white/5 rounded-xl border border-white/5 p-4 flex flex-col justify-between"><div className="h-4 w-1/2 bg-white/10 rounded"/><div className="h-8 w-3/4 bg-white/20 rounded"/></div>)}
                  </div>
                  <div className="flex-1 bg-white/5 rounded-xl border border-white/5 mt-4"></div>
                </div>
              </TabsContent>
              
              <TabsContent value="paciente" className="w-full h-full mt-0 pt-12 p-6 flex flex-col items-center justify-center bg-gradient-to-bl from-[#111] to-[#120a14]">
                 <div className="w-full max-w-md bg-white/5 rounded-2xl border border-white/10 p-6 flex flex-col gap-6">
                    <div className="flex items-center gap-4"><div className="h-16 w-16 rounded-full bg-white/10"/><div className="space-y-2"><div className="h-4 w-32 bg-white/20 rounded"/><div className="h-3 w-20 bg-[#D9F845]/50 rounded"/></div></div>
                    <div className="space-y-3">
                      <div className="h-12 w-full bg-white/5 rounded-lg flex items-center px-4 border border-white/5"><div className="h-4 w-1/3 bg-emerald-400/50 rounded"/></div>
                      <div className="h-12 w-full bg-white/5 rounded-lg flex items-center px-4 border border-white/5"><div className="h-4 w-1/2 bg-white/20 rounded"/></div>
                    </div>
                 </div>
              </TabsContent>

              <TabsContent value="admin" className="w-full h-full mt-0 pt-12 p-6 flex gap-6 bg-[#0a0a0a]">
                <div className="w-full h-full border border-white/5 bg-black/50 rounded-lg p-4 flex flex-col gap-4">
                  <div className="h-8 w-64 bg-white/10 rounded" />
                  <div className="flex-1 flex gap-4">
                    <div className="w-2/3 bg-white/5 rounded-md" />
                    <div className="w-1/3 bg-white/5 rounded-md" />
                  </div>
                </div>
              </TabsContent>
            </div>
          </Tabs>
        </section>

        {/* ANAMNESE IA */}
        <section id="anamnese" className="w-full max-w-7xl mx-auto px-6 py-32 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0A232E]/20 to-transparent pointer-events-none" />
          <div className="grid lg:grid-cols-2 gap-16 items-center relative z-10">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
              <Badge className="bg-[#B052FF]/20 text-[#D9B3FF] border-[#B052FF]/30 mb-6">Tecnologia Proprietária</Badge>
              <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">A primeira anamnese <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#B052FF] to-cyan-400">realmente inteligente.</span></h2>
              <p className="text-zinc-400 text-lg mb-8 leading-relaxed">
                Nossa engine de IA interpreta as respostas do paciente em tempo real, ramificando o questionário automaticamente. Coleta de dados profunda, personalizada e clinicamente assertiva, construindo correlações invisíveis a olho nu.
              </p>
              <ul className="space-y-5">
                {["Lógica Condicional Dinâmica (Se/Então)", "Mapeamento de Correlação de Sintomas", "Geração Automática de Hipóteses Diagnósticas"].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-zinc-300">
                    <div className="h-6 w-6 rounded-full bg-cyan-900/50 border border-cyan-500/30 flex items-center justify-center">
                      <CheckCircle2 className="h-3 w-3 text-cyan-400" />
                    </div>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
            
            <div className="relative h-[500px] w-full rounded-2xl border border-white/10 bg-[#050505] overflow-hidden flex items-center justify-center group shadow-[0_0_50px_rgba(10,35,46,0.5)]">
               <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] mix-blend-overlay"></div>
               <motion.div className="absolute p-4 bg-white/5 backdrop-blur-md border border-white/20 rounded-xl" animate={{ x: [-20, 0, -20], y: [-10, 10, -10] }} transition={{ duration: 6, repeat: Infinity }}>
                 <p className="text-xs text-zinc-400">Sintoma relatado:</p><p className="font-mono text-sm text-white">"Fadiga Vespertina"</p>
               </motion.div>
               <svg className="absolute w-full h-full opacity-30"><line x1="20%" y1="30%" x2="50%" y2="50%" stroke="#B052FF" strokeWidth="2" strokeDasharray="5,5" /></svg>
               <motion.div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-6 bg-[#0A232E] border border-cyan-500/30 rounded-2xl shadow-[0_0_30px_rgba(10,180,255,0.3)] z-10" animate={{ scale: [1, 1.05, 1] }} transition={{ duration: 3, repeat: Infinity }}>
                 <BrainCircuit className="h-10 w-10 text-cyan-400 mx-auto mb-2" />
                 <p className="text-center text-xs font-mono text-cyan-200">Processando Árvore Clínica...</p>
               </motion.div>
               <svg className="absolute w-full h-full opacity-30"><line x1="50%" y1="50%" x2="80%" y2="70%" stroke="#D9F845" strokeWidth="2" strokeDasharray="5,5" /></svg>
               <motion.div className="absolute right-[10%] bottom-[20%] p-4 bg-[#1a2f1c] border border-[#D9F845]/30 rounded-xl" animate={{ x: [20, 0, 20], y: [10, -10, 10] }} transition={{ duration: 5, repeat: Infinity }}>
                 <p className="text-xs text-[#D9F845]">Ação Ativada:</p><p className="font-mono text-sm text-white">Investigar Resistência à Insulina</p>
               </motion.div>
            </div>
          </div>
        </section>

        {/* PLANOS SAAS */}
        <section className="w-full max-w-7xl mx-auto px-6 py-24">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Escalabilidade para a sua operação.</h2>
            <p className="text-zinc-400 max-w-2xl mx-auto">Nossos planos acompanham o crescimento da sua clínica. Pague apenas pelo que utilizar.</p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8 items-stretch max-w-6xl mx-auto">
            
            {/* FYZEN CORE */}
            <div className="p-8 rounded-3xl bg-white/5 border border-white/10 flex flex-col h-full relative">
              <h3 className="text-xl font-bold mb-1 text-white">Fyzen Core</h3>
              <p className="text-sm text-zinc-400 mb-6">Organize seus atendimentos.</p>
              
              <div className="flex items-end gap-1 mb-2">
                <span className="text-4xl font-bold text-white">R$ 59,90</span>
                <span className="text-zinc-500 mb-1">/mês</span>
              </div>
              
              <div className="mb-6">
                <Badge className="bg-cyan-500/10 text-cyan-400 border-cyan-500/20 hover:bg-cyan-500/20 mb-2 font-medium">
                  R$ 29,90 nos 3 primeiros meses
                </Badge>
                <p className="text-xs text-zinc-500 flex items-center gap-1 mt-1">
                  Até 25 pacientes ativos <span className="inline-block px-1.5 py-0.5 rounded bg-white/5 border border-white/10 ml-1">+ R$ 3,00 /extra</span>
                </p>
              </div>

              <div className="flex-1">
                <p className="text-xs font-semibold tracking-wider text-zinc-500 uppercase mb-4">O que está incluso</p>
                <ul className="space-y-4 text-sm text-zinc-300">
                  <li className="flex items-start gap-3"><CheckCircle2 className="h-4 w-4 text-zinc-500 shrink-0 mt-0.5"/> 1 usuário (Nutricionista)</li>
                  <li className="flex items-start gap-3"><CheckCircle2 className="h-4 w-4 text-zinc-500 shrink-0 mt-0.5"/> Anamnese Padrão & Evolução</li>
                  <li className="flex items-start gap-3"><CheckCircle2 className="h-4 w-4 text-zinc-500 shrink-0 mt-0.5"/> Criação de Planos Alimentares</li>
                  <li className="flex items-start gap-3"><CheckCircle2 className="h-4 w-4 text-zinc-500 shrink-0 mt-0.5"/> Área do Paciente & Chat Básico</li>
                </ul>
              </div>
              <Button variant="outline" className="w-full bg-transparent border-white/20 hover:bg-white/10 text-white mt-8">Começar com Core</Button>
            </div>
            
            {/* FYZEN PRO (DESTAQUE) */}
            <div className="p-8 rounded-3xl bg-gradient-to-b from-[#111] to-[#050505] border border-[#D9F845]/50 flex flex-col h-full transform lg:scale-105 shadow-[0_0_40px_rgba(217,248,69,0.15)] relative z-10">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <Badge className="bg-[#D9F845] text-black hover:bg-[#D9F845] px-4 py-1 uppercase tracking-wider text-[10px] font-bold">Mais Escolhido</Badge>
              </div>
              
              <h3 className="text-xl font-bold mb-1 text-white">Fyzen Pro</h3>
              <p className="text-sm text-zinc-400 mb-6">Automatize e escale sua clínica.</p>
              
              <div className="flex items-end gap-1 mb-2">
                <span className="text-5xl font-extrabold text-white">R$ 149,90</span>
                <span className="text-zinc-500 mb-1">/mês</span>
              </div>
              
              <div className="mb-6">
                <Badge className="bg-[#D9F845]/10 text-[#D9F845] border-[#D9F845]/20 hover:bg-[#D9F845]/20 mb-2 font-medium">
                  🎁 7 dias grátis para testar
                </Badge>
                <div className="space-y-1.5 mt-1">
                  <p className="text-xs text-zinc-400 flex items-center justify-between">
                    Até 50 pacientes ativos <span className="inline-block px-1.5 py-0.5 rounded bg-white/10 border border-white/10">+ R$ 2,50 /extra</span>
                  </p>
                  <p className="text-xs text-zinc-400 flex items-center justify-between">
                    Até 3 usuários da equipe <span className="inline-block px-1.5 py-0.5 rounded bg-white/10 border border-white/10">+ R$ 24,90 /extra</span>
                  </p>
                </div>
              </div>

              <div className="flex-1">
                <p className="text-xs font-semibold tracking-wider text-[#D9F845] uppercase mb-4">Tudo do Core, e mais:</p>
                <ul className="space-y-4 text-sm font-medium text-white">
                  <li className="flex items-start gap-3"><CheckCircle2 className="h-4 w-4 text-[#D9F845] shrink-0 mt-0.5"/> Anamnese Inteligente (IA)</li>
                  <li className="flex items-start gap-3"><CheckCircle2 className="h-4 w-4 text-[#D9F845] shrink-0 mt-0.5"/> Consultas Online & Marketplace</li>
                  <li className="flex items-start gap-3"><CheckCircle2 className="h-4 w-4 text-[#D9F845] shrink-0 mt-0.5"/> Integração WhatsApp Oficial</li>
                  <li className="flex items-start gap-3"><CheckCircle2 className="h-4 w-4 text-[#D9F845] shrink-0 mt-0.5"/> Permissões: Recepção, Assistente e Financeiro</li>
                </ul>
              </div>
              <Button className="w-full bg-[#D9F845] hover:bg-[#c2e03b] text-black font-bold h-12 mt-8">Assinar Pro</Button>
            </div>

            {/* FYZEN CLINIC */}
            <div className="p-8 rounded-3xl bg-white/5 border border-white/10 flex flex-col h-full relative">
              <h3 className="text-xl font-bold mb-1 text-white">Fyzen Clinic</h3>
              <p className="text-sm text-zinc-400 mb-6">Operação profissional completa.</p>
              
              <div className="flex items-end gap-1 mb-2">
                <span className="text-4xl font-bold text-white">R$ 399</span>
                <span className="text-zinc-500 mb-1">/mês</span>
              </div>
              
              <div className="mb-6">
                <div className="h-7 mb-2"></div> {/* Espaçador invisível para manter alinhamento com os badges dos outros planos */}
                <p className="text-xs text-zinc-500 flex items-center gap-1 mt-1">
                  Pacientes e Usuários Ilimitados
                </p>
              </div>

              <div className="flex-1">
                <p className="text-xs font-semibold tracking-wider text-zinc-500 uppercase mb-4">Tudo do Pro, e mais:</p>
                <ul className="space-y-4 text-sm text-zinc-300">
                  <li className="flex items-start gap-3"><Plus className="h-4 w-4 text-cyan-400 shrink-0 mt-0.5"/> Múltiplos Nutricionistas</li>
                  <li className="flex items-start gap-3"><Plus className="h-4 w-4 text-cyan-400 shrink-0 mt-0.5"/> Múltiplas Unidades Físicas</li>
                  <li className="flex items-start gap-3"><Plus className="h-4 w-4 text-cyan-400 shrink-0 mt-0.5"/> Dashboards Empresariais & API</li>
                  <li className="flex items-start gap-3"><Plus className="h-4 w-4 text-cyan-400 shrink-0 mt-0.5"/> Suporte VIP & Gerente de Conta</li>
                </ul>
              </div>
              <Button variant="outline" className="w-full bg-transparent border-white/20 hover:bg-white/10 text-white mt-8">Falar com Vendas</Button>
            </div>
            
          </div>

          {/* BANNER DE AVISO PARA PACIENTES */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="mt-16 p-8 rounded-3xl bg-white/[0.03] border border-white/10 flex flex-col md:flex-row items-center justify-between max-w-5xl mx-auto shadow-2xl"
          >
            <div className="flex flex-col md:flex-row items-center gap-5 mb-6 md:mb-0 text-center md:text-left">
              <div className="h-14 w-14 rounded-full bg-cyan-950/50 border border-cyan-500/20 flex items-center justify-center shrink-0">
                <Users className="h-7 w-7 text-cyan-400" />
              </div>
              <div>
                <h4 className="text-xl font-bold text-white mb-2">E para os pacientes?</h4>
                <p className="text-sm text-zinc-400 max-w-xl">
                  O acesso à plataforma Nutri Fyzen é <strong className="text-zinc-200">100% gratuito</strong>. O paciente paga apenas o valor da consulta definido de forma independente por cada nutricionista dentro do nosso Marketplace.
                </p>
              </div>
            </div>
            <Link href="/cadastro?role=paciente" className="shrink-0 w-full md:w-auto">
              <Button variant="outline" className="w-full md:w-auto bg-transparent border-white/20 hover:bg-white/10 text-white h-12 px-6 rounded-xl">
                Encontrar Nutricionista
              </Button>
            </Link>
          </motion.div>
        </section>

        {/* FAQ */}
        <section className="w-full max-w-3xl mx-auto px-6 py-24 mb-20">
          <h2 className="text-3xl font-bold mb-10 text-center">Perguntas Frequentes</h2>
          <Accordion type="single" collapsible className="w-full space-y-4">
            <AccordionItem value="item-1" className="border border-white/10 bg-white/5 px-6 rounded-2xl data-[state=open]:bg-white/10 transition-colors">
              <AccordionTrigger className="hover:no-underline font-medium text-left">Como funciona o limite de pacientes ativos?</AccordionTrigger>
              <AccordionContent className="text-zinc-400 leading-relaxed pb-6">
                Um paciente "ativo" é aquele que está em acompanhamento contínuo no sistema. Pacientes inativados ou arquivados não contam no limite. Se você ultrapassar o limite do seu plano, não precisa fazer upgrade imediato: será cobrada apenas uma taxa avulsa (ex: R$ 2,50 a R$ 3,00) por paciente excedente no mês. O sistema escala junto com a sua demanda.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2" className="border border-white/10 bg-white/5 px-6 rounded-2xl data-[state=open]:bg-white/10 transition-colors">
              <AccordionTrigger className="hover:no-underline font-medium text-left">Como funciona a comissão do Marketplace?</AccordionTrigger>
              <AccordionContent className="text-zinc-400 leading-relaxed pb-6">
                Quando um paciente pesquisa, encontra o seu perfil e faz um pagamento de consulta diretamente pelo ecossistema do Nutri Fyzen, a plataforma retém uma pequena taxa percentual de comissionamento sobre esse agendamento específico pela captação. O restante do valor vai direto para a sua conta. Consultas agendadas diretamente por você com seus próprios pacientes não possuem essa taxa de captação.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3" className="border border-white/10 bg-white/5 px-6 rounded-2xl data-[state=open]:bg-white/10 transition-colors">
              <AccordionTrigger className="hover:no-underline font-medium text-left">Quais são as permissões da Equipe no plano Pro?</AccordionTrigger>
              <AccordionContent className="text-zinc-400 leading-relaxed pb-6">
                No Fyzen Pro, você pode convidar até 3 membros com acessos restritos: A <strong>Recepcionista</strong> controla apenas horários e mensagens, o <strong>Financeiro</strong> enxerga faturamentos e o <strong>Assistente</strong> auxilia na atualização de prontuários. Como proprietário, você continua com acesso total.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </section>

      </main>
    </div>
  )
}