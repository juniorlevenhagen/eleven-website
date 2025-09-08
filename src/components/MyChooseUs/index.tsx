import { CheckCircle, Code, Headset, Shield } from "lucide-react";

const whyChooseUs = [
  {
    title: "Metodologia Comprovada",
    description:
      "Processo de desenvolvimento estruturado em 6 etapas, garantindo qualidade e satisfação.",
    icon: CheckCircle,
  },
  {
    title: "Tecnologias Modernas",
    description:
      "Utilizamos as mais recentes tecnologias do mercado para garantir performance e segurança.",
    icon: Code,
  },
  {
    title: "Suporte Contínuo",
    description:
      "Oferecemos suporte técnico e manutenção para garantir o funcionamento perfeito do seu site.",
    icon: Headset,
  },
  {
    title: "Transparência Total",
    description:
      "Comunicação clara, prazos definidos e orçamentos sem surpresas.",
    icon: Shield,
  },
];

export const WhyChooseUs = () => {
  return (
    <section
      className="pt-4 pb-16 bg-white"
      aria-labelledby="why-choose-heading"
    >
      <div className="max-w-7xl mx-auto px-4">
        <header className="text-center mb-12">
          <h2
            id="why-choose-heading"
            className="text-3xl font-bold text-gray-900 mb-4"
          >
            Por que escolher a Eleven?
          </h2>
          <p className="text-xl text-gray-600">
            Compromisso com qualidade e resultados
          </p>
        </header>

        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          role="list"
        >
          {whyChooseUs.map((item, index) => (
            <article
              key={index}
              className="bg-white p-6 rounded-xl border border-gray-200 hover:border-blue-500 hover:bg-blue-50 transition-colors focus-within:ring-2 focus-within:ring-blue-500 focus-within:ring-offset-2"
              role="listitem"
              tabIndex={0}
            >
              <div
                className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4"
                aria-hidden="true"
              >
                <item.icon className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {item.title}
              </h3>
              <p className="text-gray-600">{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
