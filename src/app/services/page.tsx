import { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { WhatsAppButton } from '@/components/WhatsAppButton';
import { 
  Workflow, 
  Globe, 
  Smartphone, 
  TrendingUp, 
  Check, 
  ArrowRight, 
  Layers, 
  Settings,
  Sparkles
} from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Nossos Serviços | Eleven — CRM, Sites, Apps e Marketing Digital',
  description:
    'Desenvolvemos ecossistemas digitais de alta performance: criação de sites profissionais, aplicativos web/mobile (SaaS), automação de CRM e marketing de crescimento.',
  keywords: [
    'desenvolvimento de aplicativos',
    'criação de sites profissionais',
    'CRM sob medida',
    'automação de marketing',
    'agência de growth',
    'tráfego pago Google Ads',
    'tráfego pago Meta Ads',
    'consultoria SEO',
    'Eleven soluções digitais',
  ],
  openGraph: {
    title: 'Nossos Serviços | Eleven — CRM, Sites, Apps e Marketing Digital',
    description:
      'Desenvolvemos ecossistemas digitais de alta performance: criação de sites profissionais, aplicativos web/mobile (SaaS), automação de CRM e marketing de crescimento.',
    url: 'https://elevenweb.dev/services',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Nossos Serviços | Eleven — CRM, Sites, Apps e Marketing Digital',
    description:
      'Desenvolvemos ecossistemas digitais de alta performance: criação de sites profissionais, aplicativos web/mobile (SaaS), automação de CRM e marketing de crescimento.',
  },
};

const servicesList = [
  {
    id: 'crm',
    name: 'CRM & Automações',
    tagline: 'Eficiência Operacional',
    description: 'Centralize dados de clientes, integre canais de atendimento e elimine tarefas manuais repetitivas para otimizar o tempo e as vendas de sua equipe.',
    icon: Workflow,
    color: 'amber' as const,
    features: [
      'Integração e parametrização de HubSpot & Salesforce',
      'Configuração de funis de vendas e réguas automáticas',
      'Automação de alertas, mensagens de WhatsApp e E-mails',
      'Dashboards comerciais em tempo real para tomada de decisão',
      'Integração de APIs de pagamento, checkout e faturamento',
      'Treinamento e onboarding completo para equipes comerciais',
    ],
    tech: ['HubSpot', 'Salesforce', 'n8n', 'Zapier', 'ActiveCampaign'],
  },
  {
    id: 'sites',
    name: 'Sites & Landing Pages',
    tagline: 'Alta Conversão',
    description: 'Criação de sites corporativos e páginas de vendas ultra-rápidas. Foco total em design premium, velocidade de carregamento e otimização para SEO.',
    icon: Globe,
    color: 'blue' as const,
    features: [
      'Sites construídos em React/Next.js de alta performance',
      'Otimização Core Web Vitals (Pontuações nota máxima no PageSpeed)',
      'SEO Técnico avançado para ranqueamento na primeira página',
      'Copywriting estratégico voltado para captação de leads',
      'Configuração profissional de Analytics, GTM e tags de conversão',
      'Gestores de Conteúdo (CMS) fáceis e intuitivos de atualizar',
    ],
    tech: ['Next.js', 'React', 'Tailwind CSS', 'TypeScript', 'Prismic / WordPress'],
  },
  {
    id: 'apps',
    name: 'Aplicativos & Sistemas SaaS',
    tagline: 'Inovação & Escala',
    description: 'Desenvolvimento de softwares sob medida, plataformas web robustas e aplicativos mobile. Arquitetura moderna pronta para suportar milhares de usuários.',
    icon: Smartphone,
    color: 'purple' as const,
    features: [
      'Sistemas Web (SaaS) com controle de assinaturas e acessos',
      'Aplicativos móveis iOS e Android híbridos (alto desempenho)',
      'Arquiteturas Cloud modernas (AWS, Vercel, Supabase)',
      'Portais do cliente exclusivos, dashboards e áreas de membros',
      'Desenvolvimento de APIs REST ou GraphQL robustas',
      'Prototipagem de telas (Figma UX/UI) antes da codificação',
    ],
    tech: ['React Native', 'Node.js', 'PostgreSQL', 'Vite', 'GraphQL'],
  },
  {
    id: 'marketing',
    name: 'Marketing Digital & Growth',
    tagline: 'Tráfego Pago & ROI',
    description: 'Campanhas inteligentes focadas na atração de leads qualificados. Gerenciamento profissional de anúncios com análise diária de métricas.',
    icon: TrendingUp,
    color: 'emerald' as const,
    features: [
      'Gestão de tráfego pago no Google Ads (Busca, YouTube, Display)',
      'Gestão de tráfego pago no Meta Ads (Instagram e Facebook)',
      'Instalação de rastreamento profissional (Pixel, CAPI e UTMs)',
      'Estratégias de Inbound Marketing e automação de nutrição',
      'Relatórios transparentes de ROI (Retorno sobre Investimento)',
      'Otimização de taxa de conversão (CRO) e testes A/B',
    ],
    tech: ['Google Ads', 'Meta Ads', 'GA4', 'GTM', 'RD Station'],
  },
];

