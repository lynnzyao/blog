import Link from "next/link";
import { getPosts } from "@/content/load";
import styles from "@/content/Content.module.css";

export const metadata = { title: "All Posts | Lynn Y." };

export default function PostsPage() {
  const posts = getPosts();
  return (
    <section className={styles.panel}>
      <h1>All Posts</h1>
      <div className={styles.list}>
        {posts.map(({ summary: post }) => (
          <article key={post.slug}>
            <time dateTime={post.date}>{post.dateLabel}</time>
            <h2><Link href={post.href}>{post.title}</Link></h2>
            <p>{post.excerpt}</p>
            <Link href={post.href}>Read article →</Link>
          </article>
        ))}
        {!posts.length && <p>No posts yet. Check back soon.</p>}
      </div>
    </section>
  );
}
