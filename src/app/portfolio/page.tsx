import { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Portfolio de Projetos | Eleven Web Development",
  description:
    "Conheça nossos projetos de sucesso em desenvolvimento web. Cases reais de sites que convertem e geram resultados.",
};

export default function PortfolioPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-4xl font-bold mb-8">Our Portfolio</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Portfolio items would go here */}
              <div className="bg-white rounded-lg overflow-hidden shadow-md">
                <div className="p-6">
                  <h2 className="text-xl font-semibold mb-2">
                    E-commerce Platform
                  </h2>
                  <p className="text-gray-600 mb-4">
                    A full-featured online store with advanced product
                    management.
                  </p>
                  <span className="text-sm text-blue-600">View Project →</span>
                </div>
              </div>
              {/* Add more portfolio items as needed */}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
