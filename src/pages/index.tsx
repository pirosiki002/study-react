import Head from "next/head";
import { Footer } from "src/components/Footer";
import { Main } from "src/components/Main";
import classes from "src/styles/Home.module.css";
import { Header } from "src/components/Header";
import { useCounter } from "src/hooks/useCounter";
import { useInputArray } from "src/hooks/useInputArray";
import { useBgLightBlue } from "src/hooks/useBgLightBlue";

export default function Home() {
  const {count, isShow, handleClick, handleDisplay} = useCounter();
  const {text, array, handleChange, handleAdd} = useInputArray();
  useBgLightBlue();

  return (
    <div className={classes.container}>
      <Head>
        <title>Index Page</title>
      </Head>
      <Header />
      <div className={classes.centerContent}>

        {isShow ? <h1>{count}</h1> : null}
        <button onClick={handleClick}>Button</button>
        <button onClick={handleDisplay}>
          {isShow ? "undisplay" : "display"}
        </button>
        <input type="text" value={text} onChange={handleChange}></input>
        <button onClick={handleAdd} >Add</button>
        <ul>
          {array.map(item => {
            return(
              <li key={item}>{item}</li>
            )
          })}
        </ul>

      </div>
      <Main page="index" />
      <Footer />
    </div>
  );
}
