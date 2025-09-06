import { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import {
  ClipboardCheck,
  MessageSquare,
  Code,
  Rocket,
  Settings,
  CheckCircle,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Como Trabalhamos | Metodologia Eleven Web Development",
  description:
    "Conheça nossa metodologia de desenvolvimento web em 6 etapas: planejamento, design, desenvolvimento, testes, lançamento e suporte.",
};

const processSteps = [
  {
    icon: ClipboardCheck,
    title: "1. Planejamento",
    description:
      "Entendemos suas necessidades e objetivos para criar a melhor estratégia digital.",
    details: [
      "Análise de requisitos",
      "Definição de escopo",
      "Planejamento de funcionalidades",
      "Cronograma inicial",
    ],
  },
  {
    icon: MessageSquare,
    title: "2. Design",
    description:
      "Criamos uma experiência visual única e alinhada com sua marca.",
    details: [
      "Wireframes e protótipos",
      "Design responsivo",
      "Identidade visual",
      "Aprovação do cliente",
    ],
  },
  {
    icon: Code,
    title: "3. Desenvolvimento",
    description:
      "Implementamos todas as funcionalidades com as melhores tecnologias.",
    details: [
      "Desenvolvimento front-end",
      "Desenvolvimento back-end",
      "Integrações necessárias",
      "Testes contínuos",
    ],
  },
  {
    icon: Settings,
    title: "4. Testes",
    description:
      "Garantimos que tudo funcione perfeitamente em todos os dispositivos.",
    details: [
      "Testes de usabilidade",
      "Testes de performance",
      "Testes de segurança",
      "Correções e ajustes",
    ],
  },
  {
    icon: Rocket,
    title: "5. Lançamento",
    description:
      "Colocamos seu site no ar com toda a infraestrutura necessária.",
    details: [
      "Configuração de servidor",
      "Deploy do site",
      "Configuração de domínio",
      "Monitoramento inicial",
    ],
  },
  {
    icon: CheckCircle,
    title: "6. Suporte",
    description:
      "Oferecemos suporte contínuo para garantir o melhor funcionamento.",
    details: [
      "Suporte técnico",
      "Atualizações de segurança",
      "Backup regular",
      "Monitoramento 24/7",
    ],
  },
];

export default function ProcessPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-200">
        <div className="max-w-7xl mx-auto px-4 py-16">
          <div className="text-center mb-16">
            <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4 mt-16">
              Nosso Processo de Trabalho
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Uma metodologia clara e transparente para entregar projetos de
              qualidade
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {processSteps.map((step, index) => (
              <div
                key={index}
                className="bg-white/80 backdrop-blur-sm p-6 rounded-xl border border-gray-200 hover:shadow-lg transition-all duration-300"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-blue-600 to-blue-500 rounded-xl mb-6 flex items-center justify-center text-white">
                  <step.icon className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-600 mb-4">{step.description}</p>
                <ul className="space-y-2">
                  {step.details.map((detail, idx) => (
                    <li key={idx} className="flex items-center text-gray-600">
                      <span className="text-blue-600 mr-2">•</span>
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Tempo Médio de Entrega
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="bg-white/80 backdrop-blur-sm p-6 rounded-xl border border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Site Institucional
                </h3>
                <p className="text-blue-600 font-bold text-2xl">15-20 dias</p>
              </div>
              <div className="bg-white/80 backdrop-blur-sm p-6 rounded-xl border border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Landing Page
                </h3>
                <p className="text-blue-600 font-bold text-2xl">7-10 dias</p>
              </div>
              <div className="bg-white/80 backdrop-blur-sm p-6 rounded-xl border border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  E-commerce
                </h3>
                <p className="text-blue-600 font-bold text-2xl">30-45 dias</p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
