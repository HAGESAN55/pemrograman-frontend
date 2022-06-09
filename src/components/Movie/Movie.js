import styles from "./Movie.module.css"

// Import Props
function Movie(props) {
    const {movie} = props;

    return (
        <div className={styles.movie}>
            <img src={movie.poster || `https://image.tmdb.org/t/p/w300/${movie.poster_path}`} alt="" />
            <h3>{movie.title}</h3>
            <p>{movie.year || movie.release_date}</p>
            <h2>{movie.type}</h2>
        </div>
    );
}

export default Movie;