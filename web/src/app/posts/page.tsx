import { getPosts } from "@/content/load";
import { PostsArchive } from "@/archive/Archive";

export const metadata = { title: "All Posts | Lynn Y." };

export default function PostsPage() {
  return <PostsArchive posts={getPosts().map(post => post.summary)} />;
}
