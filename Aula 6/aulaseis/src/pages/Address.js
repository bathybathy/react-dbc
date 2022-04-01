import React from 'react'
import { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import 'react-confirm-alert/src/react-confirm-alert.css'; 

import Error from "../components/error/Error"
import styles from "./Address.module.css"
import Cep from "../components/Cep"

function Address() {

    const [cep, setCep] = useState('')
    const [rua, setRua] = useState('')
    const [complemento, setComplemento] = useState('')
    const [bairro, setBairro] = useState('')
    const [cidade, setCidade] = useState('')
    const [estado, setEstado] = useState('')
    const [ddd, setDdd] = useState('')
    const [telefone, setTelefone] = useState('')

    const [error, setError] = useState(false)

    const sendCep = async () =>{
      setCep(cep.replace("-", ""))
        try {
            const {data} = await Cep.get(`/ws/${cep}/json`)
            setRua(data.logradouro);
            setBairro(data.bairro);
            setCidade(data.localidade);
            setEstado(data.uf);
            setDdd(data.ddd);
            setCep(data.cep)

        } catch (error) {
            setError(true)
        }
        console.log(cep)
    }


    const setupCep = (e) =>{
     
      setCep(e.target.value.replace(/\D/g, "").replace(/^(\d{5})(\d{3})+?$/, "$1-$2"));
      
    }

    const setupTelefone = (e) =>{
     
      setTelefone(e.target.value
        .replace(/\D/g, "")
        .replace(/(\d{5})(\d{4})(\d)/, "$1-$2"));
      
    }

    if(error){
      return(<Error />)
    }

    const setupAlert = (e) =>{
      e.preventDefault();

      if(!cep.length || !rua.length || !bairro.length || !cidade.length || !estado.length || !ddd.length || !telefone.length){
        toast("Preencha todos os campos corretamente.", {
          position: "bottom-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          }
      )
      }else{
        toast.success(`CEP:${cep}\n
                      Rua:${rua}\n
                      Complemento:${complemento}\n
                      Bairro:${bairro}\n
                      Cidade:${cidade}\n
                      Estado:${estado}\n
                      DDD:${ddd}\n
                      Telefone:${telefone}`,  {
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
    
  return (
    <div className={styles.containerAddress}>
    <h1>Endereço</h1>
      <form onSubmit={(e) => setupAlert(e)}>
        <div>
          <label htmlFor="cep">Insira seu cep:</label>
          <input id="cep" name="cep" placeholder="00000-000" value={cep} onChange={(e)=> setupCep(e)}/>
          <button type='button' onClick={(cep) =>{
              sendCep(cep);
          }}>Pesquisar</button>
        </div>
        
        <div>
        <label htmlFor="rua">Rua:</label>
        <input id="rua" name="rua" placeholder="rua" value={rua} onChange={(e)=> setRua(e.target.value)} />
        </div>

        <div>
        <label htmlFor="complemento">Complemento:</label>
        <input id="complemento" name="complemento" placeholder="complemento" value={complemento} onChange={(e)=> setComplemento(e.target.value)} />
        </div>

        <div>
        <label htmlFor="bairro">Bairro:</label>
        <input id="bairro" name="bairro" placeholder="bairro"  value={bairro} onChange={(e)=> setBairro(e.target.value)}/>
        </div>

        <div>
        <label htmlFor="estado">Estado:</label>
        <input id="estado" name="estado" placeholder="estado"  value={estado} onChange={(e)=> setEstado(e.target.value)}/>
        </div>

        <div>
        <label htmlFor="cidade">Cidade:</label>
        <input id="cidade" name="cidade" placeholder="cidade"  value={cidade} onChange={(e)=> setCidade(e.target.value)}/>
        </div>

        <div>
        <label htmlFor="ddd">DDD:</label>
        <input id="ddd" name="ddd" placeholder="ddd" value={ddd} onChange={(e)=> setDdd(e.target.value)}/>
        </div>

        <div>
        <label htmlFor="telefone">Telefone:</label>
        <input id="telefone" name="telefone" placeholder="telefone" value={telefone} onChange={(e)=> setupTelefone(e)}/>
        </div>
        
        <div>
        <button type="submit" >Enviar</button>
        </div>
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

export default Address