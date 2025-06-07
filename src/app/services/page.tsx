import { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Rocket, ShoppingCart, FileText, Wrench } from "lucide-react";

export const metadata: Metadata = {
  title: "Services | Eleven Web Development",
  description:
    "Discover our web development services, including corporate websites, e-commerce, landing pages, and maintenance.",
};

export default function ServicesPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-200">
        <div className="max-w-7xl mx-auto px-4 py-16">
          <div className="text-center mb-16">
            <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4 mt-16">
              Nossos Serviços
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Soluções completas em desenvolvimento web para transformar sua
              presença digital
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            <div className="bg-white/80 backdrop-blur-sm p-6 rounded-xl border border-gray-200 flex flex-col h-full">
              <div>
                <div className="w-[60px] h-[60px] bg-gradient-to-br from-blue-600 to-blue-500 rounded-xl mb-6 flex items-center justify-center text-white text-2xl">
                  <Rocket size={32} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Site Institucional
                </h3>
                <p className="text-gray-600 mb-6">
                  Site profissional que transmite credibilidade e converte
                  visitantes em clientes.
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="text-gray-600 pl-6 relative">
                    <span className="absolute left-0 text-emerald-500 font-bold">
                      ✓
                    </span>
                    Design responsivo
                  </li>
                  <li className="text-gray-600 pl-6 relative">
                    <span className="absolute left-0 text-emerald-500 font-bold">
                      ✓
                    </span>
                    SEO otimizado
                  </li>
                  <li className="text-gray-600 pl-6 relative">
                    <span className="absolute left-0 text-emerald-500 font-bold">
                      ✓
                    </span>
                    Integração com Google Analytics
                  </li>
                  <li className="text-gray-600 pl-6 relative">
                    <span className="absolute left-0 text-emerald-500 font-bold">
                      ✓
                    </span>
                    Formulário de contato
                  </li>
                  <li className="text-gray-600 pl-6 relative">
                    <span className="absolute left-0 text-emerald-500 font-bold">
                      ✓
                    </span>
                    Certificado SSL
                  </li>
                  <li className="text-gray-600 pl-6 relative">
                    <span className="absolute left-0 text-emerald-500 font-bold">
                      ✓
                    </span>
                    1 ano de suporte
                  </li>
                </ul>
              </div>
              <div className="bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold mt-auto flex justify-center items-center">
                A partir de R$ 1.500
              </div>
            </div>

            <div className="bg-white/80 backdrop-blur-sm p-6 rounded-xl border border-gray-200 flex flex-col h-full">
              <div>
                <div className="w-[60px] h-[60px] bg-gradient-to-br from-blue-600 to-blue-500 rounded-xl mb-6 flex items-center justify-center text-white text-2xl">
                  <ShoppingCart size={32} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  E-commerce
                </h3>
                <p className="text-gray-600 mb-6">
                  Loja virtual completa com gestão de produtos e integração de
                  pagamento.
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="text-gray-600 pl-6 relative">
                    <span className="absolute left-0 text-emerald-500 font-bold">
                      ✓
                    </span>
                    Catálogo de produtos
                  </li>
                  <li className="text-gray-600 pl-6 relative">
                    <span className="absolute left-0 text-emerald-500 font-bold">
                      ✓
                    </span>
                    Carrinho de compras
                  </li>
                  <li className="text-gray-600 pl-6 relative">
                    <span className="absolute left-0 text-emerald-500 font-bold">
                      ✓
                    </span>
                    Integração com gateways
                  </li>
                  <li className="text-gray-600 pl-6 relative">
                    <span className="absolute left-0 text-emerald-500 font-bold">
                      ✓
                    </span>
                    Painel administrativo
                  </li>
                  <li className="text-gray-600 pl-6 relative">
                    <span className="absolute left-0 text-emerald-500 font-bold">
                      ✓
                    </span>
                    Relatórios de vendas
                  </li>
                  <li className="text-gray-600 pl-6 relative">
                    <span className="absolute left-0 text-emerald-500 font-bold">
                      ✓
                    </span>
                    Suporte técnico
                  </li>
                </ul>
              </div>
              <div className="bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold mt-auto flex justify-center items-center">
                A partir de R$ 3.500
              </div>
            </div>

            <div className="bg-white/80 backdrop-blur-sm p-6 rounded-xl border border-gray-200 flex flex-col h-full">
              <div>
                <div className="w-[60px] h-[60px] bg-gradient-to-br from-blue-600 to-blue-500 rounded-xl mb-6 flex items-center justify-center text-white text-2xl">
                  <FileText size={32} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Landing Page
                </h3>
                <p className="text-gray-600 mb-6">
                  Página focada em conversão para campanhas e produtos
                  específicos.
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="text-gray-600 pl-6 relative">
                    <span className="absolute left-0 text-emerald-500 font-bold">
                      ✓
                    </span>
                    Design otimizado para conversão
                  </li>
                  <li className="text-gray-600 pl-6 relative">
                    <span className="absolute left-0 text-emerald-500 font-bold">
                      ✓
                    </span>
                    Formulários integrados
                  </li>
                  <li className="text-gray-600 pl-6 relative">
                    <span className="absolute left-0 text-emerald-500 font-bold">
                      ✓
                    </span>
                    Tracking de campanhas
                  </li>
                  <li className="text-gray-600 pl-6 relative">
                    <span className="absolute left-0 text-emerald-500 font-bold">
                      ✓
                    </span>
                    Testes A/B
                  </li>
                  <li className="text-gray-600 pl-6 relative">
                    <span className="absolute left-0 text-emerald-500 font-bold">
                      ✓
                    </span>
                    Análise de performance
                  </li>
                  <li className="text-gray-600 pl-6 relative">
                    <span className="absolute left-0 text-emerald-500 font-bold">
                      ✓
                    </span>
                    Entrega em 7 dias
                  </li>
                </ul>
              </div>
              <div className="bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold mt-auto flex justify-center items-center">
                A partir de R$ 800
              </div>
            </div>

            <div className="bg-white/80 backdrop-blur-sm p-6 rounded-xl border border-gray-200 flex flex-col h-full">
              <div>
                <div className="w-[60px] h-[60px] bg-gradient-to-br from-blue-600 to-blue-500 rounded-xl mb-6 flex items-center justify-center text-white text-2xl">
                  <Wrench size={32} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Manutenção & Suporte
                </h3>
                <p className="text-gray-600 mb-6">
                  Mantenha seu site sempre atualizado, seguro e funcionando
                  perfeitamente.
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="text-gray-600 pl-6 relative">
                    <span className="absolute left-0 text-emerald-500 font-bold">
                      ✓
                    </span>
                    Atualizações de segurança
                  </li>
                  <li className="text-gray-600 pl-6 relative">
                    <span className="absolute left-0 text-emerald-500 font-bold">
                      ✓
                    </span>
                    Backup automático
                  </li>
                  <li className="text-gray-600 pl-6 relative">
                    <span className="absolute left-0 text-emerald-500 font-bold">
                      ✓
                    </span>
                    Monitoramento 24/7
                  </li>
                  <li className="text-gray-600 pl-6 relative">
                    <span className="absolute left-0 text-emerald-500 font-bold">
                      ✓
                    </span>
                    Correção de bugs
                  </li>
                  <li className="text-gray-600 pl-6 relative">
                    <span className="absolute left-0 text-emerald-500 font-bold">
                      ✓
                    </span>
                    Suporte técnico
                  </li>
                  <li className="text-gray-600 pl-6 relative">
                    <span className="absolute left-0 text-emerald-500 font-bold">
                      ✓
                    </span>
                    Relatórios mensais
                  </li>
                </ul>
              </div>
              <div className="bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold mt-auto flex justify-center items-center">
                R$ 150/mês
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
