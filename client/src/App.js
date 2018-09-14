import React, { Component } from 'react';
import { Router, Route } from 'react-router-dom';
import * as actions from './actions';
import { connect } from 'react-redux';
import history from './history';

// Components
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Opinions from './components/Opinions/Opinions';
import Opinion from './components/Opinions/Opinion';
import MockDrafts from './components/MockDrafts/MockDrafts';

class App extends Component {
  componentDidMount() {
    this.props.fetchUser();
    this.props.fetchOpinions();
    this.props.fetchDrafts();
  }

  render() {
    return (
      <Router history={history}>
        <div>
          <Navbar />
          <Route exact path="/" component={Home} />
          <Route path="/opinions/:category" component={Opinions} />
          <Route path="/opinion/:id" component={Opinion} />
          <Route path="/mockdrafts/:category" component={MockDrafts} />
        </div>
      </Router>
    );
  }
}

export default connect(
  null,
  actions
)(App);
