import type { ReactNode } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import styles from "./ContentLayout.module.css";

export function ContentLayout({ children, activeHref }: { children: ReactNode; activeHref: string }) {
  return (
    <>
      <Header activeHref={activeHref} />
      <main className={styles.main}>{children}</main>
      <Footer />
    </>
  );
}
