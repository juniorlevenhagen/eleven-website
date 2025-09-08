import { Poppins } from "next/font/google";
import { Building, ShoppingCart, Smartphone } from "lucide-react";

export const poppins = Poppins({
  weight: ["600", "700"],
  subsets: ["latin"],
});

export const Services = () => {
  return (
    <section className="py-16 px-8 bg-white" aria-labelledby="services-heading">
      <div className="max-w-7xl mx-auto text-center">
        <h2
          id="services-heading"
          className="text-gray-500 mb-12 text-2xl sm:text-3xl lg:text-4xl max-w-xs sm:max-w-2xl lg:max-w-4xl mx-auto leading-tight px-4"
        >
          <span className="block sm:inline">Soluções completas em</span>
          <span className="block sm:inline"> desenvolvimento web</span>
          <br className="hidden sm:block" />
          <span className="block sm:inline">para levar seu negócio</span>
          <span className="block sm:inline"> ao próximo nível</span>
        </h2>

        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          role="list"
        >
          <article
            className="bg-slate-100 p-8 rounded-xl border border-slate-200 transition-all duration-300 hover:shadow-lg text-left focus-within:ring-2 focus-within:ring-blue-500 focus-within:ring-offset-2"
            role="listitem"
            tabIndex={0}
          >
            <div
              className="w-14 h-14 bg-gradient-to-br from-blue-600 to-blue-500 rounded-xl mb-4 flex items-center justify-center text-white text-2xl"
              aria-hidden="true"
            >
              <Building size={32} />
            </div>
            <h3 className="text-xl text-slate-900 font-semibold mb-2">
              Sites Institucionais
            </h3>
            <p className="text-gray-500 leading-relaxed">
              Sites profissionais que transmitem credibilidade e convertem
              visitantes em clientes.
            </p>
          </article>

          <article
            className="bg-slate-100 p-8 rounded-xl border border-slate-200 transition-all duration-300 hover:shadow-lg text-left focus-within:ring-2 focus-within:ring-blue-500 focus-within:ring-offset-2"
            role="listitem"
            tabIndex={0}
          >
            <div
              className="w-14 h-14 bg-gradient-to-br from-blue-600 to-blue-500 rounded-xl mb-4 flex items-center justify-center text-white text-2xl"
              aria-hidden="true"
            >
              <ShoppingCart size={32} />
            </div>
            <h3 className="text-xl text-slate-900 font-semibold mb-2">
              E-commerce
            </h3>
            <p className="text-gray-500 leading-relaxed">
              Lojas virtuais completas com integração de pagamento e gestão de
              produtos.
            </p>
          </article>

          <article
            className="bg-slate-100 p-8 rounded-xl border border-slate-200 transition-all duration-300 hover:shadow-lg text-left focus-within:ring-2 focus-within:ring-blue-500 focus-within:ring-offset-2"
            role="listitem"
            tabIndex={0}
          >
            <div
              className="w-14 h-14 bg-gradient-to-br from-blue-600 to-blue-500 rounded-xl mb-4 flex items-center justify-center text-white text-2xl"
              aria-hidden="true"
            >
              <Smartphone size={32} />
            </div>
            <h3 className="text-xl text-slate-900 font-semibold mb-2">
              Design Responsivo
            </h3>
            <p className="text-gray-500 leading-relaxed">
              Sites que funcionam perfeitamente em todos os dispositivos e
              tamanhos de tela.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
};
