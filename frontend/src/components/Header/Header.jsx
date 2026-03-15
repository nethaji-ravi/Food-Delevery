import React from 'react'
import './Header.css'

const Header = () => {
  return (
    <div className='header'>
        <div className="header-contents">
            <h2>Order your favorite food from here </h2>
            <p>Choose from a variety of cuisines and get them delivered at your doorstep</p>
            <a href="#explore-menu" className="view_menu_banner_btn"><button>View Menu</button></a>
        </div>
    </div>
  )
}

export default Header