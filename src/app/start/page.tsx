"use client";

import { useState } from "react";
import { Metadata } from "next";
import { Header } from "@/components/Header";
import { Target, Settings, Rocket } from "lucide-react";
import {
  StepIndicator,
  OptionCard,
  SummaryBox,
  NavigationButtons,
  ContactForm,
} from "@/components/Start";

export const metadata: Metadata = {
  title: "Configure seu Projeto | Eleven Web Development",
  description:
    "Configure seu projeto ideal selecionando funcionalidades e recursos. Receba um orçamento personalizado para seu site.",
};

interface SelectedOptions {
  siteType: string | null;
  features: string[];
  extras: string[];
}

export default function StartPage() {
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedOptions, setSelectedOptions] = useState<SelectedOptions>({
    siteType: null,
    features: [],
    extras: [],
  });
  const [showContactForm, setShowContactForm] = useState(false);

  const siteTypes = {
    institucional: "Site Institucional",
    ecommerce: "Loja Virtual",
    landing: "Landing Page",
    portal: "Portal/Sistema Web",
    blog: "Blog/Site de Conteúdo",
    outros: "Projeto Personalizado",
  };

  const features = {
    design_responsivo: "Design Responsivo",
    cms: "Sistema de Gerenciamento",
    seo: "Otimização SEO",
    formularios: "Formulários de Contato",
    galeria: "Galeria de Fotos",
    blog_funcional: "Sistema de Blog",
    multiidioma: "Multi-idiomas",
    area_restrita: "Área Restrita",
  };

  const extras = {
    chatbot: "Chatbot Inteligente",
    analytics: "Google Analytics",
    whatsapp: "Integração WhatsApp",
    "redes-sociais": "Redes Sociais",
    newsletter: "Newsletter",
    mapas: "Mapa Interativo",
    agenda: "Sistema de Agendamento",
    "api-externa": "Integrações Especiais",
  };

  const steps = [
    { number: 1, label: "Tipo de Site" },
    { number: 2, label: "Funcionalidades" },
    { number: 3, label: "Recursos Extras" },
  ];

  const selectSiteType = (type: string) => {
    setSelectedOptions((prev) => ({ ...prev, siteType: type }));
  };

  const toggleOption = (option: string, category: "features" | "extras") => {
    setSelectedOptions((prev) => {
      const currentOptions = prev[category];
      const newOptions = currentOptions.includes(option)
        ? currentOptions.filter((item) => item !== option)
        : [...currentOptions, option];

      return { ...prev, [category]: newOptions };
    });
  };

  const nextStep = () => {
    if (currentStep === 1 && !selectedOptions.siteType) {
      alert("Por favor, selecione o tipo de site primeiro.");
      return;
    }
    if (currentStep < 3) {
      setCurrentStep((prev) => prev + 1);
    } else {
      finishConfiguration();
    }
  };

  const previousStep = () => {
    if (currentStep > 1) {
      setCurrentStep((prev) => prev - 1);
    }
  };

  const finishConfiguration = () => {
    setShowContactForm(true);
  };

  return (
    <>
      <Header />
      <main className="min-h-screen bg-gradient-to-br from-[#0f172a] to-[#1e293b] text-white pt-16">
        <div className="max-w-5xl mx-auto px-4 py-8">
          {!showContactForm ? (
            <>
              <div className="text-center mb-12">
                <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent">
                  Configure seu projeto ideal
                </h1>
                <p className="text-slate-300 max-w-2xl mx-auto">
                  Selecione as funcionalidades que você precisa e vamos criar um
                  orçamento personalizado para você
                </p>
              </div>

              <StepIndicator currentStep={currentStep} steps={steps} />

              {/* Progress Bar */}
              <div className="w-full h-1 bg-white/10 rounded-full mb-8">
                <div
                  className="h-full bg-gradient-to-r from-blue-600 to-blue-500 rounded-full transition-all duration-300"
                  style={{ width: `${(currentStep / 3) * 100}%` }}
                />
              </div>

              {/* Step 1: Site Type */}
              {currentStep === 1 && (
                <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-8">
                  <h2 className="text-xl sm:text-2xl font-bold mb-2 flex flex-col items-center gap-3">
                    <Target className="w-12 h-12 sm:w-16 sm:h-16 text-blue-600" />
                    Que tipo de site você precisa?
                  </h2>
                  <p className="text-slate-300 mb-6 text-center">
                    Escolha a opção que melhor descreve seu projeto principal
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {Object.entries(siteTypes).map(([key, label]) => (
                      <OptionCard
                        key={key}
                        label={label}
                        isSelected={selectedOptions.siteType === key}
                        onClick={() => selectSiteType(key)}
                      />
                    ))}
                  </div>
                </div>
              )}

              {/* Step 2: Features */}
              {currentStep === 2 && (
                <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-8">
                  <h2 className="text-xl sm:text-2xl font-bold mb-2 flex flex-col items-center gap-3">
                    <Settings className="w-12 h-12 sm:w-16 sm:h-16 text-blue-600" />
                    Quais funcionalidades você precisa?
                  </h2>
                  <p className="text-slate-300 mb-6 text-center">
                    Marque todas as opções que se aplicam ao seu projeto
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {Object.entries(features).map(([key, label]) => (
                      <OptionCard
                        key={key}
                        label={label}
                        isSelected={selectedOptions.features.includes(key)}
                        onClick={() => toggleOption(key, "features")}
                      />
                    ))}
                  </div>
                </div>
              )}

              {/* Step 3: Extras */}
              {currentStep === 3 && (
                <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-8">
                  <h2 className="text-xl sm:text-2xl font-bold mb-2 flex flex-col items-center gap-3">
                    <Rocket className="w-12 h-12 sm:w-16 sm:h-16 text-blue-600" />
                    Recursos extras e integrações
                  </h2>
                  <p className="text-slate-300 mb-6 text-center">
                    Funcionalidades avançadas para potencializar seu site
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {Object.entries(extras).map(([key, label]) => (
                      <OptionCard
                        key={key}
                        label={label}
                        isSelected={selectedOptions.extras.includes(key)}
                        onClick={() => toggleOption(key, "extras")}
                      />
                    ))}
                  </div>

                  <SummaryBox
                    selectedOptions={selectedOptions}
                    siteTypes={siteTypes}
                    features={features}
                    extras={extras}
                  />
                </div>
              )}

              <NavigationButtons
                currentStep={currentStep}
                onPrevious={previousStep}
                onNext={nextStep}
              />
            </>
          ) : (
            <ContactForm
              selectedOptions={selectedOptions}
              siteTypes={siteTypes}
              features={features}
              extras={extras}
            />
          )}
        </div>
      </main>
    </>
  );
}
