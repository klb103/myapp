import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class NavBar extends Component {
  render() {
    return (
      <nav className="navbar" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">

        </div>
        <div id="navbar" className="navbar-menu">
          <div className="navbar-start">
            <Link to="/" className="navbar-item">Home</Link>
            <Link to="/docs" className="navbar-item">Documentation</Link>
          </div>
        </div>
      </nav>
    );
  }
}

export default NavBar;
