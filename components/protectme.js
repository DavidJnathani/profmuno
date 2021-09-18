import React from 'react'
import style from '../styles/serviceme.module.css'
import image from '../images/charting.jpg'
import Button from './button'
import Link from 'next/link'

function  ProtectMe() {
    return (
        <section className={style.container}>
                    <h1>Protection Issues</h1> 
                    <div className={style.serv}>
                        <div className={style.image2}>
                            <img src={image} alt="healing"/>
                        </div>
                    <div class={style.content}>
                      <p>Unique Solutions by the great one today will fix your problems. You have come to the right place to help you solve all your problems as soon as possible. Do not hesitate to contact today for the bests services. Prof. Munno has crafted the Most Powerful Protect Me to help you solve all related problems as soon as possible. Do not hesitate to contact now for the best an unique solutions to help you make it happen today with ease. He has helped many people make it and hence here comes your chance to help you make it happen today with ease.</p> 
                      <p>No matter the situation, do not hesitate to contact the great one to help you meet all your goals. Here all services are private and confidential and hence do not hesitate to contact the great one to help you meet all your needs today. No matter the obstacles use this chance to help you make it happen your way today with ease.</p> 
                       <Link href="/contact">
                            <a><Button name="Contact Me"/></a>
                        </Link>
                    </div>
                </div>
        </section>
    )
}

export default ProtectMe
