import { useState, useEffect } from "react";
import Movielist from "./Movielist";
import styles from "./Movielist.module.css";

function Movie() {
  const [loading, setLoading] = useState(true);
  const [movie, setMovie] = useState([]);
  // const [genres, setGenres] = useState([]);

  useEffect(() => {
    fetch(
      "https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year"
    )
      .then((res) => res.json())
      .then((data) => {
        // setMovie(data);
        // setGenres (genres);
        setLoading(false);
        setMovie(data.data.movies);
        // setGenres(data.data.movies.Array[0].genres);
        console.log(data);
        console.log(data.data.movies); //새로 알게 된 사실. 콘솔로 데이터에 들어있는 객채 파악해서 객채 이름으로 들어간다.
        // console.log(genres);
      });

    console.log("API CALL");
  }, []);

  console.log("UI REFRESH");

  return (
    <div className={styles.container}>
      {/* {loading ? "로딩" : "로딩완료"} */}
      {movie.map((item) => {
        return (
          <Movielist
            key={item.id}
            title={item.title_english}
            year={item.year}
            summary={item.summary}
            img={item.medium_cover_image}
            genres={item.genres}
          />
        );
      })}{" "}
      {/* {genres.map((item) => {
        return <Movielist genres={item.genres} />;
      })} */}
    </div>
  );
}

export default Movie;
