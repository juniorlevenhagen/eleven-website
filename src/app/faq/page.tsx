import { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { ChevronDown, ArrowRight } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "FAQ | Eleven Web Development",
  description:
    "Perguntas frequentes sobre nossos serviços de desenvolvimento web.",
};

const faqs = [
  {
    question: "Como funciona o processo de desenvolvimento?",
    answer:
      "Nosso processo é dividido em 6 etapas principais: Planejamento, Design, Desenvolvimento, Testes, Lançamento e Suporte. Em cada etapa, mantemos você informado e envolvido, garantindo que o resultado final atenda exatamente às suas expectativas. Você pode conhecer mais detalhes do nosso processo na página 'Como Trabalhamos'.",
  },
  {
    question: "Quanto tempo leva para desenvolver um site?",
    answer:
      "O tempo de desenvolvimento varia de acordo com o tipo e complexidade do projeto. Em média: Landing Pages (7-10 dias), Sites Institucionais (15-20 dias) e E-commerce (30-45 dias). Estes prazos podem variar dependendo da complexidade do projeto e do tempo de resposta para aprovações.",
  },
  {
    question: "Quais são as formas de pagamento?",
    answer:
      "Aceitamos diversas formas de pagamento: transferência bancária, PIX, cartão de crédito (parcelado em até 12x) e boleto bancário. Para projetos maiores, oferecemos a opção de pagamento em etapas, alinhadas com as fases do desenvolvimento.",
  },
  {
    question: "Vocês oferecem suporte após o lançamento?",
    answer:
      "Sim! Todos os nossos pacotes incluem um período de suporte gratuito após o lançamento. Além disso, oferecemos planos de manutenção mensal que incluem atualizações de segurança, backup automático, monitoramento 24/7 e suporte técnico contínuo.",
  },
  {
    question: "Como é feita a atualização do conteúdo?",
    answer:
      "Oferecemos duas opções: 1) Sistema de gerenciamento de conteúdo (CMS) que permite que você mesmo faça as atualizações de forma simples e intuitiva; 2) Serviço de manutenção mensal, onde nossa equipe faz todas as atualizações necessárias para você.",
  },
  {
    question: "Vocês fazem a hospedagem do site?",
    answer:
      "Sim! Oferecemos serviços de hospedagem com servidores de alta performance, certificado SSL, backup automático e suporte técnico. A hospedagem é opcional, mas recomendamos nossos serviços para garantir o melhor desempenho do seu site.",
  },
  {
    question: "O site será responsivo (mobile)?",
    answer:
      "Sim! Todos os nossos sites são desenvolvidos com design responsivo, garantindo uma experiência perfeita em qualquer dispositivo: computadores, tablets e smartphones. Isso é fundamental para o SEO e para a experiência do usuário.",
  },
  {
    question: "Vocês fazem SEO?",
    answer:
      "Sim! Oferecemos serviços de SEO básico em todos os pacotes e um serviço de SEO avançado como opção adicional. Isso inclui otimização técnica, de conteúdo, análise de palavras-chave e relatórios de performance.",
  },
];

export default function FAQPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-200">
        <div className="max-w-4xl mx-auto px-4 py-16">
          <div className="text-center mb-16">
            <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4 mt-16">
              Perguntas Frequentes
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Tire suas dúvidas sobre nossos serviços
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white/80 backdrop-blur-sm rounded-xl border border-gray-200 overflow-hidden"
              >
                <details className="group">
                  <summary className="flex items-center justify-between p-6 cursor-pointer">
                    <h3 className="text-lg font-semibold text-gray-900">
                      {faq.question}
                    </h3>
                    <ChevronDown className="w-5 h-5 text-gray-500 group-open:rotate-180 transition-transform" />
                  </summary>
                  <div className="px-6 pb-6">
                    <p className="text-gray-600 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </details>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <div className="bg-white/80 backdrop-blur-sm p-8 rounded-xl border border-gray-200">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Ainda tem dúvidas?
              </h2>
              <p className="text-gray-600 mb-6">
                Entre em contato conosco para tirar todas as suas dúvidas
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                Fale Conosco
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
