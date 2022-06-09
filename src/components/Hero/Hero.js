import { useEffect, useState } from "react";
import styles from "./Hero.module.css";
import Button from "../ui/button";
import axios from "axios";

function Hero() {
  const [movie, setMovie] = useState("");
  const API_KEY = process.env.REACT_APP_API_KEY;
  const genres = movie && movie.genres.map((genre) => genre.name).join(", ");
  const idTrailer = movie && movie.videos.results[0].key;

  async function getTrendingMovie() {
    const URL = `https://api.themoviedb.org/3/trending/movie/day?api_key=${API_KEY}`;
    const response = await axios(URL);
    return response.data.results[0];
    // console.log(response.data.results)
  }

  async function getDetailMovie() {
    const trending = await getTrendingMovie();
    const id = trending.id;
    const URL = `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&append_to_response=videos`;
    const response = await axios(URL);
    setMovie(response.data);
  }


  useEffect(getDetailMovie, []);

 

  return (
    <div className={styles.container}>
      <section className={styles.hero}>
        <div className={styles.hero__left}>
          <h2 className={styles.hero__title}>{movie.Title}</h2>
          <h3 className={styles.hero__genre}>{genres}</h3>
          <p className={styles.hero__description}>{movie.overview}</p>
          <Button as="a" href={`https://www.youtube.com/watch?v=${idTrailer}`} variant="pink">Watch</Button>
        </div>
        <div className="hero__right">
          <img src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`} alt={movie.Title} />
        </div>
      </section>
    </div>
  );
}

export default Hero;