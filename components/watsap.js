import React from 'react'
import image3 from '../images/mycollection (2)/png/001-whatsapp.png'
import style from '../styles/whatsap.module.css'


function Watsap() {
    return (
        <div>
            <a href="https://wa.me/+260965588979"
        className={style.whatsapp_float}
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={image3} className={style.whatsappIcon} alt="hf"/>
      </a> 
        </div>
    )
}

export default Watsap
