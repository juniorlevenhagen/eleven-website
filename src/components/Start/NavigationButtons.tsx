import React from "react";
import { Wallet } from "lucide-react";

interface NavigationButtonsProps {
  currentStep: number;
  onPrevious: () => void;
  onNext: () => void;
}

export const NavigationButtons = ({
  currentStep,
  onPrevious,
  onNext,
}: NavigationButtonsProps) => (
  <div className="flex flex-col sm:flex-row sm:justify-between items-stretch sm:items-center gap-4 mt-8">
    {currentStep > 1 && (
      <button
        onClick={onPrevious}
        className="w-full sm:w-auto px-6 py-3 rounded-lg border-2 border-slate-600 text-slate-300 hover:border-blue-600 hover:text-blue-600 transition-all"
      >
        ← Voltar
      </button>
    )}
    <button
      onClick={onNext}
      className="w-full sm:w-auto px-6 py-3 rounded-lg bg-gradient-to-r from-blue-600 to-blue-500 text-white hover:from-blue-700 hover:to-blue-600 transition-all"
    >
      {currentStep === 3 ? (
        <span className="flex items-center gap-2 justify-center">
          Solicitar Orçamento <Wallet className="w-5 h-5" />
        </span>
      ) : (
        "Próximo →"
      )}
    </button>
  </div>
);
