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
  return (
    <header className={styles.header}>
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
  );
}