const colorThemes = {
  amber: {
    bg: 'bg-amber-50 dark:bg-amber-950/20',
    text: 'text-amber-700 dark:text-amber-400',
    border: 'group-hover:from-amber-500 group-hover:to-orange-500',
    iconBg: 'bg-gradient-to-br from-amber-500 to-orange-500',
    shadow: 'hover:shadow-amber-500/10 focus-within:ring-amber-500',
    badgeBg: 'bg-amber-50 dark:bg-amber-950/40 text-amber-700 dark:text-amber-400 border-amber-200/40 dark:border-amber-900/30',
    glow: 'bg-amber-400/5',
  },
  blue: {
    bg: 'bg-blue-50 dark:bg-blue-950/20',
    text: 'text-blue-700 dark:text-blue-400',
    border: 'group-hover:from-blue-500 group-hover:to-indigo-500',
    iconBg: 'bg-gradient-to-br from-blue-500 to-indigo-500',
    shadow: 'hover:shadow-blue-500/10 focus-within:ring-blue-500',
    badgeBg: 'bg-blue-50 dark:bg-blue-950/40 text-blue-700 dark:text-blue-400 border-blue-200/40 dark:border-blue-900/30',
    glow: 'bg-blue-400/5',
  },
  purple: {
    bg: 'bg-purple-50 dark:bg-purple-950/20',
    text: 'text-purple-700 dark:text-purple-400',
    border: 'group-hover:from-purple-500 group-hover:to-violet-500',
    iconBg: 'bg-gradient-to-br from-purple-500 to-violet-500',
    shadow: 'hover:shadow-purple-500/10 focus-within:ring-purple-500',
    badgeBg: 'bg-purple-50 dark:bg-purple-950/40 text-purple-700 dark:text-purple-400 border-purple-200/40 dark:border-purple-900/30',
    glow: 'bg-purple-400/5',
  },
  emerald: {
    bg: 'bg-emerald-50 dark:bg-emerald-950/20',
    text: 'text-emerald-700 dark:text-emerald-400',
    border: 'group-hover:from-emerald-500 group-hover:to-teal-500',
    iconBg: 'bg-gradient-to-br from-emerald-500 to-teal-500',
    shadow: 'hover:shadow-emerald-500/10 focus-within:ring-emerald-500',
    badgeBg: 'bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-400 border-emerald-200/40 dark:border-emerald-900/30',
    glow: 'bg-emerald-400/5',
  },
};

