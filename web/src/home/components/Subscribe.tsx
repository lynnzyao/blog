"use client";

import { useState } from "react";
import styles from "./Subscribe.module.css";

export function Subscribe() {
  const [message, setMessage] = useState("");

  return (
    <section className={styles.section} aria-labelledby="subscribe-title">
      <div>
        <span className={styles.eyebrow}>Dispatch &amp; Commentary</span>
        <h2 className={styles.title} id="subscribe-title">Subscribe to the Monograph Edition</h2>
        <p className={styles.description}>A contemplative weekly digest examining typography, literature, spatial design, and travel philosophy.</p>
      </div>
      <div className={styles.formContainer}>
        <form className={styles.form} onSubmit={(event) => {
          event.preventDefault();
          setMessage("Subscriptions are not open yet. Please check back soon.");
        }}>
          <input className={styles.input} type="email" name="email" autoComplete="email" aria-label="Email address" placeholder="Enter your email address" required />
          <button className={styles.button} type="submit">Subscribe <span aria-hidden="true">→</span></button>
        </form>
        <p className={styles.message} role="status">{message}</p>
      </div>
    </section>
  );
}
