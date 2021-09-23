import Head from 'next/head'
import {NextSeo} from 'next-seo'
import { useState } from 'react'
import Backdrop from '../components/backdrop'
import Drawer from '../components/drawer'
import Footer from '../components/footer'
import Hero from '../components/hero'
import Jombo from '../components/jombo'
import Main from '../components/main'
import { Navbar } from '../components/navbar'
import Testimonials from '../components/testimonials'
import styles from '../styles/Home.module.css'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import ScrollAnimation from 'react-animate-on-scroll';
import Meta from '../components/seo-meta'

export default function Home(){
  let settings={
    dot:true,
    infinite:true,
    speed:500,
    slideToScroll:1,
    cssEase:"linear"
}

  const [state,setState]=useState({
      sideDrawerOpen:false
  })

 const drawerToggleClickHandler = ()=>{
    setState((prevState) => {
      return {sideDrawerOpen: !prevState.sideDrawerOpen};
    })
  }

  const backdropClickHandler = ()=>{
    setState({sideDrawerOpen:false})
  }

  // let sideDrawer;
  let backdrop;
  if(state.sideDrawerOpen){
    // sideDrawer = <Drawer/>
    backdrop=<Backdrop click={backdropClickHandler}/>
  }

  return (
    <div className={styles.contain}>
      <Meta/>
      <style jsx global>{`
          body{
            background-color:red;
            color:#F6EFEF;
            height:100%;
          }
      `}
      </style>
        <Navbar drawerToggleClickHandler={drawerToggleClickHandler}/>
      <Drawer show={state.sideDrawerOpen}/> 
       <Hero/> 
        <Jombo/>
       
        
          
          <div className={styles.cards}>
            <h1>Traditional Healing Services</h1>
              <Main/>
          </div>
         
       <Testimonials/>
     
       <Footer/>
    </div>
  )
 
}
