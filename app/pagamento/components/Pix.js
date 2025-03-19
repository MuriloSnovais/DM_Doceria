import { useState } from "react";

function Pix() {
    const [mostra_pix, set_mostra_pix] = useState(false)

    return ( 
        <li>
            <img className="pix" src="https://img.icons8.com/color/512/pix.png"></img>
            <button className="btn"><h2>Pix</h2></button>
        </li>
    );
}

export default Pix;