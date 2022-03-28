import { createContext, useState } from "react";

export const TrabalhadorContext = createContext();
let id = 0;

function TrabalhadorProvider( {children} ) {

    const [nome, setNome] = useState('')
    const [email, setEmail] = useState('')
    const [profissao, setProfissao] = useState('')
    const [listaTrab, setListaTrab] = useState([])
    const [trabEditar, setTrabEditar] = useState([])

    const ehValido = () =>{
        let nomeValido = false;
        if (nome.match(/[a-z]/gi)){
            nomeValido = true;
        }
        let emailValido = false;
        if (email.match(/[\w.]+@\w+\.\w+\.?\w*/gi)){
            emailValido = true;
        }
        let profissaoValido = false;
        if(profissao !== ""){
            profissaoValido = true;
        }
        if(profissaoValido && nomeValido && emailValido){
            return true
        }
    }
   

    const cadastrarTrabalhador = (e) =>{
        e.preventDefault();
        if( !ehValido()){
            alert("preencha todos os campos corretamente")
        }else{
            
            ++id;
            listaTrab.push({nome: nome, email: email, profissao: profissao, id: id})
            setListaTrab(listaTrab)    
            alert("usuario cadastrado")  
        }
    }
    
    function deletarTrabalhador (id) {
        setListaTrab(listaTrab.filter((e) => e.id !== id))
    }



    return (
        <TrabalhadorContext.Provider value ={{ nome, setNome, email, setEmail, profissao, setProfissao, listaTrab, setListaTrab, cadastrarTrabalhador, deletarTrabalhador, trabEditar, setTrabEditar, ehValido }}>
            {children}
        </TrabalhadorContext.Provider>
    )
}

export default TrabalhadorProvider