import styles from "./ad-movie.module.css"

function Addmovie() {
    return (
        <div className={styles.container}>
            <section className = {styles.add}>
                <div className={styles.containerLeft}>
                    <img className={styles._image} src="https://picsum.photos/300/300" alt="" />
                </div>

                <div className={styles.containerRight}>
                    <h1 className={styles.title}>Add Movie</h1>
                    <form action="">
                        <div className={styles.formGroup}>
                            <label className={styles.labelForm} htmlFor="Title">Title</label>
                            <input className={styles.inputForm} type="text" />
                        </div>
                        <div className={styles.formGroup}>
                            <label className={styles.labelForm} htmlFor="Year">Year</label>
                            <input className={styles.inputForm} type="text" />
                        </div>
                        <button className = {styles.buttonForm}>submit</button>
                        
                    </form>
                </div>
            </section>
        </div>
    );
}

export default Addmovie;
