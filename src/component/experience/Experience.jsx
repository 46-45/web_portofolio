import React from 'react'
import './experience.css'
import {FaCheckCircle} from 'react-icons/fa'

const Experience = () => {
  return (
    <section id='experience'>
      <h5>What Skills I Have</h5>
      <h2>Additional</h2>

      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Skills</h3>
          <div className="experience__content">
            <article className='experience__details'>
              <FaCheckCircle className='experience__details-icon'/>
              <div>
              <h4>PHP/Laravel/CodeIgniter</h4>
              </div>
            </article>
            <article className='experience__details'>
              <FaCheckCircle className='experience__details-icon'/>
              <div>
              <h4>Java/Springboot</h4>
              </div>
            </article>
            <article className='experience__details'>
              <FaCheckCircle className='experience__details-icon'/>
              <div>
              <h4>Javascript</h4>
              </div>
            </article>
            <article className='experience__details'>
              <FaCheckCircle className='experience__details-icon'/>
              <div>
              <h4>ReactJs/VueJs</h4>
              </div>
            </article>
            <article className='experience__details'>
              <FaCheckCircle className='experience__details-icon'/>
              <div>
              <h4>Kotlin, Flutter</h4>
              </div>
            </article>
            <article className='experience__details'>
              <FaCheckCircle className='experience__details-icon'/>
              <div>
              <h4>Python</h4>
              </div>
            </article>
            <article className='experience__details'>
              <FaCheckCircle className='experience__details-icon'/>
              <div>
              <h4>PostgreSql/MySql/NoSql</h4>
              </div>
            </article>
            <article className='experience__details'>
              <FaCheckCircle className='experience__details-icon'/>
              <div>
              <h4>Database</h4>
              </div>
            </article>
            <article className='experience__details'>
              <FaCheckCircle className='experience__details-icon'/>
              <div>
              <h4>Git</h4>
              </div>
            </article>
            <article className='experience__details'>
              <FaCheckCircle className='experience__details-icon'/>
              <div>
              <h4>RestfulAPI</h4>
              </div>
            </article>
          </div>
        </div>

        {/* End Of Global*/}

        <div className="experience__backend">
        <h3>Certificate</h3>
          <div className="experience__content">
            <article className='experience__details'>
              <FaCheckCircle className='experience__details-icon'/>
              <div>
              <h4>Foundations of Cybersecurity</h4>
              <small className='text-light'>by Google Coursera</small>
              </div>
            </article>
            <article className='experience__details'>
              <FaCheckCircle className='experience__details-icon'/>
              <div>
              <h4>Javascript Intermediate Certificate</h4>
              <small className='text-light'>HackerRank</small>
              </div>
            </article>
            <article className='experience__details'>
              <FaCheckCircle className='experience__details-icon'/>
              <div>
              <h4>Oracle Cloud Infrastructure 2022</h4>
              <small className='text-light'>Certificated Foundation Associate</small>
              </div>
            </article>
            <article className='experience__details'>
              <FaCheckCircle className='experience__details-icon'/>
              <div>
              <h4>Python Basic Certificate</h4>
              <small className='text-light'>HackerRank</small>
              </div>
            </article>
            <article className='experience__details'>
              <FaCheckCircle className='experience__details-icon'/>
              <div>
              <h4>Certificate MSIB</h4>
              <small className='text-light'>By Kampus Merdeka</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience