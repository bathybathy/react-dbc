import {useContext, useEffect} from 'react'
import { LoginContext } from '../context/LoginContext';
import { Formik, Form, Field } from 'formik';
import { useNavigate } from "react-router-dom";

import styles from './Login.module.css'

function Login(){

    const {handleLogin} = useContext(LoginContext)
    const navigate = useNavigate();
    const {isLogado} = useContext(LoginContext)
    
    
     useEffect(() => {
        
        const hasToken = localStorage.getItem('token')
         if(hasToken){
             navigate('/logado')
         }
     }, []) 
    


    return(
        <div className={styles.containerLogin}><h1>Login</h1>
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
             <div>
             <label htmlFor="usuario">Usuário:</label>
             <Field id="usuario" name="usuario" placeholder="Usuario" />
             </div>

            <div>
             <label htmlFor="senha">Senha:</label>
             <Field id="senha" name="senha" type='password' placeholder="senha" />
             </div>

             <button type="submit">Entrar</button>
         </Form>
         </Formik>
        </div>
    )
}

export default Login;