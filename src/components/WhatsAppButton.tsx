import { MessageCircle } from "lucide-react";

export function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/5531998363024"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-all duration-300 hover:scale-110 z-50 flex items-center gap-2 group"
      aria-label="Fale conosco pelo WhatsApp"
    >
      <MessageCircle className="w-6 h-6" />
      <span className="hidden group-hover:block absolute right-full mr-2 bg-white text-green-600 px-3 py-1 rounded-lg text-sm font-medium whitespace-nowrap">
        Fale conosco
      </span>
    </a>
  );
}
