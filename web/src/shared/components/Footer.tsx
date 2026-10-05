"use client";

import { useState } from "react";
import styles from "./Footer.module.css";

export function Footer() {
  const [message, setMessage] = useState("");

  return (
    <footer className={styles.section} aria-labelledby="subscribe-title">
      <div className={styles.inner}>
        <div>
          <span className={styles.eyebrow}>Dispatch &amp; Commentary</span>
          <h2 className={styles.title} id="subscribe-title">Subscribe to the Blog</h2>
          <p className={styles.description}>Receive auto update on new contents.</p>
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
      </div>
    </footer>
  );
}
