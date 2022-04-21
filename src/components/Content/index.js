import styles from "./Content.module.css";

function Content (){
    return(
        <div className={styles.container}>
            <div className={styles.content}>
                <div className={styles.__containTitle}>
                    <h2 className={styles.title}>Indonesia</h2>
                    <h3 className={styles.subtit}>Data Covid Berdasarkan Global</h3>
                </div>

            </div>

        </div>
    );
}

export default Content;