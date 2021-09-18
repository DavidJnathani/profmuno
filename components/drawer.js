import React from 'react'
import Link from 'next/link'
import style from '../styles/drawer.module.css'

function Drawer(props) {
   
    return (
        <nav className={!props.show ?style.drawer:`${style.drawer} ${style.draweropen}`}>
            <ul>
            <li><Link href="/">
                           <a>Home</a>
                            </Link>
                        </li>
            <li
            ><Link href="/about">
                        <a> About Us</a>
                        </Link>
                    </li>
                <li>Services
                    <ul className={style.list}>
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
                <li>
                <Link href="/blog">
                        <a> Blog</a>
                        </Link>
                    </li>
                    <li><Link href="/contact">
                        <a> Contact Us</a>
                        </Link>
                    </li>
            </ul>
        </nav>
    )
}

export default Drawer
