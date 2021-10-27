import {React,useState} from 'react'
import style from '../styles/about.module.css'
import { Navbar } from '../components/navbar'
import Backdrop from '../components/backdrop'
import Drawer from '../components/drawer'
import Footer from '../components/footer'
import Bus from '../components/bus'
import Testimonials from '../components/testimonials'
import Banner from '../components/banner'
import images from  '../images/busi.jpg'
import Meta from '../components/seo-meta'
import Watsap from '../components/watsap'

function Business() {

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
      <Banner page="Business Solution" image={images}/> 
      <Bus/>
      <Testimonials/>
          <Watsap/>
       <Footer/>
            
        </div>
    )
}

export default Business
