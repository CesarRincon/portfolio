import styles from './Intro.module.css'
import { VscArrowSwap } from "react-icons/vsc";
import imgs from '../img/imagenes'


export function Intro() {
    return (
        <div className={styles.i}>
            <div className={styles.iLeft}>
                <div className={styles.iLeftWrapper}>
                    <h2 className={styles.iIntro}>Hello World, mi nombre es</h2>
                    <h1 className={styles.iName} >César Rincón</h1>
                    <div className={styles.iTitle}>
                        <div className={styles.iTitleWrapper} >
                            <div className={styles.iTitleItem} >Desarrollador de Software</div>
                            <div className={styles.iTitleItem} >Desarrollo Web</div>
                            <div className={styles.iTitleItem} >Desarrollo Movil</div>
                            <div className={styles.iTitleItem} >Diseñador</div>
                        </div>
                    </div>
                    <p>Diseño y desarrollo servicios para clientes de todos los lugares, especializándome en la creación de sitios web modernos y con estilo, servicios web.</p>
                </div>
                <VscArrowSwap className={styles.iScroll}/>
            </div>
            <div className={styles.iRight}>
                <div className={styles.iBg}></div>
                <img src={imgs.img2} alt="" className={styles.iImg}/>
                
            </div>
        </div>
    )
}
