import React from 'react';
import {Link} from 'react-router-dom';


const Sidebar = ({children}) => (
  <div className="row">
    <div className="col-md-3">
      <nav>
        <ul className="nav flex-column bg-dark sidebar">
          <li className="nav-item">
            <Link className="nav-link active" to="/">Main</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/finance">Financial Logs</Link>
          </li>

        </ul>
      </nav>
    </div>

    <div className="col-md-9">
      {children}
    </div>
  </div>
)

export default Sidebar;