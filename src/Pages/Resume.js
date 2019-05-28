import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faMapMarker } from "@fortawesome/free-solid-svg-icons";
import { faPalette } from "@fortawesome/free-solid-svg-icons";

class Resume extends Component {
  render() {
    return (
      <div className="resume-container">
        
        <section className="left-panel">
          <section className="left-panel-section">
            <h1 className="my-name">AUSTIN HOWES</h1>
            <h2 className="my-title">FULL STACK ENGINEER</h2>
          </section>

          <section className="left-panel-section">
            <div>
              <h1b>Contact</h1b>
              <hr className="thick"></hr>
            </div>
            <div className="icon-link">
              <FontAwesomeIcon icon={faEnvelope} />
              <p className="contact-info">austie702@gmail.com</p>
            </div>
            <div className="icon-link">
              <FontAwesomeIcon icon={faPalette} />
              <p className="contact-info">artstation.com/austinhowes</p>
            </div>
            <div className="icon-link">
              <FontAwesomeIcon icon={faPhone} />
              <p className="contact-info">512.560.5374</p>
            </div>
            <div className="icon-link">
              <FontAwesomeIcon icon={faMapMarker} />
              <p className="contact-info">Austin, TX</p>
            </div>
            <div className="icon-link">
              <FontAwesomeIcon icon={['fab', 'facebook']} />
              <p className="contact-info">austin.howes</p>
            </div>
            <div className="icon-link">
              <FontAwesomeIcon icon={['fab', 'twitter']} />
              <p className="contact-info">austie702</p>
            </div>
            <div className="icon-link">
              <FontAwesomeIcon icon={['fab', 'linkedin']} />
              <p className="contact-info">austinhowes</p>
            </div>
            <div className="icon-link">
              <FontAwesomeIcon icon={['fab', 'github']} />
              <p className="contact-info">austie702</p>
            </div>
          </section>

          <section className="left-panel-section">
            <div>
              <h1b>Summary</h1b>
              <hr className="thick"></hr>
            </div>
            <p className="summary-p">I am a Full Stack Engineer with an extensive background in 3D Digital Modeling. The detail-oriented nature of both disciplines --along with artistic and creative solutions to each challenge-- became the bridge I used to cross the divide between the two worlds. I have a passion for creating, with a heavy focus on efficiency and attention to detail. My ideal project would be akin to untangling a box of multiple strings of Christmas tree lights.</p>
          </section>

          <section className="left-panel-section">
            <div>
              <h1b>Skills</h1b>
              <hr className="thick"></hr>
            </div>
            <section className="skills-list">
              <h4b>COMPUTER PROGRAMMING</h4b>
              <p>JavaScript</p>
              <p>React</p>
              <p>React Native</p>
              <p>Python</p>
              <p>Django</p>
              <p>GraphQL</p>
              <p>Redux</p>
              <p>MongoDB</p>
              <p>Express</p>
              <p>Node</p>
              <p>SQL</p>
              <p>Go</p>
            </section>

            <section className="skills-list">
              <h4b>COMPUTER PROGRAMMING</h4b>
              <p>Modo</p>
              <p>Maya</p>
              <p>UE4</p>
              <p>Substance Designer</p>
              <p>Photogrammetry</p>
              <p>Photoscan</p>
              <p>Reality Capture</p>
              <p>Lidar Scanning</p>
            </section>

          </section>
        </section>

        {/* right panel */}

        <section className="right-panel">

          <section className="right-panel-section">
            <div>
              <div>
                <h1b>Projects</h1b>
                <hr className="thick"></hr>
              </div>
              
              <div className="project">
                <div className="title-date">
                  <h3 className="project-or-company-title">TuneKit (working title)</h3>
                  <p className="date">2018 - Current</p>
                </div>
                <p className="p-desc">TuneKit is an event creation, planning, and management platform, as well as a portfolio site for artists and vendors.</p>
              </div>

              <div className="project">
                <div className="title-date">
                  <h3 className="project-or-company-title">Beerthoven Concert Series Data</h3>
                  <p className="date">2018 - Current</p>
                </div>
                <p className="p-desc">A toolkit for logging, tracking, and visualizing data in a seemingly in􀃕nite number of con􀃕gurations.</p>
              </div>

              <div className="project">
                <div className="title-date">
                  <h3 className="project-or-company-title">Beerthoven's Craft Music Lessons</h3>
                  <p className="date">2018 - 2019</p>
                </div>
                <p className="p-desc">A website for Beerthoven's Craft program giving both students and instructors login privileges.</p>
              </div>

              <div className="project">
                <div className="title-date">
                  <h3 className="project-or-company-title">Bible In Five</h3>
                  <p className="date">2018 - Current</p>
                </div>
                <p className="p-desc">An interactive, scalable study Bible, focusing on narrative and structural breakdowns at any level.</p>
              </div>
            </div>
          </section>

          <section className="right-panel-section">
            <div>
              <h1b>Experience</h1b>
              <hr className="thick"></hr>
            </div>

            <div className="experience">
              <div className="company-date">
                <h3 className="project-or-company-title">Tackle.io</h3>
                <p className="date">2018 - 2019</p>
              </div>
              <div className="position-location">
                <h3b>Fullstack Software Engineer Intern</h3b>
                <p className="location">remote</p>
              </div>
              <ul>
                <li>Primarily worked with React to add new pages and features to Tackle's existing website.</li>
                <li>Absorbed as much as possible about the way the Amazon Marketplace functions on the enterprise level to inform my production on the product.</li>
                <li>Navigated the backend API Python code base to 􀃕nd endpoints to work with my frontend code.</li>
                <li>Authored UI/UX mockups and created documentation for pages I was responsible for.</li>
              </ul>
            </div>

            <div className="experience">
              <div className="company-date">
                <h3 className="project-or-company-title">Cornerstone Architects</h3>
                <p className="date">2018</p>
              </div>
              <div className="position-location">
                <h3b>Freelance Fullstack Developer</h3b>
                <p className="location">Austin, TX</p>
              </div>
              <ul>
                <li>Implemented new features in both front and back end for the admin-facing version of the site.</li>
                <li>Removed list of bugs provided by CSA as well as those I found along the way.</li>
                <li>Deployed server instance for non-destructive work􀃖ow during testing phase.</li>
              </ul>
            </div>

            <div className="experience">
              <div className="company-date">
                <h3 className="project-or-company-title">Performing Arts Products, LLC</h3>
                <p className="date">2018 - Current</p>
              </div>
              <div className="position-location">
                <h3b>CEO, Cofounder</h3b>
                <p className="location">Austin, TX</p>
              </div>
              <ul>
                <li>Authored design documents including, but not limited to, Data Flow Diagrams, User Flow Scenario Maps, Site Maps, Entity Relationship Diagrams, Product Creation/Delivery Maps, and various Wire-Frames for both desktop and mobile devices.</li>
              </ul>
            </div>

            <div className="experience">
              <div className="company-date">
                <h3 className="project-or-company-title">Beerthoven Concert Series</h3>
                <p className="date">2015 - Current</p>
              </div>
              <div className="position-location">
                <h3b>Managing Director</h3b>
                <p className="location">Austin, TX</p>
              </div>
              <p className="p-desc">The Beerthoven Concert Series is a down-to-earth, approachable classical music experience. I joined Beerthoven with the task of implementing growth and sustainability, without compromising the mission of a low cost with a high quality standard. Under my direction, Beerthoven:</p>
              <ul>
                <li>Attendance increased by 400%.</li>
                <li>Cut costs by 20% through B2B partnerships I formed, sponsorship, and using data to make informed decisions.</li>
                <li>Turned a pro􀃕t on their 􀃕rst of many shows, freeing up their 􀃕nances to do more community outreach expansion.</li>
                <li>Creating data visualizations from past data to refocus our resources to increase pro􀃕ts and attendance as well as more accurately aim our outreach.</li>
              </ul>
            </div>

            <div className="experience">
              <div className="company-date">
                <h3 className="project-or-company-title">Birdhouse, LLC</h3>
                <p className="date">2014 - 2016</p>
              </div>
              <div className="position-location">
                <h3b>CEO, Cofounder</h3b>
                <p className="location">Austin, TX</p>
              </div>
              <ul>
                <li>After initially structuring the company, my main role was asset creation. I provided 3D scans or authored 3D models for projects in architecture, engineering, construction, 􀃕lm, and gaming. Birdhouse produced sub-millimeter accurate recreations of various sites and objects using both laser-based and photogrammetry-based scanning methods.</li>
              </ul>
            </div>

            <div className="experience">
              <div className="company-date">
                <h3 className="project-or-company-title">Cityscape Digital</h3>
                <p className="date">2014 - 2014</p>
              </div>
              <div className="position-location">
                <h3b>Architectural Visualization Modeler</h3b>
                <p className="location">remote</p>
              </div>
              <ul>
                <li>Working primarily with lighting and rendering teams, once I created the initial as-built design, I would model the architect's renovations into the 3D plan. Bringing these as-built blueprints and design mock-ups into manipulable 3D environments for architects allowed for more precise renovations and future developments.</li>
              </ul>
            </div>

            <div className="experience">
              <div className="company-date">
                <h3 className="project-or-company-title">Sucker Punch Productions</h3>
                <p className="date">2012 - 2013</p>
              </div>
              <div className="position-location">
                <h3b>Environment Artist and Physics Modeler</h3b>
                <p className="location">Bellevue, WA</p>
              </div>
              <ul>
                <li>Initially hired to help a problem that was behind schedule, I 􀃕nished my work in 9 months (14 month deadline).</li>
                <li>Authored 80%+ of the game's physics assets.</li>
                <li>Set the quality benchmark for distant-LOD rendering, balancing quality and performance.</li>
                <li>Seamlessly discovered and repaired hundreds of errors from other departments by integrating information from meetings I proposed with each department, helping me produce this work􀃖ow from day one.</li>
                <li>Proposed and implemented a more performant company-wide restructuring of our organizational tools.</li>
              </ul>
            </div>

          </section>

          <section className="right-panel-section">
            <div>
              <h1b>Education</h1b>
              <hr className="thick"></hr>
            </div>
            <div className="schools">

              <div className="aau">
                <h4>Academy of Art University</h4>
                <p>BFA 2011</p>
              </div>

              <div className="lambda">
                <h4>Lambda School</h4>
                <p>CS 2018</p>
              </div>

            </div>
          </section>
        </section>
        
      </div>
    )
  }
}

export default Resume;
