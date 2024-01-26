import React from 'react'
import { Link } from 'react-router-dom';

const title = '服務超過 60,000 名客戶';

const desc = (<p>在任何裝置上使用SHOPCART APP享受購物時光<br />只需下載安裝即可開始輕鬆購物</p>);

const clientsList = [
  {
    imgUrl: '/src/assets/images/clients/avater.jpg',
    imgAlt: 'education thumb rajibraj91 rajibraj',
    text: 'FROM NORTH-AMERICA',
  },
  {
    imgUrl: '/src/assets/images/clients/avater.jpg',
    imgAlt: 'education thumb rajibraj91 rajibraj',
    text: 'FROM Greenland',
  },
  {
    imgUrl: '/src/assets/images/clients/avater.jpg',
    imgAlt: 'education thumb rajibraj91 rajibraj',
    text: 'FROM EUROPE',
  },
  {
    imgUrl: '/src/assets/images/clients/avater.jpg',
    imgAlt: 'education thumb rajibraj91 rajibraj',
    text: 'FROM SOUTH-AMERICA',
  },
  {
    imgUrl: '/src/assets/images/clients/avater.jpg',
    imgAlt: 'education thumb rajibraj91 rajibraj',
    text: 'FROM AFRICA',
  },
  {
    imgUrl: '/src/assets/images/clients/avater.jpg',
    imgAlt: 'education thumb rajibraj91 rajibraj',
    text: 'FROM AUSTRALIA',
  },
  {
    imgUrl: '/src/assets/images/clients/avater.jpg',
    imgAlt: 'education thumb rajibraj91 rajibraj',
    text: 'FROM ASIA',
  },
]

const LocationSprage = () => {
  return (
    <div className="clients-section style-2 padding-tb">
      <div className='container'>
        <div className="section-header text-center">
          <h2 className='title'>{title}</h2>
          {desc}
        </div>
        {/* main content */}
        <div className="section-wrapper">
          <div className="clients">
            {
              clientsList.map((client, idx) => {
                return (
                  <div key={idx} className='client-list'>
                    <Link to='/sign-up' className='client-content'>
                      <span>{client.text}</span>
                    </Link>
                    <div className="client-thumb">
                      <img src={client.imgUrl} alt={client.alt} />
                    </div>
                  </div>)
              })
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default LocationSprage