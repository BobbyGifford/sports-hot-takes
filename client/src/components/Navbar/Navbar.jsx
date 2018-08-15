import React, { Component } from 'react';
import { connect } from 'react-redux';

import SignedInNav from './SignedInNav';
import NotSignInNav from './NotSignedIn';

class Navbar extends Component {
  render() {
    return <div>{this.props.auth ? <SignedInNav /> : <NotSignInNav />}</div>;
  }
}

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps)(Navbar);
