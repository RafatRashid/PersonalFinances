import React from 'react';
import {Link} from "react-router-dom";

import './Sidebar.css';
import defaultProfileImage from '../../../assets/images/img_avatar.png';

const Sidebar = () => {
  return (
    <aside className="col-12 col-md-2 p-0 bg-dark">
      <nav className="navbar navbar-expand navbar-dark bg-dark flex-md-column flex-row align-items-start py-2">
        <div className="collapse navbar-collapse containers-nav-link">
          <ul className="flex-md-column flex-row navbar-nav w-100 justify-content-between">

            <li className="nav-item profile-nav">
              <div className="nav-link pl-0" title="logout">
                <img className='profile-image' src={defaultProfileImage} height='50' width='50'/>
                <span className="font-weight-bold profile-details">User name</span>
              </div>
            </li>

            <li className="nav-item">
              <hr className='nav-items-seperator'/>
            </li>

            <li className="nav-item">
              <Link className="nav-link pl-0" to='/about'><i className="fa fa-star fa-fw"></i>
                <span className="d-none d-md-inline nav-item-description">Accounts</span></Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link pl-0" to='/about'><i className="fa fa-star fa-fw"></i>
                <span className="d-none d-md-inline nav-item-description">Accounts</span></Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link pl-0" to='/contact'><i className="fa fa-star fa-fw"></i>
                <span className="d-none d-md-inline nav-item-description">Reports</span></Link>
            </li>
          </ul>
        </div>
      </nav>
    </aside>
  );
}

export default Sidebar;