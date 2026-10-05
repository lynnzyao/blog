import { getPosts, getProjects } from "@/content/load";
import { Header } from "@/shared/components/Header";
import { HomeLayers } from "@/home/HomeLayers";
import { homeLayout } from "@/home/layout";
import { backgroundBlocks } from "@/home/backgroundLayout";
import { Showcase } from "@/home/components/Showcase";
import { RecentPosts } from "@/home/components/RecentPosts";
import { Projects } from "@/home/components/Projects";
import { GlobalView } from "@/home/components/GlobalView";
import { Footer } from "@/shared/components/Footer";

export default function Page() {
  const posts = getPosts().map((post) => post.summary);
  const featured = posts.filter((post) => post.featured);
  const projects = getProjects();
  const content: Record<string, React.ReactNode> = {
    showcase: <Showcase slides={featured.length ? featured : posts.slice(0, 3)} />,
    "recent-posts": <RecentPosts posts={posts.slice(0, 3)} />,
    projects: <Projects projects={projects.slice(0, 3)} />,
    "global-view": <GlobalView />,
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
      <Footer />
    </>
  );
}
