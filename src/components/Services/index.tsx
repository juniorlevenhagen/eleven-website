import { Poppins } from "next/font/google";

export const poppins = Poppins({
  weight: ["600", "700"],
  subsets: ["latin"],
});

export const Services = () => {
  return (
    <div className="py-16 px-8 bg-white">
      <div className="max-w-7xl mx-auto text-center">
        <h2
          className={`text-4xl text-slate-900 mb-4 font-bold ${poppins.className}`}
        >
          Nossos Serviços
        </h2>
        <p className="text-gray-500 text-lg mb-12">
          Soluções completas em desenvolvimento web para levar seu negócio ao
          próximo nível
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-slate-50 p-8 rounded-xl border border-slate-200 transition-all duration-300 hover:shadow-lg text-left">
            <div className="w-14 h-14 bg-gradient-to-br from-blue-600 to-blue-500 rounded-xl mb-4 flex items-center justify-center text-white text-2xl">
              {/* Ícone aqui */}
            </div>
            <h3 className="text-xl text-slate-900 font-semibold mb-2">
              Sites Institucionais
            </h3>
            <p className="text-gray-500 leading-relaxed">
              Sites profissionais que transmitem credibilidade e convertem
              visitantes em clientes.
            </p>
          </div>

          <div className="bg-slate-50 p-8 rounded-xl border border-slate-200 transition-all duration-300 hover:shadow-lg text-left">
            <div className="w-14 h-14 bg-gradient-to-br from-blue-600 to-blue-500 rounded-xl mb-4 flex items-center justify-center text-white text-2xl">
              {/* Ícone aqui */}
            </div>
            <h3 className="text-xl text-slate-900 font-semibold mb-2">
              E-commerce
            </h3>
            <p className="text-gray-500 leading-relaxed">
              Lojas virtuais completas com integração de pagamento e gestão de
              produtos.
            </p>
          </div>

          <div className="bg-slate-50 p-8 rounded-xl border border-slate-200 transition-all duration-300 hover:shadow-lg text-left">
            <div className="w-14 h-14 bg-gradient-to-br from-blue-600 to-blue-500 rounded-xl mb-4 flex items-center justify-center text-white text-2xl">
              {/* Ícone aqui */}
            </div>
            <h3 className="text-xl text-slate-900 font-semibold mb-2">
              Design Responsivo
            </h3>
            <p className="text-gray-500 leading-relaxed">
              Sites que funcionam perfeitamente em todos os dispositivos e
              tamanhos de tela.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
