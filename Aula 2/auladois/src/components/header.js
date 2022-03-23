import Logo from './logo'
import Navigation from './navigation'
import styles from './header.module.css'

function Header() {

    return(
    <header>
        <Logo />
        <nav>
            <ul className={styles.listaHeader}>
            <Navigation link='Home' className={styles.lista}/>
            <Navigation link='Sobre' className={styles.lista}/>
            <Navigation link='Contato' className={styles.lista}/>
            </ul>
        </nav>

    </header>
    )
}

export default Header