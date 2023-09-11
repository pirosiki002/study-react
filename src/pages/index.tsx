// ライブラリからのインポート
import Head from "next/head";

// コンポーネントのインポート
import { Header } from "src/components/Header";
import { Main } from "src/components/Main";
import { Footer } from "src/components/Footer";

// スタイルとフックのインポート
import classes from "src/styles/Home.module.css";
import { useCounter } from "src/hooks/useCounter";
import { useInputArray } from "src/hooks/useInputArray";

// 型定義
type UseCounterReturnType = ReturnType<typeof useCounter>;
type UseInputArrayReturnType = ReturnType<typeof useInputArray>;
type HomeProps = UseCounterReturnType & UseInputArrayReturnType;

export default function Home({
    count, isShow, handleClick, handleDisplay, // useCounterからのprops
    text, array, handleChange, handleAdd,      // useInputArrayからのprops
}:HomeProps){
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
        <button onClick={handleAdd}>Add</button>
        <ul>
          {array.map((item) => {
            return <li key={item}>{item}</li>;
          })}
        </ul>
      </div>
      <Main page="index" />
      <Footer />
    </div>
  );
}
