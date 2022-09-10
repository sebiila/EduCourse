import React from 'react'
import AboutCard from '../about/AboutCard'
import Hero from "./hero/Hero"
import HAbout from './HAbout'
import Test  from './testimonial/Test'
import Hblog from './Hblog'
import Hprice from './Hprice'

const Home = () => {
  return (
    <>
        <Hero/>
        <AboutCard/>
        <HAbout/>
         <Test/>
         <Hblog/>
         <Hprice/>
    </>
  )
}

export default Home