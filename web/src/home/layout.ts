import type { CSSProperties } from "react";

/** Foreground offsets are relative to each section in the content flow. */
export type LayerPosition = Pick<CSSProperties, "top" | "left" | "right" | "width" | "height">;

export type HomeSectionLayout = {
  id: string;
  /** CSS length for a fixed section, or auto to follow responsive content. */
  height: string;
  foreground: LayerPosition;
};

export const homeLayout: HomeSectionLayout[] = [
  { id: "showcase", height: "auto", foreground: {} },
  { id: "recent-posts", height: "auto", foreground: {} },
  { id: "projects", height: "auto", foreground: {} },
  { id: "global-view", height: "auto", foreground: {} },
];
