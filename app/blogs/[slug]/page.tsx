import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ArticlePage from "@/components/ArticlePage";
import { blogs } from "@/lib/content";

const slugOf = (href: string) => href.split("/").filter(Boolean).pop() as string;

export function generateStaticParams() {
  return blogs.map((b) => ({ slug: slugOf(b.href) }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const item = blogs.find((b) => slugOf(b.href) === params.slug);
  return { title: item ? item.title : "Blogs" };
}

export default function BlogArticle({ params }: { params: { slug: string } }) {
  const item = blogs.find((b) => slugOf(b.href) === params.slug);
  if (!item) notFound();
  return (
    <ArticlePage
      section="blogs"
      sectionLabel="Blogs"
      backHref="/blogs"
      backLabel="All essays"
      item={item}
      slug={params.slug}
    />
  );
}
