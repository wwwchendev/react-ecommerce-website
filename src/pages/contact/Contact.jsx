import React from 'react'
import PageHeader from '../../components/PageHeader';
import GoogleMap from '../../components/GoogleMap';
const subTitle = "與我們聯絡";
const title = "我們隨時準備聽取您的意見！";
const conSubTitle = "聯繫我們";
const conTitle = "填寫表格，讓我們更了解您和您的需求。";
const btnText = "提交";


const contactList = [
  {
    imgUrl: "/images/icon/01.png",
    imgAlt: "contact icon",
    title: "辦公室地址",
    desc: "1201 公園街，第五大道",
  },
  {
    imgUrl: "/images/icon/02.png",
    imgAlt: "contact icon",
    title: "電話號碼",
    desc: "+22698 745 632，02 982 745",
  },
  {
    imgUrl: "/images/icon/03.png",
    imgAlt: "contact icon",
    title: "發送電子郵件",
    desc: "admin@shopcart.com",
  },
  {
    imgUrl: "/images/icon/04.png",
    imgAlt: "contact icon",
    title: "我們的網站",
    desc: "www.shopcart.com",
  },
];
const Contact = () => {
  return (
    <div>
      <PageHeader title={'與我們聯絡'} currentPage={`Contact`} />
      <div className="map-address-section padding-tb section-bg">
        <div className="container">
          <div className="section-header text-center">
            <span className="subtitle">{subTitle}</span>
            <h2 className="title">{title}</h2>
          </div>

          <div className="section-wrapper">
            <div className="row flex-row-reverse">
              <div className="col-xl-4 col-lg-5 col-12">
                <div className="contact-wrapper">
                  {
                    contactList.map((item, idx) => {
                      return <div key={idx} className="contact-item">
                        <div className="contact-thumb">
                          <img src={item.imgUrl} alt={item.imgAlt} />
                        </div>
                        <div className="contact-content">
                          <h6 className="title">{item.title}</h6>
                          <p>{item.desc}</p>
                        </div>
                      </div>
                    })
                  }
                </div>
              </div>
              {/* google map */}
              <div className="col-xl-8 col-lg-7 col-12">
                <GoogleMap />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="contact-section padding-tb">
        <div className="container">
          <div className="section-header text-center">
            <span className='subtitle'>{conSubTitle}</span>
            <h2 className="title">{conTitle}</h2>
          </div>

          <div className="section-wrapper">
            <div className="contact-form">
              <div className="form-group">
                <input type="text" name="name" id="name" placeholder='您的名字' />
              </div>
              <div className="form-group">
                <input type="email" name="email" id="email" placeholder='信箱' />
              </div>
              <div className="form-group">
                <input type="tel" name="number" id="number" placeholder='手機號碼' />
              </div>
              <div className="form-group">
                <input type="text" name="subject" id="subject" placeholder='主旨' />
              </div>
              <div className="form-group w-100">
                <textarea name="message" id="message" rows="8" placeholder='輸入內容...'></textarea>
              </div>
              <div className="form-group w-100 text-center">
                <button className="lab-btn">
                  <span>{btnText}</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact