import styles from "./Addcase.module.css"
import data from "../../utils/constants/provinces";

function Addcase () {
    return (
        <div className={styles.container}>
            <section className = {styles.add}>
                <div className={styles.containerLeft}>
                    <img className={styles._image} src="img/form.svg" alt="" />
                </div>

                <div className={styles.containerRight}>
                    <h1 className={styles.title}>Form Covid</h1>
                    <form action="">
                        <div className={styles.formGroup}>
                            <label className={styles.labelForm} htmlFor="Provinsi">Provinsi</label>
                            <select className={styles.inputForm}>
                                <option>Pilih Provinsi</option>
                                    {data.provinces.map((data) => (
                                        <option key={data.kota} value={data.kota}>
                                        {data.kota}
                                        </option>
                                    ))}
                            </select>
                        </div>
                        <div className={styles.formGroup}>
                            <label className={styles.labelForm} htmlFor="Status">Status</label>
                            <select className={styles.inputForm}>
                                <option>Pilih Status</option>
                                <option value="kasus">Positif       </option>
                                <option value="sembuh">Sembuh</option>
                                <option value="dirawat">Di Rawat</option>
                                <option value="meninggal">Meninggal</option>
                            </select>
                        </div>
                        <div className={styles.formGroup}>
                            <label className={styles.labelForm} htmlFor="Jumlah">Jumlah</label>
                            <input className={styles.inputForm} type="text" />
                        </div>
                        <button className = {styles.buttonForm}>submit</button>
                        
                    </form>
                </div>
            </section>
        </div>
    );
}


export default Addcase;