import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className='footer' id="footer">
        <div className="footer-content">
            <div className="footer-content-left">
                <img src={assets.logo} alt="" />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                <div className="footer-social-icons">
                    <a href="https://www.instagram.com/navin_netha_156/" target="_blank" rel="noopener noreferrer"></a><img src={assets.facebook_icon} alt="" /></div>a>
                    <img src={assets.instagram_icon} alt="" />
                    <a href="https://twitter.com/156navin" target="_blank" rel="noopener noreferrer"></a><img src={assets.twitter_icon} alt="" /></a>
                    <img src={assets.whatsapp_icon} alt="" />
                    <a href="https://www.linkedin.com/in/nethaji-ravi/" target="_blank" rel="noopener noreferrer"><img src={assets.linkedin_icon} alt="" /></a>
                </div>
            </div>
            <div className="footer-content-center">
                <h2>Quick Links</h2>
                <ul>
                    <li><a href="/">Home</a></li>
                    <li>About us</li>
                    <li>Delivery</li>
                    <li>Privacy Policy</li>
                </ul>
            </div>
            <div className="footer-content-right">
                <h2>Get in touch</h2>
                <ul>
                    <li>+91 1234567890</li>
                    <li><a href="mailto:nethaji156@gmail.com">nethaji156@gmail.com</a></li>
                </ul>
            </div>
        </div>
        <hr />
        <p className='footer-copyright'>Copyright &copy; 2026 - All rights reserved</p>
    </div>
  )
}

export default Footer