export default function ServicesPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 transition-colors duration-300 relative overflow-hidden">
        {/* Ambient background glows */}
        <div 
          className="absolute inset-0 bg-[linear-gradient(to_right,rgba(99,102,241,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(99,102,241,0.02)_1px,transparent_1px)] bg-[size:5rem_5rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" 
          aria-hidden="true" 
        />
        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-3xl pointer-events-none" aria-hidden="true" />
        
        <div className="max-w-7xl mx-auto px-6 py-28 relative z-10">
          {/* Page Header */}
          <div className="text-center mb-20">
            <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 dark:bg-blue-950/50 border border-blue-200/30 dark:border-blue-900/40 text-blue-600 dark:text-blue-400 text-xs font-semibold uppercase tracking-wider mb-6">
              <Sparkles className="w-3.5 h-3.5 text-blue-500 animate-pulse" />
              Nossas Frentes de Atuação
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 dark:text-white mb-6 tracking-tight leading-tight">
              Soluções modernas para<br className="hidden sm:block" />
              <span className="bg-gradient-to-r from-blue-600 to-indigo-500 dark:from-blue-400 dark:to-indigo-400 bg-clip-text text-transparent">
                otimizar e escalar
              </span> seu negócio
            </h1>
            <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
              Desenvolvemos softwares sob medida, integramos automações de CRM inteligentes e estruturamos funis de marketing digital focados no seu faturamento.
            </p>
          </div>

          {/* Detailed Services Grid */}
          <div className="space-y-12 mb-28">
            {servicesList.map((service) => {
              const theme = colorThemes[service.color];
              const Icon = service.icon;
              return (
                <section
                  key={service.id}
                  id={service.id}
                  className="group relative p-[1px] rounded-3xl transition-all duration-500 hover:shadow-3xl focus-within:ring-2 focus-within:ring-offset-2 hover:-translate-y-1"
                >
                  {/* Glowing dynamic border on hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br from-slate-200/80 to-slate-200/40 dark:from-slate-800/80 dark:to-slate-800/40 rounded-3xl transition-all duration-500 ${theme.border}`} />
                  
                  {/* Content box */}
                  <div className="relative bg-white dark:bg-slate-900 p-8 sm:p-10 rounded-[23px] overflow-hidden">
                    {/* Corner glow */}
                    <div className={`absolute -top-10 -right-10 w-44 h-44 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none ${theme.glow}`} />

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                      {/* Left: Metadata and Intro */}
                      <div className="lg:col-span-5 flex flex-col justify-between h-full">
                        <div>
                          <div className="flex items-center gap-4 mb-6">
                            <div className={`w-14 h-14 ${theme.iconBg} rounded-2xl flex items-center justify-center text-white shadow-lg`}>
                              <Icon className="w-6 h-6" />
                            </div>
                            <div>
                              <span className={`text-[11px] sm:text-xs uppercase font-bold tracking-wider px-2.5 py-1 rounded-full border ${theme.badgeBg}`}>
                                {service.tagline}
                              </span>
                              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white mt-1">
                                {service.name}
                              </h2>
                            </div>
                          </div>
                          
                          <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-base sm:text-lg mb-8">
                            {service.description}
                          </p>
                        </div>

                        {/* Tech pills */}
                        <div>
                          <span className="text-xs font-semibold text-slate-400 uppercase tracking-widest block mb-3">Tecnologias & Ferramentas</span>
                          <div className="flex flex-wrap gap-2">
                            {service.tech.map((t) => (
                              <span key={t} className="text-xs sm:text-sm bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 px-3 py-1.5 rounded-lg border border-slate-200/30 dark:border-slate-700/30 font-medium">
                                {t}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* Right: Feature Checklist */}
                      <div className="lg:col-span-7 bg-slate-50/50 dark:bg-slate-900/50 p-6 sm:p-8 rounded-2xl border border-slate-100 dark:border-slate-800 flex flex-col justify-between h-full">
                        <div>
                          <h3 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider mb-5">O que está incluso no escopo:</h3>
                          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {service.features.map((feature, idx) => (
                              <li key={idx} className="flex items-start gap-3 text-sm sm:text-base text-slate-600 dark:text-slate-300">
                                <span className={`flex-shrink-0 w-5 h-5 rounded-full ${theme.iconBg} flex items-center justify-center text-white p-1 mt-0.5`}>
                                  <Check className="w-3 h-3" />
                                </span>
                                <span>{feature}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* CTA Inside the card */}
                        <div className="mt-8 pt-6 border-t border-slate-200/50 dark:border-slate-800/80 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                          <span className="text-xs text-slate-500">Desenvolvimento ágil com entrega planejada em etapas.</span>
                          <Link href="/start">
                            <div className="inline-flex items-center gap-2 bg-slate-900 hover:bg-slate-800 dark:bg-slate-100 dark:hover:bg-slate-200 text-white dark:text-slate-900 px-5 py-2.5 rounded-xl text-sm font-bold shadow-md transition-all">
                              Solicitar Proposta
                              <ArrowRight className="w-4 h-4" />
                            </div>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
              );
            })}
          </div>

          {/* Engagement Models (How we charge/work) */}
          <div className="mb-24">
            <div className="text-center mb-16">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 dark:bg-indigo-950/50 border border-indigo-200/30 dark:border-indigo-900/40 text-indigo-600 dark:text-indigo-400 text-xs font-semibold uppercase tracking-wider mb-3">
                <Layers className="w-3.5 h-3.5" />
                Como Cooperamos
              </span>
              <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white">
                Modelos de Engajamento Flexíveis
              </h2>
              <p className="text-slate-600 dark:text-slate-400 mt-3 max-w-xl mx-auto">
                Adaptamos nossa forma de trabalho de acordo com a maturidade e a necessidade técnica da sua empresa.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {/* Model 1 */}
              <div className="bg-white dark:bg-slate-900 p-8 rounded-3xl border border-slate-200/50 dark:border-slate-800/80 shadow-sm relative overflow-hidden flex flex-col justify-between">
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-blue-500/10 to-transparent pointer-events-none" />
                <div>
                  <div className="w-12 h-12 bg-blue-50 dark:bg-blue-950/40 text-blue-600 rounded-xl flex items-center justify-center mb-6">
                    <Settings className="w-6 h-6" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">
                    Projetos Customizados (Escopo Fechado)
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400 text-base leading-relaxed mb-6">
                    Ideal para o desenvolvimento do zero de Sites Institucionais, Landing Pages, novos Aplicativos Web/Mobile ou implantações completas de CRM.
                  </p>
                  <ul className="space-y-3 mb-8">
                    {[
                      'Cronograma e prazo de entrega definidos',
                      'Protótipo navegável aprovado antes da programação',
                      'Garantia de 3 meses pós-lançamento e suporte gratuito',
                      'Pagamento facilitado por marcos de entrega (milestones)'
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-sm sm:text-base text-slate-600 dark:text-slate-400">
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <Link href="/start" className="w-full">
                  <div className="w-full bg-blue-600 hover:bg-blue-700 text-white text-center py-3 rounded-xl font-semibold text-base transition-colors cursor-pointer">
                    Iniciar Projeto
                  </div>
                </Link>
              </div>

              {/* Model 2 */}
              <div className="bg-white dark:bg-slate-900 p-8 rounded-3xl border border-slate-200/50 dark:border-slate-800/80 shadow-sm relative overflow-hidden flex flex-col justify-between">
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-emerald-500/10 to-transparent pointer-events-none" />
                <div>
                  <div className="w-12 h-12 bg-emerald-50 dark:bg-emerald-950/40 text-emerald-600 rounded-xl flex items-center justify-center mb-6">
                    <TrendingUp className="w-6 h-6" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">
                    Retainer Mensal (Growth & Evolução)
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400 text-base leading-relaxed mb-6">
                    Ideal para campanhas de Marketing Digital contínuas, otimizações recorrentes de SEO, evolução de sistemas SaaS e suporte sob demanda.
                  </p>
                  <ul className="space-y-3 mb-8">
                    {[
                      'Squad dedicada com horas contratadas por mês',
                      'Reuniões de alinhamento e reports semanais de ROI',
                      'Flexibilidade para ajustar prioridades a qualquer momento',
                      'Sem multa rescisória após o período mínimo de maturação'
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-sm sm:text-base text-slate-600 dark:text-slate-400">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-2 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <Link href="/start" className="w-full">
                  <div className="w-full bg-emerald-600 hover:bg-emerald-700 text-white text-center py-3 rounded-xl font-semibold text-base transition-colors cursor-pointer">
                    Contratar Retainer
                  </div>
                </Link>
              </div>
            </div>
          </div>

          {/* Process Walkthrough Banner */}
          <div className="bg-gradient-to-br from-slate-900 to-indigo-950 text-white p-8 sm:p-12 rounded-3xl border border-slate-800 shadow-xl max-w-4xl mx-auto text-center relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full bg-grid-pattern opacity-10 pointer-events-none" />
            <h2 className="text-2xl sm:text-3xl font-extrabold mb-4 relative z-10">
              Quer saber como entregamos com qualidade?
            </h2>
            <p className="text-indigo-200 mb-8 max-w-2xl mx-auto text-sm sm:text-base relative z-10">
              Conheça nossa metodologia estruturada, desde o alinhamento da ideia inicial, passando pela prototipagem até o lançamento oficial e suporte contínuo.
            </p>
            <Link href="/process" className="relative z-10 inline-flex items-center gap-2 bg-white hover:bg-slate-100 text-slate-900 px-6 py-3 rounded-xl font-bold transition-all shadow-lg hover:shadow-white/10">
              Conhecer Nosso Processo
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </main>
      <WhatsAppButton />
      <Footer />
    </>
  );
}
