import React from 'react'
import { assets } from '../../assets/assets'
import './Footer.css'

const Footer = () => {
  return (
   <div className="footer"id='footer'>
    <div className="footer-content">
        <div className="footer-content-left">
            <img src={assets.logo} alt=""/>
           
         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque rem perferendis impedit excepturi, sint ab. Beatae, exercitationem soluta, deleniti iste autem ab blanditiis reprehenderit laborum, fugit nesciunt fuga explicabo voluptatum!</p>
              <div className="footer-social-icons">
                <img src={assets.facebook_icon} alt="" />
                <img src={assets.twitter_icon} alt="" />
                <img src={assets.linkedin_icon}alt="" />
              </div>
        </div>
        <div className="footer-content-center">

            <h2>COMPANY</h2>
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Privace Policy</li>
            <u1>

            </u1>
        </div>
        <div className="footer-content-right">
            <h2>GET IN TOUCH</h2>
            <ul>
                <li>9322315218</li>
                <li>anishkulkarni182@gmail.com</li>
            </ul>
        </div>
      
       
   
    </div>
    <hr/>
    
    <div className="footer-copyright">
 
    <p> Copyright 2024 © Tomoto.com - All Right Reserved.</p>
     </div>
   </div>
  )
}

export default Footer