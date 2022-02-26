import styles from './About.module.css'
import imgs from '../img/imagenes'
import { useContext } from 'react'
import { ThemeContext } from '../context'

export function About() {

    const theme = useContext(ThemeContext);
    const darkMode = theme.state.darkMode;

    return (
        <div className={styles.a}>
            <div className={styles.aLeft}>
                <div style={{ backgroundColor: darkMode && "rgb(55, 130, 192)" }} className={`${styles.aCard} ${styles.aBg}`}></div>
                <div className={styles.aCard}>
                    <img src={imgs.img3} alt="" className={styles.aImg} />
                </div>
            </div>
            <div className={styles.aRight}>
                <h1 className={styles.aTitle} >About Me</h1>
                <p className={styles.aSub}>It is a long established fact that reader will be redeable content. </p>
                <p className={styles.aDesc}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi sint nemo dolorem iusto placeat magni quam nulla dignissimos labore, molestiae esse officia, eveniet mollitia illum deserunt. Autem animi sunt voluptatibus.</p>
            </div>
        </div>
    )
}
