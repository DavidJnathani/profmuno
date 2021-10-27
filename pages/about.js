import {React,useState} from 'react'
import style from '../styles/about.module.css'
import { Navbar } from '../components/navbar'
import Backdrop from '../components/backdrop'
import Drawer from '../components/drawer'
import Footer from '../components/footer'
import Aboutmain from '../components/aboutmain'
import Banner from '../components/banner'
import images from '../images/mat.jpg'
import Meta from '../components/seo-meta'
import Watsap from '../components/watsap'

function About() {

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
        <div className={style.about}>
          <Meta/>
             <style jsx global>{`
          body{
           
            background-image linear-gradient(315deg, #000000 0%, #7f8c8d 74%);
            color:#F6EFEF;
            height:100%;
          }
      `}
      </style>
        <Navbar drawerToggleClickHandler={drawerToggleClickHandler}/>
      <Drawer show={state.sideDrawerOpen}/>
      <Banner page="About Us" image={images}/> 
      <Aboutmain />
           <Watsap/>
       <Footer/>
            
        </div>
    )
}

export default About
