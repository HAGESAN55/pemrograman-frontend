import styles from "./footer.module.css";

function Footer() {
  return (
    <div className={styles.container}>
      <nav className={styles.footer}>
        <div>
          <h1 className={styles.footer__brand}>Covid ID</h1>
          <p className={styles.footer__author}>Develop by Fadli Fadillah</p>
        </div>
      </nav>
    </div>
  );
}

export default Footer;
