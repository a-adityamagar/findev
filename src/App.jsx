import React from 'react'
import NavBar from './components/Navbar'
import Intro from './components/Intro'
import GetStarted from './components/GetStarted'
import Services from './components/Services'
import WhyUs from './components/WhyUs'


export default function App() {
  return (
    <div>
      <NavBar/>
      <Intro/>
      <GetStarted/>
      <Services/>
      <WhyUs/>
    </div>
  )
}
