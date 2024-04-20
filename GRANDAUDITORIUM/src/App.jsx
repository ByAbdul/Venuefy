import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Home from './Components/Home/Home'
import Program from './Components/Programs/Program'
import Title from './Components/Title/Title'
import About from './Components/About/About'
import Campus from './Components/Campus/Campus'
import Messages from './Components/Message/Messages'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'
import Map from './Components/Map/Map'
const App = () => {
  return (
    <div>
      <Navbar/>
      <Home/>
      <Program/>
      <div className="Container">
        {/* <Title subTitle='OUR PROGRAM' title='What We Offer'/> */}
        
       
        <About/>
        <Title subTitle='' title='Facilities'/>
        <Messages/>
        <Title subTitle='GALLERY' title='Our Memories'/>
        <Campus/>
        <Contact/>
        <Map/>
      </div>
      <Footer/>
    </div>
  )
}

export default App