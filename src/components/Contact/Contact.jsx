import styles from './Contact.module.css'
import { icons } from '../../img/imagenes'
import { useRef, useState, useContext } from 'react'
import emailjs from '@emailjs/browser';
import { ThemeContext } from '../../context'

export function Contact() {

    const theme = useContext(ThemeContext);
    const darkMode = theme.state.darkMode;

    const formRef = useRef();
    const [done, setDone] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_7rlexcs', 'template_bx2x05w', formRef.current, 'user_oikibT9Gy26v5UTvrLHK4')
            .then((result) => {
                console.log(result.text);
                setDone(true)
            }, (error) => {
                console.log(error.text);
            });

        document.getElementById('form').reset();
    }

    return (
        <div className={styles.c}>
            <div style={{backgroundColor: darkMode && "rgb(55, 130, 192)"}} className={styles.cBg}>
            </div>
            <div className={styles.cWrapper}>
                <div className={styles.cLeft}>
                    <h1 className={styles.cTitle}>Hablemos de tus proyectos!</h1>
                    <div className={styles.cInfo}>
                        <div className={styles.cInfoItem}>
                            <img src={icons.phone} alt="" className={styles.cIcon} />
                            +57 320 8041066
                        </div>
                    </div>
                    <div className={styles.cInfo}>
                        <div className={styles.cInfoItem}>
                            <img src={icons.email} alt="" className={styles.cIcon} />
                            crincon11.cr@gmail.com
                        </div>
                    </div>
                    <div className={styles.cInfo}>
                        <div className={styles.cInfoItem}>
                            <img src={icons.address} alt="" className={styles.cIcon} />
                            Cúcuta - Colombia
                        </div>
                    </div>
                </div>
                <div className={styles.cRight}>
                    <p className={styles.cDesc}>
                        <b>Cúal es tu historia?</b> Escribeme. Siempre disponible para trabajar si surge el proyecto adecuado.
                    </p>
                    <form ref={formRef} onSubmit={handleSubmit} id='form'>
                        <input style={{color: darkMode && "white"}} type="text" placeholder='Nombre' name='user_name' />
                        <input style={{color: darkMode && "white"}} type="text" placeholder='Asunto' name='user_subject' />
                        <input style={{color: darkMode && "white"}} type="text" placeholder='Correo' name='user_email' />
                        <textarea style={{color: darkMode && "white"}} name="message" id="" rows="5" placeholder='Escribe tu mensaje' />
                        <button>Enviar</button>
                        {done && "Gracias..."}
                    </form>
                </div>
            </div>
        </div>
    )
}
