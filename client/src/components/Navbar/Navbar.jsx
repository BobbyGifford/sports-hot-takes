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
          <Link to={'/opinions/' + category}>{category}</Link>
        </li>
      );
    });
  }

  dropdownText() {
    if (this.props.auth) {
      return (
        <div>
          Hot Takes
          <i className="material-icons right">arrow_drop_down</i>
        </div>
      );
    } else {
      return <div>Not signed in</div>;
    }
  }

  render() {
    return (
      <div>
        {/* <!-- Category Dropdown Structure --> */}
        <ul id="dropdown1" className="dropdown-content">
          {this.props.auth ? this.renderCategories() : null}
        </ul>

        {/* <!-- Mock Draft Dropdown Structure --> */}
        <ul id="dropdown1" className="dropdown-content">
          <li>
            <Link to="/mockdrafts/NFL">NFL</Link>
          </li>
        </ul>

        <nav className="blue-grey darken-4">
          <div className="nav-wrapper">
            <Link to="/" className="brand-logo center navHeading">
              Hot Takes
            </Link>

            <a data-target="mobile-demo" className="sidenav-trigger">
              <i className="material-icons">menu</i>
            </a>

            {/* Nav items on left */}
            <ul className="hide-on-med-and-down">
              {this.props.auth ? null : ( // <span>{this.renderCategories()}</span>
                <li>
                  <a href="/api/auth/google/">Login</a>
                </li>
              )}
              <li>
                <a
                  className="dropdown-trigger"
                  href="#!"
                  data-target="dropdown1"
                >
                  {this.dropdownText()}
                </a>
              </li>
              <li>
                <a
                  className="dropdown-trigger"
                  href="#!"
                  data-target="dropdown1"
                >
                  Mock Drafts
                  <i className="material-icons right">arrow_drop_down</i>
                </a>
              </li>
            </ul>

            {/* Nav items on right */}
            {this.props.auth ? (
              <ul className="right hide-on-med-and-down">
                <li>
                  <a href="/api/logout">Logout</a>
                </li>
              </ul>
            ) : null}
          </div>
        </nav>

        <ul className="sidenav" id="mobile-demo">
          {this.props.auth ? (
            <div>
              <li>Opinion Categories</li>
              {this.renderCategories()}
              <li>Mock Drafts</li>
              <li>
                <Link to="/mockdrafts/NFL">NFL</Link>
              </li>
            </div>
          ) : (
            <a href="/api/auth/google/">Login</a>
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
