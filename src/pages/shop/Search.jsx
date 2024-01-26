/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import setDefaultImg from '../../utilis/setDefaultImg'

const Search = ({ products, GridList }) => {
  const [searchTerm, setSearchTerm] = useState('')
  const [data, setData] = useState(products)
  const filteredProducts = data.filter((product) => product.name.toLowerCase().includes(searchTerm.toLowerCase()));

  useEffect(() => {
    setData(products);
  }, [products]);


  return (
    <div className="widget widget-search">
      <form className="search-wrapper mb-3">
        <input type="text" name="search" id="search" placeholder='搜尋...' defaultValue={searchTerm} onChange={(e) => { setSearchTerm(e.target.value) }} />
        <button type="submit">
          <i className="icofont-search-2"></i>
        </button>
      </form>
      {/* 顯示搜尋結果 */}
      <div>
        {
          searchTerm && filteredProducts.map((product) => (
            <Link to={`/shop/${product.id}`} key={product.id}>
              <div className="d-flex gap-3 p-2">
                <div className='row'>
                  <div className="pro-thumb h-25 ">
                    <img src={product.img} alt="" width={70} className='flex-{grow|shrink}-0 h-100' style={{ minWidth: '80px', minHeight: '80px', objectFit: 'cover' }} onError={() => { setDefaultImg(product.id, setData) }} />
                  </div>
                </div>
                <div className="product-content">
                  <p>
                    <Link to={`/shop/${product.id}`}>{product.name}</Link>
                  </p>
                  <h6>{product.price}</h6>
                </div>
              </div>
            </Link>
          ))
        }
      </div>
    </div>
  )
}

export default Search