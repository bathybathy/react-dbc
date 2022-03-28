import { useState, createContext } from "react";
import { useNavigate } from "react-router-dom";

import url from "../components/url";

export const LoginContext = createContext()

function LoginProvider({children}) {
    const [token, setToken] = useState("");
    const navigate = useNavigate();

    const handleLogin = async (values) =>{
        try {
            const {data} = await url.post('/auth', values)
            setToken(data);
            localStorage.setItem('token', JSON.stringify(data))
            navigate('/logado')
        }   catch(erro){
            console.log('houve algum erro', erro)
        }
    }

    const handleLogout = () => {
        localStorage.removeItem('token')
        navigate('/')
    }
    
    return(
        <LoginContext.Provider value={{ token, setToken, handleLogin, handleLogout}}>
            {children}
        </LoginContext.Provider>
    )
}

export default LoginProvider;