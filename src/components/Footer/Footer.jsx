import React from 'react'
import './Footer.css'
import github from "../../assets/github.png"
import linkedin from "../../assets/linkedin.png"
import insta from "../../assets/instagram.png"
import logo from "../../assets/logo.png"

function Footer() {
  return (
    <div className='footer-container'>
        <hr />
        <div className="footer">
        <div className="blur blur-footer-1"></div>
        <div className="blur blur-footer-2"></div>
            <div className="links">
                <img src={github} alt="" />
                <img src={linkedin} alt="" />
                <img src={insta} alt="" />

            </div>
            <div className="logo-h"><img src={logo} alt="" /></div>
        </div>
    </div>
  )
}

export default Footer