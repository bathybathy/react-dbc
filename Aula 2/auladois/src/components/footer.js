import Navigation from './navigation'
import styles from './header.module.css'
import stylesFooter from './footer.module.css'
import Endereco from './endereco'

function Footer (){
    return(
        <footer className={stylesFooter.footer}>
            <nav>
            <ul className={stylesFooter.lista}>
                <Navigation link='Home' className={styles.lista}/>
                <Navigation link='Sobre' className={styles.lista}/>
                <Navigation link='Contato' className={styles.lista}/>
            </ul>
        </nav>
        <Endereco />
    </footer>
    )
}

export default Footer