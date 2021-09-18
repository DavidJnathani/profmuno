import React from 'react'
import style from '../styles/serviceme.module.css'
import image from '../images/serve2.jpg'
import Link from 'next/link'
import Button from './button'

function  HealPower() {
    return (
        <section className={style.container}>
                   <h1>Traditional Healer</h1>
                    <div className={style.serv}>
                    <div className={style.image2}>
                        <img src={image} alt="healing"/>
                    </div>
                    <div class={style.content}>
                      <p>East Africa Great Native Traditional Healers, You have come to the most Influential & Unique Prof. Munno A herbalist with Super Natural Powers from the mountains of Africa and Strong natural herbs. Due to high demand by Clients, Prof. Munno is now online to help people from all over the world.<br/>

Native traditional healing is the best way of healing because Native Healers have got a God given gift of healing .</p> 
                      <p>No matter the situation, do not hesitate to contact the great one to help you meet all your goals. Here all services are private and confidential and hence do not hesitate to contact the great one to help you meet all your needs today. No matter the obstacles use this chance to help you make it happen your way today with ease.</p> 
                        <Link href="/contact">
                            <a> <Button name="Contact Me"/> </a>
                        </Link>
                    </div>
                    </div>
        </section>
    )
}

export default HealPower
