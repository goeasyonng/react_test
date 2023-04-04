import styles from "./Movielist.module.css";
import { useState } from "react";

function Movielist({ title, year, summary, img, genres }) {
  // const [gen, setGen] = useState("");

  // const setGen = () => {};

  return (
    <div className={styles.movielist}>
      <img src={img} />
      <ul>
        <li>{title}</li>
        <li>{year}</li>
        <li>{summary}</li>
        <li>{genres}</li>
      </ul>
    </div>
  );
}

export default Movielist;
