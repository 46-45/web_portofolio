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
          <h3>Top Global</h3>
          <div className="experience__content">
            <article className='experience__details'>
              <FaCheckCircle className='experience__details-icon'/>
              <div>
              <h4>Global 1 Yss</h4>
              <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience__details'>
              <FaCheckCircle className='experience__details-icon'/>
              <div>
              <h4>Global 7 Lancelot</h4>
              <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience__details'>
              <FaCheckCircle className='experience__details-icon'/>
              <div>
              <h4>Global 4 Ling</h4>
              <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience__details'>
              <FaCheckCircle className='experience__details-icon'/>
              <div>
              <h4>Global 10 Gusion</h4>
              <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience__details'>
              <FaCheckCircle className='experience__details-icon'/>
              <div>
              <h4>Global 2 Pharsa</h4>
              <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience__details'>
              <FaCheckCircle className='experience__details-icon'/>
              <div>
              <h4>Global 3 Natalia</h4>
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
              <h4>IESPA Season 1 Champion</h4>
              <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience__details'>
              <FaCheckCircle className='experience__details-icon'/>
              <div>
              <h4>IESPA Season 2 RunnerUp</h4>
              <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience__details'>
              <FaCheckCircle className='experience__details-icon'/>
              <div>
              <h4>Regent Cup RunnerUp</h4>
              <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience__details'>
              <FaCheckCircle className='experience__details-icon'/>
              <div>
              <h4>Champion Del 20 Times in a row</h4>
              <small className='text-light'>Experienced</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience