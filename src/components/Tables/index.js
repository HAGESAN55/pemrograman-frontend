import styles from "./Tables.module.css";
import data from "../../utils/constants/provinces";
import Table from "../Table";

function Tables () {


    return (
        <div className={styles.container}>
            <section className={styles.tables}>
                <div className={styles.__containTitle}>
                    <h2 className={styles.title}>Provinsi</h2>
                    <h3 className={styles.subtit}>Data Covid Berdasarkan Provinsi</h3>
                </div>
                <div className={styles.tablesBody}>
                    <table className={styles.table}>
                        <thead>
                            <tr>
                                <th>No.</th>
                                <th>Provinsi</th>
                                <th>Positif</th>
                                <th>Sembuh</th>
                                <th>Dirawat</th>
                                <th>Meninggal</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.provinces.map((data, index) => (
                                <Table 
                                    index={index}
                                    key={data.kota}
                                    kota={data.kota}
                                    kasus={data.kasus}
                                    dirawat={data.dirawat}
                                    sembuh={data.sembuh}
                                    meninggal={data.meninggal}
                                />
                            ))}
                        </tbody>

                    </table>
                </div>
            </section>
        </div>
    );
}

export default Tables;