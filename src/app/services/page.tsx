import { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import {
  Rocket,
  ShoppingCart,
  Wrench,
  ArrowRight,
  Building,
  Search,
} from "lucide-react";
import Link from "next/link";
import { WhatsAppButton } from "@/components/WhatsAppButton";

export const metadata: Metadata = {
  title: "Serviços de Desenvolvimento Web | Eleven Web Development",
  description:
    "Oferecemos desenvolvimento de sites institucionais, e-commerce, landing pages e manutenção. Soluções completas para seu negócio digital.",
};

const packages = [
  {
    name: "Pacote Básico",
    price: "A partir de R$ 800",
    description: "Ideal para pequenos negócios que estão começando",
    icon: Rocket,
    features: [
      "Design responsivo",
      "Até 5 páginas",
      "Formulário de contato",
      "SEO básico",
      "Integração com Google Analytics",
      "Certificado SSL",
      "Suporte por 3 meses",
    ],
    recommended: false,
  },
  {
    name: "Pacote Intermediário",
    price: "A partir de R$ 1.500",
    description: "Perfeito para empresas em crescimento",
    icon: Building,
    features: [
      "Tudo do Pacote Básico",
      "Até 10 páginas",
      "Blog integrado",
      "SEO avançado",
      "Área administrativa",
      "Integração com WhatsApp",
      "Suporte por 6 meses",
    ],
    recommended: true,
  },
  {
    name: "Pacote Premium",
    price: "Sob consulta",
    description: "Solução completa para seu negócio",
    icon: ShoppingCart,
    features: [
      "Tudo do Pacote Intermediário",
      "E-commerce completo",
      "Sistema de pagamento",
      "Painel de gestão",
      "Multi-idiomas",
      "API personalizada",
      "Suporte por 1 ano",
    ],
    recommended: false,
  },
];

const additionalServices = [
  {
    name: "Manutenção Mensal",
    price: "R$ 150/mês",
    description: "Mantenha seu site sempre atualizado e seguro",
    icon: Wrench,
    features: [
      "Atualizações de segurança",
      "Backup automático",
      "Monitoramento 24/7",
      "Correção de bugs",
      "Suporte técnico",
      "Relatórios mensais",
    ],
  },
  {
    name: "SEO Avançado",
    price: "R$ 200/mês",
    description: "Melhore seu posicionamento nos buscadores",
    icon: Search,
    features: [
      "Análise de palavras-chave",
      "Otimização de conteúdo",
      "Link building",
      "Relatórios de performance",
      "Ajustes técnicos",
      "Consultoria mensal",
    ],
  },
];

export default function ServicesPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-200">
        <div className="max-w-7xl mx-auto px-4 py-16">
          <div className="text-center mb-16">
            <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4 mt-16">
              Nossos Pacotes
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Escolha o pacote ideal para o seu negócio
            </p>
          </div>

          {/* Pacotes Principais */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {packages.map((pkg, index) => (
              <div
                key={index}
                className={`bg-white/80 backdrop-blur-sm p-8 rounded-xl border ${
                  pkg.recommended
                    ? "border-blue-500 shadow-lg"
                    : "border-gray-200"
                } flex flex-col h-full relative`}
              >
                {pkg.recommended && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                    Mais Popular
                  </div>
                )}
                <div className="w-[60px] h-[60px] bg-gradient-to-br from-blue-600 to-blue-500 rounded-xl mb-6 flex items-center justify-center text-white text-2xl">
                  <pkg.icon size={32} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {pkg.name}
                </h3>
                <p className="text-gray-600 mb-4">{pkg.description}</p>
                <div className="text-3xl font-bold text-blue-600 mb-6">
                  {pkg.price}
                </div>
                <ul className="space-y-3 mb-6 flex-grow">
                  {pkg.features.map((feature, idx) => (
                    <li key={idx} className="text-gray-600 pl-6 relative">
                      <span className="absolute left-0 text-emerald-500 font-bold">
                        ✓
                      </span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link href="/start" className="block mt-auto">
                  <div className="bg-blue-600 text-white px-4 py-3 rounded-lg font-semibold flex justify-center items-center hover:bg-blue-700 transition-colors">
                    Solicitar Orçamento Personalizado
                  </div>
                </Link>
              </div>
            ))}
          </div>

          {/* Nota sobre preços */}
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <p className="text-gray-600 italic">
              * Os preços podem variar de acordo com as necessidades específicas
              do seu projeto. Entre em contato para um orçamento personalizado
              que atenda exatamente às suas necessidades.
            </p>
          </div>

          {/* Serviços Adicionais */}
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-3">
              Serviços Adicionais
            </h2>
            <p className="text-gray-600">
              Complemente seu pacote com serviços extras
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16 max-w-4xl mx-auto">
            {additionalServices.map((service, index) => (
              <div
                key={index}
                className="bg-white/80 backdrop-blur-sm p-7 rounded-xl border border-gray-200 flex flex-col h-full"
              >
                <div className="w-[60px] h-[60px] bg-gradient-to-br from-blue-600 to-blue-500 rounded-xl mb-5 flex items-center justify-center text-white text-2xl">
                  <service.icon size={32} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  {service.name}
                </h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <div className="text-2xl font-bold text-blue-600 mb-5">
                  {service.price}
                </div>
                <ul className="space-y-3 mb-5 flex-grow">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="text-gray-600 pl-6 relative">
                      <span className="absolute left-0 text-emerald-500 font-bold">
                        ✓
                      </span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link href="/start" className="block mt-auto">
                  <div className="bg-blue-600 text-white px-4 py-3 rounded-lg font-semibold flex justify-center items-center hover:bg-blue-700 transition-colors">
                    Adicionar Serviço
                  </div>
                </Link>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <div className="bg-white/80 backdrop-blur-sm p-8 rounded-xl border border-gray-200 max-w-3xl mx-auto">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Como Trabalhamos?
              </h2>
              <p className="text-gray-600 mb-6">
                Conheça nossa metodologia de desenvolvimento, desde o
                planejamento até o lançamento do seu projeto.
              </p>
              <Link
                href="/process"
                className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                Ver Nosso Processo
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </main>
      <WhatsAppButton />
      <Footer />
    </>
  );
}
