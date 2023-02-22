import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Submenu=({item,index})=>{ 
  const [subnav, setSubnav]= useState(false)

  const show =(e)=>{
    setSubnav(!subnav)
  }
  return (     
    <> 
        <a to="" onClick={item.sousTitle && show} key={index}>
          <div>
            <i className={item.icon}></i>
                {item.titre}
              {show && subnav? item.sousTitle.map((itemSous)=>{
                return <ul className="sous-sidenav">
                  <Link to={itemSous.path}><li key={index}>{itemSous.titre}</li></Link>
                </ul>
              })
            :''  }
          </div>
            <i className={subnav?item.iconClose: item.iconDown}></i>        
        </a> 
    </>
  )
}

export default Submenu