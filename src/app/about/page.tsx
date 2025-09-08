import { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Lightbulb, Star, Users, BookOpen } from "lucide-react";
import { WhatsAppButton } from "@/components/WhatsAppButton";

export const metadata: Metadata = {
  title: "Sobre a Eleven Web Development | Nossa História",
  description:
    "Conheça a Eleven Web Development, nossa missão de transformar ideias em experiências digitais extraordinárias desde 2020.",
};

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-slate-100">
        <div className="max-w-7xl mx-auto px-4 py-16">
          <div className="text-center mb-16">
            <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4 mt-16">
              Sobre Nós
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Conheça nossa história e os valores que nos guiam
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-white p-10 rounded-xl border border-gray-200">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Nossa História
              </h2>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Fundada em 2019, a Eleven Web Development tem estado na
                vanguarda da inovação digital, ajudando empresas a transformar
                sua presença online e alcançar seus objetivos digitais.
              </p>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Nossa Missão
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Entregar soluções web excepcionais que impulsionam o crescimento
                dos negócios e criam experiências digitais significativas para
                nossos clientes.
              </p>
            </div>

            <div className="bg-white p-10 rounded-xl border border-gray-200">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Nossos Valores
              </h2>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="w-[60px] h-[60px] min-w-[60px] bg-gradient-to-br from-blue-600 to-blue-500 rounded-xl mr-4 flex items-center justify-center text-white">
                    <Lightbulb className="w-8 h-8" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      Inovação
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      Criatividade e inovação em cada projeto que desenvolvemos
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="w-[60px] h-[60px] min-w-[60px] bg-gradient-to-br from-blue-600 to-blue-500 rounded-xl mr-4 flex items-center justify-center text-white">
                    <Star className="w-8 h-8" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      Excelência
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      Compromisso com a excelência e qualidade em tudo que
                      fazemos
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="w-[60px] h-[60px] min-w-[60px] bg-gradient-to-br from-blue-600 to-blue-500 rounded-xl mr-4 flex items-center justify-center text-white">
                    <Users className="w-8 h-8" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      Foco no Cliente
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      Abordagem centrada nas necessidades e objetivos do cliente
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="w-[60px] h-[60px] min-w-[60px] bg-gradient-to-br from-blue-600 to-blue-500 rounded-xl mr-4 flex items-center justify-center text-white">
                    <BookOpen className="w-8 h-8" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      Aprendizado
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      Aprendizado contínuo e melhoria constante
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
