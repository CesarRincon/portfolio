import styles from './Toggle.module.css'
import { icons } from '../../img/imagenes'
import { ThemeContext } from '../../context'
import { useContext } from 'react'



export function Toggle() {

    const theme = useContext(ThemeContext);

    const handleClick = () => {
        theme.dispatch({ type: "TOGGLE" })
    }

    return (
        <div className={styles.t}>
            <img src={icons.sun} alt="" className={styles.tIcon} />
            <img src={icons.moon} alt="" className={styles.tIcon} />
            <div className={styles.tButton} onClick={handleClick} style={{ left: theme.state.darkMode ? 0 : 25 }}>

            </div>
        </div>
    )
}
