import React from 'react'
import './home.css'
import Feature from '../../components/feature/Feature'
import Sidenav from '../../components/sidenav/Sidenav'
import Topbar from '../../components/topbar/Topbar'

const Home = () => {
 
  return (
    <>
        <Topbar />
        <div className="container">
            <Sidenav />
            <Feature />
        </div>
    </>
  )
}

export default Home