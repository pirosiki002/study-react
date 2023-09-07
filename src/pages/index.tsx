import Head from "next/head";
import { Footer } from "src/components/Footer";
import { Main } from "src/components/Main";
import classes from "src/styles/Home.module.css";
import { Header } from "src/components/Header";
import { useCallback, useEffect} from "react";
import Link from 'next/link';

export default function Home() {
  const foo = 1;

  const handleClick = useCallback((e: React.MouseEvent<HTMLAnchorElement>) => {
    console.log(e.currentTarget.href);
    e.preventDefault();
    alert(foo);
  }, []);

  useEffect(() => {
    console.log("mount");
    document.body.style.backgroundColor = "lightblue";

    return () =>{
      console.log("unmount");
      document.body.style.backgroundColor = "";
    }
  }, [])

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
