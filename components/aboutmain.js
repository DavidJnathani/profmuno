import React from 'react'
import style from '../styles/aboutmain.module.css'
import Link from 'next/link'
import fire from '../images/firepalce.jpg'
import sabo from '../images/sabbo.jpg'
import Button from './button'
function Aboutmain() {
    return (
        <div className={style.main}>
            <div className={style.col}>
                <div className={style.first}>
                    <h2>Professor Munno Traditional Healer</h2>
                    <h3>Professor Munno has it all to help set you free today as soon as possible</h3>
                </div>
                <div className={style.second}>
                    <p>Welcome To Prof. Munno the Unique Traditional Healer In Uganda [East Africa], I am Prof. Munno one of the African Native Healers and accurate psychic who is ready to help you fix some of your problems, no matter your situation or location I may help you. Looking for Witchcraft & Healing? Here comes your chance to help you make it happen your way today.</p>
                    <p>I was born on the border of Uganda and Tanzania raised under the influence of ancestral/spiritual situation and hence chosen by my ancestors to try to help people which I do, my services are completely free and there are no hidden costs and only my clients may only buy or pay for the roots needed to do their works.</p>
                    <p>I have helped many both in Africa and around the world for the past years and many of the situations have been fixed though some have failed due to certain obstacles.</p>
                </div>
            </div>
            <div className={style.column}>
                <div className={style.image}>
                {/* <img classname={style.cardImg} src={fire} 
                    alt="love image" /> */}
                </div>
                <div className={style.content}>
                    <h3>Witchcraft and Healing</h3>
                    <p>All my services are strictly with the guidance of my ancestors and use of Roots, and there are no side effects in my services, before I do any help I have to first consult with my ancestors for guidance and solutions and hence I, will advise the client on the different solutions before I can help. Contact now.</p>
                    <h3>Some of my services include</h3>
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
                </div>
            </div>
            <div className={style.column1}>
                <div class={style.content1}>
                    <h3>My Experience with Witchcraft & Healing</h3>
                    <p>I have been serving all people equally and successfully for the past 15 years and hence here comes your long awaited chance to help you make it happen your way today.</p>
                    <h4>Objectives</h4>
                    <ul>
                        <li>Being confidential</li>
                        <li>Putting a lot of efforts to ensure good results to my clients</li>
                        <li>Meet with my clients no matter your geographical Location</li>
                    </ul>
                    <p>Contact now for the best solutions</p>
                    <Link href="/contact">
                        <a><Button name="Contact Me"/></a>
                    </Link>
                </div>
                <div className={style.image1}>
                {/* <img classname={style.cardImg1} src={sabo} 
                    alt="about"/> */}
                </div>
            </div>
        </div>
    )
}

export default Aboutmain
