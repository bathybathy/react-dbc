import Lista from "./Lista";
import {useContext} from 'react'

import { LoginContext } from "../../context/LoginContext";  
import styles from "./Header.module.css"

function Header () {
    const token = localStorage.getItem('token');
    const {handleLogout} = useContext(LoginContext)

    return(
        <header>
            <ul className={styles.menu}>
                {token && <Lista path="/" text="Home" className={styles.lista}/>}
                {token && <Lista path="/logado" text="Usuários" />}
                {token && <Lista path="/address" text="Endereço" />}
                {!token && <Lista path="/login" text="Login" />}
            </ul>
            {token && <button className={styles.deslog} onClick={handleLogout}>Logout</button>}
        </header>
    )
}

export default Header;