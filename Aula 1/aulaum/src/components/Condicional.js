import React from 'react'
import styles from './Condicional.module.css'

function Condicional() {
    const isBoolean = false;
    return (
    <div className={styles.condicional}>
        {isBoolean && (<h1>Condicional</h1>)}
        {isBoolean ? <h1>Condicional</h1> : <h1>Sem Condicional</h1>} 
    </div>
  )
}

export default Condicional