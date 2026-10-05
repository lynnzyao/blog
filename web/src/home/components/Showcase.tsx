"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import styles from "./Showcase.module.css";

const slides = [
  { title: "Why I started writing my own blog?", date: "September 8, 2018", dateTime: "2018-09-08", image: "/showcase/slide-1.jpg", alt: "A canoe on a quiet mountain lake", href: "/posts/why-i-started-writing" },
  { title: "Architectures of quiet contemplative shelter", date: "October 14, 2018", dateTime: "2018-10-14", image: "/showcase/slide-2.jpg", alt: "An alpine lake surrounded by mountains", href: "/posts/quiet-contemplative-shelter" },
  { title: "Crossing the high pass before winter locks in", date: "November 2, 2018", dateTime: "2018-11-02", image: "/showcase/slide-3.jpg", alt: "Mountain peaks in the light of sunrise", href: "/posts/crossing-the-high-pass" },
];

function Chevron({ previous = false }: { previous?: boolean }) {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d={previous ? "m14 6-6 6 6 6" : "m10 6 6 6-6 6"} stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function Showcase() {
  const [index, setIndex] = useState(0);
  const slide = slides[index];
  const move = (offset: number) => setIndex((current) => Math.max(0, Math.min(slides.length - 1, current + offset)));

  return (
    <section
      className={styles.showcase}
      aria-label="Featured articles"
      aria-roledescription="carousel"
      onKeyDown={(event) => {
        if (event.key === "ArrowLeft" || event.key === "ArrowRight") {
          event.preventDefault();
          move(event.key === "ArrowLeft" ? -1 : 1);
        }
      }}
    >
      <div className={styles.stage}>
        <div className={styles.picture}>
          <Image key={slide.image} src={slide.image} alt={slide.alt} fill sizes="(max-width: 700px) calc(100vw - 32px), (max-width: 1440px) 66vw, 900px" className={styles.image} preload={index === 0} />
          <span className={styles.counter} aria-hidden="true">{index + 1}/{slides.length}</span>
        </div>
        <div className={styles.card} id="showcase-card">
          <time className={styles.date} dateTime={slide.dateTime}>{slide.date}</time>
          <h1 className={styles.title}>{slide.title}</h1>
          <Link className={styles.articleLink} href={slide.href}>
            Read article <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
      <button className={`${styles.control} ${styles.previous}`} type="button" aria-label="Previous slide" aria-controls="showcase-card" disabled={index === 0} onClick={() => move(-1)}><Chevron previous /></button>
      <button className={`${styles.control} ${styles.next}`} type="button" aria-label="Next slide" aria-controls="showcase-card" disabled={index === slides.length - 1} onClick={() => move(1)}><Chevron /></button>
      <p className={styles.status} aria-live="polite" aria-atomic="true">Slide {index + 1} of {slides.length}: {slide.title}</p>
    </section>
  );
}
