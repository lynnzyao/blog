import Link from "next/link";
import styles from "./Projects.module.css";

const projects = [
  {
    number: "01",
    year: "2024",
    title: "Nordic Pavilion Shelter",
    description: "Field study examining micro-climates, raw larch timber joints, and seasonal light permeability in Lofoten.",
    href: "/projects/nordic-pavilion-shelter",
  },
  {
    number: "02",
    year: "2024",
    title: "Tactile Type Archive",
    description: "Monochrome letterpress specimen documenting mid-century European grotesk and humanist serif revivals.",
    href: "/projects/tactile-type-archive",
  },
  {
    number: "03",
    year: "2023",
    title: "Alpine Cartography Volume II",
    description: "High-altitude elevation contour maps rendered with minimalist vector precision on uncoated cotton paper.",
    href: "/projects/alpine-cartography-volume-ii",
  },
] as const;

export function Projects() {
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
          <article className={styles.project} key={project.href}>
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
