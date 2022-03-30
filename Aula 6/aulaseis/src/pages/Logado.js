import moment from "moment";
import { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";

import { LoginContext } from "../context/LoginContext";
import url from "../components/url";

function Logado (){
    const [pessoas, setPessoas] = useState([])

    const navigate = useNavigate();
    const {isLogado} = useContext(LoginContext)

    useEffect(() => {
        if(!isLogado()){
            navigate('/login')
        }else{
            getPessoas()
        }
    }, [])


    
    const getPessoas = async () =>{

        try {
            const {data} = await url.get('/pessoa' )
            console.log(data)
            setPessoas(data)
            
        } catch (error) {
            console.log("houve algum erro", error)
        }
    }

    const maskCpf = (cpf) => {
        return cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4")
    }

    return(<div>
        <h1>Usuários</h1>
        {pessoas.map((pessoa) =>(
            <div key={pessoa.idPessoa}>
                <h3>{pessoa.nome}</h3>
                <p>{pessoa.email}</p>
                <p>{moment().format('DD/MM/YYYY', pessoa.dataNascimento)}</p>
                <p>{maskCpf(pessoa.cpf)}</p>
            
            </div>
    ))}
        
        </div>)
}

export default Logado;