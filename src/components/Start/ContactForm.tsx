import React, { useState } from "react";
import { Check, Sparkles } from "lucide-react";

interface ContactFormProps {
  selectedOptions: {
    siteType: string | null;
    features: string[];
    extras: string[];
  };
  siteTypes: Record<string, string>;
  features: Record<string, string>;
  extras: Record<string, string>;
}

export const ContactForm = ({
  selectedOptions,
  siteTypes,
  features,
  extras,
}: ContactFormProps) => {
  const [contactData, setContactData] = useState({
    name: "",
    email: "",
    phone: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      const response = await fetch("/api/airtable", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...contactData,
          selectedOptions,
          timestamp: new Date().toISOString(),
        }),
      });

      if (!response.ok) {
        throw new Error("Erro ao enviar formulário");
      }

      setSubmitStatus("success");
      setContactData({ name: "", email: "", phone: "" });
    } catch (error) {
      console.error("Erro:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-8">
      <h2 className="text-2xl font-bold mb-6 text-center">
        Vamos Conversar Sobre Seu Projeto
      </h2>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Resumo das escolhas */}
        <div className="bg-white/5 rounded-xl p-6">
          <h3 className="text-xl font-semibold mb-4">Resumo do seu projeto</h3>
          <div className="space-y-4">
            <div>
              <h4 className="font-medium text-blue-400">Tipo de Site</h4>
              <p className="text-slate-300">
                {siteTypes[selectedOptions.siteType as keyof typeof siteTypes]}
              </p>
            </div>

            {selectedOptions.features.length > 0 && (
              <div>
                <h4 className="font-medium text-blue-400">Funcionalidades</h4>
                <ul className="text-slate-300 space-y-1">
                  {selectedOptions.features.map((feature: string) => (
                    <li key={feature} className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-emerald-500" />
                      {features[feature as keyof typeof features]}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {selectedOptions.extras.length > 0 && (
              <div>
                <h4 className="font-medium text-blue-400">Recursos Extras</h4>
                <ul className="text-slate-300 space-y-1">
                  {selectedOptions.extras.map((extra: string) => (
                    <li key={extra} className="flex items-center gap-2">
                      <Sparkles className="w-4 h-4 text-blue-400" />
                      {extras[extra as keyof typeof extras]}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>

        {/* Formulário de contato */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-slate-300 mb-1"
            >
              Nome
            </label>
            <input
              type="text"
              id="name"
              required
              className="w-full px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-white placeholder-slate-400 focus:outline-none focus:border-blue-500"
              placeholder="Seu nome completo"
              value={contactData.name}
              onChange={(e) =>
                setContactData({ ...contactData, name: e.target.value })
              }
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-slate-300 mb-1"
            >
              E-mail
            </label>
            <input
              type="email"
              id="email"
              required
              className="w-full px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-white placeholder-slate-400 focus:outline-none focus:border-blue-500"
              placeholder="seu@email.com"
              value={contactData.email}
              onChange={(e) =>
                setContactData({ ...contactData, email: e.target.value })
              }
            />
          </div>

          <div>
            <label
              htmlFor="phone"
              className="block text-sm font-medium text-slate-300 mb-1"
            >
              WhatsApp
            </label>
            <input
              type="tel"
              id="phone"
              required
              className="w-full px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-white placeholder-slate-400 focus:outline-none focus:border-blue-500"
              placeholder="(00) 00000-0000"
              value={contactData.phone}
              onChange={(e) =>
                setContactData({ ...contactData, phone: e.target.value })
              }
            />
          </div>

          {submitStatus === "success" && (
            <div className="p-4 bg-green-500/20 border border-green-500/30 rounded-lg text-green-400">
              Obrigado! Em breve entraremos em contato para discutir seu
              projeto.
            </div>
          )}

          {submitStatus === "error" && (
            <div className="p-4 bg-red-500/20 border border-red-500/30 rounded-lg text-red-400">
              Ops! Algo deu errado. Por favor, tente novamente.
            </div>
          )}

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full px-8 py-4 rounded-lg bg-gradient-to-r from-blue-600 to-blue-500 text-white hover:from-blue-700 hover:to-blue-600 transition-all font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? "Enviando..." : "Enviar Solicitação"}
          </button>
        </form>
      </div>
    </div>
  );
};
