import React, { useState, useEffect } from "react";

export const useForm = () => {
  // useStateを使ってinputタグの入力欄を制御する
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  // API通信用
  const [data, setData] = useState([]);

  // 入力用のおまじない
  const handleNameChange = (e) => {
    console.log(e, "morita");
    setName(e.target.value);
  };
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  // useEffectのお勉強をしましょう🤗
  useEffect(() => {
    //どのような挙動になるかチェックしてみましょう🤗
    console.log("発火！！！");

    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/todos/"
        );
        console.log(response, "通信した結果（レスポンス）をチェック");
        const data = await response.json(); //必須！ jsonの形式にする必要があります🤗
        console.log(data, "変換後の中身をチェック");
        setData(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  console.log("確認");

  return {
    name,
    email,
    data,
    handleEmailChange,
    handleNameChange,
  };
};
