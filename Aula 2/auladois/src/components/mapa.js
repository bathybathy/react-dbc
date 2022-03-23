import styles from './mapa.module.css'

function Mapa(){

    return (
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3455.4013101657933!2d-51.2017578424377!3d-29.99663119260877!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x951977775fc4c071%3A0x6de693cbd6b0b5e5!2sDBC%20Company!5e0!3m2!1sen!2sbr!4v1645473061199!5m2!1sen!2sbr" 
         allowfullscreen="" loading="lazy" className={styles.frame}></iframe>
    )
}

export default Mapa