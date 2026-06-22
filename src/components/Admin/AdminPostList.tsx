'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Search, Eye, CheckCircle, HelpCircle, Archive } from 'lucide-react';

interface AdminPost {
  id: string;
  title: string;
  status: string;
  category: string;
  author: string;
  date: string;
  slug: string;
}

interface AdminPostListProps {
  initialPosts: AdminPost[];
}

export function AdminPostList({ initialPosts }: AdminPostListProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');

  const filteredPosts = initialPosts.filter((post) => {
    const matchesSearch =
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.author.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.category.toLowerCase().includes(searchTerm.toLowerCase());

    if (statusFilter === 'all') return matchesSearch;
    if (statusFilter === 'published') return matchesSearch && post.status === 'Published';
    if (statusFilter === 'draft') return matchesSearch && post.status === 'Draft';
    if (statusFilter === 'archived') return matchesSearch && post.status === 'Archived';
    return matchesSearch;
  });

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'Published':
        return (
          <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/10 px-2.5 py-0.5 text-xs font-medium text-emerald-400 border border-emerald-500/20">
            <CheckCircle className="h-3 w-3" />
            Publicado
          </span>
        );
      case 'Draft':
        return (
          <span className="inline-flex items-center gap-1.5 rounded-full bg-amber-500/10 px-2.5 py-0.5 text-xs font-medium text-amber-400 border border-amber-500/20">
            <HelpCircle className="h-3 w-3" />
            Rascunho
          </span>
        );
      case 'Archived':
        return (
          <span className="inline-flex items-center gap-1.5 rounded-full bg-rose-500/10 px-2.5 py-0.5 text-xs font-medium text-rose-400 border border-rose-500/20">
            <Archive className="h-3 w-3" />
            Arquivado
          </span>
        );
      default:
        return (
          <span className="inline-flex items-center gap-1.5 rounded-full bg-gray-500/10 px-2.5 py-0.5 text-xs font-medium text-gray-400 border border-gray-500/20">
            {status}
          </span>
        );
    }
  };

  return (
    <div className="space-y-6">
      {/* Barra de Filtros e Busca */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between bg-black/20 backdrop-blur-md border border-white/5 rounded-2xl p-4">
        {/* Pesquisa */}
        <div className="relative flex-1">
          <Search className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Buscar por título, autor ou categoria..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full rounded-xl bg-white/5 pl-10 pr-4 py-2 text-sm text-white placeholder-gray-400 border border-white/10 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 transition"
          />
        </div>

        {/* Abas de Status */}
        <div className="flex flex-wrap gap-1 bg-white/5 p-1 rounded-xl border border-white/10 self-start sm:self-auto">
          {[
            { id: 'all', label: 'Todos' },
            { id: 'published', label: 'Publicados' },
            { id: 'draft', label: 'Rascunhos' },
            { id: 'archived', label: 'Arquivados' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setStatusFilter(tab.id)}
              className={`rounded-lg px-4 py-1.5 text-xs font-medium transition ${
                statusFilter === tab.id
                  ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/20'
                  : 'text-gray-400 hover:text-white hover:bg-white/5'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Tabela de Posts */}
      <div className="overflow-hidden rounded-2xl border border-white/5 bg-black/20 backdrop-blur-md shadow-2xl">
        <div className="overflow-x-auto">
          <table className="w-full border-collapse text-left text-sm text-gray-300">
            <thead className="bg-white/5 text-xs uppercase tracking-wider text-gray-400 border-b border-white/5">
              <tr>
                <th className="px-6 py-4 font-semibold">Título</th>
                <th className="px-6 py-4 font-semibold">Categoria</th>
                <th className="px-6 py-4 font-semibold">Autor</th>
                <th className="px-6 py-4 font-semibold">Data</th>
                <th className="px-6 py-4 font-semibold">Status</th>
                <th className="px-6 py-4 font-semibold text-right">Ações</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {filteredPosts.length > 0 ? (
                filteredPosts.map((post) => (
                  <tr key={post.id} className="hover:bg-white/5 transition-colors group">
                    <td className="px-6 py-4">
                      <div className="font-semibold text-white group-hover:text-blue-400 transition-colors">
                        {post.title}
                      </div>
                      <div className="text-xs text-gray-500 mt-0.5">slug: {post.slug}</div>
                    </td>
                    <td className="px-6 py-4">
                      <span className="rounded-full bg-white/5 px-2.5 py-1 text-xs text-gray-300 border border-white/10">
                        {post.category}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-gray-400">{post.author}</td>
                    <td className="px-6 py-4 text-gray-400">{post.date}</td>
                    <td className="px-6 py-4">{getStatusBadge(post.status)}</td>
                    <td className="px-6 py-4 text-right">
                      <div className="flex items-center justify-end gap-2">
                        {post.status === 'Published' && (
                          <Link
                            href={`/blog/${post.slug}`}
                            target="_blank"
                            className="rounded-lg p-2 text-gray-400 hover:text-white hover:bg-white/10 transition"
                            title="Ver post publicado"
                          >
                            <Eye className="h-4 w-4" />
                          </Link>
                        )}
                        <span className="text-xs text-gray-600 cursor-not-allowed px-2 py-1 bg-white/5 rounded border border-white/5">
                          Airtable Editor
                        </span>
                      </div>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={6} className="px-6 py-12 text-center text-gray-500">
                    Nenhum post encontrado.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
