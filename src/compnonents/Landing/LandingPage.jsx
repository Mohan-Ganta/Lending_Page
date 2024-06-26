import React from 'react'
import NavBar from '../NavBar'
import Hero from './Hero'
import About from './About'
import './Lending.css'
import Services from './Services'
import Footer from './Footer'
import AtmCards from './AtmCards'

export default function LandingPage() {
  return (
    <div className='main-page'>
      <NavBar/>
      <Hero/>
      <div className='About'>
      <About/>
      </div>
      <div className='Services'> 
      <Services/>
      </div>
      <div className='Atmcards'>
         <AtmCards/>
      </div>
      <div className='Footer'>
        <Footer/>
      </div>
      
      
      
      
    </div>
    
  )
}
