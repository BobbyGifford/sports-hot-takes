import React, { Component } from 'react';
import { connect } from 'react-redux';

class MockDraft extends Component {
  constructor() {
    super();

    this.state = {
      selectedDraft: null,
    };

    this.selectDraft = this.selectDraft.bind(this);
    this.iteratePicks = this.iteratePicks.bind(this);
  }

  selectDraft(draft) {
    if (this.state.selectedDraft === draft) {
      this.setState({ selectedDraft: null });
    } else {
      this.setState({ selectedDraft: draft });
      console.log(draft);
    }
  }

  iterateThroughMockDrafts() {
    let pageSport = this.props.match.params.category;
    for (let draft of this.props.drafts) {
      if (draft.sport === pageSport) {
        return (
          <button
            className="btn blue"
            onClick={() => {
              this.selectDraft(draft);
            }}
          >
            {pageSport} Mock Draft Version {draft.version}
          </button>
        );
      }
    }
  }

  iteratePicks() {
    return this.state.selectedDraft.picks.map(pick => {
      return (
        <div key={pick.player}>
          <h5>
            {pick.picknum} {pick.proteam}
          </h5>
          <p>
            {pick.player} - {pick.collegeteam}
          </p>
          <p>Position: {pick.position}</p>
          <hr />
        </div>
      );
    });
  }

  render() {
    return (
      <div className="center">
        <h3>{this.props.match.params.category} Mock drafts</h3>
        <div>
          {this.props.drafts ? (
            this.iterateThroughMockDrafts()
          ) : (
            <h1>Loading</h1>
          )}
          {this.state.selectedDraft ? this.iteratePicks() : null}
        </div>
      </div>
    );
  }
}

function mapStateToProps({ drafts }) {
  return { drafts };
}

export default connect(mapStateToProps)(MockDraft);
