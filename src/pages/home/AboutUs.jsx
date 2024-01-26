import React from 'react'
import CountUp from 'react-countup';
import { Link } from 'react-router-dom';

const subTitle = "為什麼選擇我們";
const title = "成為一位商家";
const desc = "使用我們的應用程式在任何裝置上學習各種商業知識。只需下載、安裝，即可開始學習。";
const btnText = "立即申請";

const countList = [
  {
    iconName: 'icofont-users-alt-4',
    count: '12600',
    text: '已註冊商家',
  },
  {
    iconName: 'icofont-graduate-alt',
    count: '30',
    text: '認證課程',
  },
  {
    iconName: 'icofont-notification',
    count: '100',
    text: '獎勵和禮品卡',
  },
];

const AboutUs = () => {
  return (
    <div className="instructor-section style-2 padding-tb section-bg-ash">
      <div className="container">
        <div className="section-wrapper">
          <div className="row g-4 justify-content-center align-items-center row-cols-1 row-cols-md-2  row-cols-xl-3">
            <div className="col">
              {
                countList.map((count, idx) => {
                  return (
                    <div key={idx} className="count-item">
                      <div className="count-inner">
                        <div className="count-icon">
                          <i className={count.iconName}></i>
                        </div>
                        <div className="count-content">
                          <h2>
                            <span><CountUp end={count.count} /></span>
                            <span>+</span>
                          </h2>
                          <p>{count.text}</p>
                        </div>
                      </div>
                    </div>
                  )
                })
              }
            </div>
            <div className="col">
              <div className="instructor-content">
                <span className='subtitle'>{subTitle}</span>
                <h2 className='title'>{title}</h2>
                <p>{desc}</p>
                <Link to='/sign-up' className='lab-btn'>{btnText}</Link>
              </div>
            </div>
            <div className="col">
              <div className="instructor-thumb">
                <img src="/src/assets/images/instructor/01.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutUs