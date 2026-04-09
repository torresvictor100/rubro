import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Layers, CheckCircle2, Bot, Workflow, Building2, PlugZap } from "lucide-react";
import { Button } from "./components/ui/button";
import { Card, CardContent } from "./components/ui/card";
import logoImage from "../img/logopng.png";
import heroVisual from "../img/3dc4f9eb-2def-4b8b-9d77-a5d8e73dd3e8.png";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const features = [
  {
    icon: Bot,
    title: "Agentes sob medida",
    text: "Criamos agentes configurados para operar dentro da realidade da empresa, conectados a sistemas, dados e processos internos.",
  },
  {
    icon: PlugZap,
    title: "Centralização de ferramentas",
    text: "Integramos ERPs, CRMs, APIs, documentos e bancos em uma única camada operacional inteligente.",
  },
  {
    icon: Workflow,
    title: "Integração com IA em aplicada",
    text: "Processos executados automaticamente com contexto, reduzindo esforço manual, erro e tempo.",
  },
  {
    icon: Layers,
    title: "Maestro de agentes",
    text: "Um agente central que cria, controla e monitora outros agentes, orquestrando fluxos e decisões dentro da operação.",
  },
  {
    icon: Building2,
    title: "Implantação corporativa",
    text: "Solução configurada para o ambiente do cliente: segurança, governança, integrações e escala.",
  },
];

const pillars = [
  {
    title: "Empresa de Integração em IA",
    description: "Vendemos resultado operacional: redução de custo, integração de sistemas e escala com IA aplicada.",
  },
  {
    title: "Tecnologia proprietária",
    description: "Nossa tecnologia permite centralizar ferramentas e configurar agentes que operam dentro do negócio.",
  },
  {
    title: "Entrega corporativa",
    description: "Implantação alinhada ao cliente: processos, times, sistemas, segurança e execução prática.",
  },
];

const stats = [
  { value: "IA + Agentes", label: "posicionamento" },
  { value: "B2B", label: "foco" },
  { value: "1 agente", label: "múltiplas integrações" },
  { value: "Sob medida", label: "implantação" },
];

export default function App() {
  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(180,0,0,0.28),transparent_28%),radial-gradient(circle_at_70%_20%,rgba(255,255,255,0.06),transparent_18%),linear-gradient(to_bottom,#050505,#090909,#000000)]" />
      </div>

      <header className="sticky top-0 z-50 border-b border-red-900/30 backdrop-blur-xl bg-black/45">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-red-600 p-1.5 shadow-[0_0_24px_rgba(220,38,38,0.35)]">
              <img src={logoImage} alt="Logo da Rubro Tecnologia" className="h-full w-full rounded-xl object-cover" />
            </div>
            <div> 
              <p className="text-sm text-zinc-400 tracking-[0.35em] uppercase leading-relaxed pb-1">Rubro Tecnologia</p>
              <p className="font-semibold text-lg">Integração com IA</p>
            </div>
          </div>

          <Button className="rounded-full px-6 bg-red-600 text-white hover:bg-red-700">
            Agendar uma conversa
          </Button>
        </div>
      </header>

      <main>
        <section className="relative pt-24 pb-24 lg:pt-32 lg:pb-32">
          <div className="max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-2 gap-14 items-center">
            <motion.div initial="hidden" animate="show" variants={fadeUp} className="space-y-8">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-zinc-300">
                <Sparkles className="h-4 w-4" />
                Empresa de Integração em IA • Recife, PE
              </div>

              <div className="space-y-5">
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight leading-[0.95]">
                  Sua operação está limitada.
                  <span className="block bg-gradient-to-r from-white via-zinc-300 to-red-500 bg-clip-text text-transparent">
                    A nossa tecnologia resolve isso.
                  </span>
                </h1>
                <p className="text-lg md:text-xl text-zinc-300 max-w-2xl leading-relaxed">
                  A Rubro Tecnologia, baseada em Recife, implementa Integração com IA para reduzir custo, integrar sistemas e escalar operações empresariais.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="rounded-full px-7 h-12 text-base bg-red-600 text-white hover:bg-red-700">
                  Agendar uma conversa
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button size="lg" variant="outline" className="rounded-full px-7 h-12 text-base border-white/20 bg-white/5 hover:bg-white/10">
                  Em breve
                </Button>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-4">
                {stats.map((item) => (
                  <div key={item.label} className="rounded-2xl border border-white/10 bg-white/5 p-4">
                    <p className="text-2xl font-semibold">{item.value}</p>
                    <p className="text-sm text-zinc-400 mt-1">{item.label}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="relative"
            >
              <div className="absolute -inset-8 bg-red-900/20 blur-3xl rounded-full" />
              <div className="relative rounded-[2rem] border border-white/10 bg-white/5 backdrop-blur-2xl shadow-2xl overflow-hidden">
                <div className="border-b border-white/10 p-4 flex items-center gap-2">
                  <div className="h-3 w-3 rounded-full bg-red-500" />
                  <div className="h-3 w-3 rounded-full bg-zinc-500" />
                  <div className="h-3 w-3 rounded-full bg-zinc-700" />
                  <p className="text-xs text-zinc-400 ml-3">Control Layer</p>
                </div>

                <div className="p-6 lg:p-8 space-y-6">
                  <div className="rounded-[1.5rem] bg-gradient-to-br from-zinc-900 to-black border border-white/10 p-6 min-h-[220px] flex flex-col justify-between">
                    <div>
                      <p className="text-xs uppercase tracking-[0.35em] text-zinc-500">Camada central</p>
                      <h3 className="text-2xl font-semibold mt-3 max-w-md">Um agente central controlando outros agentes e integrando sistemas</h3>
                      <p className="text-zinc-400 mt-3 max-w-lg">
                        Representação do maestro de agentes: criação, controle e monitoramento de múltiplos agentes em uma única camada.
                      </p>
                    </div>
                    <div className="mt-6 overflow-hidden rounded-2xl border border-white/10 bg-black/30">
                      <img
                        src={heroVisual}
                        alt="Visual da camada central de agentes"
                        className="h-48 w-full object-cover"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="rounded-[1.5rem] border border-white/10 bg-white/[0.04] p-5">
                      <p className="text-sm text-zinc-400">Fluxo</p>
                      <p className="text-lg font-medium mt-2">Ferramentas → agentes → maestro → automação</p>
                    </div>
                    <div className="rounded-[1.5rem] border border-white/10 bg-white/[0.04] p-5">
                      <p className="text-sm text-zinc-400">Posicionamento</p>
                      <p className="text-lg font-medium mt-2">Integração com IA aplicada ao negócio</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <section id="produto" className="py-20 lg:py-28 border-t border-white/10">
          <div className="max-w-7xl mx-auto px-6 lg:px-10">
            <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.3 }} variants={fadeUp} className="max-w-3xl mb-14">
              <p className="text-sm uppercase tracking-[0.35em] text-red-400">Solução</p>
              <h2 className="text-4xl md:text-5xl font-semibold mt-4 tracking-tight">Integração com IA para reduzir custo e escalar operação</h2>
              <p className="text-zinc-400 text-lg mt-5 leading-relaxed">
                Implementamos agentes que executam processos, integram sistemas e operam dentro do negócio.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-6">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <motion.div
                    key={feature.title}
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.6, delay: index * 0.08 }}
                  >
                    <Card className="h-full rounded-[2rem] border-white/10 bg-white/[0.04] backdrop-blur-xl shadow-xl">
                      <CardContent className="p-8">
                        <div className="h-12 w-12 rounded-2xl bg-white/8 border border-white/10 flex items-center justify-center mb-6">
                          <Icon className="h-6 w-6 text-red-400" />
                        </div>
                        <h3 className="text-2xl font-semibold mb-4">{feature.title}</h3>
                        <p className="text-zinc-400 leading-relaxed text-base">{feature.text}</p>
                      </CardContent>
                    </Card>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        <section id="valor" className="py-20 lg:py-28">
          <div className="max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-[1.1fr_0.9fr] gap-10 items-start">
            <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} variants={fadeUp}>
              <p className="text-sm uppercase tracking-[0.35em] text-red-400">Valor</p>
              <h2 className="text-4xl md:text-5xl font-semibold mt-4 tracking-tight">Resolver operação, integração e escala</h2>
              <p className="text-zinc-400 text-lg mt-5 max-w-2xl leading-relaxed">
                Empresas precisam reduzir custo, integrar sistemas e operar com mais eficiência.
              </p>

              <div className="mt-10 space-y-5">
                {pillars.map((pillar) => (
                  <div key={pillar.title} className="rounded-[1.75rem] border border-white/10 bg-white/[0.03] p-6">
                    <h3 className="text-xl font-semibold">{pillar.title}</h3>
                    <p className="text-zinc-400 mt-3 leading-relaxed">{pillar.description}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div className="rounded-[2rem] border border-white/10 p-8">
              <h3 className="text-2xl font-semibold">Por que contratar</h3>
              <div className="mt-6 space-y-4">
                {[
                  "Reduzir custo operacional",
                  "Automatizar processos críticos",
                  "Integrar sistemas",
                  "Escalar sem aumentar equipe",
                ].map((item) => (
                  <div key={item} className="flex gap-3">
                    <CheckCircle2 className="text-red-400" />
                    <p>{item}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        <section className="py-20 text-center">
          <h2 className="text-4xl font-semibold">Decisão executiva</h2>
          <p className="text-zinc-400 mt-4">Empresas que resolvem operação primeiro, escalam antes.</p>
          <div className="mt-8 flex justify-center gap-4">
            <Button className="bg-red-600 text-white px-6">Agendar uma conversa</Button>
            <Button variant="outline" className="px-6">Em breve</Button>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10 py-10 text-center text-zinc-500">
        Rubro Tecnologia • Recife, PE
      </footer>
    </div>
  );
}
