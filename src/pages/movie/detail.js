import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import DetailMovie from "../../componen/DetailMovie";
import Movies from "../../componen/Movies/movies";
import ENDPOINTS from "../../utils/constants/endpoints";

function Detail() {
  const params = useParams();
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    getRecomendedMovies();
  }, [params.id]);

  async function getRecomendedMovies() {
    const data = await axios(ENDPOINTS.REKOMENDASI(params.id));
    console.log(ENDPOINTS.DETAIL(params.id));
    setMovies(data.data.results);
  }

  return (
    <>
      <DetailMovie />
      <Movies title="Recomended Movie" movies={movies} />
    </>
  );
}
export default Detail;