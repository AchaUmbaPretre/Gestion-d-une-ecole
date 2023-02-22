import React from 'react'
import './topbar.css'
import acha from '../../assets/acha.jpg'

const Topbar = () => {
  return (
    <>
        <div className="topbar">
            <span className="Toptitle">Gestion de l'ecole</span>
            <div className="topbar-right">
              <div className="topbar-cloche">
                <i className="fa-regular fa-message message topbar-icon"></i>
                <span className="topbar-not">1</span>
              </div>
              <div className="topbar-cloche">
                <i className="fa-regular fa-bell topbar-icon"></i>
                <span className="topbar-not">2</span>
              </div>
              <div className="topbar-img">
                <img src={acha} alt="" className="topbar-img-adm" />
                <i className="fas fa-angle-down topbar-down topbar-icon"></i>
              </div>
              
            </div>
        </div>
    </>
  )
}

export default Topbar