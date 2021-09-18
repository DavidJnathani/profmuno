import React from 'react'
import Link from 'next/link'
import style from '../styles/footer.module.css'


function Footer() {
    const date = new Date()
    const year = date.getFullYear()
    return (
        <footer className={style.FooterEnd}>
        <div className={style.footer}>
            <div className={style.head}>
                <h2 className={style.brand}>
                    Professor Munno Traditional Healer
                </h2>
                <p>
                HE has been serving people around the whole
                world with the same service and hence all with
                successful results in the past years and hence today is
                your best chance to make it happen your way as soon as possible.
                </p>
            </div>
            <div className={style.head}>
                <h3 className={style.H3}>Quick Links</h3>
                <ul className={style.dropdown}>
                <li>
                    <Link href="/healing">
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
                        <li><Link href="/">
                           <a> And More Others</a>
                            </Link>
                        </li>
                </ul>
            </div>
            <div className={style.head}>
            <h3 className={style.H3}>Social Links</h3>
                <ul className={style.dropdown}>
                    <Link href="https://www.facebook.com/permalink.php?story_fbid=101089032333318&id=101088205666734" passHref={true}>
                        <li>Facebook</li>
                    </Link>
                    
                    <Link href="https://wa.me/[+260965588979].">
                    <li>Whatsapp</li>
                    </Link>
                </ul>
            </div>
            <div className={style.head}>
                <form>
                    <h3 className={style.H3}>Subscribe To Our Mailing List</h3>
                    <div className={style.sub}>
                        <input type="text" placeholder="Email Address"/>
                        <input type="submit" value='Submit'/>
                    </div>
                </form>
            </div>
            </div>
            <div class={style.foot}>
                <p>
                    <h2 className={style.brand}>
                        Professor Munno Traditional Healer
                    </h2>
                   <span className={style.center}> © Copyright {year}. All Rights Reserved</span>
                </p>
            </div>
        
        </footer>
    )
}

export default Footer
