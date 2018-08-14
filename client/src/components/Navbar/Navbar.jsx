import React, { Component } from 'react';
import { connect } from 'react-redux';

import SignedInNav from './SignedInNav';
import NotSignInNav from './NotSignedIn';

class Navbar extends Component {
  componentDidMount() {
    console.log(this.props.auth);
  }

  componentDidUpdate() {
    console.log(this.props.auth);
  }

  render() {
    return <div>{this.props.auth ? <SignedInNav /> : <NotSignInNav />}</div>;
  }
}

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps)(Navbar);
