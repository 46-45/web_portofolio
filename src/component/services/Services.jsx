import React from 'react'
import './services.css'
import {BsCheck2} from 'react-icons/bs'

const Services = () => {
  return (
    <section id='services'>
      <h5>Other</h5>
      <h2>My Experience</h2>

      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>PT Kazeto Putra Perkasa</h3>
            <h3>Intern (Feb 2023 - July 2023)</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BsCheck2 className='service__list-icon'/>
              <p>Work with a team on an internal project to build a Website using PHP with CI3 and Laravel Framework </p>
            </li>
            <li>
              <BsCheck2 className='service__list-icon'/>
              <p>Work with a team on an internal project deploy Website using Docker </p>
            </li>
            <li>
              <BsCheck2 className='service__list-icon'/>
              <p>Work with a team on an internal project to make UI Design using Figma</p>
            </li>
            <li>
              <BsCheck2 className='service__list-icon'/>
              <p>Collecting data, creating flowcharts and designing databases</p>
            </li>
            <li>
              <BsCheck2 className='service__list-icon'/>
            <p>Ensure all features in the application run according to requirements and ensure application changes are recorded in the data</p>
            </li>
          </ul>
        </article>
        {/*END OF Joki Rank*/}
        <article className="service">
          <div className="service__head">
            <h3>PT Digireg Indonesia</h3>
            <h3>July 2023 - Jan 2024</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BsCheck2 className='service__list-icon'/>
              <p>Proficient in building applications using Python, PHP, including the CodeIgniter 4 (CI4) framework</p>
            </li>
            <li>
              <BsCheck2 className='service__list-icon'/>
              <p>Skilled in web application development using JavaScript, particularly Vue.js for responsive and engaging frontend logic</p>
            </li>
            <li>
              <BsCheck2 className='service__list-icon'/>
              <p>Experienced in designing and implementing RESTful APIs for efficient communication between backend applications and clients or other applications</p>
            </li>
            <li>
              <BsCheck2 className='service__list-icon'/>
              <p>Experience in database design and management, including query optimization and SQL database administration</p>
            </li>
          </ul>
        </article>
        {/*Joki Winrate*/}
        <article className="service">
          <div className="service__head">
            <h3>PT Ringan Teknologi Indonesia</h3>
            <h3>Jan 2024 - Present</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BsCheck2 className='service__list-icon'/>
              <p>Planning and design system architecture according to project requirements </p>
            </li>            
            <li>
              <BsCheck2 className='service__list-icon'/>
              <p>Write system architecture, API and other technical documentation </p>
            </li>            
            <li>
              <BsCheck2 className='service__list-icon'/>
              <p>Responsible for coding quality and ensure it meets business logic </p>
            </li>            
            <li>
              <BsCheck2 className='service__list-icon'/>
              <p>Participate in the formulation of the system’s overall technical standards and specifications and the examination of their implementation</p>
            </li>            
            <li>
              <BsCheck2 className='service__list-icon'/>
              <p>Test, optimize and maintain the project to ensure its stability and reliability</p>
            </li>            
            <li>
              <BsCheck2 className='service__list-icon'/>
              <p>Java, Springboot, NoSQL </p>
            </li>             
          </ul>
        </article>
        {/*END OF Joki*/}
      </div>
    </section>
  )
}

export default Services