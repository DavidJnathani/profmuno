import React from 'react'
import style from '../styles/backdrop.module.css'

function Backdrop(props) {
    return (
        <div className={style.Backdrop} onClick={props.click}>
            
        </div>
    )
}

export default Backdrop
