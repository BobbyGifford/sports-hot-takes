import React from 'react';

const AddOpinionForm = props => {
  return (
    <div className="container">
      <div className="row">
        <form className="col s12" onSubmit={props.onSubmit}>
          <div className="row">
            <div className="input-field col s12">
              <input
                name="claim"
                id="claim"
                type="text"
                className="validate"
                onChange={props.onChange}
              />
              <label htmlFor="claim">Tell me what you think</label>
            </div>

            <div className="input-field col s12">
              <textarea
                name="description"
                id="description"
                type="text"
                className="materialize-textarea"
                onChange={props.onChange}
              />
              <label htmlFor="description">Why?</label>
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
