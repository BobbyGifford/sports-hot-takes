import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Navbar.css';

class Navbar extends Component {
  constructor() {
    super();

    this.state = {
      categories: ['Newest', 'NFL', 'NCAAF', 'UFC', 'NBA', 'MLB'],
    };
  }

  render() {
    return (
      <div>
        <nav className="blue lighten-4">
          <div className="nav-wrapper">
            <a
              href="#!"
              className="brand-logo center navHeading"
              style={{ color: 'black' }}
            >
              Hot Takes
            </a>
            <a href="#" data-target="mobile-demo" className="sidenav-trigger">
              <i className="material-icons">menu</i>
            </a>

            {/* Nav items on left */}
            <ul className="left hide-on-med-and-down">
              {this.state.categories.map(category => {
                return (
                  <li key={category}>
                    <a style={{ color: 'black' }} href="badges.html">
                      {category}
                    </a>
                  </li>
                );
              })}

              {/* Nav items on right */}
            </ul>
            <ul className="right hide-on-med-and-down">
              <li>
                <a style={{ color: 'black' }}>Login</a>
              </li>
            </ul>
          </div>
        </nav>

        <ul className="sidenav" id="mobile-demo">
          {this.state.categories.map(category => {
            return (
              <li key={category}>
                <a href="sass.html">{category}</a>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps)(Navbar);
