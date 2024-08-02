import { useState } from "react";
import "./App.css";
import Test from "./Test";
import Button from "./components/Button";
import Form from "./components/Form";

// 以下の処理が多くなった時に、切り出すことを`カスタムフック`という
function App() {
  // const [test, setTest] = useState("もじ");
  const [test, setTest] = useState(100);
  const [flag, setFlag] = useState(false);

  const [num, setNum] = useState();

  // 更新の処理の練習です！
  const handleClick = () => {
    setTest("変更したよ!!!");
  };

  // 追加したuseStateのflagを更新する処理  真偽値であれば!で常に反転させることができる。
  const handleFlagClick = () => {
    setFlag(!flag);
  };

  const handleNumClick = () => {
    const random = Math.floor(Math.random() * 3); //0, 1, 2
    setNum(random); // ボタンが押されるたびにランダムな数字が作られて、それが設定される。
  };

  return (
    <>
      {/* Form.jsxを読み込みましょう */}
      <Form />

      <br />
      <hr />

      {/* 条件付きレンダリング？ */}
      {num === 0 && <h1>大吉</h1>}
      {num === 1 && <h1>中吉</h1>}
      {num === 2 && <h1>小吉</h1>}

      {/* {num === 0 ? "大吉" : num === 1 ? "中吉" : num === 2 ? "小吉" : ""} */}

      <button onClick={handleNumClick}>ボタンを押しましょう！</button>

      {/* 条件分岐の練習 */}
      {flag && <h1>今はtrueです</h1>}
      {!flag && <h1>今はfalseです</h1>}

      <div>{test}</div>

      {/* handleClickは、なんでも動くけど、世界的な命名の慣習がある。 */}
      {/* onClickなどのイベントは、ユーザーの操作 */}

      {/* <button onClick={handleClick}>ボタンを押してみましょう</button> */}
      <button onClick={handleFlagClick}>ボタンを押してみましょう</button>

      <Test
        gs="07月30日react2回目"
        lab="17, 10"
        react="目じるしの練習をしています"
      />
      <br />
      <Button text="送信" />
      <br />
      <Button text="登録" />
    </>
  );
}

export default App;
