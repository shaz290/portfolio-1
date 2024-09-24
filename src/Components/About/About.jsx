import React from 'react'
import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import profile_img from '../../assets/about_profile.svg'


const About = () => {
    return (
        <div id='about' className='about'>
            <div className="about-title">
                <h1>About me</h1>
                <img src={theme_pattern} alt="" />
            </div>
            <div className="about-section">
                <div className="about-left">
                    <img src={profile_img} alt="" />
                </div>
                <div className="about-right">
                    <div className="about-para">
                        <p>
                            Currently, I work at a healthcare company where I am engaged in an integration module, connecting various applications such as fax, telephony, and QuickBooks.
                        </p>
                        <p>
                            Additionally, I am involved in developing the HCM (Human Capital Management) module, which we are building from scratch. In this project, I am responsible for creating APIs and managing databases to support our operations.
                        </p>
                        <p>
                            I am a full-stack developer with expertise in .NET and React, dedicated to building dynamic and scalable web applications. My focus spans both backend and frontend technologies, ensuring efficient and seamless user experiences.
                        </p>
                        <p>
                            I am passionate about learning new technologies and continuously improving my skills. I strive to create innovative solutions that deliver meaningful impact, fostering growth and excellence in every project I undertake.
                        </p>
                    </div>
                    <div className="about-skills">
                        <div className="about-skill"> <p>HTML & CSS</p> <hr style={{ width: "66%" }} /></div>
                        <div className="about-skill"> <p>React Js</p><hr style={{ width: "25%" }} /> </div>
                        <div className="about-skill"> <p>C#</p><hr style={{ width: "65%" }} /></div>
                        <div className="about-skill"><p>.NET Core</p> <hr style={{ width: "50%" }} /></div>
                        <div className="about-skill"><p>Sql</p> <hr style={{ width: "47%" }} /></div>

                    </div>

                </div>
            </div>

            <div className="about-achievements">
                <div className="about-achievement">
                    <h1>3+</h1>
                    <p>YEARS OF EXPERIENCE</p>
                </div>
                <hr />
                <div className="about-achievement">
                    <h1>7+</h1>
                    <p>PROJECTS COMPLETED</p>
                </div>
                {/* <hr /> */}
                {/* <div className="about-achievement">
                    <h1>15+</h1>
                    <p>HAPPY CLIENTS</p>
                </div> */}
            </div>
        </div>
    )
}

export default About