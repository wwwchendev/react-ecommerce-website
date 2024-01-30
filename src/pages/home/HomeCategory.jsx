import React from 'react'
import { Link } from 'react-router-dom';

const subTitle = "Choose Any Products";
const title = "提供最豐富齊全的商品品項";
const btnText = "開始選購";

const categoryList = [
  {
    imgUrl: '/images/category/01.jpg',
    imgAlt: 'category rajibraj91 rajibraj',
    iconName: 'icofont-brand-windows',
    title: 'DSLR Camera',
  },
  {
    imgUrl: '/images/category/02.jpg',
    imgAlt: 'category rajibraj91 rajibraj',
    iconName: 'icofont-brand-windows',
    title: 'Shoes',
  },
  {
    imgUrl: '/images/category/03.jpg',
    imgAlt: 'category rajibraj91 rajibraj',
    iconName: 'icofont-brand-windows',
    title: 'Photography',
  },
  {
    imgUrl: '/images/category/04.jpg',
    imgAlt: 'category rajibraj91 rajibraj',
    iconName: 'icofont-brand-windows',
    title: 'Formal Dress',
  },
  {
    imgUrl: '/images/category/05.jpg',
    imgAlt: 'category rajibraj91 rajibraj',
    iconName: 'icofont-brand-windows',
    title: 'Colorful Bags',
  },
  {
    imgUrl: '/images/category/06.jpg',
    imgAlt: 'category rajibraj91 rajibraj',
    iconName: 'icofont-brand-windows',
    title: 'Home Decor',
  },
]
const HomeCategory = () => {
  return (
    <>
      <div className="category-section style-4 padding-tb">
        <div className="container">
          {/* section-header */}
          <div className="section-header text-center">
            <span className='subtitle'>{subTitle}</span>
            <h2 className="title">{title}</h2>
          </div>
          {/* section-card */}
          <div className="section-wrapper">
            <div className='row g-4 justify-content-center row-cols-1 row-cols-sm-2 row-cols-md-3'>
              {
                categoryList.map((category, idx) => {
                  return (<div key={idx} className='col'>
                    <div className='category-item'>
                      <div className='category-inner'>
                        {/* 分類縮圖 */}
                        < Link to='/shop'>
                          <div className="category-thumb">
                            <img src={category.imgUrl} alt="" />
                          </div>
                        </Link>
                        {/* 內容 */}
                        <div className="category-content">
                          <div className="cate-icon">
                            <i className={category.iconName}></i>
                          </div>
                          <Link to={`/shop`}><h6>{category.title}</h6></Link>
                        </div>
                      </div>
                    </div>
                  </div>)
                })
              }
            </div>
            {/* section-card */}
            <div className="text-center mt-5">
              <Link to={`/shop`} className='lab-btn'><span>{btnText}</span></Link>
            </div>
          </div>

        </div>
      </div>
    </>
  )
}

export default HomeCategory