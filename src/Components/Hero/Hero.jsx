import React from 'react'
import './Hero.css'
import profile_img from '../../assets/profile_img.svg'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Hero = () => {
    return (
        <div id='home' className='hero'>
            <img src={profile_img} alt="" />
            <h1><span> I'm Shaz Ahmed,</span> a full-stack developer based in India</h1>
            <p>I specialize in building dynamic and scalable web applications, focusing on both backend and frontend development. My passion lies in crafting clean, efficient code and delivering seamless user experiences.</p>
            <div className='hero-action'>
                <div className="hero-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect with me</AnchorLink></div>
                <div className="hero-resume">My resume</div>
            </div>
        </div>
    )
}

export default Hero