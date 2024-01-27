import React, { useState, useEffect } from 'react'
import PageHeader from '../../components/PageHeader';
import { Link } from 'react-router-dom';
import delImgUrl from '../../assets/images/shop/del.png';

const CartPage = () => {
  const [cartItems, setcartItems] = useState([]);
  const [postalCode, setPostalCode] = useState('');

  //確認購物車是否已經有商品->讀取資料或初始化
  useEffect(() => {
    getCart()
  }, [])
  //從LocalStorage獲得Cart資料
  const getCart = () => {
    const storedCartItems = JSON.parse(localStorage.getItem('cart')) || [];
    setcartItems(storedCartItems)
    // [{
    //     "id": "c9d1f410-d28f-49d9-9b01-d759b5acbeea",
    //     "img": "https://assets.../images../standard.jpg",
    //     "name": "ZX 1K BOOST SHOES",
    //     "price": 319,
    //     "quantity": 9,
    //     "size": "xl",
    //     "color": "blue",
    //     "coupon": ""
    // }]
  }

  //增加數量
  const handleIncrease = (item) => {
    item.quantity += 1;
    updateLocalStorage([...cartItems]);
  }
  //減少數量
  const handleDecrease = (item) => {
    item.quantity -= 1;
    updateLocalStorage([...cartItems]);
  }
  //移除商品
  const handleRemoveItem = (item) => {
    const updateCart = cartItems.filter((cartItem) => cartItem.id !== item.id)
    updateLocalStorage(updateCart);
  }
  //更新LocalStorage
  const updateLocalStorage = (cart) => {
    localStorage.setItem('cart', JSON.stringify(cart))
    getCart()
  }
  //計算商品金額*數量小計的方法
  const calculateTotalPrice = (item) => {
    return item.price * item.quantity
  }
  //購物車全部商品金額合計
  const cartSubtotal = cartItems.reduce((total, item) => { return total + calculateTotalPrice(item) }, 0)
  //運費
  const shippingFee = 0;
  //訂單合計
  const orderTotal = cartSubtotal + shippingFee;

  return (
    <div>
      <PageHeader title={`購物車`} currentPage={`cart-page`} />
      <div className="shop-cart padding-tb">
        <div className="container">
          <div className="section-wrapper">
            {/* cart-top */}
            <div className="cart-top">
              <table>
                <thead>
                  <tr>
                    <th className="car-product">商品</th>
                    <th className="car-price">價格</th>
                    <th className="car-quantity">數量</th>
                    <th className="car-toprice">合計</th>
                    <th className="car-edit">修改</th>
                  </tr>
                </thead>
                {/* table body */}
                <tbody>
                  {
                    cartItems.map((item, idx) => {
                      return (
                        <tr key={idx}>
                          <td className="product-item cat-product">
                            <div className="p-thumb">
                              <Link to='/shop'><img src={item.img} alt="" /></Link>
                            </div>
                            <div className="p-content">
                              <Link to='/shop'>{item.name}</Link>
                            </div>
                          </td>

                          <td className="cat-price">$ {item.price.toLocaleString()}</td>
                          <td className="cat-quantity">
                            <div className="cart-plus-minus">
                              <div className="dec qtybutton" onClick={() => {
                                handleDecrease(item)
                              }}>-</div>
                              <input type="text" className="cart-plus-minus-box" name="qtybutton" value={item.quantity} readOnly />
                              <div className="inc qtybutton" onClick={() => {
                                handleIncrease(item)
                              }}>+</div>
                            </div>
                          </td>
                          <td className="cat-toprice">${calculateTotalPrice(item).toLocaleString()}</td>
                          <td className="cat-edit">
                            <a href="#" onClick={() => { handleRemoveItem(item) }}>
                              <img src={delImgUrl} alt="" />
                            </a>
                          </td>
                        </tr>
                      )
                    })
                  }
                </tbody>
              </table>
            </div>
            {/* card-top end .... */}
            {/* cart-bottom */}
            <div className="cart-bottom">
              {/* checkout-box */}
              <div className='cart-checkout-box'>
                <form className='coupon'>
                  <input type="text" name="coupon" id="coupon" placeholder='Coupon code...' className='cart-page-input-text' />
                  <input type="submit" value="套用優惠碼" />
                </form>
                <form className='cart-checkout'>
                  <input type="submit" value='更新購物車' />
                  <button className="lab-outline-btn bg-transparent">
                    <span>下一步</span>
                    <i className="icofont-rounded-right ms-1"></i>
                  </button>
                </form>
              </div>
              {/* checkout-box end .... */}
              {/* shopping-box */}
              <div className='shiping-box'>
                <div className="row g-3">
                  <div className="col-md-6 col-12">
                    <div className='calculate-shiping'>
                      <h3>計算運費</h3>
                      <div className="outline-select">
                        <select>
                          <option value="uk">United Kingdom(UK)</option>
                          <option value="bd">Bangladesh</option>
                          <option value="pak">Pakisthan</option>
                          <option value="ind">India</option>
                          <option value="np">Nepal</option>
                        </select>
                        <span className="select-icon">
                          <i className="icofont-rounded-down"></i>
                        </span>
                      </div>
                      <div className="outline-select shipping-select ">
                        <select>
                          <option value="uk">New York</option>
                          <option value="us">London</option>
                          <option value="bd">Dhaka</option>
                          <option value="pak">Korachi</option>
                          <option value="ind">New Delhi</option>
                        </select>
                        <span className="select-icon">
                          <i className="icofont-rounded-down"></i>
                        </span>
                      </div>
                      <input type="text" name='postalCode' id='postalCode' className='cart-page-input-text' placeholder='郵遞區號'
                        onChange={(e) => { setPostalCode(e.target.value); }} />
                      <button type='submit'>更新地址</button>
                    </div>
                  </div>
                  <div className="col-md-6 col-12">
                    <div className='cart-overview'>
                      <h3>總計</h3>
                      <ul className="lab-ul">
                        <li>
                          <span className="pull-left">小計</span>
                          <p className="pull-right">$ {cartSubtotal.toLocaleString()}</p>
                        </li>
                        <li>
                          <span className="pull-left">物流與手續費</span>
                          <p className="pull-right">$ Free</p>
                        </li>
                        <li>
                          <span className="pull-left">訂單總計</span>
                          <p className="pull-right">$ {orderTotal.toLocaleString()}</p>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CartPage