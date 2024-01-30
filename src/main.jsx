import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import 'swiper/css';

// bootstrap css
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

// fonts and icons
import '././assets/css/icofont.min.css';
import '././assets/css/animate.css';
import '././assets/css/style.min.css';
import '././assets/sass/style.css';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './pages/home/Home.jsx';
import Blog from './pages/blog/Blog.jsx';
import Shop from './pages/shop/Shop.jsx';
import SingleProduct from './pages/singleProduct/SingleProduct.jsx';
import CartPage from './pages/cardPage/CartPage.jsx';
import SingleBlog from './pages/blog/SingleBlog.jsx';
import About from './pages/about/About.jsx';
import Contact from './pages/contact/Contact.jsx';
import AuthProvider from './context/AuthProvider.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/shop",
        element: <Shop />
      },
      {
        path: "/shop/:id",
        element: <SingleProduct />
      },
      {
        path: "/cart-page",
        element: <CartPage />
      },
      {
        path: "/blog",
        element: <Blog />
      },
      {
        path: "/blog/:id",
        element: <SingleBlog />
      },
      {
        path: "/about",
        element: <About />
      },
      {
        path: "/contact",
        element: <Contact />
      }
    ]
  }
]
);
ReactDOM.createRoot(document.getElementById('root')).render(
  <AuthProvider>
    <RouterProvider router={router} />
  </AuthProvider>
)
