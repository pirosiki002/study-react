import classes from "./Footer.module.css";

export function Footer() {
  return (
    <footer className={classes.footer}>
      <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
        footer test from components
      </p>
    </footer>
  )
}
