import { headers } from 'next/headers';
import { notFound } from 'next/navigation';

export const dynamic = 'force-dynamic';

interface AdminLayoutProps {
  children: React.ReactNode;
}

export default async function AdminLayout({ children }: AdminLayoutProps) {
  const headersList = await headers();
  const host = headersList.get('host') || '';

  // Verifica se o host contém "localhost" ou "127.0.0.1"
  const isLocalhost = host.includes('localhost') || host.includes('127.0.0.1');

  // Se não estiver acessando localmente (localhost), exibe 404 (Página Não Encontrada)
  if (!isLocalhost) {
    notFound();
  }

  return <>{children}</>;
}
