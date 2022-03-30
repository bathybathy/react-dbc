import {useContext, useEffect} from 'react'
import { LoginContext } from '../context/LoginContext';
import { Formik, Form, Field } from 'formik';
import { useNavigate } from "react-router-dom";

function Login(){

    const {handleLogin} = useContext(LoginContext)
    const navigate = useNavigate();
    const {isLogado} = useContext(LoginContext)
    
    // useEffect(() => {
    
    //     if(isLogado()){
    //         navigate('/logado')
    //     }
    // }, []) sor, isso quebra o api, não tenho a mínima idéia porquê
    


    return(
        <div><h1>Login</h1>
          <Formik
             initialValues={{
                 usuario: '',
                 senha: '',
             }}
             onSubmit={ (values) => {
                 handleLogin(values);
             }}
         >
         <Form>
             <label htmlFor="usuario">Usuário:</label>
             <Field id="usuario" name="usuario" placeholder="Usuario" />

             <label htmlFor="senha">Senha:</label>
             <Field id="senha" name="senha" type='password' placeholder="senha" />

             <button type="submit">Submit</button>
         </Form>
         </Formik>
        </div>
    )
}

export default Login;