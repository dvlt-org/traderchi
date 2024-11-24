import React from 'react'
import ProfileImg from "../assets/profileImg.jpg"
import "./components.css"

export default function Sidebar() {
  return (
    <div className='sidebar'>
      <div className='sidebar-navigation'>
        <img src={ProfileImg} alt={`there is a image`} />
        <div className='sidebar-navigation__items'>
          <i className="fa-solid fa-chart-simple"></i>
          <i className="fa-solid fa-message"></i>
          <i className="fa-solid fa-person-chalkboard"></i>
        </div>
      </div>
      <i className="fa-solid fa-right-from-bracket"></i>
    </div>
  )
}
