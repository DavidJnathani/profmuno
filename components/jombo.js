import React from 'react'
import style from '../styles/jombo.module.css'

function Jombo() {
    return (
        <div className={style.jombotron}>
            <div className={style.title}>
                <span>
                <h1>Prof. Munno Traditional Healer</h1></span>
               <span> <h3>" Your trusted best tradional healer around the world "</h3></span>
            </div>
            <div className={style.description}>
                <p>Welcome To Professor Muno The Unique Traditional Healer 
                    In Uganda [East Africa], I am  Professor Muno one of the African
                     Native Healers and accurate psychic who is ready to help
                      you fix some of your problems, no matter your situation or
                       location I may help you. Looking for Witchcraft & Healing? 
                       Here comes your
                     chance to help you make it happen your way today.</p>
                {/* <p>In so many situations we face difficulties in life 
                    and hence here comes our chance to transform our 
                    entire life into the one you really want to be, the
                     great Prof. Munno has crafted unique Spells and Solutions
                      to help you meet your goals, contact now African Curse Remova
                       Solutions To Help You Solve Problems</p> */}
                <p>
                No matter the situation you’re in, do not hesitate to contact now for assistance.
                 I have been helping many people around the world and why not you? Use this chance
                  to change your life destiny. I have the best solutions to assist in solce your problems
                   as its also seen with all testimonies given by my successful clients.
                </p>
               
            </div>
            
        </div>
    )
}

export default Jombo
