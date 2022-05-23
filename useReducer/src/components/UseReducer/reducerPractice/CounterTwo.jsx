import React, { useReducer } from 'react';

const initialState = {
  firstCounter: 0,
  secondCounter: 10,
};
const reducer = (state, action) => {
  switch (action.type) {
    case 'increment':
      return { ...state, firstCounter: state.firstCounter + action.value };
    case 'decrement':
      return { ...state, firstCounter: state.firstCounter - action.value };

    case 'increment2':
      return { ...state, secondCounter: state.secondCounter + action.value };
    case 'decrement2':
      return { ...state, secondCounter: state.secondCounter - action.value };
    case 'reset':
      return initialState;
    default:
      return state;
  }
};

const CounterTwo = () => {
  const [count, dispatch] = useReducer(reducer, initialState);
  return (
    <div className="container">
      <h3>CounterTwo - a example of complex reducer</h3>
      <p>
        This is a complex example of{' '}
        <span className="color-green">useReducer</span> hook. Here
        "initialState" and "actions" are object
      </p>
      <hr />
      <p>count - {count.firstCounter}</p>
      <p>count 2 - {count.secondCounter}</p>
      <div>
        <button onClick={() => dispatch({ type: 'increment', value: 1 })}>
          increase
        </button>
        <button onClick={() => dispatch({ type: 'decrement', value: 1 })}>
          decrease
        </button>
        <button onClick={() => dispatch({ type: 'increment', value: 5 })}>
          increase 5
        </button>
        <button onClick={() => dispatch({ type: 'decrement', value: 5 })}>
          decrease 5
        </button>
        <div>
          <button onClick={() => dispatch({ type: 'increment2', value: 1 })}>
            increment 2
          </button>
          <button onClick={() => dispatch({ type: 'decrement2', value: 1 })}>
            decrement 2
          </button>
        </div>
        <button onClick={() => dispatch({ type: 'reset' })}>reset</button>
      </div>
    </div>
  );
};

export default CounterTwo;
