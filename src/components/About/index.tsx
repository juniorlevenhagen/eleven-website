import { Poppins } from "next/font/google";
import Image from "next/image";

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
                className={`text-2xl text-slate-900 mb-6 font-semibold ${poppins.className}`}
              >
                Nossos Números
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                <div className="text-center p-4 bg-blue-50 rounded-xl">
                  <div className="text-4xl font-bold text-blue-600 mb-2">
                    +50
                  </div>
                  <div className="text-sm text-gray-600">
                    Projetos Entregues
                  </div>
                </div>
                <div className="text-center p-4 bg-blue-50 rounded-xl">
                  <div className="text-4xl font-bold text-blue-600 mb-2">
                    15+
                  </div>
                  <div className="text-sm text-gray-600">Setores Atendidos</div>
                </div>
                <div className="text-center p-4 bg-blue-50 rounded-xl">
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

          {/* Right Column - Founder Testimonial */}
          <div className="bg-white/90 rounded-2xl p-8 shadow-lg border border-blue-100 w-full h-auto md:h-[400px] lg:h-[565px]">
            <div className="flex flex-col items-center text-center mb-4">
              <div className="relative w-32 h-32 rounded-full overflow-hidden mb-6">
                <Image
                  src="/images/founder.webp"
                  alt="Arthur Soberano - Founder da Eleven Web Development"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              <h3
                className={`text-2xl text-slate-900 font-semibold ${poppins.className}`}
              >
                Arthur Soberano
              </h3>
              <p className="text-blue-600 font-medium">
                Founder & Lead Developer
              </p>
            </div>

            <div className="space-y-6">
              <blockquote className="text-gray-600 italic text-lg leading-relaxed">
                &ldquo;Nossa jornada começou com uma visão clara: criar
                experiências digitais que não apenas atendam às necessidades dos
                nossos clientes, mas que superem suas expectativas. A cada
                projeto, buscamos inovar e entregar soluções que fazem a
                diferença.&rdquo;
              </blockquote>

              <div className="border-t border-gray-200 pt-6">
                <p className="text-gray-600 leading-relaxed">
                  Com mais de 8 anos de experiência em desenvolvimento web,
                  lidero uma equipe dedicada a criar soluções digitais que
                  transformam negócios. Nossa abordagem combina expertise
                  técnica com criatividade, resultando em projetos que encantam
                  os usuários.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
