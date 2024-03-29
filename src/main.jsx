import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import 'swiper/css';
import PrivateRoute from './PrivateRoute/PrivateRoute.jsx';
import AuthProvider from './context/AuthProvider.jsx';

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
import Login from './pages/login/Login.jsx';
import SignUp from './pages/signup/SignUp.jsx';

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
        element: <PrivateRoute><CartPage /></PrivateRoute>
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
  },
  {
    path: "login",
    element: <Login />
  },
  {
    path: "sign-up",
    element: <SignUp />
  }
]
);
ReactDOM.createRoot(document.getElementById('root')).render(
  <AuthProvider>
    <RouterProvider router={router} />
  </AuthProvider>
)
