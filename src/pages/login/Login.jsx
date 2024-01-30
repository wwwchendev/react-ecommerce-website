import React, { useContext, useState } from 'react'
import { useLocation, useNavigate, Link } from 'react-router-dom'
import { AuthContext } from '../../context/AuthProvider'
const title = '登入'
const socialTitle = '第三方登入'
const btnText = '立即登入'

const Login = () => {
  const [errorMessage, serErrorMessage] = useState('');
  const { signUpWithGoogle, login } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || '/';
  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    login(email, password)
      .then((result) => {
        const user = result.user;
        alert('登入成功')
        navigate(from, { replace: true })
      })
      .catch((error) => {
        const errorMessage = error.message;
        serErrorMessage('請輸入有效的帳號密碼')
      })
  }
  const handleRegister = (e) => {
    signUpWithGoogle().then((result) => {
      const user = result.user;
      navigate(from, { replace: true })
    })
      .catch((error) => {
        const errorMessage = error.message;
        serErrorMessage('第三方登入失敗')
        console.log(errorMessage);
      })
  }
  return (
    <div className="login-section padding-tb section-bg">
      <div className="container">
        <div className="account-wrapper">
          <h3 className="title">{title}</h3>
          <form className="account-form" onSubmit={handleLogin}>
            <div className="form-group">
              <input type="email" name="email" id="email" placeholder='email' required />
            </div>
            <div className="form-group">
              <input type="password" name='password' id='password' placeholder='密碼' />
            </div>
            <div>
              {
                errorMessage && (
                  <div className="error-message text-danger">
                    {errorMessage}
                  </div>
                )
              }
            </div>
            <div className="form-group">
              <div className="d-flex justify-content-between flex-wrap pt-sm-2">
                <div className="checkgroup">
                  <input type="checkbox" name='remember' id='remember' />
                  <label htmlFor='remember'>記住密碼</label>
                </div>
                <Link to='forgetPassword'>忘記密碼?</Link>
              </div>
            </div>
            <div className="form-group">
              <button type='submit' className='d-block lab-btn'>
                <span>{btnText}</span>
              </button>
            </div>
            <div className="account-bottom">
              <span className='d-block cate pt-10'>
                還沒有帳號嗎？<Link to='/sign-up'>註冊</Link>
              </span>
              <span className="or">
                <span>or</span>
              </span>
              <h5 className="subtitle">{socialTitle}</h5>
              <ul className="lab-ul social-icons justify-content-center">
                <li>
                  <button className="github" onClick={handleRegister}><i className="icofont-github"></i></button>
                </li>
                <li>
                  <a href="/" className='facebook'><i className="icofont-facebook"></i></a>
                </li>
                <li>
                  <a href="/" className='twitter'><i className="icofont-twitter"></i></a>
                </li>
                <li>
                  <a href="/" className='linkedin'><i className="icofont-linkedin"></i></a>
                </li>
                <li>
                  <a href="/" className='instagram'><i className="icofont-instagram"></i></a>
                </li>
              </ul>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login