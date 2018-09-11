import React, { Component } from 'react';
import { connect } from 'react-redux';
import landingImage from '../../images/hottakes2.jpg';

class Home extends Component {
  render() {
    const style = {
      stylyContainer: {
        width: '100%',
        height: '100vh',
        backgroundImage: `url(${landingImage})`,
      },
      bodyContainer: {
        padding: '25vh 0 10vh 0',
        width: '100%',
        backgroundPositionY: '-20vh',
      },
      styleContent: {
        backgroundColor: 'rgb(30, 50, 56, .8)',
        height: '100%',
        width: '100%',
        color: 'white',
        paddingTop: '2vh',
        paddingBottom: '2vh',
        textAlign: 'center',
      },
    };

    return (
      <div style={style.stylyContainer}>
        <div style={style.bodyContainer}>
          <div style={style.styleContent}>
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
