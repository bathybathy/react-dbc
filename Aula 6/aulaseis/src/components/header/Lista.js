import { Link } from "react-router-dom"

import styles from "./Header.module.css"

function Lista ( {path, text}  ) {

    return(
        <>
            <li className={styles.listaMenu}>
                <Link to={path}><p>{text}</p></Link>
            </li>
        </>
    )
}

export default Lista