// 1. 숫자가 위에 출력된다.
// 2. 숫자가 증가되는 버튼을 만든다.
// 3. 문자를 입력하는 창을 만든다.
// 4. 문자가 출력된다.

import { useState, useEffect } from "react";

function Effect2() {
  const [count, setCount] = useState(0);
  const [word, setWord] = useState("");

  useEffect(() => {}, []);
  useEffect(() => {
    console.log(1);
  }, [count]);
  useEffect(() => {
    console.log(2);
  }, [word]);
  useEffect(() => {
    console.log(3);
  }, [count, word]);

  const onClick = () => {
    setCount(count + 1);
  };
  const onChange = (event) => {
    console.log(event.target.value);
    setWord(event.target.value);
  };

  // 아무것도 입력하지 않았을 때 출력되는 효과
  // 글자만 입력했을 때 출력되는 효과
  // 숫자만 입력했을 때 출력되는 효과
  // 둘다 입력했을 때 출력되는 효과

  return (
    <div>
      <p>count : {count}</p>
      <button onClick={onClick}>+1</button>
      <p>word : {word}</p>
      <input value={word} onChange={onChange}></input>
    </div>
  );
}
export default Effect2;
