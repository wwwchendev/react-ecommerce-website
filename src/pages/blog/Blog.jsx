import React from 'react'
import { Link } from 'react-router-dom'
import PageHeader from '../../components/PageHeader'
import blogList from '../../utilis/blogdata'

const Blog = () => {
  return (
    <div>
      <PageHeader title='Our Blog Page' currentPage='Blog' />
      <div className="blog-section padding-tb section-bg">
        <div className="container">
          <div className="section-wrapper">
            <div className="row row-cols-1 row-cols-md-2 row-cols-xl-3 justify-content-center g-4  ">
              {
                blogList.map((blog, idx) => {
                  return (
                    <div key={idx} className="col ">
                      <div className="post-item h-100">
                        <div className="post-inner h-100 d-flex flex-column">
                          <div className="post-thumb">
                            <Link to={`/blog/${blog.id}`}>
                              <img src={blog.imgUrl} alt="" />
                            </Link>
                          </div>
                          <div className="post-content mt-auto">
                            <Link to={`/blog/${blog.id}`}>
                              <h4>{blog.title}</h4>
                            </Link>
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
                            <p>{blog.desc}</p>
                          </div>
                          <div className="post-footer mt-auto">
                            <div className="pf-left">
                              <Link to={`/blog/${blog.id}`} className='lab-btn-text'>
                                {blog.btnText}
                                <i className="icofont-external link"></i>
                              </Link>
                            </div>
                            <div className="pf-right">
                              <i className="icofont-comment"></i>
                              <span className="comment-count">{blog.commentCount}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )
                })
              }
            </div>
          </div>
        </div>
      </div>

    </div >
  )
}

export default Blog