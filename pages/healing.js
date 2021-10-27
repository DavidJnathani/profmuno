import {React,useState} from 'react'
import style from '../styles/about.module.css'
import { Navbar } from '../components/navbar'
import Backdrop from '../components/backdrop'
import Drawer from '../components/drawer'
import Footer from '../components/footer'
import Service from '../components/service'
import HealPower from '../components/healingme'
import Testimonials from '../components/testimonials'
import Banner from '../components/banner'
import images from '../images/charting.jpg'
import Meta from '../components/seo-meta'
import Watsap from '../components/watsap'

function Healing() {

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
            background-color #000000;
            background-image linear-gradient(315deg, #000000 0%, #7f8c8d 74%);
            color:white;
            height:100%;
          }
      `}
      </style>
        <Navbar drawerToggleClickHandler={drawerToggleClickHandler}/>
      <Drawer show={state.sideDrawerOpen}/> 
      <Banner page="Healing Solution" image={images}/>
      <HealPower/>
      <Testimonials/>
           <Watsap/>
       <Footer/>
            
        </div>
    )
}

export default Healing
