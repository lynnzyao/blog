import { Header } from "@/home/components/Header";
import { HomeLayers } from "@/home/HomeLayers";
import { homeLayout } from "@/home/layout";
import { backgroundBlocks } from "@/home/backgroundLayout";
import { Showcase } from "@/home/components/Showcase";
import { RecentPosts } from "@/home/components/RecentPosts";
import { Projects } from "@/home/components/Projects";
import { GlobalView } from "@/home/components/GlobalView";
import { Subscribe } from "@/home/components/Subscribe";

export default function Page() {
  const content: Record<string, React.ReactNode> = {
    showcase: <Showcase />,
    "recent-posts": <RecentPosts />,
    projects: <Projects />,
    "global-view": <GlobalView />,
    subscribe: <Subscribe />,
  };

  return (
    <>
      <Header />
      <HomeLayers
        blocks={backgroundBlocks}
        sections={homeLayout.map((section) => ({
          ...section,
          content: content[section.id],
        }))}
      />
    </>
  );
}
