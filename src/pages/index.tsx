import Head from "next/head";
import { Footer } from "src/components/Footer";
import { Main } from "src/components/Main";
import classes from "src/styles/Home.module.css";
import { Header } from "src/components/Header";
import { useCallback } from "react";

export default function Home() {
  const foo = 1;

  const handleClick =useCallback((e)=>{
    console.log(e.target.href);
    e.preventDefault();
    alert(foo);
  }, []);

  return (
    <div className={classes.container}>
      <Head>
        <title>Index Page</title>
      </Head>
      <Header />
      <a
        href="/about"
        onClick={handleClick}
      >
        Button
      </a>
      <Main page="index" />
      <Footer />
    </div>
  );
}
