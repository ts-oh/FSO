import React from 'react';
import StatisticLine from './StatisticLine';

const Statistics = (props) => {
  const { good, neutral, bad } = props;
  const all = good + neutral + bad;
  const average = ((good - bad) / (good + bad)).toFixed(2);

  const positive = () => {
    const result = ((good / all) * 100).toFixed(1);
    return result.toString() + ' %';
  };

  return (
    <div className='statistic-line'>
      <h2>Statistics</h2>
      {all > 0 ? (
        <table>
          <tbody>
            <StatisticLine text='good' value={good} />
            <StatisticLine text='neutral' value={neutral} />
            <StatisticLine text='bad' value={bad} />
            <StatisticLine text='all' value={all} />
            <StatisticLine text='average' value={average} />
            <StatisticLine text='positive' value={positive()} />
          </tbody>
        </table>
      ) : (
        'No feedback given'
      )}
    </div>
  );
};

export default Statistics;

{
  /* <p>Average: {isNaN(avg) ? 0 : avg}</p>
            <p>Positive: {isNaN(positive) ? 0 : positive}%</p> */
}
