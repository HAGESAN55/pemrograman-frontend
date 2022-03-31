import { useState } from "react";

function Counter() {

    const [hasil, setHasil] = useState(0)

    function add() {
        setHasil(hasil + 1)
        
    }

    return (
        <div>
            <p>Hasil: {hasil}</p>
            <button onClick={add}>Add</button>
        </div>
    );
}

export default Counter;