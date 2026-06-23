'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import {
  ArrowLeft,
  Send,
  Sparkles,
  AlertCircle,
  CheckCircle2,
  Loader2,
} from 'lucide-react';

export default function NewPostPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    title: '',
    permalink: '',
    author: 'Equipe Eleven',
    category: 'SEO',
    summary: '',
    content: '',
    featuredimage: '',
    estimatedread: '5',
    status: 'Draft',
    publishdate: '',
    keyTakeaways: '', // Mantido o campo no estado inicial
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    'idle' | 'success' | 'error'
  >('idle');
  const [errorMessage, setErrorMessage] = useState('');

  // Gera o slug (permalink) automaticamente a partir do título
  useEffect(() => {
    if (formData.title) {
      const generatedSlug = formData.title
        .toLowerCase()
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '') // remove acentos
        .replace(/[^a-z0-9\s-]/g, '') // remove caracteres especiais
        .replace(/\s+/g, '-') // substitui espaços por -
        .replace(/-+/g, '-') // remove hifens duplicados
        .trim();
      setFormData((prev) => ({ ...prev, permalink: generatedSlug }));
    }
  }, [formData.title]);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');
    setErrorMessage('');

    if (!formData.title.trim()) {
      setErrorMessage('O título é obrigatório.');
      setSubmitStatus('error');
      setIsSubmitting(false);
      return;
    }

    if (!formData.content.trim()) {
      setErrorMessage('O conteúdo do post é obrigatório.');
      setSubmitStatus('error');
      setIsSubmitting(false);
      return;
    }

    try {
      const response = await fetch('/api/blog', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          title: formData.title,
          permalink: formData.permalink,
          author: formData.author,
          tags: [formData.category], // Airtable espera o campo Tags como array
          summary: formData.summary,
          content: formData.content,
          featuredimage: formData.featuredimage || undefined,
          estimatedread: Number(formData.estimatedread),
          status: formData.status,
          publishdate:
            formData.publishdate || new Date().toISOString().split('T')[0],
          // 🔴 ATUALIZAÇÃO 1: Enviando o campo keyTakeaways para a API do Next.js
          keyTakeaways: formData.keyTakeaways,
        }),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || 'Erro desconhecido ao enviar post.');
      }

      setSubmitStatus('success');
      // Redireciona de volta ao painel após 2 segundos
      setTimeout(() => {
        router.push('/admin');
      }, 2000);
    } catch (err: unknown) {
      console.error(err);
      const message =
        err instanceof Error
          ? err.message
          : 'Houve um erro de rede ou servidor ao cadastrar o post.';
      setErrorMessage(message);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white selection:bg-blue-600/30 selection:text-white pb-20">
      {/* Background decorativo */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute -top-[40%] -right-[20%] h-[80%] w-[60%] rounded-full bg-blue-900/10 blur-[150px]" />
        <div className="absolute -bottom-[40%] -left-[20%] h-[80%] w-[60%] rounded-full bg-purple-900/10 blur-[150px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-4xl px-4 pt-12 sm:px-6 lg:px-8">
        {/* Cabeçalho */}
        <header className="mb-10">
          <Link
            href="/admin"
            className="inline-flex items-center gap-1.5 text-xs text-gray-400 hover:text-white transition group mb-4"
          >
            <ArrowLeft className="h-3.5 w-3.5 transition group-hover:-translate-x-1" />
            Voltar para o Painel
          </Link>
          <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl bg-gradient-to-r from-blue-400 via-indigo-200 to-purple-400 bg-clip-text text-transparent">
            Escrever Novo Post
          </h1>
          <p className="mt-2 text-sm text-gray-400">
            Publique novos conteúdos e insira no Airtable diretamente pelo
            painel do site.
          </p>
        </header>

        {/* Formulário */}
        <main className="bg-black/20 backdrop-blur-md border border-white/5 rounded-3xl p-6 sm:p-10 shadow-2xl">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Título */}
            <div>
              <label
                htmlFor="title"
                className="block text-sm font-semibold text-gray-300 mb-2"
              >
                Título do Artigo <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="title"
                name="title"
                value={formData.title}
                onChange={handleChange}
                placeholder="Ex: 5 Tendências de SEO para 2026"
                className="w-full rounded-xl bg-white/5 px-4 py-3 text-sm text-white border border-white/10 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 transition"
              />
            </div>

            {/* Grid de Metadados Básicos */}
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              {/* Slug / Link */}
              <div>
                <label
                  htmlFor="permalink"
                  className="block text-sm font-semibold text-gray-300 mb-2"
                >
                  Slug / URL Amigável
                </label>
                <div className="relative">
                  <input
                    type="text"
                    id="permalink"
                    name="permalink"
                    value={formData.permalink}
                    onChange={handleChange}
                    placeholder="Ex: 5-tendencias-de-seo-para-2026"
                    className="w-full rounded-xl bg-white/5 pl-4 pr-10 py-3 text-sm text-white border border-white/10 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 transition font-mono text-gray-300"
                  />
                  <Sparkles className="absolute right-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-blue-400" />
                </div>
              </div>

              {/* Autor */}
              <div>
                <label
                  htmlFor="author"
                  className="block text-sm font-semibold text-gray-300 mb-2"
                >
                  Autor
                </label>
                <input
                  type="text"
                  id="author"
                  name="author"
                  value={formData.author}
                  onChange={handleChange}
                  placeholder="Ex: Equipe Eleven"
                  className="w-full rounded-xl bg-white/5 px-4 py-3 text-sm text-white border border-white/10 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 transition"
                />
              </div>

              {/* Categoria */}
              <div>
                <label
                  htmlFor="category"
                  className="block text-sm font-semibold text-gray-300 mb-2"
                >
                  Categoria
                </label>
                <select
                  id="category"
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                  className="w-full rounded-xl bg-slate-900 px-4 py-3 text-sm text-white border border-white/10 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 transition"
                >
                  <option value="SEO">SEO</option>
                  <option value="Tutorial">Tutorial</option>
                  <option value="Announcement">Anúncio</option>
                  <option value="Case Study">Estudo de Caso</option>
                  <option value="Interview">Entrevista</option>
                  <option value="Opinion">Opinião</option>
                  <option value="News">Notícias</option>
                  <option value="Other">Outros</option>
                </select>
              </div>

              {/* Tempo de Leitura */}
              <div>
                <label
                  htmlFor="estimatedread"
                  className="block text-sm font-semibold text-gray-300 mb-2"
                >
                  Tempo de Leitura (minutos)
                </label>
                <input
                  type="number"
                  id="estimatedread"
                  name="estimatedread"
                  value={formData.estimatedread}
                  onChange={handleChange}
                  min="1"
                  max="60"
                  className="w-full rounded-xl bg-white/5 px-4 py-3 text-sm text-white border border-white/10 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 transition"
                />
              </div>
            </div>

            {/* Link Imagem de Destaque */}
            <div>
              <label
                htmlFor="featuredimage"
                className="block text-sm font-semibold text-gray-300 mb-2"
              >
                URL da Imagem de Destaque
              </label>
              <input
                type="url"
                id="featuredimage"
                name="featuredimage"
                value={formData.featuredimage}
                onChange={handleChange}
                placeholder="Ex: https://images.unsplash.com/photo-..."
                className="w-full rounded-xl bg-white/5 px-4 py-3 text-sm text-white border border-white/10 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 transition font-mono text-xs"
              />
              <p className="mt-1.5 text-xs text-gray-500">
                Insira o link de uma imagem pública do Unsplash ou do próprio
                repositório de mídias.
              </p>
            </div>

            {/* Resumo / Excerpt */}
            <div>
              <label
                htmlFor="summary"
                className="block text-sm font-semibold text-gray-300 mb-2"
              >
                Resumo / Subtítulo
              </label>
              <textarea
                id="summary"
                name="summary"
                rows={2}
                value={formData.summary}
                onChange={handleChange}
                placeholder="Um breve resumo de uma ou duas frases que aparece no card de listagem do blog..."
                className="w-full rounded-xl bg-white/5 px-4 py-3 text-sm text-white border border-white/10 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 transition resize-none"
              />
            </div>

            {/* 🔴 ATUALIZAÇÃO 2: Novo Input para Key Takeaways adicionado aqui */}
            <div>
              <label
                htmlFor="keyTakeaways"
                className="block text-sm font-semibold text-gray-300 mb-2"
              >
                Principais Aprendizados / Key Takeaways
              </label>
              <textarea
                id="keyTakeaways"
                name="keyTakeaways"
                rows={3}
                value={formData.keyTakeaways}
                onChange={handleChange}
                placeholder="Destaque aqui os pontos mais importantes que o leitor aprenderá neste artigo..."
                className="w-full rounded-xl bg-white/5 px-4 py-3 text-sm text-white border border-white/10 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 transition resize-none"
              />
            </div>

            {/* Conteúdo do Artigo */}
            <div>
              <label
                htmlFor="content"
                className="block text-sm font-semibold text-gray-300 mb-2"
              >
                Conteúdo do Artigo <span className="text-red-500">*</span>{' '}
                (Markdown suportado)
              </label>
              <textarea
                id="content"
                name="content"
                rows={10}
                value={formData.content}
                onChange={handleChange}
                placeholder="Escreva seu artigo aqui. Você pode usar Markdown simples para títulos (#), negrito (**), listas (- ) e parágrafos normais..."
                className="w-full rounded-xl bg-white/5 px-4 py-3 text-sm text-white border border-white/10 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 transition font-mono"
              />
            </div>

            {/* Configuração de Publicação */}
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 border-t border-white/5 pt-6">
              {/* Status */}
              <div>
                <label
                  htmlFor="status"
                  className="block text-sm font-semibold text-gray-300 mb-2"
                >
                  Status
                </label>
                <select
                  id="status"
                  name="status"
                  value={formData.status}
                  onChange={handleChange}
                  className="w-full rounded-xl bg-slate-900 px-4 py-3 text-sm text-white border border-white/10 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 transition"
                >
                  <option value="Draft">Draft (Rascunho)</option>
                  <option value="Published">
                    Published (Publicado imediatamente)
                  </option>
                </select>
              </div>

              {/* Data de Publicação */}
              <div>
                <label
                  htmlFor="publishdate"
                  className="block text-sm font-semibold text-gray-300 mb-2"
                >
                  Data de Publicação
                </label>
                <input
                  type="date"
                  id="publishdate"
                  name="publishdate"
                  value={formData.publishdate}
                  onChange={handleChange}
                  className="w-full rounded-xl bg-white/5 px-4 py-3 text-sm text-white border border-white/10 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 transition"
                />
              </div>
            </div>

            {/* Status Feedback */}
            {submitStatus === 'success' && (
              <div className="flex items-center gap-3 rounded-xl bg-emerald-500/10 border border-emerald-500/20 p-4 text-emerald-400 text-sm">
                <CheckCircle2 className="h-5 w-5 shrink-0" />
                <span>
                  Post cadastrado com sucesso! Redirecionando para o painel...
                </span>
              </div>
            )}

            {submitStatus === 'error' && (
              <div className="flex items-center gap-3 rounded-xl bg-rose-500/10 border border-rose-500/20 p-4 text-rose-400 text-sm">
                <AlertCircle className="h-5 w-5 shrink-0" />
                <span>{errorMessage}</span>
              </div>
            )}

            {/* Botões de Ação */}
            <div className="flex items-center justify-end gap-4 border-t border-white/5 pt-6">
              <Link
                href="/admin"
                className="rounded-xl px-5 py-3 text-sm font-semibold text-gray-400 hover:text-white transition"
              >
                Cancelar
              </Link>
              <button
                type="submit"
                disabled={isSubmitting}
                className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-6 py-3 text-sm font-semibold text-white hover:bg-blue-500 shadow-lg shadow-blue-500/25 transition disabled:opacity-50 disabled:cursor-not-allowed transform active:scale-95"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" />
                    Enviando...
                  </>
                ) : (
                  <>
                    <Send className="h-4 w-4" />
                    Salvar Artigo
                  </>
                )}
              </button>
            </div>
          </form>
        </main>
      </div>
    </div>
  );
}
