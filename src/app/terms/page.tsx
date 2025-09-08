import { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";

export const metadata: Metadata = {
  title: "Termos de Uso | Eleven Web Development",
  description:
    "Termos e condições de uso dos serviços da Eleven Web Development. Conheça nossos compromissos e responsabilidades.",
};

export default function TermsPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-200">
        <div className="max-w-4xl mx-auto px-4 py-16">
          <div className="text-center mb-16">
            <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4 mt-16">
              Termos de Uso
            </h1>
            <p className="text-xl text-gray-600">
              Última atualização: {new Date().toLocaleDateString("pt-BR")}
            </p>
          </div>

          <div className="prose prose-lg max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                1. Aceitação dos Termos
              </h2>
              <p className="text-gray-600 mb-4">
                Ao utilizar nossos serviços, você concorda com estes Termos de
                Uso. Se você não concordar com qualquer parte destes termos, não
                deverá utilizar nossos serviços.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                2. Serviços
              </h2>
              <p className="text-gray-600 mb-4">
                A Eleven Web Development oferece os seguintes serviços:
              </p>
              <ul className="list-disc pl-6 text-gray-600 mb-4">
                <li>Desenvolvimento de websites</li>
                <li>Desenvolvimento de e-commerce</li>
                <li>Manutenção de sites</li>
                <li>Consultoria em desenvolvimento web</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                3. Responsabilidades
              </h2>
              <p className="text-gray-600 mb-4">
                <strong>Nossas responsabilidades:</strong>
              </p>
              <ul className="list-disc pl-6 text-gray-600 mb-4">
                <li>Fornecer serviços de qualidade</li>
                <li>Manter a confidencialidade das informações</li>
                <li>Cumprir prazos estabelecidos</li>
                <li>Fornecer suporte técnico adequado</li>
              </ul>
              <p className="text-gray-600 mb-4">
                <strong>Suas responsabilidades:</strong>
              </p>
              <ul className="list-disc pl-6 text-gray-600 mb-4">
                <li>Fornecer informações precisas</li>
                <li>Respeitar prazos de feedback</li>
                <li>Manter a confidencialidade de senhas</li>
                <li>Utilizar os serviços de acordo com a lei</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                4. Pagamentos
              </h2>
              <p className="text-gray-600 mb-4">
                <strong>Termos de pagamento:</strong>
              </p>
              <ul className="list-disc pl-6 text-gray-600 mb-4">
                <li>Pagamentos são feitos conforme acordado no contrato</li>
                <li>Aceitamos diversas formas de pagamento</li>
                <li>Preços podem ser ajustados com aviso prévio</li>
                <li>Reembolsos são avaliados caso a caso</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                5. Propriedade Intelectual
              </h2>
              <p className="text-gray-600 mb-4">
                <strong>Direitos autorais:</strong>
              </p>
              <ul className="list-disc pl-6 text-gray-600 mb-4">
                <li>O cliente mantém os direitos sobre seu conteúdo</li>
                <li>A Eleven mantém direitos sobre códigos e designs</li>
                <li>Licenças de uso são transferidas após pagamento</li>
                <li>Respeitamos direitos de terceiros</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                6. Limitação de Responsabilidade
              </h2>
              <p className="text-gray-600 mb-4">
                Nossa responsabilidade é limitada ao valor pago pelos serviços.
                Não nos responsabilizamos por:
              </p>
              <ul className="list-disc pl-6 text-gray-600 mb-4">
                <li>Danos indiretos</li>
                <li>Perda de dados</li>
                <li>Interrupções de serviço</li>
                <li>Problemas de terceiros</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                7. Alterações nos Termos
              </h2>
              <p className="text-gray-600 mb-4">
                Reservamos o direito de modificar estes termos a qualquer
                momento. Alterações significativas serão comunicadas com
                antecedência.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                8. Contato
              </h2>
              <p className="text-gray-600 mb-4">
                Para questões sobre estes Termos de Uso, entre em contato
                conosco através de:
              </p>
              <ul className="list-disc pl-6 text-gray-600 mb-4">
                <li>Email: contato@elevenweb.dev</li>
              </ul>
            </section>
          </div>
        </div>
      </main>
      <WhatsAppButton />
      <Footer />
    </>
  );
}
