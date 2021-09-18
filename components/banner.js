import React from 'react'
import Link from 'next/link'
import style from '../styles/banner.module.scss'

function Banner(props) {
    return (
        <div className={style.banner}>
            <div className={style.image}>
                <img src={props.image} alt="Banner"/>
            </div>
            <div className={style.content}>
                <h1>PROFESSOR MUNNO TRADITIONAL HEALER</h1>
                    <h1>{props.page}</h1>
                    <div className={style.near}>
                      <p> <Link href='/'>
                            <a>Home   </a>
                          </Link>
                            &gt;   
                           {props.page}
                       </p>
                    </div>
            </div>
            
        </div>
    )
}

export default Banner
