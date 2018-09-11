import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Navbar extends Component {
  constructor() {
    super();

    this.state = {
      categories: ['NFL', 'NCAAF', 'UFC', 'NBA', 'MLB'],
    };
  }

  renderCategories() {
    return this.state.categories.map(category => {
      return (
        <li key={category}>
          <Link to={'/opinions/' + category} style={{ color: 'black' }}>
            {category}
          </Link>
        </li>
      );
    });
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
              {this.props.auth ? (
                this.renderCategories()
              ) : (
                <a href="/api/auth/google/" style={{ color: 'black' }}>
                  Login
                </a>
              )}
            </ul>

            {/* Nav items on right */}
            {this.props.auth ? (
              <ul className="right hide-on-med-and-down">
                <li>
                  <a href="/api/logout" style={{ color: 'black' }}>
                    Logout
                  </a>
                </li>
              </ul>
            ) : null}
          </div>
        </nav>

        <ul className="sidenav" id="mobile-demo">
          {this.props.auth ? (
            this.renderCategories()
          ) : (
            <a href="/api/auth/google/" style={{ color: 'black' }}>
              Login
            </a>
          )}
        </ul>
      </div>
    );
  }
}

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps)(Navbar);
