import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import axios from 'axios';
import * as actions from '../../actions';

import Spinner from '../Spinner';
import AddOpinionForm from './AddOpinionForm';

import './Opinions.css'

class Opinions extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showForm: false,
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    this.props.fetchOpinions();
  }

  handleDelete(id) {
    axios.delete('/api/opinions/' + id);
    this.props.fetchOpinions();
  }

  renderOpinions() {
    //   Filters to show opinions that match current page
    let correctOpinion = [];
    for (let item of this.props.opinions) {
      if (item.sport === this.props.match.params.category) {
        correctOpinion.push(item);
      }
    }

    // Displays new opinion list to page
    return correctOpinion.map(opinion => {
      return (
        //   Export to component when possible
        <div key={opinion.claim}>
          {/* className="col s12 m8 offset-m2" */}
          <div className="col s4">
            <div className="card blue-grey darken-1">
              <div className="card-content white-text">
                <span className="card-title">{opinion.claim}</span>
              </div>
              <div className="card-action">
                {this.props.auth._id === opinion.user._id ? (
                  <button
                    onClick={() => this.handleDelete(opinion._id)}
                    className="waves-effect waves-light btn red"
                    style={{ marginBottom: '2rem' }}
                  >
                    Delete
                  </button>
                ) : null}
                <br />
                <Link
                  to={'/opinion/' + opinion._id}
                  className="waves-effect waves-light btn blue"
                >
                  View Details
                </Link>
              </div>
            </div>
          </div>
        </div>
        // ____________________________________
      );
    });
  }

  handleInputChange(event) {
    const value = event.target.value;
    const name = event.target.name;

    this.setState({ [name]: value });
  }

  handleSubmit(event) {
    event.preventDefault();

    const formData = {
      claim: this.state.claim,
      sport: this.props.match.params.category,
      description: this.state.description,
      youtube: this.state.youtube,
    };

    axios.post('/api/opinions', formData).then(res => {
      console.log(res.data);
    });
    this.setState({ showForm: false });
    this.setState({ youtube: null });
    this.props.fetchOpinions();
    console.log(formData);
  }

  render() {
    return (
      <div className="opinions-style-container">
        <div className="opinions-body-container">
          <div className="opinions-style-content">
            <div className="container center-align">
              <div className="row">
                <h1>{this.props.match.params.category}</h1>
                {this.props.opinions ? this.renderOpinions() : <Spinner />}
              </div>
              <br />
              <button
                className="waves-effect waves-light btn-large"
                onClick={() => {
                  this.setState({ showForm: !this.state.showForm });
                }}
              >
                Toggle opinion form
              </button>
              {this.state.showForm ? (
                <AddOpinionForm
                  onChange={this.handleInputChange}
                  onSubmit={this.handleSubmit}
                />
              ) : null}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps({ opinions, auth }) {
  return { opinions, auth };
}

export default connect(
  mapStateToProps,
  actions
)(Opinions);
