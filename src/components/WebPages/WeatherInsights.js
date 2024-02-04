import React from 'react'
// import Carousel from './Carousel'
import InsightsSlide from '../StyleComponents/InsightsSlide'
import Accordion from '../StyleComponents/Accordion'

export default function WeatherInsights() {
  return (
    <>
      <div className="container">
      <div className="row">
        <div className="col-md-6">
            <Accordion/>
        </div>
        <div className="col-md-6"> 
             <InsightsSlide/>
        </div>
      </div>
    </div>
    </>
  )
}
