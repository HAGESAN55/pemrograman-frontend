import { nanoid } from "nanoid";
import { useState } from "react";
import styles from "./ad-movie.module.css";
import Alert from "../Alert/Alert";
import Button from "../ui/button";

function Addmovie(props) {
  // destructing
  const { movies, setMovies } = props;

  // membuat state dalam bentuk object
  const [formData, setformData] = useState({
    title: "",
    date: "",
    poster: "",
    type: "",
  });

  //  destructing untuk form data
  const { title, date, pict, type } = formData;

  // membuat fungsi handleChange untuk smua input form
  function handleChange(e) {
    // destructing etarget
    const { name, value } = e.target;
    setformData({ ...formData, [name]: value });
  }

  // state eror dalam bentuk object
  const [handleError, sethandleError] = useState({
    titleError: false,
    dateError: false,
    pictError: false,
    typeError: false,
  });

  // destructing error
  const { titleError, dateError, pictError, typeError } = handleError;

  // Validasi
  function validate() {
    if (title === "") {
      sethandleError({ ...handleError, titleError: true });
      return false;
    } else if (date === "") {
      sethandleError({ ...handleError, dateError: true, titleError: false });
      return false;
    } else if (pict === "") {
      sethandleError({ ...handleError, pictError: true, dateError: false });
      return false;
    } else if (type === "") {
      sethandleError({ ...handleError, typeError: true, pictError: false });
      return false;
    } else {
      sethandleError({ ...handleError, titleError: false, dateError: false, pictError: false, typeError: false });
      return true;
    }
  }

  function addMovie() {
    const movie = {
      id: nanoid(),
      title: title,
      year: date,
      type: type,
      poster: pict,
    };

    setMovies([...movies, movie]);
  }

  // handle submit
  function handleSubmit(e) {
    // mencegah prilaku default
    e.preventDefault();
    validate() && addMovie();
  }
  return (
    <div className={styles.container}>
      <section className={styles.add}>
        <div className={styles.contaner__left}>
          <img className={styles.add__img} src="https://picsum.photos/300/350" alt="" />
        </div>

        <div className={styles.container__right}>
          <h1 className={styles.add__title}>Add Movie</h1>
          <form action="" onSubmit={handleSubmit}>
            {/* TITLE */}
            <label className={styles.add__label} htmlFor="">
              Title
            </label>
            <input name="title" onChange={handleChange} className={styles.add__input} type="text" value={title} />
            {titleError && <Alert>Judul Wajib Diiisi</Alert>}

            {/* TAHUN */}
            <label className={styles.add__label} htmlFor="">
              Year
            </label>
            <input name="date" onChange={handleChange} className={styles.add__input} type="number" value={date} />
            {dateError && <Alert>Tanggal Wajib Diiisi</Alert>}

            {/* LINK GAMBAR */}
            <label className={styles.add__label} htmlFor="">
              Link Gambar
            </label>
            <input name="pict" onChange={handleChange} className={styles.add__input} type="text" value={pict} />
            {pictError && <Alert>Silahkan Masukan Gambar</Alert>}

            {/* GENRE */}
            <select onChange={handleChange} className={styles.add__select} name="type" id="">
              <option className={styles.add__option} value="">
                Select Genre
              </option>
              <option className={styles.add__option} value="Drama">
                Drama
              </option>
              <option className={styles.add__option} value="Horor">
                Horor
              </option>
              <option className={styles.add__option} value="Comedy">
                Comedy
              </option>
              <option className={styles.add__option} value="DLL">
                DLL
              </option>
            </select>
            {typeError && <Alert>Silahkan Pilih Genre</Alert>}

            <Button full>Submit</Button>
          </form>
        </div>
      </section>
    </div>
  );
}

export default Addmovie;
