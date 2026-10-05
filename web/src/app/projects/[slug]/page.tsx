import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getProjects } from "@/content/load";
import styles from "@/content/Content.module.css";

export const dynamicParams = false;

export function generateStaticParams() {
  return getProjects().map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps<"/projects/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjects().find((project) => project.slug === slug);
  if (!project) notFound();
  return { title: `${project.title} | Lynn Y.`, description: project.description };
}

export default async function ProjectPage({ params }: PageProps<"/projects/[slug]">) {
  const { slug } = await params;
  const project = getProjects().find((project) => project.slug === slug);
  if (!project) notFound();
  const localHref = `/projects/${slug}/`;
  return (
    <article className={styles.panel}>
      <Link href="/projects/">← All projects</Link>
      <header className={styles.heading}>
        <p>Project {project.number} / {project.year}</p>
        <h1>{project.title}</h1>
        <p>{project.description}</p>
      </header>
      {project.href !== localHref ? (
        <Link href={project.href}>Open project →</Link>
      ) : (
        <p>A website or repository link will be added here when available.</p>
      )}
    </article>
  );
}
