import React from 'react';
import { Link } from "react-router-dom";

import './Navbar.css';
import defaultProfileImage from '../../../assets/images/img_avatar.png';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <ul className="navbar-nav w-100 ">

        <li className="nav-item links">
          <Link className="nav-link pl-0" to='/finance'>
            <i className="fas fa-money-bill"></i>
            <span className="nav-item-description">Finances</span></Link>
        </li>

        <li className="nav-item links">
          <Link className="nav-link pl-0" to='/stats'>
            <i className="fas fa-chart-bar"></i>
            <span className="nav-item-description">Stats</span></Link>
        </li>

        <li className="nav-item profile-nav">
          <div className="nav-link pl-0" title="logout">
            <img className='profile-image' src={defaultProfileImage} height='50' width='50' />
            <span className="font-weight-bold profile-details">Rafat Rashid</span>
          </div>
        </li>

      </ul>
    </nav>



  );
}

export default Navbar;