import React, { useState } from 'react'
import PageHeader from '../../components/PageHeader'
import Data from '../../products.json'
const showResults = '顯示 01 - 12 共 139 項商品'

const Shop = () => {
  const [GridList, setGridList] = useState(true)
  const [products, setProducts] = useState(Data)
  return (
    <>
      <PageHeader title='線上購物' currentPage='Shop' />
      {/* Shop Page */}
      <div className='shop-page padding-tb'>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 col-12">
              <article>
                {/* layout and title here  */}
                <div className="shop-title d-flex flex-wrap justify-content-between">
                  <p>{showResults}</p>
                  <div className={`product-view-mode ${GridList ? 'gridActive' : 'listActive'}`}>
                    <a className='grid' onClick={() => { setGridList(!GridList) }}>
                      <i className="icofont-ghost"></i>
                    </a>
                    <a className='list' onClick={() => { setGridList(!GridList) }}>
                      <i className="icofont-listine-dots"></i>
                    </a>
                  </div>
                </div>
              </article>
            </div>
            <div className="col-lg-4 col-12">
              right-here
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Shop