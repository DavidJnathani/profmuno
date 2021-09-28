import {React, useState} from 'react'
import emailjs from 'emailjs-com'
import style from '../styles/connect.module.css'
import PhoneCall from '@material-ui/icons/AddIcCall'
import Location from '@material-ui/icons/AddLocation'
import image from '../images/mycollection (2)/png/002-pin.png'
import image1 from '../images/mycollection (2)/png/003-telephone.png'
import image2 from '../images/mycollection (2)/png/004-mail.png'
import image3 from '../images/mycollection (2)/png/001-whatsapp.png'


  

function Connect() {

    const sendEmail=(e)=>{
        e.preventDefault();
        
        emailjs.sendForm('service_1xxfbfo',
        'template_fy754uj',
        e.target,
        'user_GIHSicy0z9EdrD6ZEBnxe'
        ).then(res=>{
            console.log(res)
        }).catch(err=>console.log(err));  
    }

    const [email,setEmail] = useState("")
    const [message,setMessage] = useState("")

    let handleMessageChange=(e)=>{
        let inputValue = e.target.value;
        setMessage(inputValue) 
    }
    let handleEmailChange=(e)=>{
        let inputValue = e.target.value;
        setEmail(inputValue) 
    }
    
    // const sendEmail = async (e)=>{
    //     e.preventDefault();
    //     const results = await fetch("/api/mail",{
    //         method:"post",
    //         body:JSON.stringify({fname:fname,country:country,email:email,numba:numba,message:message})
    //     });
    //     if(results.status==200){
    //         console.log("Success")
    //     }else{
    //         console.log('error ')
    //     }
    // }
    // async function handleOnSubmit(e){
    //     e.preventDefault();
    //     const formData={}
    //     Array.from(e.currentTarget.elements).forEach(field=>{
    //         if(!field.name)return;
    //         formData[field.name]=field.value;
    //     });
    //     fetch('/api/mail',{
    //         method:'post',
    //         body:JSON.stringify(formData)

    //     })
    //     console.log(formData)
    // }
    return (
        <section className={style.contact}>
                <div className={style.content}>
                    <h2>DO YOU NEED HELP</h2>
                    <hr/>
                    <p>A well qualified traditional healer, with skills from experiences and tradition passed down through the centuries from my forefathers. I deal with the occult, spiritual, and the paranormal. I do email, phone, and private readings and consultations to enable you to take control of the situation.
                    Contact us now</p>
                </div>
                <div className={style.container}>
                        <div className={style.contactInfo}>
                            <div className={style.box}>
                            <div className={style.icon}>
                                <img src={image} alt="icon" className="imge"/>
                            </div>
                            <div className={style.text}>
                                <h3> Address</h3>
                                <p>P.O. Box 14136<br/><strong>Main Branch: Lusaka,Chongwe</strong></p>
                                <p><strong>Uganda</strong>,
                                    <strong>Zambia</strong>.</p>
                            </div>
                            </div>
                            <div className={style.box}>
                            <div className={style.icon}>
                                <img src={image1} className="imge"/>
                            </div>
                            <div className={style.text}>
                                <h3>Call Us</h3>
                                <p>0200-991-807 </p>
                            </div>
                            </div>
                            <div className={style.box}>
                            <div className={style.icon}>
                                <img src={image3} className="imge"/>
                            </div>
                            <div className={style.text}>
                               <h3>Whatsapp Only</h3>
                                <p> Zambia: +260-965-588-979</p>
                               
                            </div>
                            </div>
                            <div className={style.box}>
                            <div className={style.icon}>
                                <img src={image2} className="imge"/>
                            </div>
                            <div className={style.text}>
                                <h3>Email</h3>
                                <p>  Profmunno2021@gmail.com</p>
                            </div>
                            </div>
                        </div>
                    <div className={style.contactForm}>
                        <form method="post" onSubmit={sendEmail}>
                            <h2>Send Message</h2>
                            <div className={style.item}>
                               
                                <input type="text" id="fname" name="fname" placeholder='Please enter your name' required="required"/>
                               
                                </div>
                                <div className={style.item}>
                                
                                <input type="text" id="country" name="country" placeholder='Where are you from,Country?' required="required"/>
                                </div>   
                                <div className={style.item}>
                    
                                <input type="text" id="numba" name="numba" placeholder='How can we call you,Telephone Number?' required="required"/>
                                </div> 
                                <div className={style.item}>
                               
                                <input type="text"  onChange={handleEmailChange} id="email" name="email" placeholder='What is your email address?' required="required"/>
                                </div>
                                <div className={style.item}>
                               
                                <textarea name="massage" onChange={handleMessageChange} id="massage"  placeholder="Write your challege or your message here" required="required"></textarea>                           
                            </div> 
                            <div className={style.item}>
                                <input type="submit" value="SEND" />
                            </div>       
                        </form>
                    </div>
                </div>
        </section>
    )
}

export default Connect
