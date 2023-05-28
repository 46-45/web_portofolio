import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/me.png'
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Daniel Silalahi</h1>
        <h5 className="text-light">If you're not a good shot today, don't worry. There are other ways to be useful.</h5>
        <CTA />
        <HeaderSocials />

        <div className='me'>
          <img src={ME} alt="me"></img>
        </div>

        <a href='#contact' className='scroll__down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default Header