import { useState } from "react";
import Addmovie from "../components/add-movie/ad-movie";
import Hero from "../components/Hero/Hero";
import Movies from "../components/Movies/Movies";
import data from "../utils/constant/data";

function Home() {
  const [movies, setMovies] = useState(data);
  return (
    <div>
      <Hero />
      <Movies movies={movies} setMovies={setMovies} />
      <Addmovie movies={movies} setMovies={setMovies} />
    </div>
  );
}

export default Home;
