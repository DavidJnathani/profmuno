import React from 'react'
import style from '../styles/hero.module.css'
import Button from './button'
import sabbo from '../images/sabbo.jpg'
import Link from 'next/link';

function Hero() {
    return (
        <div className={style.hero}>
            <div className={style.fog}>
            <div class={style.content}>
                <div className={style.brand}>
                    <h1>PROFESSOR MUNNO TRADITION HEALER</h1>
                </div>
                <div className={style.text}>
                    <p>Having helped so many people around the whole world this has made 
                        the best traditional healer in Africa and other parts of the world,He works on all your problems, no matter
                        what do not hesitate to contact for the best services. Use this chance today.
                    </p>
                </div>
                <div className={style.btn}>
                    <Link href="/about">
                   <a> <Button name="About Us"
                    /></a>
                    </Link>
                </div>
         </div>
         </div>
        </div>
    )
}

export default Hero
