import classes from "src/components/Footer/Footer.module.css"

export const Footer = () => {
  return (
    <footer className={classes.footer}>
      <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
        footer test from components
      </p>
    </footer>
  )
}