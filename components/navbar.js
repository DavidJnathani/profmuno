import React from 'react'
import Link from 'next/link'
import {userRouter} from 'next/router'
import style from '../styles/nav.module.css'
import Sidedrawer from './sidedrawer'
import logo from '../images/logo.jpg'

export const Navbar = props => {
    // const router = userRouter()
    return (
            <div className={style.container}>
                <div className={style.menu_icon}>
                    <Sidedrawer click={props.drawerToggleClickHandler}/>
                </div>
                <div className={style.brand}>
                    <img src={logo} alt="logo"/>
                </div>
                
                <div className={style.navi}>
                    <ul>
                        <li><Link href="/">
                           <a > Home</a>
                            </Link>
                        </li>
                        <li><Link href="/about">
                           <a> About</a>
                            </Link>
                        </li>
                        <li><Link href="/services">
                           <a> Services</a>
                            </Link>
                       
                            <ul className={style.dropdown}>
                            <li><Link href="/healing">
                           <a> Healing</a>
                            </Link>
                        </li>
                        <li><Link href="/business">
                           <a> Business</a>
                            </Link>
                        </li>
                        <li><Link href="/protect">
                           <a>Protection</a>
                            </Link>
                        </li>
                        <li><Link href="/love">
                           <a>Relationships</a>
                            </Link>
                        </li>
                        <li><Link href="/more">
                           <a> And More Others</a>
                            </Link>
                        </li>
                            </ul>
                        </li>
                        <li><Link href="/blog">
                           <a> Blog</a>
                            </Link>
                        </li>
                        <li><Link href="/contact">
                           <a> Contact Us</a>
                            </Link>
                        </li>
                    </ul>
                </div>
        </div>
    )
}
