import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import PageHeader from '../../components/PageHeader';
import { ProductDisplay } from './ProductDisplay';
import { Review } from './Review';
// Swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Autoplay, Navigation } from 'swiper/modules';

const SingleProduct = () => {
  const [product, setProduct] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    fetch('/src/products.json')
      .then(res => {
        if (!res.ok) {
          throw new Error('Network response was not ok');
        }
        return res.json();
      })
      .then(data => {
        const filteredProduct = data.filter(p => p.id === id);
        // 如果filteredProduct為空陣列進行相關處理
        if (filteredProduct.length === 0) {
          console.warn(`No product found with id: ${id}`);
        }
        setProduct(filteredProduct[0]);
      })
      .catch(error => console.error('Error fetching data:', error))
  }, [id]);

  return (
    <>
      <div>
        <PageHeader title={'產品'} currentPage={'Shop / Single Product'} />
        <div className="shop-single padding-tb aside-bg">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-8 col-12">
                <article>
                  <div className="product-details">
                    <div className="row align-items-center">
                      <div className="col-md-6 col-12">
                        <div className="product-thumb">
                          <div className="swiper-container pro-single-top">
                            <Swiper
                              className='mySwiper'
                              // install Swiper modules
                              modules={[Navigation, Autoplay]}
                              loop={true}
                              spaceBetween={30}
                              slidesPerView={1}
                              scrollbar={{ draggable: true }}
                              autoplay={{
                                delay: 2000,
                                disableOnInteraction: false,
                              }}
                              navigation={{
                                prevEl: '.pro-single-prev',
                                nextEl: '.pro-single-next',
                              }}
                            >
                              <SwiperSlide>
                                <div className="single-thumb" >
                                  <img src={product.img} alt="" />
                                </div>
                              </SwiperSlide>
                              <SwiperSlide>
                                <div className="single-thumb" >
                                  <img src={product.img} alt="" />
                                </div>
                              </SwiperSlide>
                              <SwiperSlide>
                                <div className="single-thumb" >
                                  <img src={product.img} alt="" />
                                </div>
                              </SwiperSlide>
                              <div className="pro-single-prev">
                                <i className="icofont-rounded-left"></i>
                              </div>
                              <div className="pro-single-next">
                                <i className="icofont-rounded-right"></i>
                              </div>
                            </Swiper>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6 col-12">
                        <div className="post-content">
                          <div>
                            <ProductDisplay product={product} />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* reviews */}
                  <div className="review">
                    <Review />
                  </div>
                </article>
              </div>
              {/* right side */}
              <div className="col-lg-4 col-12">Right Side</div>
            </div>
          </div>
        </div >
      </div >
    </>
  )
}

export default SingleProduct