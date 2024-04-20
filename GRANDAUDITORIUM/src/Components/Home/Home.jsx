import React from 'react'
import './Home.css'
import dark_arrow from '../../assets/dark-arrow.png'

const Home = () => {
  return (
    <div className='hero Container' id='Home'>
    <div className="home-text">
        <h1 className='grand'>GRAND</h1>
        <h1 className='auditorium'>AUDITORIUM</h1>
        <p className='your'>YOUR Celebration Point - In Kasaragod</p>
        <button className='btn'>Learn More<img src={dark_arrow} alt="" /></button>
    </div>
    </div>
  )
}

export default Home