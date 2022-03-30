import { useContext, useEffect } from "react";
import { LoginContext } from "../context/LoginContext";
import { useNavigate } from "react-router-dom";

function Home() {
    const navigate = useNavigate();
    const {isLogado} = useContext(LoginContext)

    useEffect(() => {
        isLogado()
        console.log(isLogado())
        if(!isLogado()){
            navigate('/login')
        }
    }, [])


    return(
    <div>
        <h1>Home</h1>
    </div>)
}

export default Home;