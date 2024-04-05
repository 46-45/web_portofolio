import React from 'react'
import './testimonials.css'
import AVTR1 from '../../assets/avatar1.jpg'
import AVTR2 from '../../assets/avatar2.jpg'
import AVTR3 from '../../assets/avatar3.jpg'
import AVTR4 from '../../assets/avatar4.jpg'

// import Swiper core and required modules
import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


const data = [
  {
    avatar: AVTR1,
    name: 'Risky Jeremia Rendra Simanjuntak',
    review: 'Daniel adalah orang yang berkepribadian baik, suka menolong orang, ramah serta rendah hati.Saya sangat beruntung dapat menjadi temannya walaupun saya orangnya ceroboh.'
  },
  {
    avatar: AVTR2,
    name: 'Nico Felix Harefa',
    review: 'Bagi saya, memiliki teman seperti Daniel adalah salah satu anugerah terindah dari Tuhan.Yang dimana Daniel memiliki jiwa yang sangat mulia dibandingkan saya'
  },
  {
    avatar: AVTR3,
    name: 'Sloganti Pardamean Harianja',
    review: 'Terkadang saya kebingungan untuk menghadapi masalah di dunia ini, namun saat saya meminta saran dari Daniel, seketika hidup saya seperti kembali kejalan yang benar.'
  },
  {
    avatar: AVTR4,
    name: 'Mengselidiki Kasus Rumahorbo',
    review: 'Saya dulu pernah dikeluarkan dari sekolah karena saya ketahuan merokok di kelas.Namun berkat Daniel, saya tidak jadi dikeluarkan karena dia adalah salah satu orang paling berpengaruh di sekolah kami.'
  }
]

const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Review from friends</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonials__container"
      // install Swiper modules
      modules={[Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      pagination={{ clickable: true }}>
        {
          data.map(({avatar, name, review}, index) => {
            return (
          <SwiperSlide key={index} className="testimonial">
            <div className="client__avatar">
              <img src={avatar}/>
            </div>
            <h5 className='client__name'>{name}</h5>
            <small className='client__review'> {review} </small>
          </SwiperSlide>
            )
          })
        }
      </Swiper>
    </section>
  )
}

export default Testimonials