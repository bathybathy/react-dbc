import List from './list'
import Mapa from './mapa'
import styles from './bodyHome.module.css'

function BodyHome(){

    return(
        <body>
        <main className={styles.container}>
            <h1>Estamos aprendendo HTML e CSS com o melhor professor de todos</h1>
            <ul>
                <List text="Cogumelo 1" />
                <List text="Cogumelo 2" />
                <List text="Cogumelo 3" />
            </ul>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo nostrum sequi dignissimos perspiciatis eos blanditiis officia? Hic eligendi eum sit!</p>
            <h2>Endereço da DBC</h2>
            <Mapa />
        </main>
        </body>
    )
}

export default BodyHome