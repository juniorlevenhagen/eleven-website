import { fetchAirtableRecords, type AirtableRecord } from '@/lib/airtable';

export const BLOG_CATEGORIES = [
  'Todos',
  'Desenvolvimento Web',
  'SEO',
  'Design',
  'Negócios',
  'Tecnologia',
] as const;

export type BlogCategory = (typeof BLOG_CATEGORIES)[number];

export type BlogPostSummary = {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  author: string;
  date: string;
  dateISO: string;
  createdISO: string;
  category: string;
  readTime: string;
  accentGradient: string;
  keyTakeaways: string[];
};

export type BlogPost = BlogPostSummary & {
  content: string[];
  sections: Array<{ heading?: string; body?: string }>;
  keyTakeaways: string[];
  highlightedQuote?: { text?: string; author?: string };
  coverImage?: string;
  publishedAt?: string;
};

const gradientMap: Record<string, string> = {
  'Desenvolvimento Web': 'from-blue-400 via-indigo-500 to-purple-600',
  SEO: 'from-emerald-400 via-teal-500 to-cyan-600',
  Design: 'from-violet-400 via-purple-500 to-fuchsia-600',
  Negócios: 'from-orange-300 via-amber-400 to-yellow-500',
  Tecnologia: 'from-rose-400 via-pink-500 to-red-500',
};

const hoverColorsMap: Record<string, string> = {
  'Desenvolvimento Web':
    'hover:bg-gradient-to-br hover:from-blue-600 hover:via-indigo-700 hover:to-purple-800',
  SEO: 'hover:bg-gradient-to-br hover:from-emerald-600 hover:via-teal-700 hover:to-cyan-800',
  Design:
    'hover:bg-gradient-to-br hover:from-violet-600 hover:via-purple-700 hover:to-fuchsia-800',
  Negócios:
    'hover:bg-gradient-to-br hover:from-orange-500 hover:via-amber-600 hover:to-yellow-600',
  Tecnologia:
    'hover:bg-gradient-to-br hover:from-rose-600 hover:via-pink-700 hover:to-red-700',
};

const borderColorsMap: Record<string, string> = {
  'Desenvolvimento Web': 'border-indigo-400',
  SEO: 'border-emerald-400',
  Design: 'border-purple-400',
  Negócios: 'border-amber-400',
  Tecnologia: 'border-rose-400',
};

const featuredGradientMap: Record<string, string> = {
  'Desenvolvimento Web': 'from-blue-500 via-indigo-600 to-purple-700',
  SEO: 'from-emerald-500 via-teal-600 to-cyan-700',
  Design: 'from-violet-500 via-purple-600 to-fuchsia-700',
  Negócios: 'from-orange-400 via-amber-500 to-yellow-500',
  Tecnologia: 'from-rose-500 via-pink-600 to-red-600',
};

export function getGradientForCategory(category: string | null): string {
  return category && gradientMap[category]
    ? gradientMap[category]
    : 'from-slate-200 via-white to-slate-50';
}

export function getHoverColorForCategory(category: string | null): string {
  return category && hoverColorsMap[category]
    ? hoverColorsMap[category]
    : 'hover:bg-gradient-to-br hover:from-gray-900 hover:via-gray-800 hover:to-black';
}

export function getBorderColorForCategory(category: string | null): string {
  return category && borderColorsMap[category]
    ? borderColorsMap[category]
    : 'border-gray-800';
}

export function getFeaturedGradient(category: string | null): string {
  return category && featuredGradientMap[category]
    ? featuredGradientMap[category]
    : 'from-blue-500 via-indigo-600 to-purple-700';
}

function getField(fields: Record<string, unknown>, ...keys: string[]): unknown {
  for (const key of keys) {
    if (
      fields[key] !== undefined &&
      fields[key] !== null &&
      fields[key] !== ''
    ) {
      return fields[key];
    }
  }
  return undefined;
}

