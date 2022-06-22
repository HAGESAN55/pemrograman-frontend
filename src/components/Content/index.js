import styles from "./Content.module.css";
// import data from "../../utils/constants/indonesia";
import Case from "../Case";
import { useEffect, useState } from "react";


function Content (props){

    const {cases, setCases} = props;


    return(
        <div className={styles.container}>
            <section className={styles.cases}>
                <div className={styles.__containTitle}>
                    <h2 className={styles.title}>Indonesia</h2>
                    <h3 className={styles.subtit}>Data Covid Berdasarkan Global</h3>
                </div>
                <div className={styles.contentBody}>
                    {cases.mapz((Cases) => {
                        return <Case cases = {Cases} />;
                    })}
                </div>
            </section>
        </div>
    );
}

export default Content;