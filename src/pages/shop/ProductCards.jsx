/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Ratting from '../../components/Ratting'
import setDefaultImg from '../../utilis/setDefaultImg'

const ProductCards = ({ GridList, products }) => {
  const [data, setData] = useState(products)
  useEffect(() => {
    setData(products);
  }, [products]);

  return (
    <div className={`shop-product-wrap row justify-content-center ${GridList ? 'grid' : 'list'}`}>
      {
        data.map((product, idx) => {
          return (
            <div key={idx} className="col-lg-4 col-md-6 col-12 d-flex">
              <div className="product-item ">
                {/* 產品圖片 */}
                <div className="product-thumb ">
                  <div className="pro-thumb">
                    <img src={product.img} alt="" />
                  </div>
                  {/* 產品行動連結 */}
                  <div className="product-action-link">
                    <Link to={`/shop/${product.id}`}>
                      <i className="icofont-eye"></i>
                    </Link>
                    <a href="#">
                      <i className="icofont-heart"></i>
                    </a>
                    <Link to={`/cart-page`}><i className="icofont-cart-alt"></i></Link>
                  </div>
                </div>

                {/* 產品內容 */}
                {/* <div className="product-content mt-auto d-flex flex-column" style={{ minHeight: '140px' }} > */}
                <div className="product-content mt-auto d-flex flex-column" >
                  <h5 className="mb-auto">
                    <Link to={`/shop/${product.id}`} >{product.name}</Link>
                  </h5>
                  <p className='productRating'>
                    <Ratting />
                  </p>
                  <h6>${product.price}</h6>
                </div>
              </div>

              {/* list-style */}
              <div className="product-list-item ">
                {/* 產品圖片 */}
                <div className="product-thumb ">
                  <div className="pro-thumb">
                    <img src={product.img}
                      alt=""
                      key={product.img}
                      onError={() => setDefaultImg(product.id, setData)}
                    />
                    {/* 產品行動連結 */}
                    <div className="product-action-link">
                      <Link to={`/shop/${product.id}`}>
                        <i className="icofont-eye"></i>
                      </Link>
                      <a href="#">
                        <i className="icofont-heart"></i>
                      </a>
                      <Link to={`/cart-page`}><i className="icofont-cart-alt"></i></Link>
                    </div>
                  </div>
                </div>
                {/* 產品內容 */}
                <div className="product-content ">
                  <h5>
                    <Link to={`/shop/${product.id}`}>{product.name}</Link>
                  </h5>
                  <p className='productRating'>
                    <Ratting />
                  </p>
                  <h6 className=''>${product.price}</h6>
                </div>
              </div>

            </div>
          )
        })
      }
    </div >
  )
}

export default ProductCards