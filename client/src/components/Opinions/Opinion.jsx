import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';

import Spinner from '../Spinner';

class Opinion extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLiked: false,
    };

    axios.get('/api/opinions/' + this.props.match.params.id).then(res => {
      this.setState({ opinion: res.data });
    });

    this.renderContent = this.renderContent.bind(this);
    this.handleLike = this.handleLike.bind(this);
  }

  componentDidUpdate() {
    console.log(this.props.auth);
  }

  handleLike() {
    console.log('juice');
    axios.post('/api/opinions/like/' + this.props.match.params.id).then(res => {
      this.setState({ opinion: res.data });
    });
  }

  showLikeButton() {
    if (this.state.opinion.likes.length <= 0) {
      return (
        <div>
          <p>There are no likes</p>
          <button
            onClick={this.handleLike}
            className="waves-effect waves-light btn pink"
          >
            <i className="material-icons">favorite</i>
          </button>
        </div>
      );
    } else if (
      this.state.opinion.likes.map(like => like.user === this.props.auth._id)
    ) {
      return (
        <div>
          <p>{this.state.opinion.likes.length} likes</p>
          <p>You Like this</p>
        </div>
      );
    } else {
      return (
        <div>
          <p>{this.state.opinion.likes.length} likes</p>
          <button
            onClick={this.handleLike}
            className="waves-effect waves-light btn pink"
          >
            <i className="material-icons">favorite</i>
          </button>
        </div>
      );
    }
  }

  renderContent() {
    if (this.state.opinion) {
      return (
        <div className="center-align">
          <h1>{this.state.opinion.claim}</h1>
          <p>{this.state.opinion.description}</p>

          {this.showLikeButton()}
        </div>
      );
    } else {
      return (
        <div className="center-align">
          <br />
          <Spinner />
        </div>
      );
    }
  }

  render() {
    return <div>{this.renderContent()}</div>;
  }
}

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps)(Opinion);
