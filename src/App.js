import "./App.css"; //import는 현재의 모듈을 끌어오는것 import 원하는 이름 "경로"
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import Count from "./Count.js"; //Count.js 파일을 끌어오는 것
// import Effect from "./Effect"; //Effect.js 파일을 끌어오는 것
// import Todo from "./Todo"; // Todo.js 파일을 끌어오는 것
// import Button from "./Button";
// import Booklist from "./Booklist";
// import Users from "./Users";
import Movie from "./Movie";

function App() {
  return (
    <div>
      {/* <Count />
      <Effect />
      <Todo2 />
      <Button text="첫번쨰" />
      <Button text="두번쨰" />
      <Button text="세번쨰" />
      <Booklist />
      <Users /> */}
      <Movie />
    </div>
    // <Router>
    //   <Routes>
    //     <Route path="/" element={<h1> main page</h1>} />
    //     <Route path="/count" element={<Count />}></Route>
    //     <Route path="/todo" element={<Todo />}></Route>
    //     <Route path="/about" element={<h1>about page</h1>}></Route>
    //   </Routes>
    // </Router>
  );
}

export default App; //현재 모듈로서 내보내는것. default는 기본이라는 뜻으로 기본으로 export한다는 것.
