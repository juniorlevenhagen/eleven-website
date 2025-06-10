import Link from "next/link";
import Image from "next/image";
import { ASSETS } from "@/constants/paths";

const siteMap = {
  "Navegação Principal": [
    { name: "Home", href: "/" },
    { name: "Serviços", href: "/services" },
    { name: "Sobre", href: "/about" },
    { name: "Contato", href: "/contact" },
  ],
  Informações: [
    { name: "FAQ", href: "/faq" },
    { name: "Como Trabalhamos", href: "/process" },
    { name: "Política de Privacidade", href: "/privacy" },
    { name: "Termos de Uso", href: "/terms" },
  ],
  Serviços: [
    { name: "Landing Pages", href: "/services#landing" },
    { name: "Sites Institucionais", href: "/services#institutional" },
    { name: "E-commerce", href: "/services#ecommerce" },
    { name: "Manutenção", href: "/services#maintenance" },
  ],
};

export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Logo e Descrição */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-block mb-4">
              <Image
                src={ASSETS.LOGOS.LIGHT}
                alt="Eleven Web Development"
                width={120}
                height={30}
                className="h-8 w-auto"
              />
            </Link>
            <p className="text-sm mb-2">
              Desenvolvimento web profissional com foco em resultados.
            </p>
            <p className="text-sm mb-4">
              Transformamos sua visão em realidade digital.
            </p>
          </div>

          {/* Mapa do Site */}
          {Object.entries(siteMap).map(([category, links]) => (
            <div key={category}>
              <h3 className="text-white font-semibold mb-4">{category}</h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-sm hover:text-white transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-sm text-center">
          <p>
            © {new Date().getFullYear()} Eleven Web Development. Todos os
            direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};
