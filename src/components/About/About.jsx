import React from 'react'
import './About.css'
import ME from '../../assets/aboutt.jpg'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from   'react-icons/fi'
import {VscFolderLibrary} from   'react-icons/vsc'

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className="container about_container">
        <div className="about_me">
          <div className="about_me-image">
            <img src={ME} alt='about'/>
          </div>
        </div>
        <div className="about_content">
          <div className="about_cards">
            <article className='about_card'>
              <FaAward className='about_icon'/>
            <h5>Experience</h5>
            <small>3+ Years Working</small>
            </article>
            <article className='about_card'>
              <VscFolderLibrary className='about_icon'/>
            <h5>Projects </h5>
            <small>30 + Completed Projects</small>
            </article>
          </div>
          
          <p>
            I am a skilled professional with expertise in various areas. My experience spans over 3 years, during which I have successfully completed 30+ projects. My key skills include but are not limited to:

            - Frontend Development
            - Backend Development
            - UI/UX Design
            - Project Management
            - Problem Solving
            - Team Collaboration
          </p>
          <a  href='#contact' className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About
