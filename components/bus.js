import React from 'react'
import style from '../styles/serviceme.module.css'
import image from '../images/rohan-reddy-mfIfEqt3bAM-unsplash.jpg'
import Link from 'next/link'
import Button from './button'
function  Bus() {
    return (
        <section className={style.container}>
                  
                    <h1>Business Issues</h1> 
                     <div className={style.serv}>
                    <div className={style.image2}>
                    <img src={image} alt="business"/>
                    </div>
                    <div class={style.content}>
                      <p>This is the  right time to make it happen your way as soon as possible, have you been disappointed or lost hope? have you always wondered where to find the best help that will suit your needs? Do not hesitate to contact for the best services ever, Prof. Munno has crafted Spells To Increase Business Sales  and all will be solved for you as soon as possible, no matter your geographical location be it current nor past geographical location do not hesitate to engage powerful and effective Spells To Increase Business Sales to have all your issues fixed as soon as today, in this world remember there many HEALERS but remember you’re always looking for that unique one which is the one you’re communicating with here, engage unique Spells To Increase Business Sales crafted by the great Prof. Munno to have all solved for you as soon as possible, its never too later nor too difficult to have all your problems solved as soon as possible, he has always engage Spells To Increase Business Sales into many client’s issues and hence success has always been availed. Do not hesitate to contact for the best services ever.</p> 
                       <Link href="/contact">
                           <a><Button name="Contact Me"/></a>
                       </Link>
                    </div>
                </div>
        </section>
    )
}

export default Bus
