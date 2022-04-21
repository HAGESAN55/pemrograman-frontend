import styles from "./Content.module.css";
import data from "../../utils/constants/indonesia";
import Case from "../Case";


function Content (){
    return(
        <div className={styles.container}>
            <section className={styles.cases}>
                <div className={styles.__containTitle}>
                    <h2 className={styles.title}>Indonesia</h2>
                    <h3 className={styles.subtit}>Data Covid Berdasarkan Global</h3>
                </div>
                <div className={styles.contentBody}>
                    {data.indonesia.map((data) => (
                        <Case
                        key={data.status}
                        status={data.status}
                        total={data.total}
                        detail={data.detail}
                        />
                    ))}
                </div>
            </section>
        </div>
    );
}

export default Content;