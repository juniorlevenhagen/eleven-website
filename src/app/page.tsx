import { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { Services } from '@/components/Services';
import { About } from '@/components/About';
import { Footer } from '@/components/Footer';
import { WhatsAppButton } from '@/components/WhatsAppButton';
import { WhyChooseUs } from '@/components/MyChooseUs';

// 1. CONFIGURAÇÃO DE METADATA (SEO PARA BUSCA E REDES SOCIAIS)
export const metadata: Metadata = {
  title: 'Criação de Sites e Ecossistemas Digitais | Eleven Web Development',
  description:
    'Desenvolvemos sites profissionais de alta performance, landing pages e ecossistemas digitais integrados a CRMs e automações para escalar o faturamento da sua empresa.',
  keywords: [
    'criação de sites profissionais',
    'desenvolvimento de landing pages',
    'empresa de desenvolvimento web',
    'automação de marketing e CRM',
    'agência de desenvolvimento digital',
    'Eleven Web Development',
  ],
  openGraph: {
    title: 'Criação de Sites e Ecossistemas Digitais | Eleven Web Development',
    description:
      'Desenvolvemos sites profissionais de alta performance, landing pages e ecossistemas digitais integrados para escalar o faturamento da sua empresa.',
    url: 'https://elevenweb.dev',
    type: 'website',
    images: [
      {
        url: 'https://elevenweb.dev/images/logos/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Eleven Web Development - Criação de Sites Profissionais',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Criação de Sites e Ecossistemas Digitais | Eleven Web Development',
    description:
      'Desenvolvemos sites profissionais de alta performance, landing pages e ecossistemas digitais integrados para escalar o faturamento da sua empresa.',
    images: ['https://elevenweb.dev/images/logos/og-image.png'],
  },
};

export default function Home() {
  // 2. DADOS ESTRUTURADOS (JSON-LD) PARA VINCULAR O SITE AO SEU GOOGLE EMPRESAS
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: 'Eleven',
    legalName: 'Eleven Web Development',
    image: 'https://elevenweb.dev/images/logos/og-image.png',
    '@id': 'https://elevenweb.dev',
    url: 'https://elevenweb.dev',
    telephone: '+55-31-99836-3024', // Lembrar de manter igual à ficha do Google
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Belo Horizonte', // Sua cidade base cadastrada no mapa
      addressRegion: 'MG',
      addressCountry: 'BR',
    },
    priceRange: '$$',
    areaServed: [
      { '@type': 'AdministrativeArea', name: 'Belo Horizonte' },
      { '@type': 'AdministrativeArea', name: 'Minas Gerais' },
      { '@type': 'Country', name: 'Brasil' },
    ],
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Injeção de código invisível para os robôs do Google */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <Header />
      <main id="main-content" className="flex-1" role="main">
        <Hero />
        <Services />
        <WhyChooseUs />
        <About />
        <Footer />
        <WhatsAppButton />
      </main>
    </div>
  );
}
