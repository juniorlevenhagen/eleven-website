import { Poppins } from "next/font/google";
import Link from "next/link";
import { Workflow, Globe, Smartphone, TrendingUp, ArrowRight, Sparkles } from "lucide-react";

export const poppins = Poppins({
  weight: ["400", "600", "700"],
  subsets: ["latin"],
});

export const Services = () => {
  return (
    <section 
      className="relative py-24 px-8 bg-slate-50/50 dark:bg-slate-950 overflow-hidden" 
      aria-labelledby="services-heading"
    >
      {/* Decorative Grid & Glow Elements */}
      <div 
        className="absolute inset-0 bg-[linear-gradient(to_right,rgba(99,102,241,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(99,102,241,0.04)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" 
        aria-hidden="true" 
      />
      <div 
        className="absolute top-0 left-1/4 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl animate-pulse pointer-events-none" 
        style={{ animationDuration: "10s" }}
        aria-hidden="true" 
      />
      <div 
        className="absolute bottom-0 right-1/4 w-96 h-96 bg-indigo-400/10 rounded-full blur-3xl animate-pulse pointer-events-none" 
        style={{ animationDuration: "12s" }}
        aria-hidden="true" 
      />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          {/* Eyebrow badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-950/40 border border-blue-200/50 dark:border-blue-900/30 text-blue-700 dark:text-blue-400 text-xs font-semibold mb-4 uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-blue-500 animate-spin" style={{ animationDuration: "8s" }} />
            O que fazemos de melhor
          </div>

          <h2
            id="services-heading"
            className={`text-3.5xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight max-w-3xl mx-auto leading-tight mb-4 ${poppins.className}`}
          >
            Soluções completas em{" "}
            <span className="bg-gradient-to-r from-blue-600 to-indigo-500 dark:from-blue-400 dark:to-indigo-400 bg-clip-text text-transparent">
              tecnologia e marketing
            </span>{" "}
            para escalar seu negócio
          </h2>
          
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-base sm:text-lg">
            Do desenvolvimento de softwares sob medida à atração de clientes qualificados. Conectamos sua marca ao ecossistema digital ideal.
          </p>
        </div>

        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          role="list"
        >
          {/* Card 1: CRM & Automações */}
          <article
            className="group relative p-[1px] rounded-2xl transition-all duration-500 hover:shadow-2xl hover:shadow-amber-500/10 focus-within:ring-2 focus-within:ring-amber-500 focus-within:ring-offset-2 hover:-translate-y-2"
            role="listitem"
            tabIndex={0}
          >
            {/* Gradient border on hover */}
            <div className="absolute inset-0 bg-gradient-to-br from-slate-200/60 to-slate-200/30 dark:from-slate-800/60 dark:to-slate-800/30 rounded-2xl group-hover:from-amber-500 group-hover:to-orange-500 transition-all duration-500" />
            
            {/* Card Content */}
            <div className="relative h-full bg-white dark:bg-slate-900 p-6 sm:p-8 rounded-[15px] flex flex-col justify-between overflow-hidden">
              {/* Blur Spot */}
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-amber-400/10 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              
              <div>
                {/* Header Row */}
                <div className="flex justify-between items-start mb-6">
                  {/* Icon */}
                  <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-orange-500 rounded-xl flex items-center justify-center text-white shadow-lg shadow-amber-500/20 group-hover:scale-110 group-hover:-translate-y-1 transition-all duration-300">
                    <Workflow className="w-5 h-5" />
                  </div>
                  {/* Badge */}
                  <span className="text-[10px] uppercase tracking-wider font-semibold px-2.5 py-1 bg-amber-50 dark:bg-amber-950/40 text-amber-700 dark:text-amber-400 rounded-full border border-amber-200/40 dark:border-amber-900/30">
                    Eficiência
                  </span>
                </div>

                {/* Title */}
                <h3 className={`text-2xl font-bold text-slate-900 dark:text-white mb-3 ${poppins.className}`}>
                  CRM & Automações
                </h3>

                {/* Description */}
                <p className="text-slate-600 dark:text-slate-400 text-base leading-relaxed mb-6">
                  Centralize seus clientes e elimine tarefas manuais. Integramos plataformas líderes (HubSpot, Salesforce) ou criamos seu próprio CRM sob medida.
                </p>

                {/* Feature checklist */}
                <ul className="space-y-2.5 mb-8">
                  {[
                    "Sincronização automática de leads",
                    "Disparos e réguas de WhatsApp/E-mail",
                    "Dashboards comerciais em tempo real",
                    "Otimização de processos internos",
                  ].map((feat, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                      {feat}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action / Link */}
              <Link 
                href="/services#crm" 
                className="inline-flex items-center gap-2 text-sm font-semibold text-amber-600 dark:text-amber-400 hover:text-amber-700 dark:hover:text-amber-300 transition-colors group/link mt-auto"
              >
                Saber Mais 
                <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
              </Link>
            </div>
          </article>

          {/* Card 2: Sites & Landing Pages */}
          <article
            className="group relative p-[1px] rounded-2xl transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/10 focus-within:ring-2 focus-within:ring-blue-500 focus-within:ring-offset-2 hover:-translate-y-2"
            role="listitem"
            tabIndex={0}
          >
            {/* Gradient border on hover */}
            <div className="absolute inset-0 bg-gradient-to-br from-slate-200/60 to-slate-200/30 dark:from-slate-800/60 dark:to-slate-800/30 rounded-2xl group-hover:from-blue-500 group-hover:to-indigo-500 transition-all duration-500" />
            
            {/* Card Content */}
            <div className="relative h-full bg-white dark:bg-slate-900 p-6 sm:p-8 rounded-[15px] flex flex-col justify-between overflow-hidden">
              {/* Blur Spot */}
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-blue-400/10 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              
              <div>
                {/* Header Row */}
                <div className="flex justify-between items-start mb-6">
                  {/* Icon */}
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-xl flex items-center justify-center text-white shadow-lg shadow-blue-500/20 group-hover:scale-110 group-hover:-translate-y-1 transition-all duration-300">
                    <Globe className="w-5 h-5" />
                  </div>
                  {/* Badge */}
                  <span className="text-[10px] uppercase tracking-wider font-semibold px-2.5 py-1 bg-blue-50 dark:bg-blue-950/40 text-blue-700 dark:text-blue-400 rounded-full border border-blue-200/40 dark:border-blue-900/30">
                    Conversão
                  </span>
                </div>

                {/* Title */}
                <h3 className={`text-2xl font-bold text-slate-900 dark:text-white mb-3 ${poppins.className}`}>
                  Sites & Landing Pages
                </h3>

                {/* Description */}
                <p className="text-slate-600 dark:text-slate-400 text-base leading-relaxed mb-6">
                  Websites e landing pages ultra-velozes, com design memorável e pensados estrategicamente para converter o visitante em cliente.
                </p>

                {/* Feature checklist */}
                <ul className="space-y-2.5 mb-8">
                  {[
                    "Next.js e otimização Core Web Vitals",
                    "SEO de ponta para o Google",
                    "Design exclusivo e responsivo",
                    "Integração rápida de leads e analytics",
                  ].map((feat, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                      {feat}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action / Link */}
              <Link 
                href="/services#sites" 
                className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors group/link mt-auto"
              >
                Saber Mais 
                <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
              </Link>
            </div>
          </article>

          {/* Card 3: Aplicativos Web & Mobile */}
          <article
            className="group relative p-[1px] rounded-2xl transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/10 focus-within:ring-2 focus-within:ring-purple-500 focus-within:ring-offset-2 hover:-translate-y-2"
            role="listitem"
            tabIndex={0}
          >
            {/* Gradient border on hover */}
            <div className="absolute inset-0 bg-gradient-to-br from-slate-200/60 to-slate-200/30 dark:from-slate-800/60 dark:to-slate-800/30 rounded-2xl group-hover:from-purple-500 group-hover:to-violet-500 transition-all duration-500" />
            
            {/* Card Content */}
            <div className="relative h-full bg-white dark:bg-slate-900 p-6 sm:p-8 rounded-[15px] flex flex-col justify-between overflow-hidden">
              {/* Blur Spot */}
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-purple-400/10 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              
              <div>
                {/* Header Row */}
                <div className="flex justify-between items-start mb-6">
                  {/* Icon */}
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-violet-500 rounded-xl flex items-center justify-center text-white shadow-lg shadow-purple-500/20 group-hover:scale-110 group-hover:-translate-y-1 transition-all duration-300">
                    <Smartphone className="w-5 h-5" />
                  </div>
                  {/* Badge */}
                  <span className="text-[10px] uppercase tracking-wider font-semibold px-2.5 py-1 bg-purple-50 dark:bg-purple-950/40 text-purple-700 dark:text-purple-400 rounded-full border border-purple-200/40 dark:border-purple-900/30">
                    Sistemas
                  </span>
                </div>

                {/* Title */}
                <h3 className={`text-2xl font-bold text-slate-900 dark:text-white mb-3 ${poppins.className}`}>
                  Apps & Sistemas SaaS
                </h3>

                {/* Description */}
                <p className="text-slate-600 dark:text-slate-400 text-base leading-relaxed mb-6">
                  Desenvolvimento de softwares sob medida, plataformas web robustas (SaaS), painéis internos e aplicativos móveis modernos (iOS e Android).
                </p>

                {/* Feature checklist */}
                <ul className="space-y-2.5 mb-8">
                  {[
                    "Arquitetura moderna e escalável",
                    "Integrações de APIs e pagamentos",
                    "Painéis administrativos avançados",
                    "Segurança e criptografia de dados",
                  ].map((feat, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400">
                      <span className="w-1.5 h-1.5 rounded-full bg-purple-500" />
                      {feat}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action / Link */}
              <Link 
                href="/services#apps" 
                className="inline-flex items-center gap-2 text-sm font-semibold text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300 transition-colors group/link mt-auto"
              >
                Saber Mais 
                <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
              </Link>
            </div>
          </article>

          {/* Card 4: Marketing Digital & Growth */}
          <article
            className="group relative p-[1px] rounded-2xl transition-all duration-500 hover:shadow-2xl hover:shadow-emerald-500/10 focus-within:ring-2 focus-within:ring-emerald-500 focus-within:ring-offset-2 hover:-translate-y-2"
            role="listitem"
            tabIndex={0}
          >
            {/* Gradient border on hover */}
            <div className="absolute inset-0 bg-gradient-to-br from-slate-200/60 to-slate-200/30 dark:from-slate-800/60 dark:to-slate-800/30 rounded-2xl group-hover:from-emerald-500 group-hover:to-teal-500 transition-all duration-500" />
            
            {/* Card Content */}
            <div className="relative h-full bg-white dark:bg-slate-900 p-6 sm:p-8 rounded-[15px] flex flex-col justify-between overflow-hidden">
              {/* Blur Spot */}
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-emerald-400/10 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              
              <div>
                {/* Header Row */}
                <div className="flex justify-between items-start mb-6">
                  {/* Icon */}
                  <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-xl flex items-center justify-center text-white shadow-lg shadow-emerald-500/20 group-hover:scale-110 group-hover:-translate-y-1 transition-all duration-300">
                    <TrendingUp className="w-5 h-5" />
                  </div>
                  {/* Badge */}
                  <span className="text-[10px] uppercase tracking-wider font-semibold px-2.5 py-1 bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-400 rounded-full border border-emerald-200/40 dark:border-emerald-900/30">
                    Aquisição
                  </span>
                </div>

                {/* Title */}
                <h3 className={`text-2xl font-bold text-slate-900 dark:text-white mb-3 ${poppins.className}`}>
                  Marketing & Growth
                </h3>

                {/* Description */}
                <p className="text-slate-600 dark:text-slate-400 text-base leading-relaxed mb-6">
                  Planejamento e execução de campanhas de tráfego pago (Google/Meta Ads), SEO e funis de atração para trazer clientes qualificados.
                </p>

                {/* Feature checklist */}
                <ul className="space-y-2.5 mb-8">
                  {[
                    "Google Ads & Meta Ads de alta performance",
                    "Instalação profissional de pixels e tags",
                    "Inbound Marketing e automação de funis",
                    "Análise de dados avançada e testes A/B",
                  ].map((feat, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                      {feat}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action / Link */}
              <Link 
                href="/services#marketing" 
                className="inline-flex items-center gap-2 text-sm font-semibold text-emerald-600 dark:text-emerald-400 hover:text-emerald-700 dark:hover:text-emerald-300 transition-colors group/link mt-auto"
              >
                Saber Mais 
                <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
              </Link>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};



