import React from 'react';
import { NavLink } from "react-router-dom";

function Bar(p) {
    
    return(
        <>
        <div className='content-bar'>
            <ul className='bar'>
                <span>Portafolio</span>
                <li><NavLink to="/#">Contact</NavLink></li>
                <li><NavLink to="/home">About Me</NavLink></li>
                <li><NavLink to="/home2">Skills</NavLink></li>
                <li><NavLink to="/Home3">Projects</NavLink></li>
            </ul>
        </div>
        <div className='header'>{p.header}</div>
        <div className='contenido'>{p.content}</div>
        </>

        
    )
}
export default Bar;