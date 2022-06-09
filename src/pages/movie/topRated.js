import axios from "axios";
import { useEffect, useState } from "react";
import Hero from "../../components/Hero/Hero";
import Movies from "../../components/Movies/Movies"

function TopRated() {
  const API_KEY = process.env.REACT_APP_API_KEY;
  const URL = `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}`;
  const [movies, setMovies] = useState([]);
  
  async function getTopRated() {
    const response = await axios(URL);
    setMovies(response.data.results);
    console.log(response.data.results)
  }

  useEffect(() => {
    getTopRated();
  }, []);

  return (
      <div>
        <Hero />
        <Movies Movies={movies} />
      </div>
    );
}
  
export default TopRated;  