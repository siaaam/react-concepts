import React, { useReducer } from 'react';

const initialState = 0;
const reducer = (state, action) => {
  switch (action) {
    case 'increment':
      return state + 1;
    case 'decrement':
      return state - 1;
    case 'reset':
      return initialState;
    default:
      return state;
  }
};

const CounterOne = () => {
  const [count, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="container">
      <h3>CounterOne - A simple example mini project of useReducer</h3>
      <hr />
      <p>count = {count}</p>
      <div>
        <button onClick={() => dispatch('increment')}>increment</button>
        <button onClick={() => dispatch('decrement')}>decrement</button>
        <button onClick={() => dispatch('reset')}>reset</button>
      </div>
    </div>
  );
};

export default CounterOne;
