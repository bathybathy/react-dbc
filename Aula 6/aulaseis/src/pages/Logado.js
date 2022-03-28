import { LoginContext }  from '../context/LoginContext';
import {useContext} from 'react'

function Logado (){

    const {handleLogout} = useContext(LoginContext)

    return(<div>
        <h1>Logado</h1>
        <button onClick={handleLogout}>Logout</button>
        </div>)
}

export default Logado;