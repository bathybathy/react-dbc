import Lista from "./Lista";
import { LoginContext } from "../../context/LoginContext";
import {useContext} from 'react'

function Header () {
    const token = localStorage.getItem('token');
    const {handleLogout} = useContext(LoginContext)

    return(
        <header>
            <ul>
                {token && <Lista path="/" text="Home" />}
                {token && <Lista path="/logado" text="Usuários" />}
                {!token && <Lista path="/login" text="Login" />}
            </ul>
            {token && <button onClick={handleLogout}>Logout</button>}
        </header>
    )
}

export default Header;