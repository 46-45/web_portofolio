import React from 'react'
import './services.css'
import {BsCheck2} from 'react-icons/bs'

const Services = () => {
  return (
    <section id='services'>
      <h5>Other</h5>
      <h2>Info</h2>

      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>Organizations</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BsCheck2 className='service__list-icon'/>
              <p>Departemen Fasilitas dan Infrastruktur Himatif</p>
            </li>
            <li>
              <BsCheck2 className='service__list-icon'/>
              <p>Komisi Pemilihan Umum Himatif</p>
            </li>
            <li>
              <BsCheck2 className='service__list-icon'/>
              <p>Anggota Himatif</p>
            </li>
            <li>
              <BsCheck2 className='service__list-icon'/>
              <p>-</p>
            </li>
            <li>
              <BsCheck2 className='service__list-icon'/>
              <p>-</p>
            </li>
            <li>
              <BsCheck2 className='service__list-icon'/>
              <p>-</p>
            </li>
          </ul>
        </article>
        {/*END OF Joki Rank*/}
        <article className="service">
          <div className="service__head">
            <h3>-</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BsCheck2 className='service__list-icon'/>
              <p>-</p>
            </li>
            <li>
              <BsCheck2 className='service__list-icon'/>
              <p>-</p>
            </li>
            <li>
              <BsCheck2 className='service__list-icon'/>
              <p>-</p>
            </li>
            <li>
              <BsCheck2 className='service__list-icon'/>
              <p>-</p>
            </li>
            <li>
              <BsCheck2 className='service__list-icon'/>
              <p>-</p>
            </li>
            <li>
              <BsCheck2 className='service__list-icon'/>
              <p>-</p>
            </li>
            <li>
              <BsCheck2 className='service__list-icon'/>
              <p>-</p>
            </li>
          </ul>
        </article>
        {/*Joki Winrate*/}
        <article className="service">
          <div className="service__head">
            <h3>-</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BsCheck2 className='service__list-icon'/>
              <p>-</p>
            </li>            
            <li>
              <BsCheck2 className='service__list-icon'/>
              <p>-</p>
            </li>            
            <li>
              <BsCheck2 className='service__list-icon'/>
              <p>-</p>
            </li>            
            <li>
              <BsCheck2 className='service__list-icon'/>
              <p>-</p>
            </li>            
            <li>
              <BsCheck2 className='service__list-icon'/>
              <p>-</p>
            </li>            
            <li>
              <BsCheck2 className='service__list-icon'/>
              <p>-</p>
            </li>            
            <li>
              <BsCheck2 className='service__list-icon'/>
              <p>-</p>
            </li>            
          </ul>
        </article>
        {/*END OF Joki*/}
      </div>
    </section>
  )
}

export default Services