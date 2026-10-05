import type { ReactNode } from "react";
import { ContentLayout } from "@/shared/components/ContentLayout";

export default function PostsLayout({ children }: { children: ReactNode }) {
  return <ContentLayout activeHref="/posts">{children}</ContentLayout>;
}
