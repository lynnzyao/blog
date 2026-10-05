import type { CSSProperties } from "react";

/** Absolute coordinates measured from the home body's top, below the header. */
export type BackgroundBlock = {
  id: string;
  top: NonNullable<CSSProperties["top"]>;
  width: NonNullable<CSSProperties["width"]>;
  height: NonNullable<CSSProperties["height"]>;
} & Pick<CSSProperties, "left" | "right">;

// Edit these values independently of foreground section sizes or order.
// Numeric coordinates are pixels; CSS lengths such as clamp() are also supported.
export const backgroundBlocks: BackgroundBlock[] = [
  { id: "block-1", top: 0, right: 0, width: "39%", height: 1050 },
  { id: "block-2", top: 850, left: 0, width: "20%", height: 700  }, /// top 700 
  { id: "block-3", top: 1420, right: 0, width: "20%", height: 520 },
  { id: "block-4", top: 1840, left: 0, width: "45%", height: 400 },
];
