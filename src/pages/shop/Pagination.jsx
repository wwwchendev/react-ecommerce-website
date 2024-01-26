/* eslint-disable react/prop-types */
import React from 'react'

const Pagination = ({ productPerPage, totalProducts, activePage, paginate }) => {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalProducts / productPerPage); i++) {
    pageNumbers.push(i)
  }
  return (
    <>
      <ul className='default-pagination lab-ul'>
        <li className={`page-item`}>
          <button
            className='bg-transparent'
            onClick={() => { if (activePage > 1) { paginate(activePage - 1) } }}
            disabled={activePage === 1}
          >
            <i className='icofont-rounded-left'></i>
          </button>
        </li>
        {
          pageNumbers.map((number) => (
            <li key={number}
              className={`page-item ${number === activePage ? 'bg-warning' : ''}`}
            >
              <button
                className='bg-transparent'
                onClick={() => { paginate(number) }}
              >
                {number}
              </button>
            </li>
          ))
        }
        <li className={`page-item`}>
          <button
            className='bg-transparent'
            onClick={() => { if (activePage < pageNumbers.length) { paginate(activePage + 1) } }}
            disabled={activePage === pageNumbers.length}
          >
            <i className='icofont-rounded-right'></i>
          </button>
        </li>
      </ul>
    </>
  )
}

export default Pagination