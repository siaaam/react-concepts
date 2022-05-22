import React, { useState } from 'react';
import CounterOne from './reducerPractice/CounterOne';
import CounterTwo from './reducerPractice/CounterTwo';
import Summary from './summary/Summary';

const UseReducer = () => {
  const [openSummary, setOpenSummary] = useState(false);
  const [openSimpleExample, setOpenSimpleExample] = useState(false);
  const [openComplexExample, setOpenComplexExample] = useState(false);

  const handleOpenSummary = (e) => {
    setOpenSummary(!openSummary);
    setOpenSimpleExample(false);
    setOpenComplexExample(false);
  };

  const handleSimpleOpenExample = () => {
    setOpenSimpleExample(!openSimpleExample);
    setOpenSummary(false);
    setOpenComplexExample(false);
  };

  const handleComplexExample = () => {
    setOpenComplexExample(!openComplexExample);
    setOpenSummary(false);
    setOpenSimpleExample(false);
  };

  return (
    <>
      <h2>Learn About useReducer Hook</h2>
      <hr />
      <div>
        <button onClick={handleOpenSummary}>summary</button>
        <button onClick={handleSimpleOpenExample}>example - simple</button>
        <button onClick={handleComplexExample}>example - complex</button>
      </div>
      {openSummary && <Summary />}
      {openSimpleExample && <CounterOne />}
      {openComplexExample && <CounterTwo />}
    </>
  );
};

export default UseReducer;
