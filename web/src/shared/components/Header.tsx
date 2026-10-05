"use client";

import { useLayoutEffect, useRef } from "react";
import Link from "next/link";
import styles from "./Header.module.css";

const navigation = [
  { label: "Home", href: "/" },
  { label: "All Posts", href: "/posts" },
  { label: "Projects", href: "/#projects-section" },
] as const;

type HeaderProps = {
  name?: string;
  activeHref?: string;
};

export function Header({ name = "LY", activeHref = "/" }: HeaderProps) {
  const spacerRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    const spacer = spacerRef.current;
    const header = headerRef.current;
    if (!spacer || !header) return;

    const root = document.documentElement;
    const previousHeight = root.style.getPropertyValue("--header-height");
    const updateHeight = () => {
      // Reserve the header's actual height before taking it out of normal flow.
      const height = `${header.getBoundingClientRect().height}px`;
      spacer.style.height = height;
      root.style.setProperty("--header-height", height);
      header.style.position = "fixed";
    };

    updateHeight();
    const observer = new ResizeObserver(updateHeight);
    observer.observe(header);

    return () => {
      observer.disconnect();
      spacer.style.removeProperty("height");
      header.style.removeProperty("position");
      if (previousHeight) {
        root.style.setProperty("--header-height", previousHeight);
      } else {
        root.style.removeProperty("--header-height");
      }
    };
  }, []);

  return (
    <div ref={spacerRef}>
      <header ref={headerRef} className={styles.header}>
        <div className={styles.inner}>
          <Link className={styles.brand} href="/" aria-label={`${name} home`}>
            {name}
          </Link>
          <nav className={styles.navigation} aria-label="Main navigation">
            {navigation.map(({ label, href }) => (
              <Link
                key={href}
                className={styles.link}
                href={href}
                aria-current={activeHref === href ? "page" : undefined}
              >
                {label}
              </Link>
            ))}
          </nav>
        </div>
      </header>
    </div>
  );
}
