import { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "About Us | Eleven Web Development",
  description:
    "Learn about Eleven Web Development, our history, mission, and values.",
};

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-4xl font-bold mb-8">About Us</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <h2 className="text-2xl font-semibold mb-4">Our Story</h2>
                <p className="text-gray-600 mb-6">
                  Founded in 2019, Eleven Web Development has been at the
                  forefront of digital innovation, helping businesses transform
                  their online presence and achieve their digital goals.
                </p>
                <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
                <p className="text-gray-600">
                  To deliver exceptional web solutions that drive business
                  growth and create meaningful digital experiences for our
                  clients.
                </p>
              </div>
              <div>
                <h2 className="text-2xl font-semibold mb-4">Our Values</h2>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span className="text-gray-600">
                      Innovation and creativity in every project
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span className="text-gray-600">
                      Commitment to excellence and quality
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span className="text-gray-600">
                      Client-focused approach
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span className="text-gray-600">
                      Continuous learning and improvement
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