function getStringField(
  fields: Record<string, unknown>,
  ...keys: string[]
): string | undefined {
  const value = getField(fields, ...keys);
  return typeof value === 'string' ? value : undefined;
}

function normalizeCategory(rawCategory?: string): string {
  if (!rawCategory) return 'Conteúdo';

  const trimmed = rawCategory.trim();
  const match = BLOG_CATEGORIES.find(
    (category) => category.toLowerCase() === trimmed.toLowerCase(),
  );

  return match ?? trimmed;
}

function parseJsonField<T>(value: unknown): T | undefined {
  if (typeof value === 'string') {
    try {
      return JSON.parse(value) as T;
    } catch {
      return undefined;
    }
  }

  return value as T | undefined;
}

function parseStringList(value: unknown): string[] {
  if (Array.isArray(value)) {
    return value.filter((item): item is string => typeof item === 'string');
  }

  if (typeof value === 'string') {
    const parsed = parseJsonField<string[]>(value);
    if (Array.isArray(parsed)) {
      return parsed.filter((item): item is string => typeof item === 'string');
    }

    return value
      .split('\n')
      .map((item) => item.trim())
      .filter(Boolean);
  }

  return [];
}

function parseContent(value: unknown): string[] {
  if (Array.isArray(value)) {
    return value.filter((item): item is string => typeof item === 'string');
  }

  if (typeof value === 'string') {
    return value
      .split(/\n{2,}/)
      .map((paragraph) => paragraph.trim())
      .filter(Boolean);
  }

  return [];
}

function parseSections(
  value: unknown,
): Array<{ heading?: string; body?: string }> {
  const parsed =
    parseJsonField<Array<{ heading?: string; body?: string }>>(value);

  if (Array.isArray(parsed)) {
    return parsed.filter(Boolean).map((section) => ({
      heading: section.heading,
      body: section.body,
    }));
  }

  return [];
}

export function formatBlogDate(dateString?: string | null): string {
  if (!dateString) {
    return new Date().toLocaleDateString('pt-BR', {
      day: 'numeric',
      month: 'short',
      year: 'numeric',
    });
  }

  return new Date(dateString).toLocaleDateString('pt-BR', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  });
}

function isPublished(publishedAt?: string, status?: string): boolean {
  if (status && status !== 'Published') return false;
  if (!publishedAt) {
    return status === 'Published' || !status;
  }
  return new Date(publishedAt).getTime() <= Date.now();
}

