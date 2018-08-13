import React from "react";

import "./Navbar.css";

const Navbar = () => {
  return (
    <div>
      <nav className="blue lighten-4">
        <div className="nav-wrapper">
          <a href="#!" className="brand-logo center navHeading" style={{color: 'black'}}>
            Hot Takes
          </a>
          <a href="#" data-target="mobile-demo" className="sidenav-trigger">
            <i className="material-icons">menu</i>
          </a>
          <ul className="left hide-on-med-and-down">
            <li>
              <a style={{color: 'black'}} href="sass.html">Newest</a>
            </li>
            <li>
              <a style={{color: 'black'}} href="badges.html">NFL</a>
            </li>
            <li>
              <a style={{color: 'black'}} href="collapsible.html">NCAAF</a>
            </li>
            <li>
              <a style={{color: 'black'}} href="mobile.html">UFC</a>
            </li>
            <li>
              <a style={{color: 'black'}} href="mobile.html">NBA</a>
            </li>
            <li>
              <a style={{color: 'black'}} href="mobile.html">MLB</a>
            </li>
          </ul>
          <ul className="right hide-on-med-and-down">
            <li>
              <a style={{color: 'black'}}>Login</a>
            </li>
          </ul>
        </div>
      </nav>

      <ul className="sidenav" id="mobile-demo">
        <li>
          <a href="sass.html">Newest</a>
        </li>
        <li>
          <a href="badges.html">NFL</a>
        </li>
        <li>
          <a href="collapsible.html">NCAAF</a>
        </li>
        <li>
          <a href="mobile.html">UFC</a>
        </li>
        <li>
          <a href="mobile.html">NBA</a>
        </li>
        <li>
          <a href="mobile.html">MLB</a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
