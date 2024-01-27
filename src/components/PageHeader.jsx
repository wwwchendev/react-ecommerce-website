/* eslint-disable react/prop-types */
import React from 'react';
import { Link } from 'react-router-dom';

const PageHeader = ({ title, currentPage }) => {
  const currentPageArray = currentPage.split('/');

  return (
    <div className='pageheader-section'>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="pageheader-content text-center">
              <h2>{title}</h2>
              <nav aria-label='bread-crumb'>
                <ol className='breadcrumb justify-content-center'>
                  <li className='breadcrumb-item'><Link to='/'>Home</Link></li>
                  {currentPageArray.map((item, idx) => {
                    if (idx !== currentPageArray.length - 1) {
                      return (
                        <li className='breadcrumb-item' key={idx}><Link to={`/${item}`}>{item}</Link></li>
                      )
                    } else {
                      return (
                        <li className='breadcrumb-item active' aria-current='page' key={idx}>{item}</li>
                      )
                    }
                  })}
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageHeader;
