import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Calendar, Clock, User, ArrowRight } from 'lucide-react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { WhatsAppButton } from '@/components/WhatsAppButton';
import { formatBlogDate, getBlogPostBySlug } from '@/lib/blog';
import { parseMarkdown } from '@/lib/utils';

type PageParams = {
  params: Promise<{ slug: string }>;
};

export const dynamic = 'force-dynamic';

export async function generateMetadata({
  params,
}: PageParams): Promise<Metadata> {
  const { slug } = await params;
  const post = await getBlogPostBySlug(slug);

  if (!post) {
    return { title: 'Artigo não encontrado' };
  }

  const ogImage =
    post.coverImage || 'https://eleven-website.com/default-og-image.jpg';

  return {
    title: `${post.title} | Blog Eleven`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      images: [
        {
          url: ogImage,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.excerpt,
      images: [ogImage],
    },
  };
}

export default async function BlogPostPage({ params }: PageParams) {
  const { slug } = await params;
  const post = await getBlogPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const publishedLabel = formatBlogDate(post.publishedAt);

  return (
    <>
      <Header />
      <main
        id="main-content"
        className="min-h-screen bg-gradient-to-b from-white via-white to-gray-100 pt-16"
      >
        <article>
          <section className="relative overflow-hidden border-b border-black/5">
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute -top-24 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-gradient-to-r from-gray-200 via-white to-gray-200 blur-3xl" />
            </div>

            <div className="relative mx-auto flex max-w-4xl flex-col items-center px-4 pb-12 pt-20 text-center">
              <div className="mb-6 inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.35em] text-gray-500">
                <span className="rounded-full border border-black/10 px-4 py-1">
                  {post.category}
                </span>
                {post.readTime && (
                  <span className="rounded-full border border-black/10 px-4 py-1">
                    {post.readTime}
                  </span>
                )}
              </div>

              <h1 className="text-3xl font-bold text-gray-900 sm:text-5xl">
                {post.title}
              </h1>

              <p className="mt-6 max-w-2xl text-base text-gray-600 sm:text-lg">
                {post.excerpt}
              </p>

              <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-xs uppercase tracking-[0.3em] text-gray-500">
                <span className="flex items-center gap-2">
                  <User className="h-4 w-4" />
                  {post.author}
                </span>
                {publishedLabel && (
                  <span className="flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    {publishedLabel}
                  </span>
                )}
                {post.readTime && (
                  <span className="flex items-center gap-2">
                    <Clock className="h-4 w-4" />
                    {post.readTime}
                  </span>
                )}
              </div>
            </div>

            {/* 📸 Seção da Imagem de Destaque */}
            {post.coverImage && (
              <div className="relative mx-auto max-w-4xl px-4 pb-16">
                <div className="overflow-hidden rounded-[24px] shadow-2xl border border-gray-200">
                  <img
                    src={post.coverImage}
                    alt={post.title}
                    className="w-full h-auto max-h-[480px] object-cover transition-transform duration-500 hover:scale-[1.02]"
                  />
                </div>
              </div>
            )}
          </section>

          <section className="px-4 py-20">
            <div className="mx-auto flex max-w-5xl flex-col gap-14 lg:flex-row">
              <div className="flex-1 space-y-10 text-lg leading-relaxed text-black/80">
                {post.content.length > 0 && (
                  <div className="space-y-6">
                    {post.content.map((paragraph, index) => {
                      const hasImage = /!\[.*?\]\(.*?\)/.test(paragraph);

                      if (hasImage) {
                        return (
                          <div
                            key={`content-${index}`}
                            className="text-gray-700"
                          >
                            {parseMarkdown(paragraph)}
                          </div>
                        );
                      }

                      return (
                        <p key={`paragraph-${index}`} className="text-gray-700">
                          {parseMarkdown(paragraph)}
                        </p>
                      );
                    })}
                  </div>
                )}

                {post.sections.length > 0 && (
                  <div className="space-y-12">
                    {post.sections.map((section, index) => {
                      const hasImage = section.body
                        ? /!\[.*?\]\(.*?\)/.test(section.body)
                        : false;

                      return (
                        <div key={`section-${index}`} className="space-y-4">
                          {section.heading && (
                            <h2 className="text-2xl font-bold text-gray-900">
                              {section.heading}
                            </h2>
                          )}
                          {section.body &&
                            (hasImage ? (
                              <div className="text-gray-700">
                                {parseMarkdown(section.body)}
                              </div>
                            ) : (
                              <p className="text-gray-700">
                                {parseMarkdown(section.body)}
                              </p>
                            ))}
                        </div>
                      );
                    })}
                  </div>
                )}

                {post.highlightedQuote?.text && (
                  <blockquote className="rounded-[24px] border-2 border-blue-600 bg-white p-8 text-center text-xl font-medium text-gray-900 shadow-[0_25px_60px_-40px_rgba(0,0,0,0.45)]">
                    <p className="mb-4">“{post.highlightedQuote.text}”</p>
                    {post.highlightedQuote.author && (
                      <footer className="text-sm uppercase tracking-[0.3em] text-gray-500">
                        {post.highlightedQuote.author}
                      </footer>
                    )}
                  </blockquote>
                )}
              </div>

              <aside className="w-full max-w-md self-start rounded-[28px] border-2 border-gray-200 bg-white p-8 shadow-[0_20px_70px_-40px_rgba(0,0,0,0.45)]">
                <div className="space-y-8">
                  <div className="space-y-4">
                    <h3 className="text-sm font-semibold uppercase tracking-[0.3em] text-gray-500">
                      Principais insights
                    </h3>
                    {post.keyTakeaways.length > 0 ? (
                      <ul className="space-y-3 text-sm text-gray-700">
                        {post.keyTakeaways.map((item, index) => (
                          <li key={`takeaway-${index}`} className="flex gap-3">
                            <span className="mt-1 inline-block h-2 w-2 rounded-full bg-blue-600" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    ) : (
                      <p className="text-sm text-gray-500">
                        Preencha o campo Key Takeaways no Airtable para destacar
                        os aprendizados deste artigo.
                      </p>
                    )}
                  </div>

                  <div className="space-y-4 border-t border-dashed border-gray-200 pt-6">
                    <h3 className="text-sm font-semibold uppercase tracking-[0.3em] text-gray-500">
                      Continue a leitura
                    </h3>
                    <Link
                      href="/blog"
                      className="group inline-flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.3em] text-gray-900 transition hover:text-blue-600"
                    >
                      Voltar para o blog
                      <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                    </Link>
                  </div>
                </div>
              </aside>
            </div>
          </section>
        </article>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
