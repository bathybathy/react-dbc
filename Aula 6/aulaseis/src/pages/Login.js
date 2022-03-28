import {useContext} from 'react'
import { LoginContext }  from '../context/LoginContext';
import { Formik, Form, Field } from 'formik';

function Login(){

    const {handleLogin} = useContext(LoginContext)

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