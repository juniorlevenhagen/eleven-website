import { MessageCircle } from "lucide-react";

export function WhatsAppButton() {
  const message =
    "Olá! Estou no site da Eleven e preciso de informações sobre os serviços de desenvolvimento web.";
  const encodedMessage = encodeURIComponent(message);
  const whatsappUrl = `https://wa.me/5531998363024?text=${encodedMessage}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-all duration-300 hover:scale-110 z-50 flex items-center gap-2 group focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 focus:ring-offset-white"
      aria-label="Fale conosco pelo WhatsApp - Abre em nova aba"
      title="Fale conosco pelo WhatsApp"
    >
      <MessageCircle className="w-6 h-6" aria-hidden="true" />
      <span className="sr-only">Fale conosco pelo WhatsApp</span>
      <span className="hidden group-hover:block absolute right-full mr-2 bg-white text-green-600 px-3 py-1 rounded-lg text-sm font-medium whitespace-nowrap shadow-lg">
        Fale conosco
      </span>
    </a>
  );
}
