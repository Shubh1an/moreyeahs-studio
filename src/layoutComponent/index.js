import React from 'react'
import CarouselCards from "../pages/CarouselCards"
import Home from '../pages/Home'
import FooterSection from './FooterSection'
import Header from './Header'
export default function Layout() {
 

  return (
    <div className="bg_dark">
      <Header/>
      <Home/>
      <CarouselCards/>
      <FooterSection/>
    </div>
  )
}
