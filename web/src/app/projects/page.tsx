import { getProjects } from "@/content/load";
import { ProjectsArchive } from "@/archive/Archive";

export const metadata = { title: "Projects | Lynn Y." };

export default function ProjectsPage() {
  return <ProjectsArchive projects={getProjects()} />;
}
