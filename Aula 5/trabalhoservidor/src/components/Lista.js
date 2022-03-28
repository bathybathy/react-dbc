import { useContext } from "react";
import { TrabalhadorContext } from "../context/TrabalhadorContext";
import styles from "./Lista.module.css"

function Lista () {

    const { listaTrab, setListaTrab } = useContext(TrabalhadorContext)
    const { deletarTrabalhador } = useContext(TrabalhadorContext)
    const {nome, setNome} = useContext(TrabalhadorContext);
    const {email, setEmail} = useContext(TrabalhadorContext);
    const {profissao, setProfissao} = useContext(TrabalhadorContext);
    const {trabEditar, setTrabEditar} = useContext(TrabalhadorContext);

    function atualizarTrabalhador (id) {
        let trabalhador = listaTrab.find((e) => e.id === id)
        setTrabEditar(trabalhador)
        setNome(trabalhador.nome);
        setProfissao(trabalhador.profissao);
        setEmail(trabalhador.email);  
        deletarTrabalhador(id)
        return ( trabalhador.id )
    }


    return(
        <>
        {listaTrab.map((e) =>
        <div key={e.id} className={styles.card}><p>Nome: {e.nome};</p><p> email: {e.email};</p><p> profissao: {e.profissao};</p>
            <button  onClick={() => deletarTrabalhador(e.id)}>deletar</button>
            <button onClick={() => atualizarTrabalhador(e.id)}>atualizar</button>
        </div>
        )}
        </>
        
    )
}

export default Lista;