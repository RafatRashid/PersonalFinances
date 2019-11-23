import React from 'react';


const Sidebar = ({children}) => (
  <div className="row">
    <div className="col-md-3">
      <nav>
        <ul className="nav flex-column bg-dark sidebar">
          <li className="nav-item">
            <a className="nav-link active" href="#">Main</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Financial Logs</a>
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