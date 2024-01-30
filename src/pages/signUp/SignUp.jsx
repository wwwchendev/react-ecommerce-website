import React, { useContext, useState } from 'react'
import { AuthContext } from '../../context/AuthProvider'
import { useLocation, useNavigate, Link } from 'react-router-dom'
const title = '註冊'
const socialTitle = '第三方登入'
const btnText = '立即註冊'

const SignUp = () => {
  const [errorMessage, serErrorMessage] = useState('');
  const { signUpWithGoogle, createUser } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || '/';

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
  const handleSignUp = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    const confirmPassword = form.confirmPassword.value;
    if (password !== confirmPassword) {
      serErrorMessage('兩次密碼輸入不一致')
    } else {
      serErrorMessage('')
      createUser(email, password)
        .then((userCredential) => {
          const user = userCredential.user;
          alert('註冊成功');
          navigate(from, { replace: true })
        })
        .catch((error) => {
          const errorMessage = error.message;
          if (error.customData._tokenResponse.error.message === 'EMAIL_EXISTS') {
            serErrorMessage(`註冊失敗, 帳號已註冊`)
          } else {
            console.log(errorMessage);
            serErrorMessage(`註冊失敗`)
          }
        })
    }

  }
  return (
    <div className="login-section padding-tb section-bg">
      <div className="container">
        <div className="account-wrapper">
          <h3 className="title">{title}</h3>
          <form className="account-form" onSubmit={handleSignUp}>
            <div className="form-group">
              <input type="name" name='name' id='name' placeholder='全名' required />
            </div>
            <div className="form-group">
              <input type="email" name="email" id="email" placeholder='email' required />
            </div>
            <div className="form-group">
              <input type="password" name='password' id='password' placeholder='密碼' required />
            </div>
            <div className="form-group">
              <input type="password" name='confirmPassword' id='confirmPassword' placeholder='再次確認密碼' required />
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
              <button type='submit' className='d-block lab-btn'>
                <span>{btnText}</span>
              </button>
            </div>
            <div className="account-bottom">
              <span className='d-block cate pt-10'>
                已經註冊帳號了嗎？<Link to='/login'>登入</Link>
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

export default SignUp