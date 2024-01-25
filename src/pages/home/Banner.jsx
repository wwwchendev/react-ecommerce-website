import React from 'react'
import { useState } from 'react';
import productData from '../../products.json'
import SelectedCategory from '../../components/SelectedCategory';
import { Link } from 'react-router-dom';

const title = (
  <h2>在眾多品項中搜尋心中的<span>理想</span>商品</h2>
)
const desc = '提供最豐富齊全的商品品項'
const bannerList = [
  {
    iconName: "icofont-users-alt-4",
    text: "1.5 Million Customers",
  },
  {
    iconName: "icofont-notification",
    text: "More then 2000 Marchent",
  },
  {
    iconName: "icofont-globe",
    text: "Buy Anything Online",
  },
];
// console.log(productData);

const Banner = () => {
  const [searchInput, setSearchInput] = useState('');
  const [filterdProducts, setFilterdProducts] = useState([]);

  const handleSearch = (e) => {
    // 同步更新searchInput
    const searchTerm = e.target.value;
    setSearchInput(searchTerm);
    // 篩選資料
    const filtered = productData.filter((product) => { return product.name.toLowerCase().includes(searchTerm.toLowerCase()) });
    setFilterdProducts(filtered);
  }
  return (
    <div className="banner-section style-4">
      <div className="container">
        <div className="banner-content">
          {title}
          <form>
            <SelectedCategory select={'all'} />
            <input type="text" name='search' id='search' placeholder='搜尋商品...' value={searchInput} onChange={handleSearch} />
            <button type='submit'><i className="icofont-search"></i></button>
          </form>
          <p>{desc}</p>
          <ul className="lab-ul">
            {
              searchInput && filterdProducts.map((product, idx) => (
                <li key={idx}>
                  <Link to={`/shop/${product.id}`}>{product.name}</Link>
                </li>
              ))
            }
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Banner