import { useState, createContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import url from "../components/url";

export const LoginContext = createContext()

function LoginProvider({children}) {
    const [token, setToken] = useState("");
    const navigate = useNavigate();
    const [loading, setLoading] = useState(true)
    



    useEffect(()=>{

        
        setLoading(false)
    },[])

    const isLogado = () =>{

        const isToken = localStorage.getItem('token')
        url.defaults.headers.common['Authorization'] = isToken
        console.log(isToken)
        if(!isToken){
            return false
        }else{
            return true
        }
    }

    const handleLogin = async (values) =>{
        try {
            const {data: token} = await url.post('/auth', values)
            setToken(token);
            localStorage.setItem('token', token)
            url.defaults.headers.common['Authorization'] = token;
            console.log(token)
            navigate('/logado')
        }   catch(erro){
            console.log('houve algum erro', erro)
        }
    }

    const handleLogout = () => {
        localStorage.removeItem('token')
        navigate('/login')
    }

    if(loading){
       return <h1>Loading</h1>
    }
    
    return(
        <LoginContext.Provider value={{ token, setToken, handleLogin, handleLogout, isLogado}}>
            {children}
        </LoginContext.Provider>
    )
}

export default LoginProvider;