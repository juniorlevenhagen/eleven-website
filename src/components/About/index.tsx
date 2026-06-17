import { Poppins } from 'next/font/google';

export const poppins = Poppins({
  weight: ['600', '700'],
  subsets: ['latin'],
});

export const About = () => {
  return (
    <section
      className="py-20 px-4 bg-slate-800"
      aria-labelledby="about-heading"
    >
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <header className="text-center mb-16">
          <p className="text-blue-400 text-sm font-semibold tracking-widest uppercase mb-4">
            Quem somos
          </p>
          <h2
            id="about-heading"
            className={`text-5xl sm:text-6xl text-white mb-6 font-bold leading-tight ${poppins.className}`}
          >
            Inovação &{' '}
            <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
              Excelência
            </span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg leading-relaxed">
            Transformando ideias em experiências digitais extraordinárias desde
            2020. Nossa jornada é marcada por inovação, excelência e compromisso
            com resultados
          </p>
        </header>

        {/* Stats */}
        <section
          className="rounded-2xl p-8 mb-8 border border-white/10 bg-white/5"
          aria-labelledby="stats-heading"
        >
          <h3
            id="stats-heading"
            className={`text-sm text-slate-400 mb-8 font-semibold text-center tracking-widest uppercase ${poppins.className}`}
          >
            Nossos Números
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6" role="list">
            <div
              className="text-center p-6 rounded-xl bg-slate-700/50 border border-slate-600/50 flex flex-col justify-center"
              role="listitem"
            >
              <div
                className="text-5xl font-bold text-blue-400 mb-2"
                aria-label="Mais de cinquenta"
              >
                +50
              </div>
              <div className="text-sm text-slate-400 uppercase tracking-widest">
                Projetos Entregues
              </div>
            </div>
            <div
              className="text-center p-6 rounded-xl bg-slate-700/50 border border-slate-600/50 flex flex-col justify-center"
              role="listitem"
            >
              <div
                className="text-5xl font-bold text-blue-400 mb-2"
                aria-label="Mais de quinze"
              >
                15+
              </div>
              <div className="text-sm text-slate-400 uppercase tracking-widest">
                Setores Atendidos
              </div>
            </div>
            <div
              className="text-center p-6 rounded-xl bg-slate-700/50 border border-slate-600/50 flex flex-col justify-center"
              role="listitem"
            >
              <div
                className="text-5xl font-bold text-blue-400 mb-2"
                aria-label="Cem por cento"
              >
                100%
              </div>
              <div className="text-sm text-slate-400 uppercase tracking-widest">
                Satisfação
              </div>
            </div>
          </div>
        </section>

        {/* Missão */}
        <section
          className="rounded-2xl p-8 border border-white/10 bg-white/5"
          aria-labelledby="mission-heading"
        >
          <h3
            id="mission-heading"
            className={`text-2xl text-white mb-6 font-semibold ${poppins.className}`}
          >
            Nossa Missão
          </h3>
          <p className="text-slate-400 leading-relaxed mb-4">
            Somos uma equipe apaixonada por criar soluções digitais inovadoras
            que transformam negócios e impulsionam resultados. Nossa missão é
            entregar projetos de alta qualidade que superam as expectativas.
          </p>
          <p className="text-slate-400 leading-relaxed">
            Com anos de experiência em desenvolvimento web, combinamos
            tecnologia de ponta com design criativo para criar experiências
            digitais memoráveis.
          </p>
        </section>
      </div>
    </section>
  );
};
