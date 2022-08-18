import React from 'react';

const Button = (props) => {
  const { handleGood, handleNeutral, handleBad } = props;
  return (
    <div className='buttons'>
      <button onClick={handleGood}>Good</button>
      <button onClick={handleNeutral}>Neutral</button>
      <button onClick={handleBad}>Bad</button>
    </div>
  );
};

export default Button;
