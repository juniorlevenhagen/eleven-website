import React from "react";

interface OptionCardProps {
  label: string;
  isSelected: boolean;
  onClick: () => void;
}

export const OptionCard = ({ label, isSelected, onClick }: OptionCardProps) => (
  <div
    onClick={onClick}
    className={`p-4 sm:p-6 rounded-lg border cursor-pointer transition-all ${
      isSelected
        ? "bg-blue-600/20 border-blue-600"
        : "bg-white/5 border-white/10 hover:bg-white/10"
    }`}
  >
    <div className="font-semibold text-base sm:text-lg">{label}</div>
  </div>
);
