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

const Home = (props:HomeProps) =>{
  return (
    <div className={classes.container}>
      <Head>
        <title>Index Page</title>
      </Head>
      <Header />
      <div className={classes.centerContent}>
        {props.isShow ? <h1>{props.count}</h1> : null}
        <button onClick={props.handleClick}>Button</button>
        <button onClick={props.handleDisplay}>
          {props.isShow ? "undisplay" : "display"}
        </button>
        <input type="text" value={props.text} onChange={props.handleChange}></input>
        <button onClick={props.handleAdd}>Add</button>
        <ul>
          {props.array.map((item) => {
            return <li key={item}>{item}</li>;
          })}
        </ul>
      </div>
      <Main page="index" />
      <Footer />
    </div>
  );
}

export default Home;
