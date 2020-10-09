import React, { useState } from 'react'
import AboutMe from './AboutMe'
import Projects from './Projects'
import Contact from './Contact'

function Skills() {
    //page state
        const [pageCheck, setPageCheck] = useState('skills')
    //page state

    //functions 
        const handleAboutMePage = () => {
            setPageCheck('aboutMe')
        }

        const handleProjectsPage = () => {
            setPageCheck('projects')
        }

        const handleContactPage = () => { 
            setPageCheck('contact')
        }
    //functions 

    //conditions 
    if (pageCheck === 'aboutMe') {
        return <AboutMe/>
    }
    else if (pageCheck === 'projects') {
        return <Projects/>
    }
    else if (pageCheck === 'contact') {
        return <Contact/>
    }
    else {
        return (
            <div className="app">
                <nav>

                    <ul>
                        <li onClick={handleAboutMePage}>About Me</li>
                        <li onClick={handleProjectsPage}>Projects</li>
                        <li style={{color: 'rgb(255, 166, 0)'}}>Skills</li>
                        <li onClick={handleContactPage}>Contact</li>
                    </ul>
                    
                </nav>

                <div className="about-me">
                    {/*<button className="skill-btn" onClick={handleSkillsPage}>Skills</button>
                    <button className="projects-btn" onClick={handleProjectsPage}>Projects</button>
                    <button className="aboutMe-btn" onClick={handleContactPage}>Contact</button>*/}

                    <div className="skills-content">

                        <div className="languages-container">
                        
                            <div className="skills-title-container">
                                <div className="skills-title">Languages</div>
                            </div>

                            <div className="skills-bullet">
                                <ul>
                                    <li><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/768px-Unofficial_JavaScript_logo_2.svg.png"
                                        alt="" /> Javascript</li>

                                    <li><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/600px-Python-logo-notext.svg.png"
                                        alt="" /> Python</li>

                                    <li><img src="https://www.w3.org/html/logo/downloads/HTML5_Badge_512.png"
                                        alt="" /> HTML5</li>

                                    <li><img src="https://cdn.iconscout.com/icon/free/png-512/css-118-569410.png"
                                        alt="" /> CSS3</li>
                                </ul>
                            </div>
                                
                        </div>

                        <div className="technologies-container">

                            <div className="skills-title-container">
                                <div className="skills-title">Other Technologies</div>
                            </div>

                            <div className="skills-bullet">
                                <ul>
                                    <li><img src="https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png"
                                        alt="" /> React JS</li>

                                    <li><img src="https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png"
                                        alt="" /> React JS Hooks</li>

                                    <li><img src="https://www.iconfinder.com/data/icons/logos-and-brands/512/288_Sass_logo-512.png"
                                        alt=""/> SASS</li>
                                    <li><img src="https://gravatar.com/avatar/5a224f121f96bd037bf6c1c1e2b686fb?s=512"
                                        alt=""/> GSAP</li>
                                </ul>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Skills
