import React from 'react'
import { useState } from 'react';
import Ratting from '../../components/Ratting';
const reviewtitle = "新增評論";
let ReviewList = [
  {
    imgUrl: "/src/assets/images/instructor/01.jpg",
    imgAlt: "Client thumb",
    name: "Ganelon Boileau",
    date: "Posted on Jun 10, 2022 at 6:57 am",
    desc: "Enthusiast build innovativ initiatives before lonterm high-impact awesome theme seo psd porta monetize covalent leadership after without resource.",
  },
  {
    imgUrl: "/src/assets/images/instructor/02.jpg",
    imgAlt: "Client thumb",
    name: "Morgana Cailot",
    date: "Posted on Jun 10, 2022 at 6:57 am",
    desc: "Enthusiast build innovativ initiatives before lonterm high-impact awesome theme seo psd porta monetize covalent leadership after without resource.",
  },
  {
    imgUrl: "/src/assets/images/instructor/03.jpg",
    imgAlt: "Client thumb",
    name: "Telford Bois",
    date: "Posted on Jun 10, 2022 at 6:57 am",
    desc: "Enthusiast build innovativ initiatives before lonterm high-impact awesome theme seo psd porta monetize covalent leadership after without resource.",
  },
  {
    imgUrl: "/src/assets/images/instructor/04.jpg",
    imgAlt: "Client thumb",
    name: "Cher Daviau",
    date: "Posted on Jun 10, 2022 at 6:57 am",
    desc: "Enthusiast build innovativ initiatives before lonterm high-impact awesome theme seo psd porta monetize covalent leadership after without resource.",
  },
];

export const Review = () => {
  const [reviewShow, setReviewShow] = useState(true);

  return (
    <>
      <ul className={`review-nav lab-ul ${reviewShow ? 'RevActive' : 'DescActive'}`}>
        <li className='desc' onClick={() => { setReviewShow(!reviewShow) }}>商品描述</li>
        <li className='rev' onClick={() => { setReviewShow(!reviewShow) }}>評論 {ReviewList.length}則</li>
      </ul>
      {/* content */}
      <div className={`review-content ${reviewShow ? 'review-content-show' : 'description-show'}`}>
        {/* 評論 */}
        <div className="review-showing">
          <ul className="content lab-ul">
            {
              ReviewList.map((review, idx) => {
                return <li key={idx}>
                  <div className='post-thumb'>
                    <img src={review.imgUrl} alt="" />
                  </div>
                  <div className="post-content">
                    <div className="entry-meta">
                      <div className="posted-on">
                        <a href="#">{review.name}</a>
                        <p>{review.date}</p>
                      </div>
                      <div className="entry-content">
                        <p>{review.desc}</p>
                      </div>
                    </div>
                  </div>
                </li>
              })
            }
          </ul>

          {/* 新增評論欄位 */}
          <div className="client-review">
            <div className="review-form">
              <div className="review-title">
                <h5>{reviewtitle}</h5>
              </div>
              <form action="action" className='row'>
                <div className="col-md-4 col-12">
                  <input type="text" name="name" id="name" placeholder='使用者名稱' />
                </div>
                <div className="col-md-4 col-12">
                  <input type="email" name="email" id="email" placeholder='信箱' />
                </div>
                <div className="col-md-4 col-12">
                  <div className="rating">
                    <span className='me-1'>為商品評分</span>
                    <Ratting />
                  </div>
                </div>
                <div className="col-md-12 col-12">
                  <textarea name="message" id="message" rows="8" placeholder='輸入您的評論'></textarea>
                </div>
                <div className="col-12">
                  <button type="submit" className='default-button w-100'>
                    <span>提交評論</span>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        {/* 商品描述 */}
        <div className="description">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit doloremque enim optio, similique nesciunt, dolor dicta nihil praesentium quidem ut beatae aperiam illum repellendus necessitatibus inventore natus error? Aut incidunt, non excepturi odit molestiae asperiores odio praesentium autem, iusto impedit eveniet earum voluptate quisquam ut animi dolores iure commodi vitae ex exercitationem, eligendi veritatis. Soluta repellendus perspiciatis illo similique rerum praesentium quae. Numquam et neque exercitationem, excepturi laborum possimus, deserunt delectus voluptates ipsam, quisquam quos.</p>
          <div className="post-item">
            <div className="post-thumb">
              <img src="/src/assets/images/shop/01.jpg" alt="" />
            </div>
            <div className='post-content'>
              <ul className='lab-ul'>
                <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, inventore.</li>
                <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, inventore.</li>
                <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, inventore.</li>
                <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, inventore.</li>
                <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, inventore.</li>
              </ul>
            </div>
          </div>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit doloremque enim optio, similique nesciunt, dolor dicta nihil praesentium quidem ut beatae aperiam illum repellendus necessitatibus inventore natus error? Aut incidunt, non excepturi odit molestiae asperiores odio praesentium autem, iusto impedit eveniet earum voluptate quisquam ut animi dolores iure commodi vitae ex exercitationem, eligendi veritatis. Soluta repellendus perspiciatis illo similique rerum praesentium quae. Numquam et neque exercitationem, excepturi laborum possimus, deserunt delectus voluptates ipsam, quisquam quos.</p>
        </div>
      </div>
    </>

  )
}
