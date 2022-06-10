import { useEffect, useState } from "react";
import styles from "./Hero.module.css";
import Button from "../ui/button";
import axios from "axios";
import ENDPOINTS from "../../utils/constant/endpoint";

function Hero() {
  const [movie, setMovie] = useState("");
  const genres = movie && movie.genres.map((genre) => genre.name).join(", ");
  const idTrailer = movie && movie.videos.results[0].key;

  async function getTrendingMovie() {
    const response = await axios(ENDPOINTS.TRENDING);
    return response.data.results[0];
    // console.log(response.data.results)
  }

  async function getDetailMovie() {
    const trending = await getTrendingMovie();
    const id = trending.id;
    const response = await axios(ENDPOINTS.TRENDINGID(id));
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