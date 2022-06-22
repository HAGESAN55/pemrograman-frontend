import { Link } from "react-router-dom";
import styles from "./Case.module.css";

function Case (props) {
    const { cases } = props;
    
    console.log(cases);
    return(
        <div className={styles.case}>
            
            {/* <Link to={detail}>
                <h4 className={styles.status}>{status}</h4>
                <h2>{total.toLocaleString()}</h2>
            </Link> */}
        </div>
    );
}

export default Case;