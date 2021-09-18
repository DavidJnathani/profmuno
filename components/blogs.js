import React from 'react'
import style from '../styles/blog.module.css'
function Blogs(props) {
    return (
        <div className={style.blog}>
            <h3>{props.title}</h3>
            <div className={style.image}>
                <img src={props.image} alt='Blog' />
            </div>
            <div className={style.content}>
                <p>{props.content}</p>
            </div>
        </div>
    )
}

export default Blogs
