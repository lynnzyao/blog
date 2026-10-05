import styles from "./GlobalView.module.css";

export function GlobalView() {
  return (
    <section className={styles.section} aria-labelledby="global-view-title">
      <div className={styles.inner}>
        <div>
          <h2 className={styles.eyebrow} id="global-view-title">The Monograph Manifesto</h2>
          <blockquote className={styles.quote}>
            “In an accelerated culture of ephemeral feeds, the long-form essay is
            an act of quiet rebellion. We build monuments of paper and quiet code.”
          </blockquote>
          <p className={styles.signature}>Elena Vance, Editor-in-Chief</p>
        </div>
        <div className={styles.metrics}>
          <dl className={styles.numbers}>
            <div><dt>Monographs Printed</dt><dd>148</dd></div>
            <div><dt>Readers Worldwide</dt><dd>24k</dd></div>
          </dl>
          <div className={styles.press}>
            <span>Independent Press</span>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="m12 3 3 2 3.5.5.5 3.5 2 3-2 3-.5 3.5-3.5.5-3 2-3-2-3.5-.5L5 15l-2-3 2-3 .5-3.5L9 5Z" stroke="currentColor" strokeWidth="1.5" />
              <path d="m8 12 3 3 5-6" stroke="currentColor" strokeWidth="1.5" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
