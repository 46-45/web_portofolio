import React from 'react'
import './about.css'
import ME from '../../assets/me-about.jpg'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {AiOutlineFolderOpen} from 'react-icons/ai'

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Image" />
          </div>
        </div>
        
        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <FaAward className='about__icon'/>
              <h5>Role</h5>
              <small>Website and Android Developer</small>
            </article>

            <article className='about__card'>
              <FiUsers className='about__icon'/>
              <h5>Clients</h5>
              <small>Everyone who needs help</small>
            </article>

            <article className='about__card'>
              <AiOutlineFolderOpen className='about__icon'/>
              <h5>Projects</h5>
              <small>Last Project 1, Last Project 2 and Final Project</small>
            </article>
          </div>

          <p>
          My name is Daniel Silalahi. I am a final year student majoring in informatics engineering.
Passionate about softwaredevelopment. Has knowledge of competitive programming and loves
algorithms, can learn new things quickly, and enjoys learningnewthings about technology. Have
good interpersonal communication and comfortable working in a teamor individually
          </p>

          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About