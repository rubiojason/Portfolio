import React, { useState } from 'react'
import AboutMe from './AboutMe'
import Projects from './Projects'
import Skills from './Skills'

function Contact() {
    //page state
        const [pageCheck, setPageCheck] = useState('contact')
    //page state

    //functions 
        const handleProjectsPage = () => {
            setPageCheck('projects')
        }

        const handleSkillsPage = () => {
            setPageCheck('skills')
        }

        const handleAboutMePage = () => { 
            setPageCheck('aboutMe')
        }
    //functions 

    //conditions 
    if (pageCheck === 'aboutMe') {
        return <AboutMe/>
    }
    else if (pageCheck === 'projects') {
        return <Projects/>
    }
    else if (pageCheck === 'skills') {
        return <Skills/>
    }
    else {
        return (
            <div className="app">
                <nav>

                    <ul>
                        <li onClick={handleAboutMePage}>About Me</li>
                        <li onClick={handleProjectsPage}>Projects</li>
                        <li onClick={handleSkillsPage}>Skills</li>
                        <li style={{color: 'rgb(255, 166, 0)'}}>Contact</li>
                    </ul>
                    
                </nav>

                <div className="about-me">

                    <div className="contact-content">
                        
                        <div className="contact-info-container">
                            <div className="contact-title">Contact</div>
                            
                            <div className="contact-bullet">

                                <div>
                                    <div className="contact-link-title">
                                        GitHub: 
                                    </div>
                                    <div className="contact-link">
                                        <a href="https://github.com/rubiojason" ><img alt="" src="https://dev.lutece.paris.fr/incubator/images/local/skin/GitHub-white-Mark-v02.png"/></a>
                                    </div>
                                </div>
                                        
                                <div>
                                    <div className="contact-link-title">
                                        LinkedIn: 
                                    </div>
                                    <div className="contact-link">
                                        <a href="https://www.linkedin.com/in/jason-rubio-0260631aa/" ><img alt="" src="https://content.linkedin.com/content/dam/me/business/en-us/amp/brand-site/v2/bg/LI-Bug.svg.original.svg" /></a>
                                    </div>
                                </div>

                                <div>
                                    <div className="contact-link-title">
                                        Email: 
                                    </div>
                                    <div className="contact-link">
                                        <a href="mailto: rubiojason420@gmail.com"><img alt="" src="https://upload.wikimedia.org/wikipedia/commons/4/4e/Gmail_Icon.png" /></a>
                                    </div>
                                </div>

                            </div>
                        </div>

                        <div className="contact-pic">
                            <div className="resume-container">
                                <div className="resume-title">Resume: </div>
                                    <div className="resume-link">
                                        <a href="https://www.dropbox.com/s/xl0rvujyb8fw0ms/Resume.pdf?dl=0" download="https://www.dropbox.com/s/xl0rvujyb8fw0ms/Resume.pdf?dl=0">Resume</a>
                                    </div>
                            </div>

                            <div className="picture-container">
                                <img alt="" src="https://images.pexels.com/photos/2004161/pexels-photo-2004161.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Contact