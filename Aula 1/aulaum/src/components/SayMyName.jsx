import styles from './SayMyName.module.css'

const SayMyName = ({idade, name, teste, url}) =>{

    return(
    <div className={styles.sayMyName}>
        <h1>{name}</h1>
        <h3>{idade}</h3>
        <p>{teste}</p>
        <img src={url} alt="" />
    </div>
    );
}

export default SayMyName