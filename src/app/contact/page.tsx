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
      <main className="min-h-screen bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 py-16">
          <div className="text-center mb-8 md:mb-16">
            <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold text-gray-900 mb-4 mt-8 md:mt-16">
              Entre em Contato
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4">
              Estamos prontos para ajudar você a transformar sua presença
              digital
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12 px-4">
            <div className="bg-slate-50 p-6 md:p-10 rounded-xl border border-gray-200">
              <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6">
                Fale Conosco
              </h2>
              <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Nome
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-colors"
                    placeholder="Seu nome completo"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-colors"
                    placeholder="seu@email.com"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Mensagem
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={4}
                    className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-colors"
                    placeholder="Como podemos ajudar?"
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                  ></textarea>
                </div>

                {submitStatus === "success" && (
                  <div className="p-4 bg-green-50 border border-green-200 rounded-lg text-green-600">
                    Obrigado! Sua mensagem foi enviada com sucesso.
                  </div>
                )}

                {submitStatus === "error" && (
                  <div className="p-4 bg-red-50 border border-red-200 rounded-lg text-red-600">
                    Ops! Algo deu errado. Por favor, tente novamente.
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? "Enviando..." : "Enviar Mensagem"}
                </button>
              </form>
            </div>

            <div className="bg-slate-50 p-6 md:p-10 rounded-xl border border-gray-200">
              <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6">
                Informações de Contato
              </h2>
              <div className="space-y-6 md:space-y-8">
                <div className="flex items-start">
                  <div className="min-w-[50px] w-[50px] h-[50px] md:min-w-[60px] md:w-[60px] md:h-[60px] bg-gradient-to-br from-blue-600 to-blue-500 rounded-xl mr-4 flex items-center justify-center text-white">
                    <Mail className="w-6 h-6 md:w-8 md:h-8" />
                  </div>
                  <div>
                    <h3 className="text-base md:text-lg font-semibold text-gray-900 mb-1 md:mb-2">
                      Email
                    </h3>
                    <p className="text-sm md:text-base text-gray-600 break-words">
                      contato@elevenweb.dev
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="min-w-[50px] w-[50px] h-[50px] md:min-w-[60px] md:w-[60px] md:h-[60px] bg-gradient-to-br from-blue-600 to-blue-500 rounded-xl mr-4 flex items-center justify-center text-white">
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
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
