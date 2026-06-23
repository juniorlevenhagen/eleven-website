import { MetadataRoute } from 'next';
import { getBlogPosts } from '@/lib/blog';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://elevenweb.dev';
  const currentDate = new Date(); 

  const staticRoutes = [
    { path: '', changeFreq: 'weekly' as const, priority: 1.0 },
    { path: '/services', changeFreq: 'monthly' as const, priority: 0.9 },
    { path: '/about', changeFreq: 'monthly' as const, priority: 0.8 },
    { path: '/blog', changeFreq: 'weekly' as const, priority: 0.8 },
    { path: '/portfolio', changeFreq: 'weekly' as const, priority: 0.8 },
    { path: '/process', changeFreq: 'monthly' as const, priority: 0.7 },
    { path: '/contact', changeFreq: 'monthly' as const, priority: 0.7 },
    { path: '/start', changeFreq: 'monthly' as const, priority: 0.8 },
    { path: '/faq', changeFreq: 'monthly' as const, priority: 0.6 },
    { path: '/terms', changeFreq: 'yearly' as const, priority: 0.3 },
    { path: '/privacy', changeFreq: 'yearly' as const, priority: 0.3 },
  ];

  const routes: MetadataRoute.Sitemap = staticRoutes.map((route) => ({
    url: `${baseUrl}${route.path}`,
    lastModified: currentDate,
    changeFrequency: route.changeFreq,
    priority: route.priority,
  }));

  // Adiciona os posts do blog de forma dinâmica
  try {
    const posts = await getBlogPosts();
    posts.forEach((post) => {
      routes.push({
        url: `${baseUrl}/blog/${post.slug}`,
        lastModified: post.dateISO ? new Date(post.dateISO) : currentDate,
        changeFrequency: 'monthly' as const,
        priority: 0.7,
      });
    });
  } catch (error) {
    console.error('Erro ao gerar sitemap dinâmico para os posts do blog:', error);
  }

  return routes;
}