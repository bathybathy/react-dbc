import moment from "moment";
import { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";

import { LoginContext } from "../context/LoginContext";
import url from "../components/url";
import Loading from "../components/loading/Loading";
import Error from "../components/error/Error";
import styles from "./Logado.module.css"

function Logado (){
    const [pessoas, setPessoas] = useState([])
    const [error, setError] = useState(false)
    const navigate = useNavigate();
    const {isLogado} = useContext(LoginContext)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        if(!isLogado()){
            navigate('/login')
        }else{
            getPessoas()
            
        }
        setLoading(false)
    }, [])


    
    const getPessoas = async () =>{

        try {
            const {data} = await url.get('/pessoa' )
            console.log(data)
            setPessoas(data)
            
            
        } catch (error) {
            console.log("houve algum erro", error)
            setError(true)
            
        }
    }

    const maskCpf = (cpf) => {
        return cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4")
    }

    if(loading){
        return <Loading />
    }

    if(error){
        return <Error />
    }

    return(<div className={styles.containerUsuarios}>
        <h1>Usuários</h1>
        {pessoas.map((pessoa) =>(
            <div key={pessoa.idPessoa} className={styles.usuarios}>
                <h3>{pessoa.nome}</h3>
                <p>Email: {pessoa.email}</p>
                <p>Data de nascimento: {moment().format('DD/MM/YYYY', pessoa.dataNascimento)}</p>
                <p>CPF: {maskCpf(pessoa.cpf)}</p>
            
            </div>
    ))}
        
        </div>)
}

export default Logado;