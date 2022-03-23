import {useState} from 'react'
import styles from './form.module.css'

function Form() {

    function ContatoDoUsuario(e){
        e.preventDefault();
        console.log(nome, email, opcao, mensagem)
    }
    const [nome, setNome] = useState('')
    const [email, setEmail] = useState('')
    const [opcao, setOpcao] = useState('')
    const [mensagem, setMensagem] = useState('')
    return (
        <div className={styles.formulario}>
            <form onSubmit={ContatoDoUsuario}>
                <div className={styles.precisaPadding}>
                    <label htmlFor="">Digite seu nome:</label>
                    <input type="text" placeholder="Nome Completo" value={nome} onChange={(e) => setNome(e.target.value)}/>
                </div>
                <div className={styles.precisaPadding}>
                    <label htmlFor="">Digite seu e-mail:</label>
                    <input type="text" placeholder="e-mail" value={email} onChange={(e) => setEmail(e.target.value)}/>
                </div>
                <div className={styles.precisaPadding}>
                    <label htmlFor="">Qual o motivo do contato?</label>
                    <select value={opcao} id="" onChange={(e) => setOpcao (e.target.value)}>
                        <option value="opcao1">HTML é ez do ez</option>
                        <option value="opcao2">Monster de manga é bão demais</option>
                    </select>
                </div>
                <div className={styles.precisaFlex}>
                    <label htmlFor="mensagem">Escreva sua mensagem:</label>
                    <textarea name="mensagem" id="" cols="30" rows="10" placeholder='Curtindo React' onChange={(e) => setMensagem(e.target.value)}></textarea>
                </div>
                <div className={styles.botao}>
                    <button type='submit' onChange={ContatoDoUsuario}>Salvar</button>
                </div>
            </form>
        </div>
    )
}

export default Form