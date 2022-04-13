import styles from "./footer.module.css";

function Footer() {
  return (
    <div className={styles.container}>
      <footer className={styles.footer}>
        <h2 className={styles.footer__title}>Covid ID</h2>
        <p className={styles.footer__author}>Created by aufaroot18</p>
        <p className={styles.footer__author}>Develop by HAGESAN55</p>
      </footer>
    </div>
  );
}

export default Footer;
