import Link from "next/link";
import type { Project } from "@/content/types";
import styles from "./Projects.module.css";

export function Projects({ projects }: { projects: Project[] }) {
  return (
    <section className={styles.section} id="projects-section" aria-labelledby="projects-title">
      <div className={styles.heading}>
        <div>
          <span className={styles.eyebrow}>Selected Archive</span>
          <h2 className={styles.title} id="projects-title">Projects &amp; Monographs</h2>
        </div>
        <Link className={styles.browse} href="/projects">
          Browse all projects <span aria-hidden="true">→</span>
        </Link>
      </div>
      <div className={styles.grid}>
        {projects.map((project) => (
          <article className={styles.project} key={project.slug}>
            <span className={styles.meta}>Project {project.number} / {project.year}</span>
            <h3 className={styles.projectTitle}>{project.title}</h3>
            <p className={styles.description}>{project.description}</p>
            <Link className={styles.link} href={project.href} aria-label={`View project study: ${project.title}`}>
              <span className={styles.linkText}>View Project Study</span>
              <span className={styles.arrow} aria-hidden="true">→</span>
            </Link>
          </article>
        ))}
      </div>
    </section>
  );
}
