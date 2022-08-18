import React from 'react';

const StatisticLine = (props) => {
  const { good, neutral, bad } = props;
  const all = good + neutral + bad;
  const avg = ((good - bad) / (good + bad)).toFixed(2);
  const positive = ((good / all) * 100).toFixed(1);

  console.log(good, neutral, bad);

  return (
    <div className='statistic-line'>
      <h2>Statistics</h2>
      {all > 0 ? (
        <>
          <p>Good: {good}</p>
          <p>Neutral: {neutral}</p>
          <p>Bad: {bad}</p>
          <p>All: {all}</p>
          <p>Average: {isNaN(avg) ? 0 : avg}</p>
          <p>Positive: {isNaN(positive) ? 0 : positive}%</p>
        </>
      ) : (
        'No feedback given'
      )}
    </div>
  );
};

export default StatisticLine;
