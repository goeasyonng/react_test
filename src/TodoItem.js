import styles from "./TodoItem.module.css";
//import moment from "moment";
import { useState } from "react";

// function TodoItem(props) {
function TodoItem({ text, index, name, key }) {
  // const nowTime = moment.format("YYYY-MM HH:mm:ss");

  return (
    <div className={styles.todoItem}>
      <h3>
        {name}
        {index + 1}번쨰 todo list입니다.
      </h3>
      <li>{text}</li>
      {/* <p>작성한 시간 : {nowTime}</p> */}
    </div>
  );
}

export default TodoItem;
