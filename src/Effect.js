import { useEffect, useState } from "react";

function Effect() {
  const [count, setCount] = useState(0);
  const [keyword, setKeyword] = useState("");

  useEffect(() => {
    console.log("CALL API");
  }, []);

  useEffect(() => {
    console.log("CHANGE COUNT", count);
  }, [count]);

  useEffect(() => {
    console.log("CHANGE KEYWORD, COUNT", keyword, count);
  }, [keyword, count]);

  console.log("UI REFRESH");

  const onClick = () => {
    setCount(count + 1);
  };

  const onChange = (event) => {
    console.log(event.target.value);
    setKeyword(event.target.value);
  };

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={onClick}>+1</button>
      <input value={keyword} onChange={onChange} />
      <h1>{keyword}</h1>
    </div>
  );
}

export default Effect;
