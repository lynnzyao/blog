import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { getPosts } from "@/content/load";
import styles from "@/content/Content.module.css";

export const dynamicParams = false;

export function generateStaticParams() {
  return getPosts().map(({ summary }) => ({ slug: summary.slug }));
}

export async function generateMetadata({ params }: PageProps<"/posts/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const post = getPosts().find(({ summary }) => summary.slug === slug);
  if (!post) notFound();
  return { title: `${post.summary.title} | Lynn Y.`, description: post.summary.excerpt };
}

export default async function PostPage({ params }: PageProps<"/posts/[slug]">) {
  const { slug } = await params;
  const post = getPosts().find(({ summary }) => summary.slug === slug);
  if (!post) notFound();
  const { summary, content } = post;
  return (
    <article className={styles.panel}>
      <Link href="/posts/">← All posts</Link>
      <header className={styles.heading}>
        <p><time dateTime={summary.date}>{summary.dateLabel}</time> · {summary.readingMinutes} min read</p>
        <h1>{summary.title}</h1>
        <p>{summary.excerpt}</p>
      </header>
      <div className={styles.cover}>
        <Image src={summary.image} alt={summary.alt} fill sizes="(max-width: 600px) calc(100vw - 88px), 1000px" preload />
      </div>
      <div className={styles.prose}>
        <Markdown remarkPlugins={[remarkGfm]} skipHtml>{content}</Markdown>
      </div>
    </article>
  );
}
