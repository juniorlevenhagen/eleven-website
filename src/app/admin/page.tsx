import Airtable from 'airtable';
import Link from 'next/link';
import { PlusCircle, ArrowLeft, BookOpen } from 'lucide-react';
import { AdminPostList } from '@/components/Admin/AdminPostList';

export const dynamic = 'force-dynamic';

async function getAllBlogPostsForAdmin() {
  try {
    const apiKey = process.env.AIRTABLE_API_KEY;
    const baseId = process.env.AIRTABLE_BASE_ID;
    const tableName = process.env.AIRTABLE_BLOG || 'blog_posts';

    if (!apiKey || !baseId) {
      console.error('Configuração do Airtable ausente para listagem admin.');
      return [];
    }

    const base = new Airtable({ apiKey }).base(baseId);
    const records = await base(tableName).select({}).all();

    return records.map((record) => {
      const fields = record.fields;
      const title = (fields.Title || fields.title || 'Sem título') as string;
      const status = (fields.Status || fields.status || 'Draft') as string;
      const category = (fields.Category ||
        fields.category ||
        (fields.Tags && Array.isArray(fields.Tags) && fields.Tags[0]) ||
        'Desenvolvimento Web') as string;
      const author = (fields.Author ||
        fields.author ||
        'Equipe Eleven') as string; // Ainda não está sendo usado
      const keyTakeaways = (fields.keyTakeaways ||
        fields['keyTakeaways'] ||
        fields.Takeaways ||
        '') as string;

      const rawDate = (fields.PublishedAt ||
        fields['Published At'] ||
        fields['Publish Date'] ||
        fields.published_at ||
        fields.publish_date) as string;

      // Se não tiver data, tenta obter a data de criação ou usa a atual
      let dateObj = new Date();
      if (rawDate) {
        dateObj = new Date(rawDate);
      } else {
        const recordWithTime = record as { createdTime?: string };
        if (recordWithTime.createdTime) {
          dateObj = new Date(recordWithTime.createdTime);
        }
      }

      const date = dateObj.toLocaleDateString('pt-BR', {
        day: 'numeric',
        month: 'short',
        year: 'numeric',
      });

      let slug = (fields.Slug ||
        fields.slug ||
        fields.Permalink ||
        fields.permalink ||
        '') as string;
      if (slug && (slug.startsWith('http://') || slug.startsWith('https://'))) {
        try {
          const url = new URL(slug);
          const pathParts = url.pathname.split('/').filter(Boolean);
          slug = pathParts[pathParts.length - 1] || slug;
        } catch {
          // Ignora
        }
      }
      if (!slug && title) {
        slug = title
          .toLowerCase()
          .normalize('NFD')
          .replace(/[\u0300-\u036f]/g, '')
          .replace(/[^a-z0-9\s-]/g, '')
          .replace(/\s+/g, '-')
          .replace(/-+/g, '-')
          .trim();
      }

      return {
        id: record.id,
        title,
        status,
        category,
        author,
        date,
        slug,
        keyTakeaways,
      };
    });
  } catch (error) {
    console.error('Erro ao buscar posts para admin:', error);
    return [];
  }
}

export default async function AdminPage() {
  const posts = await getAllBlogPostsForAdmin();

  return (
    <div className="min-h-screen bg-slate-950 text-white selection:bg-blue-600/30 selection:text-white">
      {/* Background decorativo */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute -top-[40%] -left-[20%] h-[80%] w-[60%] rounded-full bg-blue-900/10 blur-[150px]" />
        <div className="absolute -bottom-[40%] -right-[20%] h-[80%] w-[60%] rounded-full bg-purple-900/10 blur-[150px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        {/* Cabeçalho */}
        <header className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between border-b border-white/5 pb-8 mb-10">
          <div>
            <div className="flex items-center gap-3">
              <Link
                href="/blog"
                className="inline-flex items-center gap-1.5 text-xs text-gray-400 hover:text-white transition group mb-2"
              >
                <ArrowLeft className="h-3.5 w-3.5 transition group-hover:-translate-x-1" />
                Ir para o blog público
              </Link>
            </div>
            <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl bg-gradient-to-r from-blue-400 via-indigo-200 to-purple-400 bg-clip-text text-transparent">
              Painel do Blog
            </h1>
            <p className="mt-2 text-sm text-gray-400">
              Gerencie as postagens do seu blog de forma simples através do
              Airtable.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <a
              href="https://airtable.com"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-white/5 px-4 py-2.5 text-sm font-semibold text-white border border-white/10 hover:bg-white/10 hover:border-white/20 transition duration-300"
            >
              <BookOpen className="h-4 w-4 text-blue-400" />
              Abrir no Airtable
            </a>
            <Link
              href="/admin/new"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white hover:bg-blue-500 shadow-lg shadow-blue-500/25 transition duration-300 transform active:scale-95"
            >
              <PlusCircle className="h-4 w-4" />
              Escrever Post
            </Link>
          </div>
        </header>

        {/* Listagem de posts */}
        <main>
          <AdminPostList initialPosts={posts} />
        </main>
      </div>
    </div>
  );
}
