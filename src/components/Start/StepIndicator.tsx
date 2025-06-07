import React from "react";

interface StepIndicatorProps {
  currentStep: number;
  steps: { number: number; label: string }[];
}

export const StepIndicator = ({ currentStep, steps }: StepIndicatorProps) => (
  <div className="flex justify-center gap-4 mb-8">
    {/* Versão Desktop - mostra todos os passos */}
    <div className="hidden sm:flex items-center gap-4">
      {steps.map((step) => (
        <div
          key={step.number}
          className={`flex items-center gap-2 px-4 py-2 rounded-full ${
            step.number <= currentStep ? "bg-blue-600" : "bg-white/10"
          }`}
        >
          <div
            className={`w-5 h-5 rounded-full flex items-center justify-center ${
              step.number <= currentStep
                ? "bg-white text-blue-600"
                : "bg-white/30"
            }`}
          >
            {step.number}
          </div>
          <span className="text-sm">{step.label}</span>
        </div>
      ))}
    </div>

    {/* Versão Mobile - mostra apenas o passo atual */}
    <div className="sm:hidden flex items-center gap-2 px-4 py-2 rounded-full bg-blue-600">
      <div className="w-5 h-5 rounded-full flex items-center justify-center bg-white text-blue-600">
        {currentStep}
      </div>
      <span className="text-sm">{steps[currentStep - 1].label}</span>
    </div>
  </div>
);
