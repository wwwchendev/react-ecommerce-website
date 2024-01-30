import React from 'react';
import { Link } from 'react-router-dom';

const btnText = "免費註冊";
const title = "隨時隨地學習";
const desc = "使用我們的應用程式在任何裝置上學習您想學的任何時間。只需下載、安裝，即可開始學習。";

export const AppSection = () => {
  return (
    <div className='app-section padding-tb'>
      <div className="container">
        <div className="section-header text-center">
          <Link to='/sign-up' className='lab-btn mb-4'>{btnText}</Link>
          <h2 className='title'>{title}</h2>
          <p>{desc}</p>
        </div>
        <div className="section-wrapper">
          <ul className="lab-ul">
            <li>
              <a href="#">
                <img src="/images/app/01.jpg" alt="" />
              </a>
            </li>
            <li>
              <a href="#">
                <img src="/images/app/02.jpg" alt="" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
