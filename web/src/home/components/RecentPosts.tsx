import Image from "next/image";
import Link from "next/link";
import styles from "./RecentPosts.module.css";

const posts = [
  {
    title: "Crossing the high pass before winter locks in",
    href: "/posts/crossing-the-high-pass",
    image: "/showcase/slide-3.jpg",
    alt: "Mountain peaks catching the first light of sunrise",
    excerpt: "A field journal of granite ridges, falling temperatures, and the quiet clarity of the alpine treeline. Notes from a journey made just before the seasons turn.",
    readingMinutes: 8,
  },
  {
    title: "Architectures of quiet contemplative shelter",
    href: "/posts/quiet-contemplative-shelter",
    image: "/showcase/slide-2.jpg",
    alt: "An alpine lake beneath snow-covered mountains",
    excerpt: "On timber cantilevers, deep overhangs, and spaces that frame the landscape. Exploring how a thoughtful shelter can bring us closer to the world outside.",
    readingMinutes: 6,
  },
  {
    title: "Why I started writing my own blog?",
    href: "/posts/why-i-started-writing",
    image: "/showcase/slide-1.jpg",
    alt: "A lone canoe floating on a still mountain lake",
    excerpt: "Making room for slower observations and stories worth keeping. A reflection on independent publishing, personal archives, and the simple practice of paying attention.",
    readingMinutes: 4,
  },
] as const;

export function RecentPosts() {
  return (
    <section className={styles.section} aria-labelledby="recent-posts-title">
      <div className={styles.heading}>
        <h2 id="recent-posts-title" className={styles.title}>Most recent blog posts</h2>
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
