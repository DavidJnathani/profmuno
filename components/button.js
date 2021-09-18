import React from 'react'
import style from '../styles/btn.module.css'
import Link from 'next/link'

function Button(props) {
    return (
        <div class={style.btn}>
            <button   className={style.class} onClick={props.clck}>
                {props.name}
            </button>
        </div>
    )
}

export default Button
