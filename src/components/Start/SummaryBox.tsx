import React from "react";
import { Check, Sparkles } from "lucide-react";

interface SummaryBoxProps {
  selectedOptions: {
    siteType: string | null;
    features: string[];
    extras: string[];
  };
  siteTypes: Record<string, string>;
  features: Record<string, string>;
  extras: Record<string, string>;
}

export const SummaryBox = ({
  selectedOptions,
  siteTypes,
  features,
  extras,
}: SummaryBoxProps) => {
  if (
    !selectedOptions.siteType &&
    selectedOptions.features.length === 0 &&
    selectedOptions.extras.length === 0
  ) {
    return null;
  }

  return (
    <div className="mt-8 p-4 bg-emerald-500/10 border border-emerald-500/30 rounded-lg">
      <div className="text-emerald-500 font-semibold mb-2">
        📋 Resumo das suas escolhas:
      </div>
      <ul className="text-slate-300 text-sm space-y-1">
        {selectedOptions.siteType && (
          <li>
            Tipo:{" "}
            {siteTypes[selectedOptions.siteType as keyof typeof siteTypes]}
          </li>
        )}
        {selectedOptions.features.map((feature: string) => (
          <li key={feature} className="flex items-center gap-2">
            <Check className="w-4 h-4 text-emerald-500" />
            {features[feature as keyof typeof features]}
          </li>
        ))}
        {selectedOptions.extras.map((extra: string) => (
          <li key={extra} className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-blue-400" />
            {extras[extra as keyof typeof extras]}
          </li>
        ))}
      </ul>
    </div>
  );
};
