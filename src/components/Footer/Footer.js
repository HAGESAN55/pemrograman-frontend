/**
 * Import CSS Module Footer.
 * Disimpan di object styles.
 */
import styles from "./Footer.module.css";

function Footer() {
  /**
   * Menggunakan styles yang sudah diimport.
   * Memanggilnya menggunakan expression.
   */
  return (
    <div className={styles.container}>
      <footer className={styles.footer}>
        <h2 className={styles.footer__title}>Movie App</h2>
        <p className={styles.footer__author}>Created by aufaroot18</p>
      </footer>
    </div>
  );
}

export default Footer;
