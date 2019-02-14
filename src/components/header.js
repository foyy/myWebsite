import React from 'react'
import Link from 'gatsby-link'
import './Header.css'

const Header = ({ siteTitle }) => (
  <div className="Header">
    <div className="HeaderGroup">
      <Link to="/"><img width="30" src={require('../images/logo-designcode.svg')} /></Link>
      <Link to="/courses">Projects </Link>
      <Link to="downloads">Resume</Link>
      <Link to="/workshops">Contact</Link>
      <Link><button to="/buy">Buy</button></Link>

    </div>

  </div>
)

export default Header
