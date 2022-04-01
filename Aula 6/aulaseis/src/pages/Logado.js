import moment from "moment";
import { useEffect, useState, useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import { confirmAlert } from 'react-confirm-alert'; 
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import 'react-confirm-alert/src/react-confirm-alert.css'; 

import { UserContext } from "../context/UserContext";
import { LoginContext } from "../context/LoginContext";
import url from "../components/url";
import Loading from "../components/loading/Loading";
import Error from "../components/error/Error";
import styles from "./Logado.module.css"

function Logado (){
    
    const navigate = useNavigate();
    const {isLogado} = useContext(LoginContext)
    
    const {getPessoas, setLoading, pessoas, loading, error, setError } = useContext(UserContext)

    useEffect(() => {
        if(!isLogado()){
            navigate('/login')
        }else{
            getPessoas();
            
            
        }
        
    }, [])

    const recarregar = () =>{
        window.location.reload(false)
    }

    

    const setupDeletar = (id) =>{
        confirmAlert ({
            title: "Confirmação.",
            message: "Você tem certeza que deseja deletar?",
            buttons: [
                {
                    label: 'Sim',
                    onClick: () => deletarUsuario(id)
                },
                {
                    label: "Não",
                    onClick: () => toast("Operação cancelada.", {
                            position: "bottom-center",
                            autoClose: 5000,
                            hideProgressBar: false,
                            closeOnClick: true,
                            pauseOnHover: true,
                            draggable: true,
                            progress: undefined,
                            }
                        )
                }
            ]
        })
        
    }

    const deletarUsuario = async (id) => {
        try {
            await url.delete(`/pessoa/${id}`);
            toast.success("Usuário deletado com sucesso!",  {
                    position: "bottom-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    }
                );
            recarregar();
            
            

       } catch (error) {
           console.log(error)
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
        <div className={styles.usuariosTitulo}><h1>Usuários</h1></div>
        <div className={styles.linkUsuario}><Link to='/create-user'>Cadastrar usuário</Link></div>
        <div className={styles.gridUsuarios}>
            {pessoas.map((pessoa) =>(
                <div key={pessoa.idPessoa} className={styles.usuarios}>
                    <h3>{pessoa.nome}</h3>
                    <p>Email: {pessoa.email}</p>
                    <p>Data de nascimento: {moment().format('DD/MM/YYYY', pessoa.dataNascimento)}</p>
                    <p>CPF: {maskCpf(pessoa.cpf)}</p>
                    <div className={styles.containerBotoes}>
                        <div><button onClick={ () => setupDeletar(pessoa.idPessoa)}>Deletar</button></div>
                        <div><button onClick={() => navigate(`/create-user/${pessoa.idPessoa}`)}>Atualizar</button></div>
                    </div>
                </div>
        ))}
        </div>
        <ToastContainer position="bottom-center"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover/>
        </div>)
}

export default Logado;