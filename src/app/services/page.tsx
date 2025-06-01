import { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Services | Eleven Web Development",
  description:
    "Discover our web development services, including corporate websites, e-commerce, landing pages, and maintenance.",
};

export default function ServicesPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-4xl font-bold mb-8">Our Services</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h2 className="text-xl font-semibold mb-4">
                  Corporate Websites
                </h2>
                <p className="text-gray-600">
                  Professional websites that represent your brand and engage
                  your audience.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h2 className="text-xl font-semibold mb-4">E-commerce</h2>
                <p className="text-gray-600">
                  Complete online stores with secure payment systems and
                  inventory management.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h2 className="text-xl font-semibold mb-4">Landing Pages</h2>
                <p className="text-gray-600">
                  High-converting landing pages designed to achieve your
                  marketing goals.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h2 className="text-xl font-semibold mb-4">Maintenance</h2>
                <p className="text-gray-600">
                  Regular updates, security patches, and technical support for
                  your website.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
