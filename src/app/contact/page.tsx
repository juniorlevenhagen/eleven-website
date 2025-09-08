"use client";

import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Mail, MapPin } from "lucide-react";
import { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
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
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      console.log("Resposta do Airtable:", data);

      if (!response.ok) {
        throw new Error("Erro ao enviar mensagem");
      }

      setSubmitStatus("success");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("Erro:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Header />
      <main id="main-content" className="min-h-screen bg-slate-100" role="main">
        <div className="max-w-7xl mx-auto px-4 py-16">
          <header className="text-center mb-8 md:mb-16">
            <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold text-gray-900 mb-4 mt-8 md:mt-16">
              Entre em Contato
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4">
              Estamos prontos para ajudar você a transformar sua presença
              digital
            </p>
          </header>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12 px-4">
            <section
              className="bg-white p-6 md:p-10 rounded-xl border border-gray-200"
              aria-labelledby="contact-form-heading"
            >
              <h2
                id="contact-form-heading"
                className="text-xl md:text-2xl font-bold text-gray-900 mb-6"
              >
                Fale Conosco
              </h2>
              <form
                onSubmit={handleSubmit}
                className="space-y-4 md:space-y-6"
                noValidate
              >
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Nome{" "}
                    <span className="text-red-500" aria-label="obrigatório">
                      *
                    </span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    aria-required="true"
                    className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-colors focus:outline-none"
                    placeholder="Seu nome completo"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    aria-describedby="name-error"
                  />
                  <div
                    id="name-error"
                    className="sr-only"
                    role="alert"
                    aria-live="polite"
                  ></div>
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Email{" "}
                    <span className="text-red-500" aria-label="obrigatório">
                      *
                    </span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    aria-required="true"
                    className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-colors focus:outline-none"
                    placeholder="seu@email.com"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    aria-describedby="email-error"
                  />
                  <div
                    id="email-error"
                    className="sr-only"
                    role="alert"
                    aria-live="polite"
                  ></div>
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Mensagem{" "}
                    <span className="text-red-500" aria-label="obrigatório">
                      *
                    </span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    aria-required="true"
                    rows={4}
                    className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-colors focus:outline-none"
                    placeholder="Como podemos ajudar?"
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    aria-describedby="message-error"
                  ></textarea>
                  <div
                    id="message-error"
                    className="sr-only"
                    role="alert"
                    aria-live="polite"
                  ></div>
                </div>

                {submitStatus === "success" && (
                  <div
                    className="p-4 bg-green-50 border border-green-200 rounded-lg text-green-600"
                    role="alert"
                    aria-live="polite"
                  >
                    <strong>Sucesso!</strong> Obrigado! Sua mensagem foi enviada
                    com sucesso.
                  </div>
                )}

                {submitStatus === "error" && (
                  <div
                    className="p-4 bg-red-50 border border-red-200 rounded-lg text-red-600"
                    role="alert"
                    aria-live="polite"
                  >
                    <strong>Erro!</strong> Ops! Algo deu errado. Por favor,
                    tente novamente.
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                  aria-describedby={
                    isSubmitting ? "submitting-status" : undefined
                  }
                >
                  {isSubmitting ? "Enviando..." : "Enviar Mensagem"}
                </button>
                {isSubmitting && (
                  <div
                    id="submitting-status"
                    className="sr-only"
                    aria-live="polite"
                  >
                    Enviando sua mensagem, por favor aguarde...
                  </div>
                )}
              </form>
            </section>

            <section
              className="bg-white p-6 md:p-10 rounded-xl border border-gray-200"
              aria-labelledby="contact-info-heading"
            >
              <h2
                id="contact-info-heading"
                className="text-xl md:text-2xl font-bold text-gray-900 mb-6"
              >
                Informações de Contato
              </h2>
              <div className="space-y-6 md:space-y-8">
                <div className="flex items-start">
                  <div
                    className="min-w-[50px] w-[50px] h-[50px] md:min-w-[60px] md:w-[60px] md:h-[60px] bg-gradient-to-br from-blue-600 to-blue-500 rounded-xl mr-4 flex items-center justify-center text-white"
                    aria-hidden="true"
                  >
                    <Mail className="w-6 h-6 md:w-8 md:h-8" />
                  </div>
                  <div>
                    <h3 className="text-base md:text-lg font-semibold text-gray-900 mb-1 md:mb-2">
                      Email
                    </h3>
                    <p className="text-sm md:text-base text-gray-600 break-words">
                      <a
                        href="mailto:contato@elevenweb.dev"
                        className="hover:text-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded-md px-1 py-1"
                      >
                        contato@elevenweb.dev
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div
                    className="min-w-[50px] w-[50px] h-[50px] md:min-w-[60px] md:w-[60px] md:h-[60px] bg-gradient-to-br from-blue-600 to-blue-500 rounded-xl mr-4 flex items-center justify-center text-white"
                    aria-hidden="true"
                  >
                    <MapPin className="w-6 h-6 md:w-8 md:h-8" />
                  </div>
                  <div>
                    <h3 className="text-base md:text-lg font-semibold text-gray-900 mb-1 md:mb-2">
                      Endereço
                    </h3>
                    <p className="text-sm md:text-base text-gray-600">
                      Belo Horizonte, MG
                    </p>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
