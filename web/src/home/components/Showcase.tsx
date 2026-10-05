"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import type { PostSummary } from "@/content/types";
import styles from "./Showcase.module.css";

function Chevron({ previous = false }: { previous?: boolean }) {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d={previous ? "m14 6-6 6 6 6" : "m10 6 6 6-6 6"} stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function Showcase({ slides }: { slides: PostSummary[] }) {
  const [index, setIndex] = useState(0);
  const slide = slides[index];
  const move = (offset: number) => setIndex((current) => Math.max(0, Math.min(slides.length - 1, current + offset)));

  if (!slide) return null;

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
          <time className={styles.date} dateTime={slide.date}>{slide.dateLabel}</time>
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
