import React, { useState } from 'react'
import PageHeader from '../../components/PageHeader'
import Data from '../../products.json'
import ProductCards from './ProductCards'
import Pagination from './Pagination'
import Search from './Search'
import PopularPost from './PopularPost'
import Tags from './Tags'

// const showResults = '顯示 01 - 12 共 139 項商品'

const Shop = () => {
  const [GridList, setGridList] = useState(true)
  const [products, setProducts] = useState(Data)
  // pagination
  const [currentPage, setCurrentPage] = useState(1)
  const productPerPage = 12;
  const indexOfLastProduct = currentPage * productPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productPerPage;
  const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);
  // 換頁的方法
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber)
  }
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
                  <p>{`顯示 ${indexOfFirstProduct + 1} - ${Math.min(indexOfLastProduct, products.length)} 共 ${products.length} 項商品`}</p>
                  <div className={`product-view-mode ${GridList ? 'gridActive' : 'listActive'}`}>
                    <a className='grid' onClick={() => { setGridList(!GridList) }}>
                      <i className="icofont-ghost"></i>
                    </a>
                    <a className='list' onClick={() => { setGridList(!GridList) }}>
                      <i className="icofont-listine-dots"></i>
                    </a>
                  </div>
                </div>
                {/* Product cards */}
                <div>
                  <ProductCards GridList={GridList} products={currentProducts} />
                </div>
                <Pagination
                  productPerPage={productPerPage}
                  totalProducts={products.length}
                  activePage={currentPage}
                  paginate={paginate}
                />
              </article>
            </div>
            <div className="col-lg-4 col-12">
              <Search products={products} GridList={GridList} />
              <PopularPost />
              <Tags />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Shop