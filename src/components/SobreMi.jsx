import React from 'react';
import imgs from '../img/imagenes'


function Content() {
    return (
        <>  
            <div className='tarjeta tarjeta1 tarjetas'>
                <h2>ABOUT ME</h2>
                <p>Desarrollador con    buena lógica de
                    programación, con experiencia en
                    diseño, instalación, pruebas y
                    mantenimiento de sistemas de
                    software... Buenas habilidades de
                    colaboración dentro de un equipo
                    productivo.
                    </p>
                    
            </div>

            <div className='tarjeta tarjeta2 tarjetas'>
                <h2>SKILLS</h2>
                <div className='images-tarjeta'>
                    <img src={imgs.flask} alt="" />
                    <img src={imgs.mysql} alt="" />
                    <img src={imgs.nodei} alt="" />
                    <img src={imgs.pythoni} alt="" />
                    <img src={imgs.reacti} alt="" />
                    <img src={imgs.mongoi} alt="" />
                </div>
            </div>
            <div className='tarjeta tarjeta3 tarjetas'>
                <h2>PROJECTS</h2>
                <p>-Sistema de inventario:</p> 
                <p>Python, Flask, Mysql, CSS3, JAVASCRIPT, HTML5
                </p>
                <a href="https://github.com/CesarRincon/Sprint4-2.0.git">Ver en GitHub</a><br />
                <p>-Sistema de gestion de cultivos:</p>
                <p>Node.js, React.js, MongoDB, CSS3, JAVASCRIPT, HTML5</p>
                <a href="https://github.com/jsanti850107/reto4cbackv2.0.git">Ver backend en GitHub</a>
                <a href="https://github.com/jsanti850107/reto4cbackv2.0.git">Ver frontend en GitHub</a>
            </div>
            <div className='tarjeta'>
                <h2>Contact</h2>
            </div>
        </>
    )
}



export default Content;