import React, { useState, useEffect } from "react";
import { useForm } from "../hooks/useForm";

const Form = () => {
  // カスタムフックという仕組みで別ファイルに切り出したものを呼び出す
  const { name, email, data, handleEmailChange, handleNameChange } = useForm();

  return (
    <div>
      {/* mapでデータを表示しただけだと90点, data &&で繋げられれば100点！ */}
      {data &&
        data.map((aa, zz) => (
          <div key={zz}>
            <h3>{zz}番目</h3>
            <p>{aa.id}</p>
            <p>{aa.title}</p>
            <p>{aa.userId}</p>
          </div>
        ))}

      <div>
        <p>名前入力欄</p>
        <input type="text" value={name} onChange={handleNameChange} />
      </div>
      <div>
        <p>メールアドレス入力欄</p>
        <input type="email" value={email} onChange={handleEmailChange} />
      </div>
      {/*  */}
      <br />
      <p>名前入力 {name}</p>
      <p>email入力 {email}</p>
    </div>
  );
};

export default Form;
