import React from 'react'
import './portofolio.css'
import IMG1 from '../../assets/portfolio1.png'
import IMG2 from '../../assets/portfolio2.jpg'
import IMG3 from '../../assets/images.jpg'
import IMG4 from '../../assets/fr.png'
import IMG5 from '../../assets/portfolio5.png'
import IMG6 from '../../assets/portfolio6.jpg'


const data = [
  {
    id: 1,
    image: IMG1,
    title: 'Data Collect for Dataset Face Recognition',
    github: 'https://github.com/46-45/data_collect'
  },
  {
    id: 2,
    image: IMG2,
    title: 'E-Commerce Website',
    github: 'https://github.com/46-45/online_shop'
  },
  {
    id: 3,
    image: IMG3,
    title: 'QR Generator Flutter',
    github: 'https://github.com/46-45/QR-Generator-Flutter'
  },
  {
    id: 4,
    image: IMG4,
    title: 'Face Recognition use Eigenface',
    github: 'https://github.com/46-45/FaceRecognition-use-Eigenface'
  },
  {
    id: 5,
    image: IMG5,
    title: '-',
    github: 'https://github.com'
  },
  {
    id: 6,
    image: IMG6,
    title: '-',
    github: 'https://github.com'
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
          <h3>{title} </h3>
          <div className="portfolio__item-cta">
          <a href= {github} className='btn' target='_blank'>Github</a>
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