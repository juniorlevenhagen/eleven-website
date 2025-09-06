import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Configure seu Projeto | Eleven Web Development",
  description:
    "Configure seu projeto ideal selecionando funcionalidades e recursos. Receba um orçamento personalizado para seu site.",
};

export default function StartLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
