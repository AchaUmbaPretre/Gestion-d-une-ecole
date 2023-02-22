import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import {SidenavItem} from '../sidenavItem/SidenavItem'
import Submenu from '../sidenavItem/Submenu'
import './sidenav.css'

const Sidenav = () => {
    const [show, setShow]= useState(false)
    const Handclick = (e) =>{
        e.preventDefault()
        setShow(!show)
    }

  return (
    <>
        <div className="sidenav">
            <div className="containerSidenav">
                <h3 className='sidenavH3'>Navigation principe</h3>
                <ul className="sidenvUl">
                    <li className="sidenavLi" onClick={Handclick}>
                        {  SidenavItem.map((item,index)=>{
                           return <Submenu item={item} index={index}/>
                        })  }
                    </li>
                </ul>
            </div>
        </div>
    </>
  )
}

export default Sidenav