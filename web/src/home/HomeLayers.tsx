import type { ReactNode } from "react";
import { BackgroundLayer } from "./components/BackgroundLayer";
import type { BackgroundBlock } from "./backgroundLayout";
import type { HomeSectionLayout } from "./layout";
import styles from "./HomePage.module.css";

type HomeLayersProps = {
  blocks: BackgroundBlock[];
  sections: (HomeSectionLayout & { content: ReactNode })[];
};

export function HomeLayers({ blocks, sections }: HomeLayersProps) {
  return (
    <div className={styles.body}>
      <BackgroundLayer blocks={blocks} />
      <main className={styles.content}>
        {sections.map(({ id, height, foreground, content }) => (
          <div key={id} className={styles.section} style={{ height, ...foreground }}>
            {content}
          </div>
        ))}
      </main>
    </div>
  );
}
