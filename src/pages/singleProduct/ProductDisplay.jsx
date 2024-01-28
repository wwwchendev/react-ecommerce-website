/* eslint-disable react/prop-types */
import React, { useState } from 'react'
import { Link } from 'react-router-dom';
const desc = "Energistia an deliver atactica metrcs after avsionary Apropria trnsition enterpris an sources applications emerging psd template.";

export const ProductDisplay = ({ product }) => {
  const { id, category, name, seller, price, stock, ratings, ratingsCount, img, shipping, quantity } = product;
  const [preQuantity, setQuantity] = useState(1);
  const [coupon, setCoupon] = useState('');
  const [size, setSize] = useState('default');
  const [color, setColor] = useState('default');

  const handleSizeChange = (e) => {
    setSize(e.target.value);
  };
  const handleColorChange = (e) => {
    setColor(e.target.value);
  };
  const hadleDescrease = () => {
    if (preQuantity > 1) {
      setQuantity(preQuantity - 1)
    }
  };
  const hadleIncrease = () => {
    setQuantity(preQuantity + 1)
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      id: id,
      img: img,
      name: name,
      price: price,
      quantity: preQuantity,
      size: size,
      color: color,
      coupon: coupon,
    }
    if (size !== 'default' && color !== 'default') {
      alert('已加入購物車')
      addToCart(data)
      resetFormFields()
    } else {
      alert('請選擇尺寸與款式')
    }
  }

  const addToCart = (product) => {
    // 取得localStorage存儲的購物車資訊並從json轉為js格式
    const existingCart = JSON.parse(localStorage.getItem('cart')) || [];
    const existingProductIndex = existingCart.findIndex((item) => item.id === id);
    if (existingProductIndex !== -1) {
      // 如果商品已存在於購物車中，更新商品數量
      existingCart[existingProductIndex].quantity += preQuantity
    } else {
      existingCart.push(product)
    }
    //更新localStorage
    localStorage.setItem('cart', JSON.stringify(existingCart));
  };
  const resetFormFields = () => {
    setQuantity(1);
    setCoupon('');
    setSize('default');
    setColor('default');
  };

  if (!product || !ratingsCount || !price) { return <p>NO PRODUCT</p> }
  return (
    <div>
      <div>
        <h4>{name}</h4>
        <p className="rating">
          {Array.from({ length: ratings }).map((_, index) => (
            <i key={index} className="icofont-star"></i>
          ))}
          <span> {ratingsCount.toLocaleString()} 評價</span>
        </p>
        <h4>$ {price.toLocaleString()}</h4>
        <h6>{seller}</h6>
        <p>{desc}</p>
      </div>
      {/* cart */}
      <div>
        <form onSubmit={handleSubmit}>
          {/* 尺吋 */}
          <div className="select-product size">
            <select value={size} onChange={handleSizeChange} required>
              <option value="default" disabled>尺寸</option>
              <option value="sm">sm</option>
              <option value="md">md</option>
              <option value="lg">lg</option>
              <option value="xl">xl</option>
              <option value="xxl">xxl</option>
            </select>
            <i className="icofont-rounded-down"></i>
          </div>
          {/* 款式 */}
          <div className="select-product color">
            <select value={color} onChange={handleColorChange} required>
              <option value="default" disabled>款式</option>
              <option value="pink">粉色</option>
              <option value="green">綠色</option>
              <option value="blue">藍色</option>
              <option value="white">白色</option>
              <option value="black">黑色</option>
            </select>
            <i className="icofont-rounded-down"></i>
          </div>
          {/* 購買數量 */}
          <div className="cart-plus-minus">
            <div className="dec qtybutton" onClick={hadleDescrease}>-</div>
            <input type="text" className="cart-plus-minus-box" name="qtybutton" id="qtybutton" value={preQuantity} onChange={(e) => { setQuantity(parseInt(e.target.value, 10)) }} />
            <div className="inc qtybutton" onClick={hadleIncrease}>+</div>
          </div>
          {/* 優惠券 */}
          <div className="discount-code mb-2">
            <input type="text" placeholder='優惠券代碼' onChange={(e) => { setCoupon(e.target.value) }} />
          </div>
          {/* 按鈕 */}
          <button className="lab-btn" type='submit'>
            <span>加入購物車</span>
          </button>
          <Link to={`/cart-page`} className="lab-outline-btn mt-3">
            <span>前往購物車</span>
          </Link>
        </form>
      </div >
    </div >
  )
}
