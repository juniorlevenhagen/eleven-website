"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { Calendar, User, ArrowRight, Search } from "lucide-react";
import { cn } from "@/lib/utils";
import {
  BLOG_CATEGORIES,
  type BlogPostSummary,
  getBorderColorForCategory,
  getFeaturedGradient,
  getGradientForCategory,
  getHoverColorForCategory,
} from "@/lib/blog";

type BlogListingProps = {
  posts: BlogPostSummary[];
};

export function BlogListing({ posts }: BlogListingProps) {
  const [selectedCategory, setSelectedCategory] = useState("Todos");
  const [searchTerm, setSearchTerm] = useState("");
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [newsletterStatus, setNewsletterStatus] = useState<
    "idle" | "loading" | "success" | "error" | "already"
  >("idle");

  const filteredPosts = useMemo(() => {
    if (!posts.length) return [];

    const normalizedSearchTerm = searchTerm.trim().toLowerCase();
    const normalizedCategory = selectedCategory.trim();
    const showAll = normalizedCategory === "Todos";

    const filtered = posts.filter((post) => {
      const postCategory = post.category.trim().toLowerCase();
      const selectedCat = normalizedCategory.toLowerCase();
      const matchesCategory = showAll || postCategory === selectedCat;

      if (normalizedSearchTerm) {
        const matchesSearch =
          post.title.toLowerCase().includes(normalizedSearchTerm) ||
          post.excerpt.toLowerCase().includes(normalizedSearchTerm) ||
          postCategory.includes(normalizedSearchTerm) ||
          post.author.toLowerCase().includes(normalizedSearchTerm);

        return matchesCategory && matchesSearch;
      }

      return matchesCategory;
    });

    return [...filtered].sort(
      (a, b) => new Date(b.dateISO).getTime() - new Date(a.dateISO).getTime(),
    );
  }, [posts, searchTerm, selectedCategory]);

  const featuredPost = useMemo(() => {
    if (!posts.length) return null;

    return [...posts].sort(
      (a, b) => new Date(b.dateISO).getTime() - new Date(a.dateISO).getTime(),
    )[0];
  }, [posts]);

  const regularPosts = useMemo(() => {
    if (!featuredPost) return filteredPosts;
    return filteredPosts.filter((post) => post.id !== featuredPost.id);
  }, [filteredPosts, featuredPost]);

  return (
    <>
      <Header />
      <main id="main-content" className="min-h-screen bg-white pt-16">
        <section className="relative overflow-hidden border-b border-gray-200 bg-gradient-to-b from-white via-white to-gray-100">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute -top-24 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-gradient-to-r from-gray-200 via-white to-gray-200 blur-3xl" />
          </div>

          <div className="relative z-10 mx-auto flex max-w-6xl flex-col items-center px-4 py-20 text-center">
            <span className="mb-6 inline-flex items-center rounded-full border border-black/10 px-6 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-gray-600">
              Conteúdo exclusivo
            </span>

            <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl md:text-6xl">
              Insights para impulsionar seu negócio digital
            </h1>

            <p className="mt-6 max-w-3xl text-base text-gray-600 sm:text-lg md:text-xl">
              Estratégias de desenvolvimento web, SEO, design e tecnologia
              elaboradas pela Eleven para você aplicar no seu projeto.
            </p>

            <div className="mt-12 w-full max-w-2xl">
              <label htmlFor="blog-search" className="sr-only">
                Buscar artigos do blog
              </label>
              <div className="relative flex items-center overflow-hidden rounded-full border border-black/10 bg-white shadow-[0_20px_80px_-40px_rgba(0,0,0,0.45)]">
                <Search className="ml-5 h-4 w-4 text-gray-400" />
                <input
                  id="blog-search"
                  type="text"
                  value={searchTerm}
                  onChange={(event) => setSearchTerm(event.target.value)}
                  placeholder="Busque por título, assunto, categoria ou autor"
                  className="w-full border-0 bg-transparent px-4 py-4 text-sm text-gray-700 placeholder:text-gray-400 focus:outline-none focus:ring-0 sm:text-base"
                />
                <span className="mr-4 hidden rounded-full border border-blue-600 px-4 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-blue-600 sm:inline-flex">
                  Blog Eleven
                </span>
              </div>
            </div>
          </div>
        </section>

        <section className="border-b border-gray-200 bg-white py-10">
          <div className="mx-auto flex max-w-5xl flex-wrap justify-center gap-2 px-4 sm:gap-3">
            {BLOG_CATEGORIES.map((category) => {
              const isActive = selectedCategory === category;
              return (
                <button
                  key={category}
                  type="button"
                  onClick={() => setSelectedCategory(category)}
                  className={cn(
                    "inline-flex items-center rounded-full border px-5 py-2 text-xs font-semibold uppercase tracking-[0.2em] transition-colors sm:px-6 sm:py-2.5 sm:text-sm",
                    isActive
                      ? "border-blue-600 bg-blue-600 text-white shadow-[0_15px_40px_-25px_rgba(37,99,235,0.6)]"
                      : "border-gray-200 bg-white text-gray-600 hover:border-blue-600 hover:text-blue-600",
                  )}
                >
                  {category}
                </button>
              );
            })}
          </div>
        </section>

        {featuredPost && (
          <section className="bg-white py-20">
            <div className="mx-auto grid max-w-6xl gap-10 px-4 md:grid-cols-[1.15fr_0.85fr]">
              <div className="relative h-full overflow-hidden rounded-[32px] shadow-2xl">
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${getFeaturedGradient(featuredPost.category)}`}
                />
                <div className="relative z-10 flex h-full flex-col justify-between gap-8 p-8 text-white md:p-12">
                  <div className="space-y-5">
                    <span className="inline-flex items-center rounded-full border-2 border-white/60 bg-white/20 px-5 py-2 text-xs font-semibold uppercase tracking-[0.35em] backdrop-blur-md">
                      Destaque
                    </span>
                    <h2 className="text-3xl font-bold leading-tight sm:text-4xl md:text-5xl">
                      {featuredPost.title}
                    </h2>
                    <p className="max-w-2xl text-base leading-relaxed sm:text-lg">
                      {featuredPost.excerpt}
                    </p>
                  </div>

                  <div className="flex flex-wrap items-center gap-6 text-xs uppercase tracking-[0.25em] sm:text-sm">
                    <span className="flex items-center gap-2 rounded-full bg-white/10 px-3 py-1.5 backdrop-blur-sm">
                      <User className="h-4 w-4" />
                      {featuredPost.author}
                    </span>
                    <span className="flex items-center gap-2 rounded-full bg-white/10 px-3 py-1.5 backdrop-blur-sm">
                      <Calendar className="h-4 w-4" />
                      {featuredPost.date}
                    </span>
                    <span className="rounded-full bg-white/10 px-3 py-1.5 backdrop-blur-sm">
                      {featuredPost.readTime}
                    </span>
                  </div>

                  <Link
                    href={`/blog/${featuredPost.slug}`}
                    className="group inline-flex items-center justify-center gap-3 rounded-full border-2 border-white bg-white/20 px-8 py-4 text-sm font-semibold uppercase tracking-[0.3em] backdrop-blur-md transition-all hover:scale-105 hover:bg-white hover:text-gray-900"
                  >
                    Ler artigo completo
                    <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-2" />
                  </Link>
                </div>
              </div>

              <div className="relative flex h-full items-end overflow-hidden rounded-[32px] border-2 border-gray-200 bg-gradient-to-br from-gray-50 via-white to-gray-100 shadow-lg">
                <div className="relative z-10 flex flex-col gap-6 p-8 md:p-12">
                  <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.3em] text-gray-500">
                    <span className="h-1 w-8 rounded-full bg-blue-600" />
                    Presença digital
                  </span>
                  <h3 className="text-2xl font-bold leading-tight text-gray-900 md:text-3xl">
                    Transforme conhecimento em resultados online
                  </h3>
                  <p className="text-sm leading-relaxed text-gray-700">
                    Combine estratégia, design e tecnologia para construir um
                    site que gera credibilidade e conversões.
                  </p>
                  <div className="grid gap-4 text-sm text-gray-700">
                    <div className="flex items-start gap-3">
                      <div className="mt-1.5 h-2 w-2 flex-shrink-0 rounded-full bg-blue-600" />
                      <span>Sites profissionais com foco em performance.</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="mt-1.5 h-2 w-2 flex-shrink-0 rounded-full bg-blue-600" />
                      <span>SEO e estrutura pensados para crescimento.</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="mt-1.5 h-2 w-2 flex-shrink-0 rounded-full bg-blue-600" />
                      <span>Experiências digitais alinhadas ao seu negócio.</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        <section className="bg-gray-50 py-24">
          <div className="mx-auto max-w-7xl px-4">
            {regularPosts.length === 0 ? (
              <div className="py-20 text-center">
                <p className="text-lg text-gray-600">
                  {searchTerm || selectedCategory !== "Todos"
                    ? "Nenhum post encontrado com os filtros selecionados."
                    : "Nenhum post publicado ainda."}
                </p>
              </div>
            ) : (
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {regularPosts.map((post) => (
                  <article
                    key={post.id}
                    className={cn(
                      "group relative flex h-full flex-col justify-between rounded-[28px] border-2 bg-white p-6 transition-all duration-300 hover:-translate-y-2 hover:text-white hover:shadow-[0_30px_80px_-40px_rgba(0,0,0,0.65)] md:p-8",
                      getBorderColorForCategory(post.category),
                      getHoverColorForCategory(post.category),
                    )}
                  >
                    <div>
                      <div
                        className={cn(
                          "h-16 w-full rounded-2xl bg-gradient-to-br",
                          post.accentGradient ||
                            getGradientForCategory(post.category),
                        )}
                      />
                      <div className="mt-6 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.3em] text-gray-500 group-hover:text-white/90">
                        <span>{post.category}</span>
                        <span className="h-1 w-1 rounded-full bg-black/40 group-hover:bg-white/80" />
                        <span>{post.readTime}</span>
                      </div>
                      <h3 className="mt-5 text-2xl font-bold text-gray-900 group-hover:text-white">
                        {post.title}
                      </h3>
                      <p className="mt-4 text-sm text-gray-600 transition-colors group-hover:text-gray-100">
                        {post.excerpt}
                      </p>
                    </div>

                    <div className="mt-10 flex flex-col gap-4 text-xs uppercase tracking-[0.25em] text-gray-500 group-hover:text-white/80">
                      <span className="flex items-center gap-2">
                        <User className="h-4 w-4" />
                        {post.author}
                      </span>
                      <span className="flex items-center gap-2">
                        <Calendar className="h-4 w-4" />
                        {post.date}
                      </span>
                      <Link
                        href={`/blog/${post.slug}`}
                        className="group/link mt-2 inline-flex items-center gap-3 text-sm font-semibold tracking-[0.25em] text-gray-900 transition-colors hover:text-blue-600 group-hover:text-white group-hover:underline"
                      >
                        Ler mais
                        <ArrowRight className="h-4 w-4 transition-transform group-hover/link:translate-x-1" />
                      </Link>
                    </div>
                  </article>
                ))}
              </div>
            )}
          </div>
        </section>

        <section className="bg-gray-900 py-24">
          <div className="mx-auto max-w-4xl px-4 text-center text-white">
            <h2 className="text-3xl font-bold sm:text-4xl md:text-5xl">
              Receba os próximos insights primeiro
            </h2>
            <p className="mt-6 text-base text-white/70 sm:text-lg">
              Assine a newsletter da Eleven e receba artigos, dicas e novidades
              sobre presença digital diretamente no seu email.
            </p>
            <form
              className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center"
              onSubmit={async (event) => {
                event.preventDefault();

                const trimmedEmail = newsletterEmail.trim();
                if (!trimmedEmail || newsletterStatus === "loading") return;

                setNewsletterStatus("loading");
                try {
                  const response = await fetch("/api/blog/newsletter", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ email: trimmedEmail }),
                  });

                  const data = await response.json();

                  if (data.alreadySubscribed) {
                    setNewsletterStatus("already");
                  } else if (response.ok) {
                    setNewsletterStatus("success");
                    setNewsletterEmail("");
                  } else {
                    setNewsletterStatus("error");
                  }

                  setTimeout(() => setNewsletterStatus("idle"), 3000);
                } catch {
                  setNewsletterStatus("error");
                  setTimeout(() => setNewsletterStatus("idle"), 3000);
                }
              }}
            >
              <label htmlFor="newsletter-email" className="sr-only">
                Endereço de email
              </label>
              <input
                id="newsletter-email"
                name="email"
                type="email"
                value={newsletterEmail}
                onChange={(e) => setNewsletterEmail(e.target.value)}
                onBlur={(e) => setNewsletterEmail(e.target.value.trim())}
                placeholder="Digite seu melhor email"
                autoComplete="email"
                inputMode="email"
                required
                disabled={newsletterStatus === "loading"}
                className="w-full max-w-md rounded-full border border-white/30 bg-transparent px-6 py-4 text-sm text-white placeholder:text-white/40 focus:border-white focus:outline-none focus:ring-2 focus:ring-white/60 disabled:opacity-50 sm:text-base"
              />
              <button
                type="submit"
                disabled={newsletterStatus === "loading"}
                className="inline-flex items-center justify-center rounded-full bg-white px-8 py-4 text-xs font-semibold uppercase tracking-[0.3em] text-gray-900 transition hover:bg-gray-100 disabled:cursor-not-allowed disabled:opacity-50"
              >
                {newsletterStatus === "loading" ? "Enviando..." : "Quero receber"}
              </button>
            </form>
            {newsletterStatus === "success" && (
              <p className="mt-4 text-sm text-emerald-400">Inscrito com sucesso!</p>
            )}
            {newsletterStatus === "already" && (
              <p className="mt-4 text-sm text-blue-300">
                Você já está inscrito na newsletter!
              </p>
            )}
            {newsletterStatus === "error" && (
              <p className="mt-4 text-sm text-red-400">
                Erro ao inscrever-se. Tente novamente.
              </p>
            )}
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
