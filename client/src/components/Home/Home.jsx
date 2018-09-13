import React, { Component } from 'react';
import { connect } from 'react-redux';

import './Home.css';

class Home extends Component {
  render() {
    return (
      <div className="style-container">
        <div className="body-container">
          <div className="style-content">
            <h1>Welcome to Sports Hot Takes</h1>
            {this.props.auth ? null : (
              <a
                href="/api/auth/google/"
                className="waves-effect waves-light btn-large blue accent-3"
              >
                Login
              </a>
            )}
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
