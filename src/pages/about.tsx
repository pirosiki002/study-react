import Head from "next/head";
import { Footer } from "src/components/Footer";
import { Main } from "src/components/Main";
import classes from "src/styles/Home.module.css";
import { Header } from "src/components/Header";

export default function Home() {
  return (
    <div className={classes.container}>
      <Head>
        <title>About Page</title>
      </Head>
      <Header />
      <Main page="about" />
      <Footer />
    </div>
  );
}
