import { useState, useEffect } from "react";

function Movies() {
  const URL =
    "https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year";
  const [movies, setMovies] = useState([]);
const [loading, setLoading]= useState("");

  useEffect(() => {
    fetch(URL)
      .then((response) => response.json())
      .then((data) => {
        console.log("data");
        console.log(data);
        console.log("data.data.movies");
        console.log(data.data.movies);

        setMovies(data);
        setLoading(false);
      });
  }, []);
  return (
  <div>
    {loading ? "영화정보" : "로딩 완료"}
    {movies.map((item)=>{
    return(
    <Movie title={item.title} img={item.medium_cover_image} year={item.year} />)})

// const Movie = () => {
//   return (<title>영화제목</title>);
// }

}
export default Movies;
