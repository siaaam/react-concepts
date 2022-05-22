import React from 'react';

const Summary = () => {
  return (
    <div className="container">
      <h1>UseReducer Component for Practice useReducer hook</h1>
      <hr />
      <h4>1 . useReducer is a hook that is used for state management ****</h4>
      <h4>2 . useReducer is alternative to useState hook</h4>
      <h4>3 . useState is built on top of useReducer hook</h4>
      <h3>
        Ques: When we should use <span className="color-green">useState </span>
        and when we should use <span className="color-green">useReducer</span>?
      </h3>

      <p>*** useReducer is related to javascript reduce function</p>
      <p className="color-green">--useReducer(reducer,initialState)</p>
      <p className="color-green">--reduce(currentState,action)</p>
    </div>
  );
};

export default Summary;
