import { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";

export const metadata: Metadata = {
  title: "Política de Privacidade | Eleven Web Development",
  description:
    "Política de privacidade e proteção de dados da Eleven Web Development.",
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-200">
        <div className="max-w-4xl mx-auto px-4 py-16">
          <div className="text-center mb-16">
            <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4 mt-16">
              Política de Privacidade
            </h1>
            <p className="text-xl text-gray-600">
              Última atualização: {new Date().toLocaleDateString("pt-BR")}
            </p>
          </div>

          <div className="prose prose-lg max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                1. Introdução
              </h2>
              <p className="text-gray-600 mb-4">
                A Eleven Web Development (&ldquo;nós&rdquo;, &ldquo;nosso&rdquo;
                ou &ldquo;nossa&rdquo;) está comprometida em proteger sua
                privacidade. Esta Política de Privacidade explica como
                coletamos, usamos, divulgamos e protegemos suas informações
                quando você utiliza nossos serviços.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                2. Informações que Coletamos
              </h2>
              <p className="text-gray-600 mb-4">
                Podemos coletar os seguintes tipos de informações:
              </p>
              <ul className="list-disc pl-6 text-gray-600 mb-4">
                <li>Informações de contato (nome, email, telefone)</li>
                <li>Informações do projeto</li>
                <li>Dados de uso do site</li>
                <li>Informações técnicas do dispositivo</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                3. Como Usamos suas Informações
              </h2>
              <p className="text-gray-600 mb-4">
                Utilizamos suas informações para:
              </p>
              <ul className="list-disc pl-6 text-gray-600 mb-4">
                <li>Fornecer e manter nossos serviços</li>
                <li>Comunicar-se sobre seu projeto</li>
                <li>Melhorar nossos serviços</li>
                <li>Cumprir obrigações legais</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                4. Proteção de Dados
              </h2>
              <p className="text-gray-600 mb-4">
                Implementamos medidas de segurança técnicas e organizacionais
                para proteger suas informações, incluindo:
              </p>
              <ul className="list-disc pl-6 text-gray-600 mb-4">
                <li>Criptografia de dados</li>
                <li>Controles de acesso</li>
                <li>Monitoramento de segurança</li>
                <li>Treinamento de equipe</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                5. Seus Direitos
              </h2>
              <p className="text-gray-600 mb-4">Você tem o direito de:</p>
              <ul className="list-disc pl-6 text-gray-600 mb-4">
                <li>Acessar suas informações pessoais</li>
                <li>Corrigir dados imprecisos</li>
                <li>Solicitar a exclusão de dados</li>
                <li>Retirar seu consentimento</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                6. Contato
              </h2>
              <p className="text-gray-600 mb-4">
                Para questões sobre esta Política de Privacidade, entre em
                contato conosco através de:
              </p>
              <ul className="list-disc pl-6 text-gray-600 mb-4">
                <li>Email: contato@elevenweb.com.br</li>
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
