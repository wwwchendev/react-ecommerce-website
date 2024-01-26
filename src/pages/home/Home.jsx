import React from 'react'
import Banner from './Banner'
import HomeCategory from './HomeCategory'
import CategoryShowCase from './CategoryShowCase'
import Register from './Register'
import LocationSprage from './LocationSprage'
import AboutUs from './AboutUs'
import { AppSection } from './AppSection'


const Home = () => {
  return (
    <>
      <Banner />
      <HomeCategory />
      <CategoryShowCase />
      <Register />
      <LocationSprage />
      <AboutUs />
      <AppSection />
    </>
  )
}

export default Home