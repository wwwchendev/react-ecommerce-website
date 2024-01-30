import React from 'react'
import PageHeader from '../../components/PageHeader';

const subTitle = "關於我們的品牌";
const title = "優質的服務和更好的體驗";
const desc =
  "獨特地為用戶提供多功能的訪問，同時透明的流程激勵高效的功能，而不是可擴展的架構，傳達槓桿服務和跨平台。";


const year = "30+";
const expareance = "年業界經驗";

const aboutList = [
  {
    imgUrl: '/images/about/icon/01.jpg',
    imgAlt: '關於圖示 rajibraj91 rajibraj',
    title: '熟練的講師',
    desc: '獨特地提供多功能用戶訪問，同時傳達槓桿服務',
  },
  {
    imgUrl: '/images/about/icon/02.jpg',
    imgAlt: '關於圖示 rajibraj91 rajibraj',
    title: '獲得證書',
    desc: '獨特地提供多功能用戶訪問，同時傳達槓桿服務',
  },
  {
    imgUrl: '/images/about/icon/03.jpg',
    imgAlt: '關於圖示 rajibraj91 rajibraj',
    title: '線上課程',
    desc: '獨特地提供多功能用戶訪問，同時傳達槓桿服務',
  },
];

const About = () => {
  return (
    <div>
      <PageHeader title={'關於品牌'} currentPage={`About`} />
      <div className="about-section style-3 padding-tb section-bg">
        <div className="container">
          <div className="row justify-content-center row-cols-xl-2 row-cols-1 align-items-center">
            <div className="col">
              <div className="about-left">
                <div className="about-thumb">
                  <img src="/images/about/01.jpg" alt="" />
                </div>
                <div className="abs-thumb">
                  <img src="/images/about/02.jpg" alt="" />
                </div>
                <div className="about-left-content">
                  <h3>{year}</h3>
                  <p>{expareance}</p>
                </div>
              </div>
            </div>
            <div className='col'>
              <div className="about-right">
                <div className="section-header">
                  <span className="subtitle">{subTitle}</span>
                  <h2 className="title">{title}</h2>
                  <p>{desc}</p>
                </div>
                <div className="section-wrapper">
                  <ul className="lab-ul">
                    {
                      aboutList.map((val, i) => (
                        <li key={i}>
                          <div className="sr-left">
                            <img src={val.imgUrl} alt="" />
                          </div>
                          <div className="sr-right">
                            <h5>{val.title}</h5>
                            <p>{val.desc}</p>
                          </div>
                        </li>
                      ))
                    }
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About