import React from 'react';

const AddOpinionForm = () => {
  return (
    <div className="container">
      <div className="row">
        <form className="col s12">
          <div className="row">
            <div className="input-field col s12">
              <input name="claim" id="claim" type="text" className="validate" />
              <label htmlFor="claim">Tell me what you think</label>
            </div>
            <div className="input-field col s12">
              <textarea
                name="description"
                id="description"
                type="text"
                className="materialize-textarea"
              />
              <label htmlFor="description">Why?</label>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddOpinionForm;
