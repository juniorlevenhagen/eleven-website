import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contato | Eleven Web Development - Fale Conosco",
  description:
    "Entre em contato com a Eleven Web Development. Tire suas dúvidas sobre desenvolvimento web, solicite um orçamento ou conheça nossos serviços.",
  keywords: [
    "contato",
    "orçamento",
    "desenvolvimento web",
    "fale conosco",
    "solicitar projeto",
    "consultoria web",
  ],
  openGraph: {
    title: "Contato | Eleven Web Development - Fale Conosco",
    description:
      "Entre em contato com a Eleven Web Development. Tire suas dúvidas sobre desenvolvimento web, solicite um orçamento ou conheça nossos serviços.",
    url: "https://elevenweb.dev/contact",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contato | Eleven Web Development - Fale Conosco",
    description:
      "Entre em contato com a Eleven Web Development. Tire suas dúvidas sobre desenvolvimento web, solicite um orçamento ou conheça nossos serviços.",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
