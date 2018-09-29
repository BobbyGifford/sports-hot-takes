import React from 'react';

import './OpinionForm.css'

const AddOpinionForm = props => {
  return (
    <div className="container">
      <div className="row">
        <form className="col s12" onSubmit={props.onSubmit}>
          <div className="row">
            <div className="input-field col s12">
              <input
                required
                name="claim"
                id="claim"
                type="text"
                className="form-text validate"
                onChange={props.onChange}
              />
              <label htmlFor="claim">Tell me what you think</label>
            </div>

            <div className="input-field col s12">
              <textarea
                required
                name="description"
                id="description"
                type="text"
                className="form-text materialize-textarea"
                onChange={props.onChange}
              />
              <label htmlFor="description">Why?</label>
            </div>

            <div className="input-field col s12">
              <input
                name="youtube"
                id="youtube"
                type="text"
                className="form-text validate"
                onChange={props.onChange}
              />
              <label htmlFor="youtube">Link to YouTube video</label>
            </div>

            <div className="input-field col s12">
              <input
                className="waves-effect waves-light btn-small"
                type="submit"
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddOpinionForm;
