import Head from "next/head";
import { Footer } from "../components/Footer";
import {Main} from "../components/Main";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Index Page</title>
        <link rel="icon" href="/favicon.ico"></link>
      </Head>
      <Main page = "index"/>
      <Footer />
    </div>
  );
}
