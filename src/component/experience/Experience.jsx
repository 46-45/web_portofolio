import React from 'react'
import './experience.css'
import {FaCheckCircle} from 'react-icons/fa'

const Experience = () => {
  return (
    <section id='experience'>
      <h5>What Skill I Have</h5>
      <h2>My Experience</h2>

      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Skill</h3>
          <div className="experience__content">
            <article className='experience__details'>
              <FaCheckCircle className='experience__details-icon'/>
              <div>
              <h4>PHP</h4>
              <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience__details'>
              <FaCheckCircle className='experience__details-icon'/>
              <div>
              <h4>C</h4>
              <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience__details'>
              <FaCheckCircle className='experience__details-icon'/>
              <div>
              <h4>Javascript</h4>
              <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience__details'>
              <FaCheckCircle className='experience__details-icon'/>
              <div>
              <h4>ReactJs</h4>
              <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience__details'>
              <FaCheckCircle className='experience__details-icon'/>
              <div>
              <h4>Kotlin</h4>
              <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience__details'>
              <FaCheckCircle className='experience__details-icon'/>
              <div>
              <h4>Python</h4>
              <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience__details'>
              <FaCheckCircle className='experience__details-icon'/>
              <div>
              <h4>Laravel</h4>
              <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience__details'>
              <FaCheckCircle className='experience__details-icon'/>
              <div>
              <h4>Database</h4>
              <small className='text-light'>Experienced</small>
              </div>
            </article>
          </div>
        </div>

        {/* End Of Global*/}

        <div className="experience__backend">
        <h3>Achievements</h3>
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
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience