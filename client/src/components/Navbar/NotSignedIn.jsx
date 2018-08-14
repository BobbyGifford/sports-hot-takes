import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

class Navbar extends Component {
  render() {
    return (
      <div>
        <nav className="blue lighten-4">
          <div className="nav-wrapper">
            <Link
              to="/"
              className="brand-logo center navHeading"
              style={{ color: 'black' }}
            >
              Hot Takes
            </Link>
            <a data-target="mobile-demo" className="sidenav-trigger">
              <i className="material-icons">menu</i>
            </a>

            {/* Nav items on right */}

            <ul className="right hide-on-med-and-down">
              <li>
                <a href="/api/auth/google/" style={{ color: 'black' }}>
                  Login
                </a>
              </li>
            </ul>
          </div>
        </nav>

        <ul className="sidenav" id="mobile-demo">
          <li>
            <a href="/api/auth/google/">Login</a>
          </li>
        </ul>
      </div>
    );
  }
}

export default Navbar;
