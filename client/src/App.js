import React, { Component } from 'react';
import { Router, Route } from 'react-router-dom';
import * as actions from './actions';
import { connect } from 'react-redux';
import history from './history';

// Component
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';

class App extends Component {
  componentDidMount() {
    this.props.fetchUser();
  }

  render() {
    return (
      <Router history={history}>
        <div>
          <Navbar />
          <Route exact path="/" component={Home} />
        </div>
      </Router>
    );
  }
}

export default connect(
  null,
  actions
)(App);
