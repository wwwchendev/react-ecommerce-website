/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Ratting from '../../components/Ratting'
const defaultImage = 'https://images.unsplash.com/photo-1561715276-a2d087060f1d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';

const ProductCards = ({ GridList, products }) => {
  const [data, setData] = useState(products)
  useEffect(() => {
    setData(products);
  }, [products]);

  const setDefaultImg = (id) => {
    // 設定 data 的新狀態
    setData((prevData) => (
      prevData.map((product) => (product.id === id ? { ...product, img: defaultImage } : product))
    ));
  };
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
                      onError={() => setDefaultImg(product.id)}
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