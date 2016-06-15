import React from 'react'

import { Link } from 'react-router'

const NavSection = function(){
  return (
    <nav>
      <div className="nav-top">
        <div>
          <br>
          </br>
          <br>
          </br>
          <h1>Tori Moca</h1>
        </div>
        <ul>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/">Porfolio</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </div>
      <div className="nav-bottom">
        <div className="image-container">
          <img src="https://cdn3.iconfinder.com/data/icons/peelicons-vol-1/50/Facebook-48.png" alt="" />
          <img src="https://cdn3.iconfinder.com/data/icons/peelicons-vol-1/50/Twitter-48.png" alt="" />
          <img src="https://cdn3.iconfinder.com/data/icons/peelicons-vol-1/50/Intsagram-48.png" alt="" />
        </div>
      </div>
    </nav>
  )
}

export default NavSection
