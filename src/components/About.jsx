import styles from './About.module.css'
import imgs from '../img/imagenes' 

export function About() {
    return (
        <div className={styles.a}>
            <div className={styles.aLeft}>
                <div className={`${styles.aCard} ${styles.aBg}`}></div>
                <div className={styles.aCard}>
                    <img src={imgs.img3} alt="" className={styles.aImg}/>
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
