import { useState } from "react"; //react라는 경로에서 useState라는 라이브러리를 끌고온다.

function Count() {
  // Count라는 함수를 만든다
  const [count, setCount] = useState(0);
  // count라는 변수, setCount라는 함수를 선언하고 useState로 count의 초기값을 0으로 선언한다.
  const a = () => {
    setCount(count + 1);
    // 만약 count를 다른 이름으로 사용할꺼면 ()안에 변수명을 적어준다.
  };
  return (
    // 화면에 표시되는 html의 문법을 적는 곳으로 집합을 하나만 사용 가능하기에 <div>로 묶어준다.
    <div>
      <h2>{count}</h2>
      <button onClick={a}>+1</button>
    </div>
  );
}

export default Count;
// Count를 모듈로 내보낸다.
