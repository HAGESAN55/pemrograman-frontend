import axios from "axios";
import {useEffect, useState} from "react";
import Hero from "../../components/Hero/Hero";
import Movies from "../../components/Movies/Movies"
import ENDPOINTS from "../../utils/constant/endpoint";

function Popular() {
  const [movies, setMovies] = useState([]);

  async function getPopularMovies() {
    const response = await axios(ENDPOINTS.POPULAR);
    setMovies(response.data.results);
  }

  useEffect( () => {
    getPopularMovies();
  }, []);



    return (
      <div>
        <Hero />
        <Movies Movies={movies} />
      </div>
    );
  }
  
  export default Popular;
  