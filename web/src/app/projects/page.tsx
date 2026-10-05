import Link from "next/link";
import { getProjects } from "@/content/load";
import styles from "@/content/Content.module.css";

export const metadata = { title: "Projects | Lynn Y." };

export default function ProjectsPage() {
  const projects = getProjects();
  return (
    <section className={styles.panel}>
      <h1>Projects &amp; Monographs</h1>
      <div className={styles.list}>
        {projects.map((project) => (
          <article key={project.slug}>
            <p>Project {project.number} / {project.year}</p>
            <h2><Link href={`/projects/${project.slug}/`}>{project.title}</Link></h2>
            <p>{project.description}</p>
            <Link href={project.href}>View project →</Link>
          </article>
        ))}
        {!projects.length && <p>No projects yet. Check back soon.</p>}
      </div>
    </section>
  );
}
