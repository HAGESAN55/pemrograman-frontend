import Movie from "../Movie/Movie"
import styles from "./Movies.module.css";
import data from "../../utils/constant/data";
import { useState } from "react";
import { nanoid } from "nanoid";

function Movies() {

  const [movies, setMovies] = useState(data);

  function addFilm() {
    const movie = {
      id: nanoid(15),
      title:"Mad Morron",
      year: "2022",
      type: "Movie",
      poster: "https://picsum.photos/300/400"
    };

    setMovies([...movies, movie])
  }
  return (
    <div className={styles.container}>
      <section className={styles.movies}>
        <h2 className={styles.movies__title}>Latest Movies</h2>
        <div className={styles.movie__container}>
          {/* Looping Data Movies Menggunakan Map
              Render Component Move dengan kirim Props Movie */}
          {
            movies.map(function(movie){
              return <Movie key={movie.id} movie={movie}/>
            })
          }
        </div>
        <button onClick={addFilm}>Add Movie</button>
      </section>
    </div>
  );
}

export default Movies;
