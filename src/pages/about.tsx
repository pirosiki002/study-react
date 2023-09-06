import Head from "next/head";
import { Footer } from "@/src/components/Footer";
import { Main } from "@/src/components/Main";
import classes from "../styles/Home.module.css";
import { Header } from "@/src/components/Header";

export default function Home() {
  return (
    <div className={classes.container}>
      <Head>
        <title>About Page</title>
        <link rel="icon" href="/favicon.ico"></link>
      </Head>
      <Header />
      <Main page="about" />
      <Footer />
    </div>
  );
}
