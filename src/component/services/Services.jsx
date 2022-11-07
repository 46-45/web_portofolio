import React from 'react'
import './services.css'
import {BsCheck2} from 'react-icons/bs'

const Services = () => {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>Joki Rank</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BsCheck2 className='service__list-icon'/>
              <p>Warrior - Elite</p>
            </li>
            <li>
              <BsCheck2 className='service__list-icon'/>
              <p>Eliter - Master</p>
            </li>
            <li>
              <BsCheck2 className='service__list-icon'/>
              <p>Master - Grand Master</p>
            </li>
            <li>
              <BsCheck2 className='service__list-icon'/>
              <p>Grand Master - Epic</p>
            </li>
            <li>
              <BsCheck2 className='service__list-icon'/>
              <p>Epic - Legend</p>
            </li>
            <li>
              <BsCheck2 className='service__list-icon'/>
              <p>Legend - Mythic</p>
            </li>
            <li>
              <BsCheck2 className='service__list-icon'/>
              <p>Mythic - Mythic Glory</p>
            </li>
          </ul>
        </article>
        {/*END OF Joki Rank*/}
        <article className="service">
          <div className="service__head">
            <h3>Joki Winrate</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BsCheck2 className='service__list-icon'/>
              <p>30% - 40%</p>
            </li>
            <li>
              <BsCheck2 className='service__list-icon'/>
              <p>40% - 50%</p>
            </li>
            <li>
              <BsCheck2 className='service__list-icon'/>
              <p>50% - 60%</p>
            </li>
            <li>
              <BsCheck2 className='service__list-icon'/>
              <p>60% - 70%</p>
            </li>
            <li>
              <BsCheck2 className='service__list-icon'/>
              <p>70% - 80%</p>
            </li>
            <li>
              <BsCheck2 className='service__list-icon'/>
              <p>80% - 90%</p>
            </li>
            <li>
              <BsCheck2 className='service__list-icon'/>
              <p>90% - 99%</p>
            </li>
          </ul>
        </article>
        {/*Joki Winrate*/}
        <article className="service">
          <div className="service__head">
            <h3>Joki MMR</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BsCheck2 className='service__list-icon'/>
              <p>0 - 1500 MMR</p>
            </li>
            <li>
              <BsCheck2 className='service__list-icon'/>
              <p>1501 - 2000 MMR</p>
            </li>
            <li>
              <BsCheck2 className='service__list-icon'/>
              <p>2001 - 2500 MMR</p>
            </li>
            <li>
              <BsCheck2 className='service__list-icon'/>
              <p>2501 - 3000 MMR</p>
            </li>
            <li>
              <BsCheck2 className='service__list-icon'/>
              <p>3001 - 3500 MMR</p>
            </li>
            <li>
              <BsCheck2 className='service__list-icon'/>
              <p>3501 - 4000 MMR</p>
            </li>
            <li>
              <BsCheck2 className='service__list-icon'/>
              <p>4000+ MMR</p>
            </li>
          </ul>
        </article>
        {/*END OF Joki*/}
      </div>
    </section>
  )
}

export default Services