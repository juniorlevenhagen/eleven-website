import { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { WhatsAppButton } from '@/components/WhatsAppButton';
import { ChevronDown, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Perguntas Frequentes | Eleven — Soluções Digitais',
  description:
    'Tire suas dúvidas sobre nossos serviços de desenvolvimento web, prazos, preços, suporte e muito mais.',
};

const faqs = [
  {
    question: 'Como funciona o processo de desenvolvimento?',
    answer:
      "Nosso processo é dividido em 6 etapas principais: Planejamento, Design, Desenvolvimento, Testes, Lançamento e Suporte. Em cada etapa, mantemos você informado e envolvido, garantindo que o resultado final atenda exatamente às suas expectativas. Você pode conhecer mais detalhes do nosso processo na página 'Como Trabalhamos'.",
  },
  {
    question: 'Quanto tempo leva para desenvolver um projeto?',
    answer:
      'O tempo de desenvolvimento varia de acordo com o escopo da solução. Landing Pages e sites corporativos costumam levar de 10 a 20 dias. Configurações de CRM e automações levam de 15 a 30 dias. Já sistemas Web/SaaS e aplicativos sob medida levam a partir de 45 dias. Estruturamos todo o cronograma em entregas planejadas.',
  },
  {
    question: 'Quais são as formas de pagamento?',
    answer:
      'Aceitamos diversas formas de pagamento: transferência bancária, PIX, cartão de crédito (parcelado em até 12x) e boleto bancário. Para projetos maiores, oferecemos a opção de pagamento em etapas, alinhadas com as fases do desenvolvimento.',
  },
  {
    question: 'Vocês oferecem suporte após o lançamento?',
    answer:
      'Sim! Todos os nossos projetos sob demanda incluem um período de garantia e suporte gratuito após o lançamento. Além disso, oferecemos planos de evolução e manutenção contínua, ideais para manter softwares, CRMs e campanhas sempre atualizados.',
  },
  {
    question: 'Como é feita a atualização do conteúdo?',
    answer:
      'Oferecemos duas opções: 1) Integração com sistemas de gerenciamento de conteúdo (CMS) amigáveis, onde você mesmo faz as atualizações de forma simples; 2) Suporte contínuo através de nossos planos de manutenção mensal.',
  },
  {
    question: 'Vocês fazem a hospedagem do site?',
    answer:
      'Sim! Auxiliamos na escolha e configuração da melhor infraestrutura cloud (como AWS, Vercel, Supabase ou Hostinger) para hospedar seu site ou aplicativo com segurança, velocidade e alta disponibilidade.',
  },
  {
    question: 'O site será responsivo (mobile)?',
    answer:
      'Sim! Todos os nossos projetos de sites e sistemas web são desenvolvidos com design responsivo, garantindo uma experiência impecável em computadores, tablets e celulares.',
  },
  {
    question: 'Vocês fazem SEO e Tráfego Pago?',
    answer:
      'Sim! Nossos sites e landing pages são desenvolvidos com as melhores práticas de SEO técnico. Além disso, temos uma frente dedicada de Marketing Digital & Growth, focada em gestão de campanhas de tráfego pago (Google Ads, Meta Ads) e SEO estratégico mensal para atração de leads.',
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
