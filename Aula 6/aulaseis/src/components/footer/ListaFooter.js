import { Link } from "react-router-dom"

import styles from "./Footer.module.css"

function Lista ( {path, text}  ) {

    return(
        <>
            <li className={styles.listaFooter}>
                <Link to={path}><p>{text}</p></Link>
            </li>
        </>
    )
}

export default Lista