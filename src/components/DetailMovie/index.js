import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ENDPOINTS from "../../utils/constants/endpoints";
import Button from "../ui/button";
import StyleDetailMovie from "./DetailMovie.styled";

function DetailMovie() {

    const params = useParams();
    const [movie, setMovie] = useState("");
    const genres = movie && movie.genres.map((genre) => genre.name).join(", ");
    const trailer = movie && movie.videos.results[0].key;
  
    useEffect(() => getDetailMovie(), [params.id]);
  
    async function getDetailMovie() {
      const response = await axios(ENDPOINTS.DETAIL(params.id));
  
      setMovie(response.data);
    }
  
    return (
        <StyleDetailMovie>
          <div className="poster">
            <img src={`https://image.tmdb.org/t/p/w300//${movie.poster_path}`} alt="" />
          </div>
          <div className="info">
            <h2>{movie.title}</h2>
            <h3>{genres}</h3>
            <p>{movie.overview}</p>
            <Button as="a" href={`https://www.youtube.com/watch?v=${trailer}`}>
              Watch Trailer
            </Button>
          </div>
        </StyleDetailMovie>
      );
    }
    
    export default DetailMovie;
  