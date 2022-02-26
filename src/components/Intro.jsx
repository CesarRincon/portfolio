import styles from './Intro.module.css'
import { VscArrowSwap } from "react-icons/vsc";
import imgs from '../img/imagenes'
import { useContext } from 'react'
import { ThemeContext } from '../context'


export function Intro() {

    const theme = useContext(ThemeContext);
    const darkMode = theme.state.darkMode;

    return (
        <div className={styles.i}>
            <div className={styles.iLeft}>
                <div className={styles.iLeftWrapper}>
                    <h2 className={styles.iIntro}>Hello World, mi nombre es</h2>
                    <h1 className={styles.iName} >César Rincón</h1>
                    <div className={styles.iTitle}>
                        <div className={styles.iTitleWrapper} >
                            <div style={{ color: darkMode && "white" }} className={styles.iTitleItem} >Desarrollador de Software</div>
                            <div style={{ color: darkMode && "white" }} className={styles.iTitleItem} >Desarrollo Web</div>
                            <div style={{ color: darkMode && "white" }} className={styles.iTitleItem} >Desarrollo Movil</div>
                            <div style={{ color: darkMode && "white" }} className={styles.iTitleItem} >Diseñador</div>
                        </div>
                    </div>
                    <p className={styles.iDesc}>Diseño y desarrollo servicios para clientes de todos los lugares, especializándome en la creación de sitios web modernos y con estilo, servicios web.</p>
                </div>
                <VscArrowSwap style={{ color: darkMode && "white" }} className={styles.iScroll} />
            </div>
            <div className={styles.iRight}>
                <div style={{ backgroundColor: darkMode && "rgb(55, 130, 192)" }} className={styles.iBg}></div>
                <img src={imgs.img2} alt="" className={styles.iImg} />

            </div>
        </div>
    )
}
