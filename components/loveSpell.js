import React from 'react'
import style from '../styles/serviceme.module.css'
import image from '../images/pexels-photo-4651210.jpg'
import Button from './button'
import Link from 'next/link'

function  LoveSpell() {
    return (
        <section className={style.container}>
             <h2>Relationship Issues</h2>
           <div className={style.serv}>    
                    <div className={style.image2}>
                    <img src={image} alt="healing"/>
                    </div>
                    <div class={style.content}>
                      <p>So many people do not know where to turn for Relationship advice. Here all services are private and confidential and hence do not hesitate to contact now for the best and unique services. Prof. Munno the great one has crafted unique services to help you meet all your needs as soon as possible. Here all you need will be fulfilled as soon as possible and hence engage unique solutions to set you free. Relationships spell crafted specially to help you meet all your needs as soon as possible.</p> 
                      <p>No matter the situation, do not hesitate to contact the great one to help you meet all your goals. Here all services are private and confidential and hence do not hesitate to contact the great one to help you meet all your needs today. No matter the obstacles use this chance to help you make it happen your way today with ease.</p> 
                        <Link href="/contact">
                            <a><Button name="Contact Me"/></a>
                        </Link>
                    </div>
            </div>
        </section>
    )
}

export default LoveSpell
