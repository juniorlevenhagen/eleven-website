import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://elevenweb.dev';
  
  // Captura automaticamente a data e hora exata da build/acesso (Ano: 2026)
  const currentDate = new Date(); 

  const routes = [
    { path: '', changeFreq: 'weekly' as const, priority: 1.0 },
    { path: '/services', changeFreq: 'monthly' as const, priority: 0.9 },
    { path: '/about', changeFreq: 'monthly' as const, priority: 0.8 },
    { path: '/blog', changeFreq: 'weekly' as const, priority: 0.8 },
    { path: '/portfolio', changeFreq: 'weekly' as const, priority: 0.8 }, // Mudei para weekly porque portfólio costuma atualizar mais
    { path: '/process', changeFreq: 'monthly' as const, priority: 0.7 },
    { path: '/contact', changeFreq: 'monthly' as const, priority: 0.7 },
    { path: '/start', changeFreq: 'monthly' as const, priority: 0.8 },
    { path: '/faq', changeFreq: 'monthly' as const, priority: 0.6 },
    { path: '/terms', changeFreq: 'yearly' as const, priority: 0.3 },
    { path: '/privacy', changeFreq: 'yearly' as const, priority: 0.3 },
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route.path}`,
    lastModified: currentDate,
    changeFrequency: route.changeFreq,
    priority: route.priority,
  }));
}