import React, { useState } from 'react'
import Projects from './Projects'
import Skills from './Skills'
import Contact from './Contact'

function AboutMe() {

    //page state
        const [pageCheck, setPageCheck] = useState('aboutMe')
    //page state

    //functions 
        const handleProjectsPage = () => {
            setPageCheck('projects')
        }

        const handleSkillsPage = () => {
            setPageCheck('skills')
        }

        const handleContactPage = () => { 
            setPageCheck('contact')
        }
    //functions 

    //conditions 
    if (pageCheck === 'projects') {
        return <Projects/>
    }
    else if (pageCheck === 'skills') {
        return <Skills/>
    }
    else if (pageCheck === 'contact') {
        return <Contact/>
    }
    else {
        return (
            <div className="app">
                <nav>

                    <ul>
                        <li style={{color: 'rgb(255, 166, 0)'}}>About Me</li>
                        <li onClick={handleProjectsPage}>Projects</li>
                        <li onClick={handleSkillsPage}>Skills</li>
                        <li onClick={handleContactPage}>Contact</li>
                    </ul>
                    
                </nav>

                <div className="about-me">
                    <button className="skill-btn" onClick={handleSkillsPage}>Skills</button>
                    <button className="projects-btn" onClick={handleProjectsPage}>Projects</button>
                    <button className="aboutMe-btn" onClick={handleContactPage}>Contact</button>

                    <div className="content">

                        <div className="name">

                            <div className="name-container">
                                <div className="actual-name">Jason Rubio</div>
                            </div>
                            
                            <div className="quote-container">
                                <div className="actual-quote">
                                    You Learn More From Failure Than From Success. Don’t Let It Stop You. Failure Builds Character
                                </div>
                            </div>

                        </div>

                        <div className="about">
                            <div className="about-div">
                                About: 
                            </div>

                            <div className="p-div">
                                <p>
                                    I am a Web Developer aspired to learn more every single day. Enjoy building websites from the bottom up.  
                                </p>
                            </div>
                            

                        </div>

                    </div>
                </div>
            </div>
        )
    }
}

export default AboutMe