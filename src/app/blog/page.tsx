import { Metadata } from "next";
import { BlogListing } from "@/components/Blog/BlogListing";
import { getBlogPosts } from "@/lib/blog";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Blog | Eleven Web Development",
  description:
    "Artigos sobre desenvolvimento web, SEO, design, negócios e tecnologia para impulsionar sua presença digital.",
  openGraph: {
    title: "Blog | Eleven Web Development",
    description:
      "Conteúdos sobre sites profissionais, SEO e estratégia digital.",
    url: "/blog",
  },
};

export default async function BlogPage() {
  const posts = await getBlogPosts();

  return <BlogListing posts={posts} />;
}
