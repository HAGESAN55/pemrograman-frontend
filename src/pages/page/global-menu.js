import { useEffect, useState } from "react";
import axios from "axios";
import ENDPOINTS from "../../utils/constants/endpoint";
import Content from "../../components/Content";

function GlobalMenu(){

        const URL = ENDPOINTS.GLOBAL;

        const [cases, setCases] = useState([]);

        useEffect( async () => {

            const response = await axios(URL);

            setCases(response.data);
        }, []);

        console.log(cases);

        return(
            <>
                <Content cases={cases} />
            </>
        )


}

export default GlobalMenu;