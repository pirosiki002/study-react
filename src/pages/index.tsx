import Head from "next/head";
import { Footer } from "src/components/Footer";
import { Main } from "src/components/Main";
import classes from "src/styles/Home.module.css";
import { Header } from "src/components/Header";
import { useCallback } from "react";
import Link from 'next/link';

export default function Home() {
  const foo = 1;

  // const handleClick =useCallback((e)=>{
  //   console.log(e.target.href);
  //   e.preventDefault();
  //   alert(foo);
  // }, []);

  const handleClick = useCallback((e: React.MouseEvent<HTMLAnchorElement>) => {
    console.log(e.currentTarget.href);
    e.preventDefault();
    alert(foo);
  }, []);

  return (
    <div className={classes.container}>
      <Head>
        <title>Index Page</title>
      </Head>
      <Header />
      <Link
        href="/about"
        onClick={handleClick}
      >
        Button
      </Link>
      <Main page="index" />
      <Footer />
    </div>
  );
}
