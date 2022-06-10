import axios from "axios";
import { useEffect, useState } from "react";
import Hero from "../../components/Hero/Hero";
import Movies from "../../components/Movies/Movies"
import ENDPOINTS from "../../utils/constant/endpoint";

function NowPlaying() {
    const [movies, setMovies] = useState({});

    async function getNowPlaying() {
      const response = await axios (ENDPOINTS.NOW_PLAYING);
      setMovies(response.data.results);
      console.log(response.data.results)
    }

    useEffect(() => {
      getNowPlaying();
    }, {});

    return (
      <div>
        <Hero />
        <Movies Movies={movies} />
      </div>
    );
  }
  
  export default NowPlaying;
  