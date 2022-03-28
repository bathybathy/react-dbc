import { useContext } from "react";
import { TrabalhadorContext } from "../context/TrabalhadorContext";
import styles from "./Home.module.css"


function Home () {
    const {nome, setNome} = useContext(TrabalhadorContext);
    const {email, setEmail} = useContext(TrabalhadorContext);
    const {profissao, setProfissao} = useContext(TrabalhadorContext);
    const {listaTrab, setListaTrab} = useContext(TrabalhadorContext);
    const {cadastrarTrabalhador} = useContext(TrabalhadorContext)
    const {trabEditar, setTrabEditar} = useContext(TrabalhadorContext);
 
    
    const resetarForm = () =>{
        setNome('');
        setEmail('');
        setProfissao('');
    }

    const submitForm = (e) =>{
        cadastrarTrabalhador(e);
        resetarForm();
    }

    const salvarAtualização = () =>{
        let id = trabEditar.id
        let nomeInput = document.getElementById('nomeInput').value;
        let emailInput = document.getElementById('emailInput').value;
        let profissaoInput = document.getElementById('profissaoInput').value;

        listaTrab.push({nome: nomeInput, email: emailInput, profissao: profissaoInput, id: id})
        setListaTrab(listaTrab);
        resetarForm();
        alert("as informações foram salvas")
    }

    

    return(
        <div className={styles.containerPrincipal}>
            <h1>Cadastro de trabalhadores</h1>
            <form id="formulario" onSubmit={(e) => submitForm(e)}>
                <div>
                    <label htmlFor='nomeInput'>"Digite seu nome completo:</label>
                </div>
                <div>
                    <input type='text' placeholder='nome completo' value={nome} id='nomeInput' onChange={(e) => setNome(e.target.value)} />
                </div>
                <div>
                    <label htmlFor='emailInput'>"Digite seu e-mail"</label>
                </div>
                <div>
                    <input type='text' placeholder="e-mail" value={email} id='emailInput' onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div>
                    <label htmlFor='profissaoInput'>"Digite sua profissão:"</label>
                </div>
                <div>
                    <input type='text' placeholder="profissão" value={profissao} id='profissaoInput' onChange={(e) => setProfissao(e.target.value)} />
                </div>
                
            
            <button type="submit">Cadastrar</button>
            </form>
            <button onClick={(id) => salvarAtualização(id)}>Atualizar</button>

            
        </div>
    )
}

export default Home;