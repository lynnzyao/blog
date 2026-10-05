import styles from "./BackgroundLayer.module.css";
import type { BackgroundBlock } from "../backgroundLayout";

export function BackgroundLayer({ blocks }: { blocks: BackgroundBlock[] }) {
  return (
    <div className={styles.background} aria-hidden="true">
      {blocks.map(({ id, ...position }, index) => (
        <div
          key={id}
          className={index === 0 ? `${styles.block} ${styles.pictureBlock}` : styles.block}
          style={position}
        />
      ))}
    </div>
  );
}
