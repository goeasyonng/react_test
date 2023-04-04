import { useState } from "react"; //react라는 경로에서 useState라는 라이브러리를 모듈로 가져온다.
import TodoItem from "./TodoItem";

function Todo() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);
  //todo와 todos를 정적함수로 변수선언하고 해단 변수들을 set변수명 함수에서 계산한다. 그리고 각각의 초기값을 문자와 배열로 선언한다.

  const onChange = (event) => {
    console.log(event.target.value);
    setTodo(event.target.value);
  };
  // onChange는 실시간으로 바뀌게 하는 이벤트다.
  // event.target.value는 각각 이벤트.이벤트를 일어나게하는것.이벤트 값 을 뜻한다

  const onSubmit = (event) => {
    event.preventDefault(); //원래 submit태그는 값을 전송하면서 새로고침을 실행한다. 이것을 방지하는 문장이다.
    console.log("onSubmit Click");

    setTodos((currentTodos) => [todo, ...currentTodos]);
    // 배열에 계속해서 todo에 입력되는 값을 넣어주는데 ...을 붙이면 배열안에 배열이 아닌 요소로서 넣어준다.
    setTodo("");
    // input안의 문자를 빈문자로 바꿔주는 부분

    console.log(todos); //배열에 담긴 문장을 출력하는 부분
  };
  //제출이벤트가 발생할때 실행한다.ex)login에서 확인을 누르는 순간
  return (
    <div>
      <form onSubmit={onSubmit}>
        <input onChange={onChange} value={todo} placeholder="할일 추가" />
        {/*input태그의 value는 초기값을 명시한다.*/}
        <button>Add todo</button>
        {/* form으로 묶어주는 이유는 onSubmit제출이벤트 안에 onchange이벤트가 포함되어 있기 때문이다 */}
        {todos.map((item, index) => {
          return (
            <TodoItem key={index} text={item} index={index} name="오수빈" />
          );
          // 배열.map( (value요소, key배열번호) => 처리문 ) for문과 같은 반복문이라고 보면 된다.
        })}
      </form>
    </div>
  );
}
export default Todo;
