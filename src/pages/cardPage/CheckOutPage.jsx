import React, { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import { Modal } from 'react-bootstrap';
import '../../components/modal.css';

const CheckOutPage = () => {
  const [show, setShow] = useState(false);
  const [activeTab, setActiveTab] = useState('visa');
  const handleTabChange = (tabId) => {
    setActiveTab(tabId)
  }
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  // 完成下訂單後進行轉址
  // 取得上一個頁面的路徑（pathname），如果不存在則預設為根路徑 /。
  const location = useLocation();
  const from = location.state?.from?.pathname || '/';
  const navigate = useNavigate();// 轉址
  const handleOrderConfirm = () => {
    alert('已為您安排訂單')
    localStorage.removeItem('cart')
    navigate(from, { replace: true })
  }

  return (
    <div className="modalCard">

      <button className="lab-outline-btn bg-transparent" onClick={(e) => { e.preventDefault(); handleShow() }}>
        <span>下一步</span>
        <i className="icofont-rounded-right ms-1"></i>
      </button>
      <Modal
        show={show}
        onHide={handleClose}
        animation={false}
        className='modal fade'
        centered
      >
        <div className="modal-dialog">
          <h5 className="px-3 mb-3">選擇付款方式</h5>
          <div className="modal-content">
            <div className="modal-body">
              <div className="tabs my-3">
                <ul className="nav nav-tabs" id='myTab' role='tablist'>
                  <li className="nav-item" role='presentation'>
                    <a
                      href="#visa"
                      className={`nav-link ${activeTab === 'visa' ? 'active' : ''}`}
                      id='visa-tab'
                      data-toggle='tab'
                      role='tab'
                      aria-controls='visa'
                      aria-selected={activeTab === 'visa'}
                      onClick={() => { handleTabChange('visa') }}
                    >
                      <img src="https://i.imgur.com/sB4jftM.png" alt="" width={80} />
                    </a>
                  </li>
                  <li className="nav-item" role='presentation'>
                    <a
                      href="#paypal"
                      className={`nav-link ${activeTab === 'paypal' ? 'active' : ''}`}
                      id='paypal-tab'
                      data-toggle='tab'
                      role='tab'
                      aria-controls='paypal'
                      aria-selected={activeTab === 'paypal'}
                      onClick={() => { handleTabChange('paypal') }}
                    >
                      <img src="https://i.imgur.com/yK7EDD1.png" alt="" width={80} />
                    </a>
                  </li>
                </ul>
                {/* contents */}
                <div className="tab-content" id='myTabContent'>
                  {/* visa content */}
                  <div
                    className={`tab-pane fade ${activeTab === 'visa' ? 'show active' : ''}`}
                    id='visa'
                    role='tabpanel'
                    aria-labelledby='visa-tab'
                  >
                    <div className="mt-4 mx-4">
                      <div className="text-center">
                        <h5>發卡銀行</h5>
                      </div>
                      <div className="form mt-3">
                        <div className="inputbox">
                          <input type="text" name='name' id='name' className='form-control' required />
                          <span>全名</span>
                        </div>
                        <div className="inputbox">
                          <input type="text" name='number' id='number' min='1' max='999' className='form-control' required />
                          <span>卡號</span>
                          <i className="fa fa-eye"></i>
                        </div>
                        <div className="d-flex flex-row gap-2">
                          <div className="inputbox">
                            <input type="text" name='number' id='number' min='1' max='999' className='form-control' required />
                            <span>到期年月</span>
                          </div>
                          <div className="inputbox">
                            <input type="text" name='number' id='number' min='1' max='999' className='form-control' required />
                            <span>安全碼</span>
                          </div>
                        </div>
                        <div className="px-5 pay">
                          <button className="btn btn-success btn-block w-100 mt-3" onClick={handleOrderConfirm}>新增卡片</button>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* paypal content */}
                  <div
                    className={`tab-pane fade ${activeTab === 'paypal' ? 'show active' : ''}`}
                    id='paypal'
                    role='tabpanel'
                    aria-labelledby='paypal-tab'
                  >
                    <div className="mt-4 mx-4">
                      <div className="text-center">
                        <h5>Paypal帳號</h5>
                      </div>
                      <div className="form mt-3 row">
                        <div className="inputbox col-12">
                          <input type="text" name='name' id='name' className='form-control' required />
                          <span>信箱</span>
                        </div>
                        <div className="inputbox col-12">
                          <input type="text" name='number' id='number' min='1' max='999' className='form-control' required />
                          <span>姓名</span>
                          <i className="fa fa-eye"></i>
                        </div>
                        <div className="inputbox col-12">
                          <input type="text" name='number' id='number' min='1' max='999' className='form-control' required />
                          <span>額外資訊</span>
                        </div>
                      </div>
                      <div className="px-5 pay">
                        <button className="btn btn-success btn-block w-100 mt-3" onClick={handleOrderConfirm}>新增paypal帳號</button>
                      </div>
                    </div>
                  </div>
                </div>

                {/* 免責聲明 */}
                <p className='py-3 px-4 p-Disclaimer'><em>免責聲明: </em>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  )
}

export default CheckOutPage