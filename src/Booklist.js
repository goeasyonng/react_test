import styles from "./Booklist.module.css";

function Booklist() {
  return (
    <div>
      <Book
        title="내가만약"
        author="김혜남"
        imglink="http://image.yes24.com/goods/115142458/XL"
      />
      <Book
        title="내가만약2"
        author="김혜남2"
        imglink="http://image.yes24.com/goods/115142458/XL"
      />
      <Book
        title="내가만약3"
        author="김혜남3"
        imglink="http://image.yes24.com/goods/115142458/XL"
      />
    </div>
  );
}

const Book = (props) => {
  return (
    <div className={styles.book}>
      <img src={props.imglink} />
      <h1>{props.title}</h1>
      <h3>{props.author}</h3>
    </div>
  );
};

export default Booklist;
