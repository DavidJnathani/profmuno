import React from 'react'
import style from '../styles/serviceme.module.css'
import image from '../images/mat.jpg'
import image2 from '../images/smoke.jpg'
import image3 from '../images/medic.jpg'
import Link from 'next/link'
import Button from './button'

function  Others() {
    return (
        <section className={style.container}>
             <h1>More Others</h1>
           <div className={style.serv}>      
                    <div className={style.image2}>
                    <img src={image} alt="voodoo"/>
                    </div>
                    <div class={style.content}>
                        <h4>Voodoo</h4>
                      <p>Prof. Munno the Voodoo Doctor is here to help you make it happen your way today with ease. Here all services are private and confidential and hence do not hesitate to contact today to get all you need with ease.</p> 
                      <p>Extremely Powerful Voodoo Doctor in the world Is here to help you fix all related problems as soon as possible. Prof. Munno the great one has it all to help you make it happen your way today with ease. Here all services are private and confidential and hence do not hesitate to contact today for the best services.</p> 
                      <Link href="/contact">
                        <a><Button name="Contact Me"/></a>
                      </Link>
                    </div>

            </div>
            <div className={style.serv}>
                    
                    <div class={style.content}>
                        <h4>Curse Removal</h4>
                      <p>Have you been wondering from where to find the right solutions? Do not worry anymore, here comes your long awaited answer, I have crafted all sorts of powerful charms and talismans.</p> 
                      <p>In case you’re experiencing difficulties and you don’t know what’s all about, do not hesitate to contact for consultation first, some times Curses are experienced in different forms and hence all needs time and experienced healer or call him spiritualist to assist you, and here you have come to the right person to set you free.</p> 
                    </div>
                    <div className={style.image2}>
                    <img src={image2} alt="curse spells"/>
                    </div>
            </div>
            <div className={style.serv}>
                    <div className={style.image2}>
                    <img src={image3} alt="corona virus"/>
                    </div>
                    <div class={style.content}>
                        <h4>Corona Virus in the World</h4>
                      <p>Corona Virus Covid 19 In the world is one of the new deadly Disease now in the world killing and affecting millions and not so many of us know where and to whom to turn for advice or solutions, do not hesitate to contact us today for the best services and hence we endeavor to ensure successful health being to all human beings around the whole world.</p>
                      <p>Have you been wondering where and from whole to find the best solutions and services? here comes your chance to make it happen your way as soon as possible, we have come to the time when we need it happen as we wish and hence do not hesitate to contact us today for the best solutions. Use this chance</p> 
                    </div>
                    
            </div>
        </section>
    )
}

export default Others
