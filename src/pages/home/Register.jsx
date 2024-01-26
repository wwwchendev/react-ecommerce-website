import React from 'react'
const subTitle = '不容錯過'
const title = (
  <h2 className='title text-nowrap'>參加全日工作坊深入掌握<br /><b><span>進階</span>銷售</b>技巧</h2>
)
const desc = '各 行 各 業 銷 售 專 家 講 師 陣 容';
const Register = () => {
  return (
    <section className="register-section padding-tb pb-0">
      <div className="container">
        <div className="row row-cols-lg-2 row-cols-1 align-items-center ">
          <div className="col">
            <div className="section-header">
              <span className="subtitle ">{subTitle}</span>
              {title}
              <p>{desc}</p>
            </div>
          </div>
          <div className="col">
            <div className="section-wrapper">
              <h4>報名參加</h4>
              <form className="register-form">
                <input type="text" name='name' placeholder='Username' className='reg-input' />
                <input type="email" name='email' placeholder='Email' className='reg-input' />
                <input type="tel" name='phone' placeholder='Phone' className='reg-input' />
                <button type='submit' className='lab-btn'>提交</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Register