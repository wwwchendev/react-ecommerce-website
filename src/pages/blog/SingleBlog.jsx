/* eslint-disable react/jsx-no-target-blank */
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import PageHeader from '../../components/PageHeader';
import blogList from '../../utilis/blogdata'
import PopularPost from '../shop/PopularPost';
import Tags from '../shop/Tags';
const socialList = [
  {
    iconName: 'icofont-facebook',
    siteLink: '#',
    className: 'facebook',
  },
  {
    iconName: 'icofont-twitter',
    siteLink: '#',
    className: 'twitter',
  },
  {
    iconName: 'icofont-linkedin',
    siteLink: '#',
    className: 'linkedin',
  },
  {
    iconName: 'icofont-instagram',
    siteLink: '#',
    className: 'instagram',
  },
  {
    iconName: 'icofont-pinterest',
    siteLink: '#',
    className: 'pinterest',
  },
]
const SingleBlog = () => {
  const [blog, setBlog] = useState([]);
  const { id } = useParams();
  const filteredBlog = blogList.filter((blog) => blog.id === Number(id));

  useEffect(() => {
    setBlog(filteredBlog[0]);
  }, [filteredBlog]);

  if (blog.length === 0) { return <p>Blog not found</p> }
  return (
    <div>
      <PageHeader title={'文章'} currentPage={`Blog/${blog.title}`} />
      <div className="blog-section blog-single padding-tb section-bg">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 col-12">
              <article>
                <div className="section-wrapper">
                  <div className="row row-cols-1 justify-content-center g-4">
                    <div className="col">
                      <div className="post-item style-2">
                        <div className="post-inner">
                          <div className="post-thumb">
                            <img src={blog.imgUrl} alt="" />
                          </div>
                          <div className="post-content">
                            <h3>{blog.title}</h3>
                            <div className="meta-post">
                              <ul className="lab-ul">
                                {
                                  blog.metaList.map((item, idx) => (
                                    <li key={idx}>
                                      <i className={item.iconName}></i>
                                      {item.text}
                                    </li>
                                  ))
                                }
                              </ul>
                            </div>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum quia numquam adipisci saepe voluptatem eligendi animi, veniam et quis nisi ut fugiat illum amet eius dolores sunt laborum. Officiis facilis quasi obcaecati dolore, vero repellat ut maiores dignissimos quaerat earum nisi sunt molestias, temporibus rerum explicabo, quas odit dolorem enim!</p>
                            <blockquote>
                              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit quidem sed fuga. Id et, nesciunt asperiores dolorum vitae repellendus adipisci.</p>
                              <cite>
                                <a href="#">...Melissa Hunter</a>
                              </cite>
                            </blockquote>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum quia numquam adipisci saepe voluptatem eligendi animi, veniam et quis nisi ut fugiat illum amet eius dolores sunt laborum. Officiis facilis quasi obcaecati dolore, vero repellat ut maiores dignissimos quaerat earum nisi sunt molestias, temporibus rerum explicabo, quas odit dolorem enim!</p>
                            <img src="/src/assets/images/blog/single/01.jpg" alt="" />
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum quia numquam adipisci saepe voluptatem eligendi animi, veniam et quis nisi ut fugiat illum amet eius dolores sunt laborum. Officiis facilis quasi obcaecati dolore, vero repellat ut maiores dignissimos quaerat earum nisi sunt molestias, temporibus rerum explicabo, quas odit dolorem enim!
                              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum minima consectetur quasi adipisci vel totam, ullam voluptas. Harum, porro natus?
                            </p>
                            <div className='video-thumb'>
                              <img src="/src/assets/images/blog/single/02.jpg" alt="" />
                              <a href="https://www.youtube.com/watch?v=bMknfKXIFA8" className='video-button popup' target='_blank'><i className='icofont-ui-play'></i></a>
                            </div>

                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum quia numquam adipisci saepe voluptatem eligendi animi, veniam et quis nisi ut fugiat illum amet eius dolores sunt laborum. Officiis facilis quasi obcaecati dolore, vero repellat ut maiores dignissimos quaerat earum nisi sunt molestias, temporibus rerum explicabo, quas odit dolorem enim!
                              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum minima consectetur quasi adipisci vel totam, ullam voluptas. Harum, porro natus?
                            </p>

                            {/* tags */}
                            <div className="tags-section">
                              <ul className="tags lab-ul">
                                <li>
                                  <a href="#">機構</a>
                                </li>
                                <li>
                                  <a href="#">商業</a>
                                </li>
                                <li>
                                  <a href="#">個人</a>
                                </li>
                              </ul>
                              <ul className="social-icons lab-ul">
                                {
                                  socialList.map((item, idx) => {
                                    return <li key={idx}>
                                      <a href="#" className={item.className}>
                                        <i className={item.iconName}></i>
                                      </a>
                                    </li>
                                  })
                                }
                              </ul>
                            </div>

                          </div>

                        </div>
                      </div>
                      <div className="navigations-part">
                        <div className="left">
                          <a href="#" className="prev">
                            <i className="icofont-double-left"></i>
                            上一篇
                          </a>
                          <a href="#" className='title'>
                            Officiis facilis quasi obcaecati dolore
                          </a>
                        </div>
                        <div className="right">
                          <a href="#" className="prev">
                            <i className="icofont-double-right"></i>
                            下一篇
                          </a>
                          <a href="#" className='title'>
                            Nostrum minima consectetur quasi adipisci vel totam  amet consectetur
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            </div>
            <div className="col-lg-4 col-12">
              <aside className="ps-lg-4">
                <Tags />
                <PopularPost />
              </aside>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleBlog