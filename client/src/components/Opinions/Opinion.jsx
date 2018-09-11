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
      console.log(res.data);
    });

    this.renderContent = this.renderContent.bind(this);
    this.handleLike = this.handleLike.bind(this);
    this.handleUnlike = this.handleUnlike.bind(this);
  }

  handleLike() {
    axios.post('/api/opinions/like/' + this.props.match.params.id).then(res => {
      this.setState({ opinion: res.data });
    });
  }

  handleUnlike() {
    axios
      .delete('/api/opinions/like/' + this.props.match.params.id)
      .then(res => {
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
            className="waves-effect waves-light btn-large blue"
          >
            <i className="material-icons">thumb_up</i>
          </button>
        </div>
      );
    } else if (
      this.state.opinion.likes.map(like => like.user === this.props.auth._id)
    ) {
      return (
        <div>
          <p>{this.state.opinion.likes.length} likes</p>
          <button
            onClick={this.handleUnlike}
            className="waves-effect waves-light btn-large red"
          >
            <i className="material-icons">thumb_down</i>
          </button>
        </div>
      );
    } else {
      return (
        <div>
          <p>{this.state.opinion.likes.length} likes</p>
          <button
            onClick={this.handleLike}
            className="waves-effect waves-light btn-large blue"
          >
            <i className="material-icons">thumb_up</i>
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
          {this.showLikeButton()}
          <p className="flow-text">{this.state.opinion.description}</p>
          <iframe
            title={this.state.opinion._id}
            width="560"
            height="315"
            src={this.state.opinion.youtube}
            frameBorder="0"
            allow="autoplay; encrypted-media"
            allowFullScreen
          />
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
    return <div className="container">{this.renderContent()}</div>;
  }
}

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps)(Opinion);
