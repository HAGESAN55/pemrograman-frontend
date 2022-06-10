import axios from "axios";
import { useEffect, useState } from "react";
import Hero from "../../components/Hero/Hero";
import Movies from "../../components/Movies/Movies"
import ENDPOINTS from "../../utils/constant/endpoint";

function TopRated() {
  const [movies, setMovies] = useState([]);
  
  async function getTopRated() {
    const response = await axios(ENDPOINTS.TOP_RATED);
    setMovies(response.data.results);

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