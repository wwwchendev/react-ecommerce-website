import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay } from 'swiper/modules';
const sponsorList = [
  {
    imgUrl: "/images/sponsor/01.png",
  },
  {
    imgUrl: "/images/sponsor/02.png",
  },
  {
    imgUrl: "/images/sponsor/03.png",
  },
  {
    imgUrl: "/images/sponsor/04.png",
  },
  {
    imgUrl: "/images/sponsor/05.png",
  },
  {
    imgUrl: "/images/sponsor/06.png",
  },
];

const Sponsors = () => {
  return (
    <div className="sponsor-section section-bg">
      <div className="container">
        <div className="section-wrapper">
          <div className="sponsor-slider">
            <Swiper
              slidesPerView={2}
              spaceBetween={20}
              autoplay={
                {
                  delay: 2000,
                  disableOnInteraction: false
                }
              }
              breakpoints={{
                640: {
                  slidesPerView: 1,
                  spaceBetween: 20,
                },
                768: {
                  slidesPerView: 3,
                  spaceBetween: 40,
                },
                1024: {
                  slidesPerView: 5,
                  spaceBetween: 50,
                },
              }}
              modules={{ Autoplay }}
              className='mySwiper'
            >
              {
                sponsorList.map((sponsor, idx) => {
                  return <SwiperSlide key={idx}>
                    <div className="sponsor-iten">
                      <div className="sponsor-thumb">
                        <img src={sponsor.imgUrl} alt={`sponsor-${idx}`} />
                      </div>
                    </div>
                  </SwiperSlide>
                })
              }
            </Swiper>
          </div>
        </div>
      </div>
    </div >
  )
}

export default Sponsors