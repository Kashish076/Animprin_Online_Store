import '../Home.css'
import { Link } from 'react-router-dom'
import {AiFillInstagram} from 'react-icons/ai';
import {AiFillFacebook} from 'react-icons/ai';
import {BiLogoSnapchat} from 'react-icons/bi';
import {AiFillYoutube} from 'react-icons/ai';
import image from '../images/loose_skins.png'
import LoginComponent from '../Components/loginComponent';
import image2 from '../images/animprin.png'
import { BsGearFill } from "react-icons/bs";
import { Button } from "@mui/material";
import { useState } from "react";
const Footer = () => {
    const handleScrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' }); 
      };
    const [show, setShow] = useState(false);

    const displayLoginComponent = () => {
        if (show === true) {
            setShow(false);
        } else {
            setShow(true);
        }
    }
    return (
        <div className='footer_outer'>
        <div className="footer_inner">
                <img style={{padding: '10px', margin: '10px'}} height={'200px'} width={'200px'} src={image}></img>
                <div className='footer_Links_Outer'>
                    <Link onClick = {handleScrollToTop} to = "/Contact" className='footer_link'>Contact us</Link>
                    <Link onClick = {handleScrollToTop} to = "/about" className='footer_link'>About us</Link>
                    <Link onClick = {handleScrollToTop} to = "/Terms" className='footer_link'>Terms & Conditions</Link>
                    <Link onClick = {handleScrollToTop} to = "/PrivacyPolicy" className='footer_link'>Privacy policy</Link>
                    <Link onClick = {handleScrollToTop} to = "/" className='footer_link'>Home</Link>
                    
                </div>
                <div className='footer_Links_Outer'>
                    <Link to={'https://www.youtube.com/channel/UCPFPI-zXGa1dDj80wcIDV3w'} className='footer_link footericons'><AiFillYoutube/></Link>
                    <Link to={'https://www.instagram.com/animprin.in?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=='} className='footer_link footericons'><AiFillInstagram/></Link>
                    <Link to={'https://www.snapchat.com/add/animprin?share_id=QhU_rRY5_JU&locale=en-IN'} className='footer_link footericons'><BiLogoSnapchat/></Link>
                    <Link to={''} className='footer_link footericons'><AiFillFacebook/></Link>
                </div>
            </div>
            <div style={{ display: 'flex', position: "sticky", bottom: 30,
        marginTop: '50px',
            justifyContent: 'flex-end' , zIndex: 5 }} >
               <Button style={{ borderRadius: '30px', display: `${show === true ? 'none' : ''}`}}><BsGearFill color="purple" size={40} onClick={displayLoginComponent}/></Button>

                <div style={{ height: '250px', width: '200px', marginRight: '30px', display: `${show === false ? 'none' : ''}`}}>
                    <LoginComponent closeCompo = {() => {
                        setShow(false)
                    }} />
                </div> 
                </div>
            <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: 'whitesmoke', width: '100%', color: 'black', fontSize: '12px', height: '30px', fontWeight: 'bold', borderTop: '1px solid black'}}>
                <text>© 2023-2024 Animprin Private Limited. All rights reserved</text>
            </div>
        </div>
    )
}

export default Footer;