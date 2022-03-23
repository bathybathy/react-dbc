import {useState} from 'react'

function Form () {
    
    function CadastrarUsuario(e){
        e.preventDefault();
        console.log(`seu login e senha é ${nome}, ${senha}`);
    }

    const [nome, setNome] = useState('') //primeiro parametro é o valor inicial
    const [senha, setSenha] = useState('');
    return (
        <>
        <h1>Meu Formulario</h1>
        <form onSubmit={CadastrarUsuario}>
            <div>
                <input type="text" placeholder="digite seu nome" value={nome} onChange={(e) => setNome(e.target.value)}/>
            </div>
            <div>
                <input type="password" placeholder='Digite sua senha' value={senha} onChange={(e) => setSenha(e.target.value)} />
            </div>
            <div>
                <input type="submit" name="" value="Cadastrar" />
            </div>
        </form>
        </>
    )
}

export default Form