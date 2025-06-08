import { Poppins } from "next/font/google";
import Image from "next/image";


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

          <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 mt-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600">+50</div>
              <div className="text-sm text-gray-500">
                Projetos Personalizados Finalizados
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600">Diversos</div>
              <div className="text-sm text-gray-500">Setores Atendidos</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600">100%</div>
              <div className="text-sm text-gray-500">
                Focados em Tecnologias Modernas
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white/90 rounded-xl p-6 border border-blue-100 shadow-lg">
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <div className="relative w-25 h-25 rounded-full overflow-hidden">
              <Image
                src="/images/founder.webp"
                alt="Founder da Eleven Web Development"
                fill
                className="object-cover object-[40%_-30%] scale-150"
              />
            </div>
            <div className="text-center sm:text-left">
              <h3 className="text-slate-900 font-semibold">
                Arthur Levenhagen
              </h3>
              <p className="text-slate-700 text-sm">
                Founder of Eleven Web Development
              </p>
              <p className="text-slate-500 mt-1 italic">
                &ldquo;Transformamos ideias em experiências digitais
                extraordinárias.&rdquo;
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
