import { Poppins } from "next/font/google";

export const poppins = Poppins({
  weight: ["600", "700"],
  subsets: ["latin"],
});

export const About = () => {
  return (
    <div className="py-16 px-8 bg-gradient-to-br from-slate-100 to-slate-200">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <div className="about-content">
          <h2
            className={`text-4xl text-slate-900 mb-4 font-bold ${poppins.className}`}
          >
            Sobre Nós
          </h2>
          <p className="text-gray-500 mb-6 leading-relaxed">
            Somos uma equipe apaixonada por criar soluções digitais inovadoras
            que transformam negócios e impulsionam resultados.
          </p>
          <p className="text-gray-500 mb-6 leading-relaxed">
            Com anos de experiência em desenvolvimento web, nossa missão é
            entregar projetos de alta qualidade que superam as expectativas.
          </p>

          <div className="flex gap-8 mt-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600">100+</div>
              <div className="text-sm text-gray-500">Projetos Entregues</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600">50+</div>
              <div className="text-sm text-gray-500">Clientes Satisfeitos</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600">5+</div>
              <div className="text-sm text-gray-500">Anos de Experiência</div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-blue-600 to-blue-500 rounded-xl h-[400px] flex items-center justify-center text-white text-lg relative overflow-hidden">
          {/* Aqui você pode adicionar uma imagem ou conteúdo */}
          <div className="absolute inset-0 bg-black/10"></div>
          <span>Imagem ou Conteúdo</span>
        </div>
      </div>
    </div>
  );
};
