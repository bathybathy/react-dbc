import logo from '../images/cogumelo.jpg'
import styles from './logo.module.css'

function Logo (){

    return (<a href="#"><img src={logo} alt="" className={styles.logo} /></a>)
}

export default Logo