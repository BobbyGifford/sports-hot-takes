import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import logo from '../../images/hottakeslogo2.png';
import './Home.css';

const categories = ['NFL', 'NCAAF', 'UFC', 'NBA', 'MLB'];

class Home extends Component {
  render() {
    return (
      <div className="style-container">
        <div className="body-container">
          <div className="style-content">
            <img src={logo} alt="logo" />
            {this.props.auth ? null : (
              <a
                href="/api/auth/google/"
                className="waves-effect waves-light btn-large blue accent-3"
              >
                Login
              </a>
            )}
            <br />
            {categories.map(category => {
              return (
                <span key={category}>
                  <Link
                    to={'/opinions/' + category}
                    className="btn btn-success home_buttons"
                  >
                    {category}
                  </Link>
                </span>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps)(Home);
