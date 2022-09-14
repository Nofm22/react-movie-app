import React from 'react'
import HeroSlide from '../../components/HeroSlide'
import { CarouselTemplate } from '../../templates/CarouselTemplate'

function Home(props) {
  return (
    <div>
        <CarouselTemplate />
        <HeroSlide />
  
    </div>
  )
}

export default Home