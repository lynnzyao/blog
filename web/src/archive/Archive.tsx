"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import type { PostSummary, Project } from "@/content/types";
import styles from "./Archive.module.css";

type Entry = {
  slug: string; title: string; description: string; category: string;
  image?: string; alt?: string; href: string; detailHref: string;
  featured: boolean; meta: string; date: string; readingMinutes?: number;
  specifications?: string;
};

function Cover({ entry, priority = false }: { entry: Entry; priority?: boolean }) {
  return <div className={styles.cover}>
    {entry.image ? <Image src={entry.image} alt={entry.alt ?? ""} fill sizes={priority ? "(max-width: 700px) 100vw, 80vw" : "(max-width: 700px) 100vw, (max-width: 1000px) 50vw, 33vw"} priority={priority} /> : <span className={styles.placeholder}>{entry.title}</span>}
    <span className={styles.badge}>{entry.category}</span>
  </div>;
}

function FeaturedEntry({ entry, projects }: { entry: Entry; projects: boolean }) {
  return <section className={styles.featured} aria-label={projects ? "Featured project" : "Featured article"}>
    <div className={styles.featureMedia}><Cover entry={entry} priority /></div>
    <article className={styles.placard}>
      <span className={styles.label}>{projects ? "Selected project" : "Featured dispatch"} / {entry.meta}</span>
      <h2><Link href={entry.detailHref}>{entry.title}</Link></h2>
      {entry.specifications && <div className={styles.specifications}><span className={styles.label}>Project specifications</span><p>{entry.specifications}</p></div>}
      <p>{entry.description}</p>
      <div className={styles.actions}>
        {entry.readingMinutes && <span className={styles.label}>{entry.readingMinutes} min read</span>}
        <Link href={entry.href}>{projects ? "View project study" : "Read article"} <span aria-hidden="true">→</span></Link>
        {projects && entry.href !== entry.detailHref && <Link href={entry.detailHref}>Project details →</Link>}
      </div>
    </article>
  </section>;
}

function Archive({ entries, projects = false }: { entries: Entry[]; projects?: boolean }) {
  const [category, setCategory] = useState<string | null>(null);
  const [sort, setSort] = useState("newest");
  const [view, setView] = useState("grid");
  const categories = [...new Set(entries.map(entry => entry.category))];
  const filtered = entries.filter(entry => category === null || entry.category === category);
  if (!projects) filtered.sort((a, b) => sort === "duration" ? (a.readingMinutes ?? 0) - (b.readingMinutes ?? 0) : sort === "oldest" ? a.date.localeCompare(b.date) : b.date.localeCompare(a.date));
  const featured = filtered.find(entry => entry.featured) ?? filtered[0];
  return <div className={`${styles.archive} ${projects ? styles.projects : styles.posts}`}>
    <header className={styles.intro}>
      <div><span className={styles.label}>■ {projects ? "Selected archive & commissioned editions" : "Personal archive — anthology"}</span>
        <h1>{projects ? <>Projects &amp;<br />Monographs</> : "The Archive"}</h1>
        <p>{projects ? "Field studies, design experiments, and independent projects. A collection of ideas brought into the world." : "Essays, dispatches, and observations on design, places, and the practice of paying attention. Collected for the slow, curious reader."}</p>
      </div>
      <div className={styles.stats}><span className={styles.label}>Total indexed</span><strong>{entries.length} {projects ? "Works" : entries.length === 1 ? "Dispatch" : "Dispatches"}</strong></div>
    </header>
    <div className={styles.controls}>
      <div className={styles.filters} aria-label={projects ? "Project categories" : "Post topics"}>
        {[null, ...categories].map(topic => <button key={topic ?? "all"} aria-pressed={category === topic} onClick={() => setCategory(topic)}>{topic ?? (projects ? "All works" : "All topics")} ({topic === null ? entries.length : entries.filter(entry => entry.category === topic).length})</button>)}
      </div>
      {!projects && <div className={styles.displayControls}>
        <label className={styles.label}>Sort: <select value={sort} onChange={event => setSort(event.target.value)}><option value="newest">Chronological (Newest)</option><option value="oldest">Chronological (Oldest)</option><option value="duration">Reading duration</option></select></label>
        <div className={styles.viewControls}>{["grid", "list"].map(mode => <button key={mode} aria-label={`${mode} view`} aria-pressed={view === mode} onClick={() => setView(mode)}>{mode === "grid" ? "▦" : "☰"}</button>)}</div>
      </div>}
    </div>
    {featured && <FeaturedEntry entry={featured} projects={projects} />}
    <section aria-label={projects ? "Project catalogue" : "Post archive"}>
      <div className={styles.indexHeading}><div><span className={styles.label}>{projects ? "Index & catalog" : "Chronological dispatches"}</span>{projects && <h2>Curated Catalogue of Editions</h2>}</div><span className={styles.label} role="status">Showing {filtered.length} of {entries.length} entries</span></div>
      <div className={`${styles.grid} ${view === "list" && !projects ? styles.list : ""}`}>
        {filtered.map(entry => <article key={entry.slug} className={styles.card}>
          <Link href={entry.detailHref} aria-label={entry.title}><Cover entry={entry} /></Link>
          <h3 className={projects ? styles.projectTitle : styles.postTitle}><Link href={entry.detailHref}>{entry.title}</Link></h3>
          <div className={styles.cardBody}><span className={styles.label}>{entry.meta}</span><p>{entry.description}</p><div className={styles.actions}><span className={styles.label}>{projects ? entry.category : `${entry.readingMinutes} min read`}</span><Link href={entry.href}>{projects ? "View project" : "Read"} <span aria-hidden="true">→</span></Link></div></div>
        </article>)}
      </div>
      {!filtered.length && <p className={styles.empty}>No {projects ? "projects" : "posts"} yet. Check back soon.</p>}
    </section>
  </div>;
}

export function PostsArchive({ posts }: { posts: PostSummary[] }) {
  return <Archive entries={posts.map(post => ({ ...post, description: post.excerpt, detailHref: post.href, meta: post.dateLabel }))} />;
}

export function ProjectsArchive({ projects }: { projects: Project[] }) {
  return <Archive projects entries={projects.map(project => ({ ...project, detailHref: `/projects/${project.slug}/`, meta: `Project ${project.number} / ${project.year}`, date: project.year }))} />;
}
