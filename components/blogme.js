import React from 'react'
import style from '../styles/blogme.module.css'
import Blogs from './blogs'
import Link from 'next/link'
import bus from '../images/charting.jpg'
import magic from '../images/magic.jpg'
import great from '../images/love spells.jpg'
import sabbo from '../images/sabbo.jpg'
import heal from '../images/healer.jpg'
import power from '../images/power.jpeg'
import smoke from '../images/smoke.jpg'
import mat from '../images/mat.jpg'

function Blogme() {
    return (
        <div className={style.container}>
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
            <div className={style.blog}>
            <Blogs title="Most Powerful Witch in the World" 
            content="Prof. Munno the great in Africa and the whole universe is The Most Powerful Witch Doctor In The World
             to solve all your problems, no matter your situation or geographical location contact Prof. Munno today to help 
             you to fix all issues around your entire life being The Most Powerful Witch Doctor In The World, he has the ability to solve all your
              issues no matter your inner feeling how difficult  you think the situation may be or the complications involved, Prof. Munno The Most Powerful Witch Doctor In The World is capable
               of changing your life for better as soon as possible, he has been helping different people around the whole universe and all with successful results and so he is here being The Most Powerful Witch Doctor In 
               The World to solve your obstacles to let you live a wondering free life, with his ability and success in services its never too late or too difficult for anyone to get the best help they are looking for, call now"
                image={bus} />
                <Blogs title="How to Become a Witch" 
            content="At Prof. Munno’s Shrine and In Africa as a continent Witchcraft is one of the world’s oldest spiritual traditions, yet also one of the most misunderstood. Television, movies, and comic books abound with stereotypes and misconceptions about what it really means to be a witch. Many people decide they want to become a witch because they relate to the witches and wizards in fictional stories, such as Harry Potter or Narnia. However, the magic you see portrayed on-screen is usually significantly different from real magick practiced by devout witches, wizards, sorcerers, and ceremonial magicians every day.

            Okay, so witchcraft is often misunderstood. But what is witchcraft? To put it simply, witchcraft is the practice of magick. That’s it. Contrary to popular belief, witchcraft is not a religion; it is a spiritual practice that may or may not be part of a person’s religious faith. Witchcraft is often conflated with Wicca, which is an actual religion."
                image={great} />
                <Blogs title="Accurate Psychic Readings In USA" 
            content="Here You have come to the right place to help you get all you need as soon as possible. Do not hesitate to contact today for the best services. Prof. Munno Adam has it all to help set you free today as soon as possible. He has always been successful in all his recent and past services to all his clients and hence here comes your chance to help you make it happen your way today with ease. Contact today for Accurate Psychic Readings In USA by the great one today.

 

            Here. No matter the situation. Do not hesitate to contact today for the best services. Prof. Munno Adam has it all to set you free today as soon as possible. Remember not all is supposed to be negative in your life. Some is caused by evil people and hence here comes your chance to help you make it happen your way today as soon as possible. Looking for Accurate Psychic Readings In USA? Here comes your long awaited chance to help you make it happen your way today with ease."
            
             
                image={sabbo} />
            </div>

            <div className={style.blog}>
            <Blogs title="Corona virus Cure & Treatment" 
            content="I Have crafted the best and unique medicines and solutions specially to help fix all issues around this epidemic decease and hence here comes your chance to engage my services for Corona virus Cure & Treatment In South Africa and have all your issues solved. Am here to assist you and meet all your needs with ease.

            No matter the geographical location nor situation you may be in, here comes your chance to make it happen your way. Do not hesitate to contact for Corona virus Cure & Treatment In South Africa here, i have helped many people and hence here comes your chance to make it happen your way as soon as possible.
            
            Corona virus Cure & Treatment In South Africa has been gotten by me and im here to assist you not to contract it and as well to erase it from your body forever, no matter what do not hesitate to contact for the best services."
                image={mat} />
                <Blogs title="The Great African Traditional Healer" 
            content="You have come to the greatest and unique spiritualist to have all your problems solved as soon as possible. And hence no matter the situation do not hesitate to contact Prof. Munno Adam today for you

            No matter the situation be it current nor past situation, do not hesitate to contact me today to have all your issues fixed, he has always helped many people around the whole world and hence here comes your chance to make it happen your way with immediate effect. Call today The Great African Traditional Healer.
            
            Have you been disappointed or lost hope due to your bed experience with your previous so called Sangomas? do not hesitate to contact us for the best services ever. here you have come to the most wanted and respected The Great African Traditional Healer who will make sure that all your problems are solved."
                image={magic} />
            </div>
            <div className={style.blog}>
            <Blogs title="Native Traditional Healers Mpumalanga Nelspruit" 
            content="Native Traditional Healers Mpumalanga Nelspruit, You have come to the most influential & unique Prof. Munno a herbalist with Super Natural Powers from the mountains of Africa and Strong natural herbs. Due to high demand by Clients, Prof. Munno is now online to help people from all over the world. Call for help.

            Native traditional healing is the best way of healing because Native Healers have got a God given gift of healing.Prof. Munno has got very powerful which craft spells specifically made to free facing any form of witchcraft or bad evils from there Emimies. Are people threatening to bewitch you contact Prof. Munno for the best witchcraft protection spells."
                image={heal} />
                <Blogs title="African Voodoo & Witchcraft Spells" 
            content="African Voodoo & Witchcraft Spells at your reach, Are you interested in the best and unique solutions around the whole world? You have come to the right place to make it happen your way as soon as possible, so many people around the whole world do as me how i get all the powers t make it happen their way but one thing we must all know is that we are all ancestral guided as long as you’re a spiritualist like me.

            Have you been disappointed by other spiritualists who promised you a lot that they did not fulfill as you agreed? you have come to the right person to make it for you as soon as possible, no matter the situation nor geographical location, do not hesitate to contact us today for the best services, Are you interested in changing your entire life? Engage great African Voodoo & Witchcraft Spells into your issues and all will be fine."
                image={smoke} />
                <Blogs title="Voodoo, Magic, Spells, Help, Solutions, Advice" 
            content="Have you reached your dead end? here is your time to make a break through as soon as possible, have you lost hope due to your past experience? do not hesitate to contact Prof. Munno today with the best services to assist you to overcome all your obstacles with Voodoo, Magic, Spells, Help, Solutions, Advice, have you lost hope or have you been waiting for a long time for the right person to solve your problems, here is Prof. Munno with unique Voodoo, Magic, Spells, Help, Solutions, Advice and ready to assist you like he has always been doing for other people in all parts of the world as seen on tv or heard on national radios, he is here with the best Voodoo, Magic, Spells, Help, Solutions, Advice to fix all problems disturbing mankind as soon as possible, have you been disappointed or lost hope? engage Voodoo, Magic, Spells, Help, Solutions, Advice from Prof. Munno today to have all your problems solved as soon as possible."
                image={power} />
            </div>
        </div>
    )
}

export default Blogme
