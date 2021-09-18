import React from 'react'
import style from '../styles/serv.module.css'
import Button from './button'
import Link from 'next/link'

function Service() {
    return (
       <section className={style.container}>
           <div className={style.hero}>

           </div>
           <div className={style.row}>
                <div className={style.col1}>
                    <div className={style.side}>
                        <Link href='/healing'>
                            <a> <h1>Healing</h1></a>
                        </Link>
                    </div>
                
                    <div className={style.side}>
                        <Link href='/business'>
                            <a><h1> Business</h1> </a>
                      </Link>
                    </div>
                   
                    <div className={style.side}>
                        <Link href='/protect'>
                            <a><h1> Protection</h1> </a>
                     </Link>
                    </div>
                   
                    <div className={style.side}>
                        <Link href="/love">
                            <a><h1>Relationships</h1></a> 
                      </Link>
                    </div>
                   
                    <div className={style.side}>
                        <Link href='more'>
                            <a><h1>And More Others </h1></a>
                      </Link>
                    </div>
                   
                </div>
                <div className={style.serve}>
                    <div className={style.h1}>
                        <h3> Professor Munno Traditional healer services</h3>
                        <p>Here You have come to he right place to help you get all you need as soon as possible. Do not hesitate to contact today for the best services. Prof. Munno has it all to help set you free today as soon as possible. He has always been successful in all his recent and past services to all his clients and hence here comes your chance to help you make it happen your way today with ease. Contact us today.</p>
                    </div>
                    
                    <div className={style.serve1}>
                        <h3>The Most Powerful Traditional Healer In The World</h3>
                        <p>The Great Witch. You have come to The Most Powerful Traditional Healer In The World to help solve all your problems as soon as possible. Do not hesitate to contact today for the bests services.Prof. Munno has it all to set you free as soon as possible. He has helped many people to make it and hence here comes your chance to help you make a complete change in your entire life today.</p>
                        <p>No matter the situation do not hesitate to contact today for the best services. The Great Prof. Munno is here to help you being The Most Powerful Traditional Healer In The World. Here remember no one is above all rituals performed by this great shrine. No matter the situation, do not hesitate to contact today to help you make it happen your way today.</p>
                       <Link href="/contact">
                           <a> <Button name="Contact Me"/></a>
                        </Link>
                    </div>
                    
                </div>
                    <div className={style.serve2}>
                        <div className={style.h12}>
                        <h1>Some of my services include</h1>
                    <ul>
                        <li>Love/ Relationship Help</li>
                        <li>Marriage and Divorce Help</li>
                        <li>Business Help</li>
                        <li>Witchcraft and Wiccan Services</li>
                        <li>Traditional and Native Healing</li>
                        <li>Win Court Cases</li>
                        <li>Win Tenders and politics</li>
                    </ul>
                    <p>And many more which may not be listed here due to limited space, contact Prof. Munno to advice you.</p>
                    <Link href="/contact">
                           <a> <Button name="Contact Me"/></a>
                        </Link>
                        </div>
                        <div className={style.image}>
                            
                        </div>
                    </div>
                
           </div>
       </section>  
    )
}

export default Service
