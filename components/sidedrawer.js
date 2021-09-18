import React from 'react'
import style from '../styles/sidedrawer.module.css'

function Sidedrawer(props) {
    return (
       <button className={style.togglebtn} onClick={props.click}>
           <div className={style.togglebtnline}/>
           <div className={style.togglebtnline}/>
           <div className={style.togglebtnline}/>
        </button>
    )
}

export default Sidedrawer
