import React, { useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import logo from '../assets/images/logo/logo.png'
import { AuthContext } from '../context/AuthProvider'

const NavItems = () => {
  const [headerFixed, setHeaderFixed] = useState(false);
  const [menuToggle, setMenuToggle] = useState(false);
  const [socialToggle, setSocialToggle] = useState(false);
  const navigate = useNavigate();

  // auth info
  const { user, logOut } = useContext(AuthContext)
  // console.log(user);
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
            {user === null
              ? (<>
                <Link to='/sign-up' className='lab-btn me-3'><span>註冊</span></Link>
                <Link to='/login'><span>登入</span></Link>
              </>)
              : (<>
                <div className="navUserInfo" onClick={() => {
                  const userOperation = document.getElementById('userOperation');
                  if (userOperation) {
                    userOperation.classList.toggle('d-none');
                  }
                }}>
                  <div className="nav-profile" style={{
                    backgroundImage: user.photoURL ? `url(${user.photoURL})`
                      : 'url("/images/clients/avater.jpg")'
                  }}></div>
                  <span className='ms-2'>
                    {user.displayName ? user.displayName : "user"}
                  </span>
                </div>
                <div className="card-footer text-muted" onClick={() => { logOut() }}>
                  登出
                </div>
              </>)
            }
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
              {user === null
                ? (<>
                  <Link to='/sign-up' className='lab-btn me-3 d-none d-md-block'><span>註冊</span></Link>
                  <Link to='/login' className='d-none d-md-block'><span>登入</span></Link>
                </>)
                : (<>
                  <div className="navUserInfo" onClick={() => {
                    const userOperation = document.getElementById('userOperation');
                    if (userOperation) {
                      userOperation.classList.toggle('d-none');
                    }
                  }}>
                    <div className="nav-profile" style={{
                      backgroundImage: user.photoURL ? `url(${user.photoURL})`
                        : 'url("/images/clients/avater.jpg")'
                    }}>
                    </div>
                    <div className='ms-2'>
                      <span>
                        {user.displayName ? user.displayName : "user"}
                      </span>
                      <i className="icofont-caret-down"></i>
                    </div>
                    <div className="card userOperation d-none" id='userOperation'>
                      <ul className="list-group list-group-flush">
                        <li className="list-group-item border-0" onClick={() => { navigate('/cart-page') }}>購物車</li>
                        <li className="list-group-item border-0">訂單</li>
                      </ul>

                      <div className="card-footer text-muted" onClick={() => { logOut() }}>
                        登出
                      </div>
                    </div>
                  </div>
                </>
                )
              }

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