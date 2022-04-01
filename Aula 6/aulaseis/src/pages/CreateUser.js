import React from 'react'
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import moment from 'moment';

import url from '../components/url';
import Error from '../components/error/Error';

function CreateUser() {

    const [nome, setNome] = useState('')
    const [cpf, setCpf] = useState('')
    const [email, setEmail] = useState('')
    const [dataNascimento, setNascimento] = useState('')
    const [hasId, setHasId] = useState(false)
    const [error, hasError] = useState(false)
    

    const {pathname} = useLocation();
    const token = localStorage.getItem('token')
    console.log(token)
    

    
    const setupAtualizar = (e) =>{
        console.log('tá funcionando o botão')
        e.preventDefault();
        atualizarUsuario()
    }
    
    useEffect(()=>{
        if(pathname.length > 13){
            const id = pathname.replace("/create-user/", "")
            console.log(id)
            setHasId(true)
            getUsuario(id);

        }
    },[])
    

    const createNewUser = async () =>{
        
        let nascimentoEnviar = moment(dataNascimento, 'DD-MM-YYYY').format('YYYY-MM-DD')
        let obj = {'nome': nome, 'cpf': cpf, 'email': email, 'dataNascimento': nascimentoEnviar}
        console.log(obj)
        
        try {
            const {data} = await url.p('/pessoa', obj)
            console.log(data);
            alert("Usuário cadastrado com sucesso!")
        } catch (error) {
            console.log(error)
            hasError(true)
        }

    }

    
    const setupCadastrar = (e) =>{
        e.preventDefault();
        setNascimento(moment(dataNascimento, 'DD-MM-YYYY').format('YYYY-MM-DD'));
        console.log(dataNascimento)
        createNewUser();
       
    }

    const atualizarUsuario = async () =>{

        let nascimentoEnviar = moment(dataNascimento, 'DD-MM-YYYY').format('YYYY-MM-DD')
        let obj = {'nome': nome, 'cpf': cpf, 'email': email, 'dataNascimento': nascimentoEnviar}
        const id = pathname.replace("/create-user/", "")
        console.log(obj)
        
        try {
            const {data} = await url.put(`/pessoa/${id}`, obj)
            console.log(data);
            alert("Usuário atualizado com sucesso!")
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
            <div>
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
            
            </div>
          )
    }

  return (
    <div>
       <form onSubmit={(e) => setupCadastrar(e)}>
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
    
    </div>
  )
}

export default CreateUser