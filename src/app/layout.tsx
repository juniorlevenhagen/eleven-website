import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Analytics } from '@vercel/analytics/next';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

export const metadata: Metadata = {
  // 1. Resolve o aviso do Next.js Build definitivamente
  metadataBase: new URL('https://elevenweb.dev'),

  title: 'Eleven Web Development - Criação de Sites Profissionais',
  description:
    'Desenvolvimento web profissional com foco em performance, design moderno e resultados reais para o seu negócio.',
  keywords: [
    'desenvolvimento web',
    'criação de sites',
    'sites profissionais',
    'e-commerce',
    'landing page',
    'SEO',
    'design responsivo',
    'programação web',
  ],
  authors: [{ name: 'Eleven Web Development' }],
  creator: 'Eleven Web Development',
  publisher: 'Eleven Web Development',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: 'https://elevenweb.dev',
    siteName: 'Eleven Web Development',
    title: 'Eleven Web Development - Criação de Sites Profissionais',
    description:
      'Desenvolvimento web profissional com foco em performance, design moderno e resultados reais para o seu negócio.',
    images: [
      {
        // 2. Ajustado para usar a og-image.png que você salvou na public
        url: '/images/logos/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Eleven Web Development - Criação de Sites Profissionais',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Eleven Web Development - Criação de Sites Profissionais',
    description:
      'Desenvolvimento web profissional com foco em performance, design moderno e resultados reais para o seu negócio.',
    // 3. Ajustado aqui também para a og-image.png
    images: ['/images/logos/og-image.png'],
  },
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon.ico', sizes: 'any' },
    ],
    apple: '/apple-touch-icon.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      </head>
      <body className={`${inter.variable} font-sans antialiased`}>
        {/* Skip to main content link for screen readers */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-blue-600 text-white px-4 py-2 rounded-md z-50 focus:outline-none focus:ring-2 focus:ring-blue-300"
        >
          Pular para o conteúdo principal
        </a>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
