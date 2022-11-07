import React from 'react'
import './portofolio.css'
import IMG1 from '../../assets/portfolio1.jpg'
import IMG2 from '../../assets/portfolio2.jpg'
import IMG3 from '../../assets/portfolio3.jpg'
import IMG4 from '../../assets/portfolio4.jpg'
import IMG5 from '../../assets/portfolio5.png'
import IMG6 from '../../assets/portfolio6.jpg'


const data = [
  {
    id: 1,
    image: IMG1,
    title: 'Crypto Currency Dashboard & Financial Visualization',
    github: 'https://github.com',
    demo: 'https://dribbble.com/shots/16673715-Crypto-currency-dashboards-and-financial-data-visualization'
  },
  {
    id: 2,
    image: IMG2,
    title: 'NFT Marketplace Mobile App',
    github: 'https://github.com',
    demo: 'https://dribbble.com/shots/17733146-NFT-Marketplace-Mobile-App'
  },
  {
    id: 3,
    image: IMG3,
    title: 'Digital Agency Mobile Responsive',
    github: 'https://github.com',
    demo: 'https://dribbble.com/shots/17735013-Digital-Agency-Mobile-Responsive'
  },
  {
    id: 4,
    image: IMG4,
    title: 'Minimum Lovable Product for a remote access software',
    github: 'https://github.com',
    demo: 'https://dribbble.com/shots/17734926-Minimum-Lovable-Product-for-a-remote-access-software'
  },
  {
    id: 5,
    image: IMG5,
    title: 'NFTMAN - NFT Auction Mobile App',
    github: 'https://github.com',
    demo: 'https://dribbble.com/shots/17732346-NFTMAN-NFT-Auction-Mobile-App'
  },
  {
    id: 6,
    image: IMG6,
    title: 'Financial Landing Page',
    github: 'https://github.com',
    demo: 'https://dribbble.com/shots/17732660-FinKT-Financial-Landing-Page'
  }
]

const Portofolio = () => {
  return (
    <section id='portofolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {
          data.map(({id, image, title, github, demo}) =>{
            return (
          <article key={id} className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={image} alt={title}/>
          </div>
          <h3>Masih Kosong </h3>
          <div className="portfolio__item-cta">
          <a href= {github} className='btn' target='_blank'>Github</a>
          <a href= {demo} className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>
            )
          })
        } 
      </div>
    </section>
  )
}

export default Portofolio