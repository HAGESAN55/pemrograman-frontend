import styles from "./Case.module.css"

function Case (props) {
    const { status, total, detail } = props;
    
    return(
        <div className={styles.case}>
            <a href={detail} target="_blank">
                <h4 className={styles.status}>{status}</h4>
                <h2>{total.toLocaleString()}</h2>
            </a>
        </div>
    );
}

export default Case;