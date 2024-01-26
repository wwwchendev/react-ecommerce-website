import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import logo from '../assets/images/logo/logo.png'
const NavItems = () => {
  const [headerFixed, setHeaderFixed] = useState(false);
  const [menuToggle, setMenuToggle] = useState(false);
  const [socialToggle, setSocialToggle] = useState(false);

  // 監聽視窗滾動位置 固定Header
  window.addEventListener('scroll', () => {
    if (window.scrollY > 200) {
      setHeaderFixed(true)
    } else {
      setHeaderFixed(false)
    }
  })

  return (
    <header className={`header-section style-4 ${headerFixed ? 'header-fixed fadeInUp' : ''}`}>
      {/* header-top-start */}
      <div className={`header-top d-md-none ${socialToggle ? 'open' : ''} `}>
        <div className="container">
          <div className="header-top-area">
            <Link to='/sign-up' className='lab-btn me-3'><span>註冊</span></Link>
            <Link to='/login'><span>登入</span></Link>
          </div>
        </div>
      </div>
      {/* header-bottom*/}
      <div className="header-bottom">
        <div className="container">
          <div className="header-wrapper">
            {/* logo*/}
            <div className="logo-search-acte">
              <div className="logo">
                <Link to={'/'}>
                  <img src={logo} alt="" />
                </Link>
              </div>
            </div>
            {/* menu-area */}
            <div className="menu-area">
              <div className="menu">
                <ul className={`lab-ul ${menuToggle ? 'active' : ''}`}>
                  <li><Link to='/'>首頁</Link></li>
                  <li><Link to='/shop'>商店</Link></li>
                  <li><Link to='/blog'>專欄</Link></li>
                  <li><Link to='/about'>關於</Link></li>
                  <li><Link to='/contact'>聯絡</Link></li>
                </ul>
              </div>
              {/* sign-up & login */}
              <Link to='/sign-up' className='lab-btn me-3 d-none d-md-block'><span>註冊</span></Link>
              <Link to='/login' className='d-none d-md-block'><span>登入</span></Link>

              {/* menu toggler */}
              <div className={`header-bar d-lg-none ${menuToggle ? 'active' : ''}`} onClick={() => { setMenuToggle(!menuToggle) }}>
                <span></span>
                <span></span>
                <span></span>
              </div>

              {/* social-toggler */}
              <div className='ellepsis-bar d-md-none' onClick={() => { setSocialToggle(!socialToggle) }}>
                <i className='icofont-info-square'></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default NavItems