import classes from "src/components/Header/Header.module.css";
import Link from "next/link";

export function Header() {
  return (
    <header className={classes.header}>
      <Link href="/">
        <span role="link" tabIndex={0}  style={{ marginRight: '16px' }}>Index</span>
      </Link>
      <Link href="/about">
        <span role="link" tabIndex={0}>About</span>
      </Link>
    </header>
  );
}
