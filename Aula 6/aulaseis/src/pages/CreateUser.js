import React from 'react'
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import moment from 'moment';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import 'react-confirm-alert/src/react-confirm-alert.css'; 
import { useNavigate } from "react-router-dom";

import url from '../components/url';
import Error from '../components/error/Error';
import styles from "./CreateUser.module.css"

function CreateUser() {

    const [nome, setNome] = useState('')
    const [cpf, setCpf] = useState('')
    const [email, setEmail] = useState('')
    const [dataNascimento, setNascimento] = useState('')
    const [hasId, setHasId] = useState(false)
    const [error, hasError] = useState(false)
    
    const navigate = useNavigate();
    const {pathname} = useLocation();
    const token = localStorage.getItem('token')
   
    

    
    const setupAtualizar = (e) =>{
        e.preventDefault();
        if ( verificarInputs() ){
            atualizarUsuario()
        }else{
            toast("Preencha todos os campos.", {
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
       
        
    }

    const verificarInputs = () =>{
        let ehValido = false;
        if( nome && email && cpf && dataNascimento !== ""){
            return true
        }else{
            return false
        }
    }

    useEffect(()=>{
        if(pathname.length > 13){
            const id = pathname.replace("/create-user/", "");
            setHasId(true);
            getUsuario(id);

        }
    },[])
    

    const createNewUser = async () =>{
        
        let nascimentoEnviar = moment(dataNascimento, 'DD-MM-YYYY').format('YYYY-MM-DD')
        let obj = {'nome': nome, 'cpf': cpf, 'email': email, 'dataNascimento': nascimentoEnviar}
        console.log(obj)
        
        try {
            const {data} = await url.post('/pessoa', obj)
            toast.success("Usuário cadastrado com sucesso!",  {
                position: "bottom-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                }
            );
            navigate('/logado')
        } catch (error) {
            console.log(error)
           
        }

    }

    
    const setupCadastrar = (e) =>{
        e.preventDefault();
        setNascimento(moment(dataNascimento, 'DD-MM-YYYY').format('YYYY-MM-DD'));
        
        if ( verificarInputs() ){
            createNewUser();
        }else{
            toast("Preencha todos os campos.", {
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
       
    }

    const atualizarUsuario = async () =>{

        let nascimentoEnviar = moment(dataNascimento, 'DD-MM-YYYY').format('YYYY-MM-DD')
        let obj = {'nome': nome, 'cpf': cpf, 'email': email, 'dataNascimento': nascimentoEnviar}
        const id = pathname.replace("/create-user/", "")
        
        try {
            const {data} = await url.put(`/pessoa/${id}`, obj)
            toast.success("Usuário atualizado com sucesso!",  {
                position: "bottom-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                }
            );
        } catch (error) {
            console.log(error);
            hasError(true);
        }

    }
    

   

    const getUsuario = async (id) =>{

        try {
            const {data} = await url.get(`/pessoa/{idPessoa}?idPessoa=${id}`)
            setNome(data.nome);
            setCpf(data.cpf);
            setEmail(data.email);
            setNascimento(data.dataNascimento)
        } catch (error) {
            console.log(error)
            hasError(true)
        }
    }

    if(error){

        return(
            <Error />
        )
    }
    

   
    if(pathname.length > 13){
        
        return (
            <div className={styles.containerCreate}>
                <h1>Atualizar Usuário</h1>
               <form onSubmit={(e) => setupAtualizar(e)}>
                <div>
                <label htmlFor="nome">Nome:</label>
                <input id="nome" name="nome" placeholder="Digite seu nome completo" value={nome} onChange={(e) => setNome(e.target.value)} />
                </div>
        
                <div>
                <label htmlFor="dataNascimento">Data de nascimento:</label>
                <input id="dataNascimento" name="dataNascimento" placeholder="Digite sua data de nascimento" value={dataNascimento} onChange={(e) => setNascimento(e.target.value)}/>
                </div>
        
                <div>
                <label htmlFor="email">Email</label>
                <input
                  id="email"
                  name="email"
                  placeholder="Digite seu email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                </div>
        
                <div>
                <label htmlFor="cpf">CPF:</label>
                <input id="cpf" name="cpf" placeholder="Digite seu CPF" value={cpf} onChange={(e) => setCpf(e.target.value)} />
                </div>
        
                <button type="submit">Atualizar</button>
              </form>
              <ToastContainer position="bottom-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover/>
            </div>
          )
    }

  return (
    <div className={styles.containerCreate}>
        <h1>Cadastrar Usuário</h1>
       <form onSubmit={(e) => setupCadastrar(e)} >
        <div>
        <label htmlFor="nome">Nome:</label>
        <input id="nome" name="nome" placeholder="Digite seu nome completo" value={nome} onChange={(e) => setNome(e.target.value)} />
        </div>

        <div>
        <label htmlFor="dataNascimento">Data de nascimento:</label>
        <input id="dataNascimento" name="dataNascimento" placeholder="Digite sua data de nascimento" value={dataNascimento} onChange={(e) => setNascimento(e.target.value)}/>
        </div>

        <div>
        <label htmlFor="email">Email</label>
        <input
          id="email"
          name="email"
          placeholder="Digite seu email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        </div>

        <div>
        <label htmlFor="cpf">CPF:</label>
        <input id="cpf" name="cpf" placeholder="Digite seu CPF" value={cpf} onChange={(e) => setCpf(e.target.value)} />
        </div>

        <button type="submit">Cadastrar</button>
      </form>
    <ToastContainer position="bottom-center"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover/>
    </div>
  )
}

export default CreateUser