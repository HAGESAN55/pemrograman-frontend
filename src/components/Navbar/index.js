import styles from "./navbar.module.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className={styles.container}>
      <nav className={styles.navbar}>
        <div>
          <h1 className={styles.navbar__brand}>Covid ID</h1>
        </div>
        <div>
          <ul className={styles.navbar__list}>
            <li className={styles.navbar__item}>
              <Link className={styles.navbar__link} to="/">Home</Link>
            </li>
            <li className={styles.navbar__item}>
              <Link className={styles.navbar__link} to="/pages/page/global-menu">Global</Link>
            </li>
            <li className={styles.navbar__item}>
              <Link className={styles.navbar__link} to="/pages/page/indonesia-menu">Indonesia</Link>
            </li>
            <li className={styles.navbar__item}>
              <Link className={styles.navbar__link} to="/pages/page/provinsi-menu">Provinsi</Link>
            </li>
            <li className={styles.navbar__item}>
              <Link className={styles.navbar__link} to="/pages/page/about">About</Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;