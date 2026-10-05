import type { ReactNode } from "react";
import { ContentLayout } from "@/shared/components/ContentLayout";

export default function ProjectsLayout({ children }: { children: ReactNode }) {
  return <ContentLayout activeHref="/#projects-section">{children}</ContentLayout>;
}
