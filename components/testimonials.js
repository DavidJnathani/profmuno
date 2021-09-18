import React from 'react'
import Link from 'next/link'
import  style from '../styles/testi.module.css'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';


function Testimonials() {
  
    return (
        <section className={style.testi}>
            <div className={style.brand}>
                <h1>Client Testimonials</h1>
            </div>
            
            <div className={style.texts}>
                
                <div className={style.square}>
                    <span></span>
                    <span></span>
                    <span></span>
                    <div className={style.content}>
                        <h4>Irene,USA</h4>
                        <p>Thank you so so much Prof. Munno,
                             my Home/Family is now settled with no more fights
                             , he has decided to build for me another
                             home and all businesses are run by me
                        </p>
                        
                    </div>
                </div>
                <div className={style.square}>
                    <span></span>
                    <span></span>
                    <span></span>
                    <div className={style.content}>
                        <h4>Olivia,South Africa</h4>
                        <p>Thank you so so much Prof. Munno for the powerful 
                            rituals and services you rendered me, im so grateful
                             to have all success in my relationship since i first
                              contacted you. my partner has even promised to marry me soon.
                        </p>
                        
                    </div>
                </div>
                <div className={style.square}>
                    <span></span>
                    <span></span>
                    <span></span>
                    <div className={style.content}>
                        <h4>   Tumelo Here,Nigeria</h4>
                        <p>Im writing to you Dr Adam Nyunaj Maja to thank you for all the services
                             you rendered to me, my Husband is now the best and settled man and he
                              has always been positive in the house since the time i came to you.   
                        </p>
                        
                    </div>
                </div>
               
            </div>
           
        </section>
    )
}

export default Testimonials
