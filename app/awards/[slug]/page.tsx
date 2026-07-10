import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ArticlePage from "@/components/ArticlePage";
import { awards } from "@/lib/content";

const slugOf = (href: string) => href.split("/").filter(Boolean).pop() as string;

export function generateStaticParams() {
  return awards.map((a) => ({ slug: slugOf(a.href) }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const item = awards.find((a) => slugOf(a.href) === params.slug);
  return { title: item ? item.title : "Awards" };
}

export default function AwardArticle({ params }: { params: { slug: string } }) {
  const item = awards.find((a) => slugOf(a.href) === params.slug);
  if (!item) notFound();
  return (
    <ArticlePage
      section="awards"
      sectionLabel="Awards"
      backHref="/awards"
      backLabel="All awards"
      item={item}
      slug={params.slug}
    />
  );
}
