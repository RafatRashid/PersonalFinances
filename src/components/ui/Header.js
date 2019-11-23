import React from 'react';

const Header = () => (
  <nav className="navbar navbar-expand-sm bg-dark navbar-dark flex-row-reverse">
    <ul className="navbar-nav">
      <li className="nav-item active">
        <input type="text" className="form-control" placeholder="search stuffs mayb :/"/>
      </li>
    </ul>
  </nav>
);

export default Header;