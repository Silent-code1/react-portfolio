import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Loader from 'react-loaders'
import LogoTitle from '../../assets/images/logo-s.png'
import './index.scss'


const Home = () => {
    
    return (
       <div className="container home-page">
        <div className="text-zone">
          <h1>Hi, <br />I'm
          <img src={LogoTitle} alt="developer" />
          olianik
          <br />
          web developer
          </h1>
          <h2>Frontend developer / JavaScript / React</h2>
          <Link to="/contact" className="flat-button">
            CONTACT ME
          </Link>
        </div>
      </div>
    ) 
}

export default Home