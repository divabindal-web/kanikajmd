import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ArticlePage from "@/components/ArticlePage";
import { news } from "@/lib/content";

const slugOf = (href: string) => href.split("/").filter(Boolean).pop() as string;

export function generateStaticParams() {
  return news.map((n) => ({ slug: slugOf(n.href) }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const item = news.find((n) => slugOf(n.href) === params.slug);
  return { title: item ? item.title : "News" };
}

export default function NewsArticle({ params }: { params: { slug: string } }) {
  const item = news.find((n) => slugOf(n.href) === params.slug);
  if (!item) notFound();
  return (
    <ArticlePage
      section="news"
      sectionLabel="News"
      backHref="/news"
      backLabel="All news"
      item={item}
      slug={params.slug}
    />
  );
}
