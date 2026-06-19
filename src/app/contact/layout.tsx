import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Solicitar Orçamento | Eleven Web Development',
  description:
    'Fale com a Eleven Web Development. Solicite o orçamento para o seu site profissional, landing page ou ecossistema digital. Atendimento focado em conversão e vendas.',
  keywords: [
    'solicitar orçamento site',
    'contratar desenvolvimento web',
    'orçamento de landing page',
    'empresa de criação de sites',
    'consultoria web',
    'Eleven Web Development contact',
  ],
  openGraph: {
    title: 'Solicitar Orçamento | Eleven Web Development',
    description:
      'Fale com a Eleven Web Development. Solicite o orçamento para o seu site profissional, landing page ou ecossistema digital.',
    url: 'https://elevenweb.dev/contact',
    type: 'website',
    images: [
      {
        url: 'https://elevenweb.dev/images/logos/og-image.png', // Crie e coloque essa imagem na sua pasta public
        width: 1200,
        height: 630,
        alt: 'Eleven Web Development - Solicitar Orçamento',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Solicitar Orçamento | Eleven Web Development',
    description:
      'Solicite o orçamento para o seu site profissional ou ecossistema digital com a Eleven Web Development.',
    images: ['https://elevenweb.dev/images/logos/og-image.png'],
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
