import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blog | Eleven — Soluções Digitais',
  description:
    'Artigos sobre desenvolvimento web, SEO, design e estratégia digital.',
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
