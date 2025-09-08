import { Poppins } from "next/font/google";

export const poppins = Poppins({
  weight: ["600", "700"],
  subsets: ["latin"],
});

export const About = () => {
  return (
    <div className="py-20 px-4 bg-gradient-to-br from-slate-100 to-slate-200">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2
            className={`text-5xl text-slate-900 mb-6 font-bold ${poppins.className}`}
          >
            Inovação & Excelência
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg leading-relaxed">
            Transformando ideias em experiências digitais extraordinárias desde
            2020. Nossa jornada é marcada por inovação, excelência e compromisso
            com resultados.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left Column - Stats and Info */}
          <div className="space-y-12">
            <div className="bg-white/80 rounded-2xl p-8 shadow-lg border border-blue-100">
              <h3
                className={`text-2xl text-slate-900 mb-6 font-semibold text-center ${poppins.className}`}
              >
                Nossos Números
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                <div className="text-center p-4 bg-blue-50 rounded-xl min-h-[120px] flex flex-col justify-center">
                  <div className="text-4xl font-bold text-blue-600 mb-2">
                    +50
                  </div>
                  <div className="text-sm text-gray-600">
                    Projetos Entregues
                  </div>
                </div>
                <div className="text-center p-4 bg-blue-50 rounded-xl min-h-[120px] flex flex-col justify-center">
                  <div className="text-4xl font-bold text-blue-600 mb-2">
                    15+
                  </div>
                  <div className="text-sm text-gray-600">Setores Atendidos</div>
                </div>
                <div className="text-center p-4 bg-blue-50 rounded-xl min-h-[120px] flex flex-col justify-center">
                  <div className="text-4xl font-bold text-blue-600 mb-2">
                    100%
                  </div>
                  <div className="text-sm text-gray-600">Satisfação</div>
                </div>
              </div>
            </div>

            <div className="bg-white/80 rounded-2xl p-8 shadow-lg border border-blue-100">
              <h3
                className={`text-2xl text-slate-900 mb-6 font-semibold ${poppins.className}`}
              >
                Nossa Missão
              </h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Somos uma equipe apaixonada por criar soluções digitais
                inovadoras que transformam negócios e impulsionam resultados.
                Nossa missão é entregar projetos de alta qualidade que superam
                as expectativas.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Com anos de experiência em desenvolvimento web, combinamos
                tecnologia de ponta com design criativo para criar experiências
                digitais memoráveis.
              </p>
            </div>
          </div>

          {/* Right Column - Founder Section */}
          <div className="bg-gradient-to-br from-blue-400 to-blue-500 rounded-2xl p-8 shadow-xl text-white relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white rounded-full -translate-y-16 translate-x-16"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-white rounded-full translate-y-12 -translate-x-12"></div>
              <div className="absolute top-1/2 right-1/4 w-16 h-16 bg-white rounded-full"></div>
            </div>

            <div className="relative z-10">
              {/* Header */}
              <div className="text-center mb-8">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 rounded-full mb-4">
                  <svg
                    className="w-10 h-10 text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <h3 className={`text-2xl font-bold mb-2 ${poppins.className}`}>
                  Junior Oliveira
                </h3>
                <p className="text-blue-100 font-medium">
                  Founder & Lead Developer
                </p>
              </div>

              {/* Quote */}
              <div className="mb-8">
                <blockquote className="text-lg leading-relaxed italic text-blue-50 mb-4">
                  &ldquo;Nossa jornada começou com uma visão clara: criar
                  experiências digitais que não apenas atendam às necessidades
                  dos nossos clientes, mas que superem suas expectativas.&rdquo;
                </blockquote>
              </div>

              {/* Description */}
              <p className="text-blue-50 leading-relaxed text-sm">
                Com ampla experiência em desenvolvimento web, lidero uma equipe
                dedicada a criar soluções digitais que transformam negócios
                através de tecnologia e criatividade.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
