import React, { Component } from 'react';
import { connect } from 'react-redux';

import Spinner from '../Spinner';
import AddOpinionForm from './AddOpinionForm';

class Opinions extends Component {
  constructor() {
    super();

    this.state = {
      opinions: [],
      showForm: false,
    };
  }
  renderOpinions() {
    if (!this.props.opinions) {
      return <Spinner />;
    } else {
      if (this.props.opinions.length <= 0) {
        return (
          <div>
            <h1>there are no opinions</h1>
            <p>you should add one</p>
            <button
              className="waves-effect waves-light btn-large"
              onClick={() => {
                this.setState({ showForm: !this.state.showForm });
              }}
            >
              Toggle opinion form
            </button>
          </div>
        );
      } else {
        this.setState({ opinions: this.props.opinions });
        return <h1>opions go here</h1>;
      }
    }
  }
  render() {
    return (
      <div className="container center-align">
        <h1>{this.props.match.params.category}</h1>
        {this.renderOpinions()}
        {this.state.showForm ? <AddOpinionForm /> : null}
      </div>
    );
  }
}

function mapStateToProps({ opinions }) {
  return { opinions };
}

export default connect(mapStateToProps)(Opinions);
