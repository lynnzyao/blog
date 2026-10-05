import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Lynn Y. | Personal Blog",
  description: "A contemplative archive of typography, literature, design, and travel.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return <html lang="en"><body>{children}</body></html>;
}
