import React from 'react'
import ListaFooter from './ListaFooter'
import styles from "./Footer.module.css"

function Footer() {
    const token = localStorage.getItem('token');
    

  return (
      
    <footer>
        <ul className={styles.menuFooter}>
            {token && <ListaFooter path="/" text="Home" className={styles.listaFooter}/>}
            {token && <ListaFooter path="/logado" text="Usuários" />}
            {token && <ListaFooter path="/address" text="Endereço" />}
            {!token && <ListaFooter path="/login" text="Login" />}
         </ul>
    </footer>
  )
}

export default Footer