function mapRecordToPost(record: AirtableRecord): BlogPost | null {
  const fields = record.fields;
  const title = getStringField(fields, 'Title', 'title');

  if (!title) return null;

  // Extrai ou gera o slug de forma inteligente
  let slug = getStringField(fields, 'Slug', 'slug', 'Permalink', 'permalink');
  if (slug && (slug.startsWith('http://') || slug.startsWith('https://'))) {
    try {
      const url = new URL(slug);
      const pathParts = url.pathname.split('/').filter(Boolean);
      slug = pathParts[pathParts.length - 1] || slug;
    } catch {
      // Ignora erro de parsing e usa o valor bruto
    }
  }
  if (!slug) {
    slug = title
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .replace(/[^a-z0-9\s-]/g, '')
      .replace(/\s+/g, '-')
      .replace(/-+/g, '-')
      .trim();
  }

  const publishedAt = getStringField(
    fields,
    'Published At',
    'published_at',
    'PublishedAt',
    'Publish Date',
    'publish_date',
    'PublishDate',
  );

  const status = getStringField(fields, 'Status', 'status');

  if (!isPublished(publishedAt, status)) return null;

  // Categoria inteligente: tenta Category, depois o primeiro item de Tags
  let category = 'Desenvolvimento Web';
  const rawCategory = getField(fields, 'Category', 'category');
  if (typeof rawCategory === 'string') {
    category = normalizeCategory(rawCategory);
  } else {
    const tags = parseStringList(getField(fields, 'Tags', 'tags'));
    if (tags.length > 0) {
      category = normalizeCategory(tags[0]);
    }
  }

  const highlightedQuote = parseJsonField<{ text?: string; author?: string }>(
    getField(fields, 'Highlighted Quote', 'highlighted_quote'),
  );

  // Tempo de leitura: string ou número
  let readTime = getStringField(fields, 'Read Time', 'read_time', 'ReadTime');
  if (!readTime) {
    const readTimeNum = getField(
      fields,
      'Estimated Read Time (min)',
      'estimated_read_time',
    );
    if (typeof readTimeNum === 'number') {
      readTime = `${readTimeNum} min`;
    } else if (typeof readTimeNum === 'string') {
      readTime = `${readTimeNum} min`;
    }
  }
  if (!readTime) {
    readTime = '5 min';
  }

  // Cover image: string ou primeiro anexo
  // 📸 Busca blindada para a Imagem de Destaque
  let coverImage = getStringField(
    fields,
    'featuredImage',
    'Featured Image',
    'featured_image',
    'cover_image',
  );

  // Se o Airtable transformou o link em um anexo (com miniatura JPG), pegamos o link interno dele aqui:
  if (!coverImage) {
    const attachments = getField(
      fields,
      'featuredImage',
      'Featured Image',
      'featured_image',
    );
    if (Array.isArray(attachments) && attachments.length > 0) {
      const first = attachments[0];
      if (
        first &&
        typeof first === 'object' &&
        'url' in first &&
        typeof first.url === 'string'
      ) {
        coverImage = first.url;
      }
    }
  }

  return {
    id: record.id,
    title,
    slug,
    excerpt:
      getStringField(fields, 'Excerpt', 'excerpt', 'Summary', 'summary') ??
      'Conteúdo exclusivo da Eleven Web Development para impulsionar sua presença digital.',
    author: getStringField(fields, 'Author', 'author') ?? 'Equipe Eleven',
    date: formatBlogDate(publishedAt),
    dateISO: publishedAt ?? record.createdTime,
    createdISO: record.createdTime,
    category,
    readTime,
    accentGradient: getGradientForCategory(category),
    content: parseContent(getField(fields, 'Content', 'content')),
    sections: parseSections(getField(fields, 'Sections', 'sections')),
    // Altere para ficar exatamente assim:
    keyTakeaways: parseStringList(
      getField(
        fields,
        'keyTakeaways',
        'Key Takeaways',
        'key_takeaways',
        'KeyTakeaways',
      ),
    ),
    highlightedQuote,
    coverImage,
    publishedAt,
  };
}

function getBlogTableName(): string {
  return (
    process.env.AIRTABLE_BLOG_TABLE || process.env.AIRTABLE_BLOG || 'blog_posts'
  );
}

export async function getBlogPosts(): Promise<BlogPostSummary[]> {
  const records = await fetchAirtableRecords(getBlogTableName(), {
    maxRecords: 50,
  });

  return records
    .map(mapRecordToPost)
    .filter((post): post is BlogPost => Boolean(post))
    .sort(
      (a, b) => new Date(b.dateISO).getTime() - new Date(a.dateISO).getTime(),
    )
    .map((post) => ({
      id: post.id,
      title: post.title,
      slug: post.slug,
      excerpt: post.excerpt,
      author: post.author,
      date: post.date,
      dateISO: post.dateISO,
      createdISO: post.createdISO,
      category: post.category,
      readTime: post.readTime,
      accentGradient: post.accentGradient,
      keyTakeaways: post.keyTakeaways,
    }));
}

export async function getBlogPostBySlug(
  slug: string,
): Promise<BlogPost | null> {
  // Evita erros de fórmulas caso campos não existam no Airtable buscando os últimos 100 registros e filtrando na memória
  const records = await fetchAirtableRecords(getBlogTableName(), {
    maxRecords: 100,
  });

  const posts = records
    .map(mapRecordToPost)
    .filter((post): post is BlogPost => Boolean(post));

  return posts.find((post) => post.slug === slug) ?? null;
}
