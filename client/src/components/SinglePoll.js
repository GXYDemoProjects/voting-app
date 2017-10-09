import React from 'react';

const SinglePoll = () => (
  <div className="container">
    <div className="row">
      <div class="input-field col s12">
          <input id="title" type="text" class="validate" />
          <label for="title">Title</label>
      </div>
      <div class="input-field col s12">
          <textarea id="description" type="text"></textarea>
          <label for="description">Description</label>
      </div>
      <div class="input-field col s12">
          <textarea id="answers" type="text"></textarea>
          <label for="answers">Options (seperated by line)</label>
      </div>
    </div>
  </div>
);

export default SinglePoll;