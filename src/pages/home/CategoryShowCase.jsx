import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import Ratting from '../../components/Ratting';

const title = "商品列表";

const ProductData = [
  {
    imgUrl: '/images/categoryTab/01.jpg',
    cate: 'Shoes',
    title: 'Nike Premier X',
    author: '/images/course/author/01.jpg',
    brand: 'Nike',
    price: '$199.00',
    id: 1,
  },
  {
    imgUrl: '/images/categoryTab/02.jpg',
    cate: 'Bags',
    title: 'Asthetic Bags',
    author: 'assets/images/course/author/02.jpg',
    brand: 'D&J Bags',
    price: '$199.00',
    id: 2,
  },
  {
    imgUrl: '/images/categoryTab/03.jpg',
    cate: 'Phones',
    title: 'iPhone 12',
    author: '/images/categoryTab/brand/apple.png',
    brand: 'Apple',
    price: '$199.00',
    id: 3,
  },
  {
    imgUrl: '/images/categoryTab/04.jpg',
    cate: 'Bags',
    title: 'Hiking Bag 15 Nh100',
    author: '/images/course/author/04.jpg',
    brand: 'Gucci',
    price: '$199.00',
    id: 4,
  },
  {
    imgUrl: '/images/categoryTab/05.jpg',
    cate: 'Shoes',
    title: 'Outdoor Sports Shoes',
    author: '/images/course/author/05.jpg',
    brand: 'Nike',
    price: '$199.00',
    id: 5,
  },
  {
    imgUrl: '/images/categoryTab/06.jpg',
    cate: 'Beauty',
    title: 'COSRX Snail Mucin',
    author: '/images/course/author/06.jpg',
    brand: 'Zaara',
    price: '$199.00',
    id: 6,
  },
  {
    imgUrl: '/images/categoryTab/07.jpg',
    cate: 'Bags',
    title: 'Look Less Chanel Bag ',
    author: '/images/course/author/01.jpg',
    brand: 'Gucci',
    price: '$199.00',
    id: 7,
  },
  {
    imgUrl: '/images/categoryTab/08.jpg',
    cate: 'Shoes',
    title: 'Casual Sneakers',
    author: '/images/course/author/02.jpg',
    brand: 'Bata',
    price: '$199.00',
    id: 8,
  },
]
const CategoryShowCase = () => {
  const [items, setItems] = useState(ProductData)
  const filterItem = (categItem) => {
    if (categItem !== 'All') {
      const updatedItems = ProductData.filter((item) => item.cate === categItem);
      setItems(updatedItems);
    } else if (categItem === 'All') {
      setItems(ProductData);
    }
  };

  return (
    <div className='course-section style-3 padding-tb'>
      {/* shape */}
      <div className='course-shape one'>
        <img src={`/images/shape-img/icon/01.png`} alt="" />
      </div>
      <div className='course-shape two'>
        <img src={`/images/shape-img/icon/02.png`} alt="" />
      </div>
      {/* main-section */}
      <div className="container">
        {/* section-header */}
        <div className="section-header">
          <h2 className='title'>{title}</h2>
          <div className='course-filter-group'>
            <ul className="lab-ul">
              <li onClick={() => { filterItem('All') }}>All</li>
              <li onClick={() => { filterItem('Shoes') }}>Shoes</li>
              <li onClick={() => { filterItem('Bags') }}>Bags</li>
              <li onClick={() => { filterItem('Phones') }}>Phones</li>
              <li onClick={() => { filterItem('Beauty') }}>Beauty</li>
            </ul>
          </div>
        </div>
        {/* section-body*/}
        <div className="section-wrapper">
          <div className='row g-4 justify-content-center row-cols-xl-4 row-cols-lg-3 row-cols-1'>{
            items.map((product) => {
              return <div className="col" key={product.id}>
                <div className="course-item style-4">
                  <div className="course-inner">
                    <div className="course-thumb">
                      <img src={product.imgUrl} alt={product.title} />
                      <div className="course-category">
                        <div className="course-cate">
                          <Link to="#">{product.cate}</Link>
                        </div>
                        <div className="course-review">
                          <Ratting />
                        </div>
                      </div>
                    </div>
                    {/* content */}
                    <div className="course-content">
                      <Link to={`/shop/${product.id}`}>
                        <h5>{product.title}</h5>
                      </Link>
                      <div className="course-footer">
                        <div className="course-author">
                          <Link to={`/`} className='ca-name'>{product.brand}</Link>
                        </div>
                        <div className="course-price">
                          {product.price}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            })
          }</div>
        </div>
      </div>
    </div>
  )
}

export default CategoryShowCase