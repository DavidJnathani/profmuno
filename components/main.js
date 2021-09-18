import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import style from '../styles/main.module.scss'
import Img from "../images/love.jpg"
import bus from "../images/rohan-reddy-mfIfEqt3bAM-unsplash.jpg"
import  vodo from "../images/voodoooo.jpg"
import protect from "../images/download.jpg"
import heal from "../images/charting.jpg"
import Slider from 'react-slick';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import Button from './button'



function Main() {
    const settings={
        dots:true,
        infinite:true,
        speed:500,
        slidesToShow:3,
        slidesToScroll:1,
        autoplay:true,
        autoplaySpeed:5000,
        cssEase:"linear",
        responsive:[
            {
                breakpoint:1024,
                settings:{
                    dots:true,
                    infinite:true,
                    speed:500,
                    slidesToShow:3,
                    slidesToScroll:1,
                    autoplay:true,
                    autoplaySpeed:5000,
                    cssEase:"linear",}
            },
            {
                breakpoint:600,
                settings:{
                    dots:true,
                    infinite:true,
                    speed:500,
                    slidesToShow:1,
                    slidesToScroll:1,
                    autoplay:true,
                    autoplaySpeed:5000,
                    cssEase:"linear",
                }
            },
            // {
            //     breakpoint:480,
            //     settings:{
            //         dots:true,
            //         infinite:true,
            //         speed:500,
            //         slidesToShow:1,
            //         slidesToScroll:1,
            //         autoplay:true,
            //         autoplaySpeed:200,
            //         cssEase:"linear",
            //     }
            // }
        ]
    };
    return (
       
        <section className={style.main}> 
                  <Slider {...settings}>
                     
                    <div className={style.card_wrapper}>
                    <div className={style.card}>
                        <div className={style.cardImage}>
                            <img className={style.cardImg} src={Img} 
                            alt="love image" />
                        </div>
                        <div className={style.cardContent}>
                            <h3>Relationships</h3>
                            <p>
                            Have you been disappointed or lost hope due to your past experience? Here comes your chance to engage Solutions to help you, engage Powerful Relationship Problems And Solutions.
                            </p>
                            <Link href="/love">
                                <a><Button name="Read More"/></a>
                           </Link>
                        </div>
                    </div>
                    </div>
                    <div className={style.card_wrapper}>
                    <div className={style.card}>
                        <div className={style.cardImage}>
                        <img className={style.cardImg} src={bus} 
                            alt="love image"  />
                        </div>
                        <div className={style.cardContent}>
                            <h3>Business</h3>
                            <p>
                            Professor Munno has never disappointed any person and hence here comes your chance to make it happen your way, Engage the best  and most powerful Business Charms in the world.
                            </p>
                            <Link href="/business">
                                <a><Button name="Read More"/></a>
                           </Link>
                        </div>
                    </div>
                    </div>
                    <div className={style.card_wrapper}>
                    <div className={style.card}>
                        <div className={style.cardImage}>
                        <img classname={style.cardImg} src={vodo} 
                            alt="love image" />
                        </div>
                        <div className={style.cardContent}>
                            <h3>Voodoo Spells</h3>
                            <p>
                            Powerful Voodoo Spells crafted by the great Professor Munno have been used by man to solve their problems and hence use this chance today to make it change your life now.
                            </p>
                            <Link href="/more">
                                <a><Button name="Read More"/></a>
                           </Link>
                        </div>
                    </div>
                    </div>
                    <div className={style.card_wrapper}>
                    <div className={style.card}>
                        <div className={style.cardImage}>
                        <img classname={style.cardImg} src={protect} 
                            alt="love image" />
                        </div>
                        <div className={style.cardContent}>
                            <h3>Protection</h3>
                            <p>
                            The great Professor Munno has crafted Unique and Powerful or call them working Protection Spells And Talisman, he has always been helping different people around the whole world 
                            </p>
                            <Link href="/protect">
                                <a><Button name="Read More"/></a>
                           </Link>
                        </div>
                    </div>
                    </div>
                    <div className={style.card_wrapper}>
                    <div className={style.card}>
                        <div className={style.cardImage}>
                        <img className={style.cardImg} src={heal} 
                            alt="love image" />
                        </div>
                        <div className={style.cardContent}>
                            <h3>Healing</h3>
                            <p>
                                Are people threatening to bewitch you, Professor Munno has got very powerful which craft spells specifically made to free facing any form of witchcraft or bad evils from their Enemies.  
                            </p>
                            <Link href="/healing">
                                <a><Button name="Read More"/></a>
                           </Link>
                        </div>
                    </div>
                    </div>
                 </Slider> 
        </section>
      
    )
}

export default Main
