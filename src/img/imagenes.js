import flask from '../img/flask.svg'
import mysql from '../img/MySQL.png'
import nodei from '../img/Nodejs.png'
import pythoni from '../img/Python.png'
import reacti from '../img/React.png'
import mongoi from '../img/mongodb.png'
import img1 from '../img/img1.jpg'
import img2 from '../img/img2.png'
import img3 from '../img/img3.jpg'
import web1 from '../img/web1.png'
import web2 from '../img/web2.png'
import phone from '../img/phone.ico'
import email from '../img/email.ico'
import address from '../img/address.ico'
import moon from '../img/moon.ico'
import sun  from '../img/sun.ico'

const imgs = {
    flask : flask,
    mysql : mysql,
    nodei : nodei,
    pythoni : pythoni,
    reacti : reacti,
    mongoi : mongoi,
    img1 : img1,
    img2 : img2,
    img3 : img3,
}

export const webs = [
    {
        id: 1,
        web: web1,
        link: "https://github.com/CesarRincon/moviesite"
    },
    {
        id: 2,
        web: web2,
        link: "/"
    }
];

export const icons = {
        phone: phone,
        email: email,
        address: address,
        sun: sun,
        moon: moon
    }

export default imgs;