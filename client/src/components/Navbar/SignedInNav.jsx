import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Navbar extends Component {
  constructor() {
    super();

    this.state = {
      categories: ['NFL', 'NCAAF', 'UFC', 'NBA', 'MLB'],
    };
  }

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

            {/* Nav items on left */}
            <ul className="left hide-on-med-and-down">
              {this.state.categories.map(category => {
                return (
                  <li key={category}>
                    <Link
                      to={'/opinions/' + category}
                      style={{ color: 'black' }}
                    >
                      {category}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </nav>

        <ul className="sidenav" id="mobile-demo">
          {this.state.categories.map(category => {
            return (
              <li key={category}>
                <Link to={'/opinions/' + category}>{category}</Link>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default Navbar;
