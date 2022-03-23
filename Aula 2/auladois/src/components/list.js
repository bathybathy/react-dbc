import Logo from './logo'
import styles from './list.module.css'

function List ({text}) {
    return(
        <div>
            <li>
                <Logo className={styles.logoBody} /> <p>{text}</p>
            </li>
        </div>
    );
}

export default List