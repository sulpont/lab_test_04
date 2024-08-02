// rafce

import React from "react";

// 目印の名前を書く。受け取りますよ、というメッセージを通過して、表示される。分割代入で受け取ることを推奨する。
const Test = ({ gs, lab, react }) => {
  return (
    <React.Fragment>
      <div>Test</div>
      <p>{gs}</p>
      <h2>{lab}</h2>
      <legend>{react}</legend>
    </React.Fragment>
  );
};

export default Test;
