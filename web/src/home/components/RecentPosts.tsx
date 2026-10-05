import Image from "next/image";
import Link from "next/link";
import type { PostSummary } from "@/content/types";
import styles from "./RecentPosts.module.css";

export function RecentPosts({ posts }: { posts: PostSummary[] }) {
  return (
    <section className={styles.section} aria-labelledby="recent-posts-title">
      <div className={styles.heading}>
        <h2 id="recent-posts-title" className={styles.title}>Recent Posts</h2>
        <Link className={styles.browse} href="/posts">
          Browse all blog posts <span aria-hidden="true">→</span>
        </Link>
      </div>
      <div className={styles.grid}>
        {posts.map((post) => (
          <article key={post.href} className={styles.post}>
            <Link className={styles.postLink} href={post.href} aria-label={post.title}>
              <div className={styles.picture}>
                <Image src={post.image} alt={post.alt} fill sizes="(max-width: 600px) calc(100vw - 72px), (max-width: 900px) 42vw, 360px" className={styles.image} />
              </div>
              <h3 className={styles.postTitle}>{post.title}</h3>
            </Link>
            <div className={styles.copy}>
              <p className={styles.excerpt}>{post.excerpt}</p>
              <div className={styles.meta}>
                <span>{post.readingMinutes} min read</span>
                <Link className={styles.read} href={post.href} aria-label={`Read ${post.title}`}>
                  Read <span aria-hidden="true">→</span>
                </Link>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
