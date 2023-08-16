import React from 'react'
import Discover from './Discover'
import About from './About'
import Community from './Community'
import Services from './Service'

const Homepage = () => {
  return (
   <>
    <section id="discover"> <Discover/> </section>
    <section id="service"> <Services/> </section>
    <section id="aboutus"> <About/> </section>
    <section id="community"> <Community/> </section>
   </>
  )
}

export default Homepage
