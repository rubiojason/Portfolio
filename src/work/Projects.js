import React, { useState } from 'react'
import AboutMe from './AboutMe'
import Skills from './Skills'
import Contact from './Contact'

function Projects() {
    //page state
        const [pageCheck, setPageCheck] = useState('projects')
    //page state

    //functions 
        const handleAboutMePage = () => {
            setPageCheck('aboutMe')
        }

        const handleSkillsPage = () => {
            setPageCheck('skills')
        }

        const handleContactPage = () => { 
            setPageCheck('contact')
        }
    //functions 

    //conditions 
    if (pageCheck === 'aboutMe') {
        return <AboutMe/>
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
                        <li onClick={handleAboutMePage}>About Me</li>
                        <li style={{color: 'rgb(255, 166, 0)'}}>Projects</li>
                        <li onClick={handleSkillsPage}>Skills</li>
                        <li onClick={handleContactPage}>Contact</li>
                    </ul>
                    
                </nav>

                <div className="projects-title-container">
                    <div className="projects-title">
                        Projects
                    </div>
                </div>

                <div className="project-page-container">

                    <div className="project-content">
                        
                        <div className="project-box-container">

                            <div className="project-image">
                                <img src="https://i.ibb.co/BwvXKgK/Screenshot-2020-10-07-12-47-38-889.png" alt="Screenshot-2020-10-07-12-47-38-889" />
                            </div>

                            <div className="project-content-container">

                                <div className="actual-project-title">Mars Weather App</div>
 
                                <div className="project-description">Description: 
                                    <span> Used the AXIOS library to do AJAX calls to the NASA Mars Weather API, 
                                    and mapped the data out into the page.
                                    </span>
                                </div>

                                <div className="code-project-link">
                                    <a href="https://github.com/rubiojason/Mars-React-Weather-App">
                                        <button className="code-link">Code Link</button>
                                    </a>
                                    <a href="https://rubiojason.github.io/Mars-React-Weather-App/">
                                        <button className="project-link">Project Link</button>
                                    </a>
                                </div>

                            </div>
                        </div>
                    </div>


                    <div className="project-content">
                    
                        <div className="project-box-container">
                        
                            <div className="project-image">
                                <img src="https://i.ibb.co/hWc1yRN/Screenshot-2020-10-07-16-52-25-831.png" alt="Screenshot-2020-10-07-16-52-25-831"/>
                            </div>

                            <div className="project-content-container">
                                
                                <div className="actual-project-title">Astronomy Multiple Choice Test</div>

                                <div className="project-description">Description: 
                                    <span>Article about the Solar System. 
                                    Display of Images all formatted with the CSS Grid property. 
                                    A multiple choice form application based on the article. 
                                    </span>
                                </div>

                                <div className="code-project-link">
                                    <a href="https://github.com/rubiojason/Astronomy-Page-React">
                                        <button className="code-link">Code Link</button>
                                    </a>
                                    <a href="https://rubiojason.github.io/Astronomy-Page-React/">
                                        <button className="project-link">Project Link</button>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="project-content">
                    
                        <div className="project-box-container-last">
                        
                            <div className="project-image">
                                <img src="https://i.ibb.co/ys6D21H/Screen-Shot-2020-10-07-at-7-21-41-PM.png" alt="Screen-Shot-2020-10-07-at-7-21-41-PM" border="0"/>
                            </div>

                            <div className="project-content-container">
                                
                                <div className="actual-project-title">Popularity of a Programming Language</div>

                                <div className="project-description">Description: 
                                    <span>
                                        Choose what 2 Language you want to compare, and what you want to compare. 
                                        It then displays into a graph using the Chart js library. 
                                    </span>
                                </div>

                                <div className="code-project-link">
                                    <a href="https://github.com/rubiojason/Graph-React">
                                        <button className="code-link">Code Link</button>
                                    </a>
                                    <a href="https://rubiojason.github.io/Graph-React/">
                                        <button className="project-link">Project Link</button>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="bottom-space"></div>
            </div>
        )
    }
}

export default Projects
