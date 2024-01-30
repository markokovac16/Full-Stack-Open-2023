import { useState } from 'react';
import Statistics from './Statistics';
import Button from './Button';

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const sum = good + neutral + bad;

  const handleClickGood = () => {
    setGood(good + 1);
  };

  const handleClickNeutral = () => {
    setNeutral(neutral + 1);
  };

  const handleClickBad = () => {
    setBad(bad + 1);
  };

  const average = () => {
    return (good - bad) / (good + neutral + bad);
  };

  const positive = () => {
    return good / (good + neutral + bad);
  };

  return (
    <div>
      <h1>give feedback</h1>
      <Button handleClick={handleClickBad} name={'Bad'} />
      <Button handleClick={handleClickNeutral} name={'Neutral'} />
      <Button handleClick={handleClickGood} name={'Good'} />

      <h1>Statistics</h1>
      {sum === 0 ? (
        <h3>No feedback given</h3>
      ) : (
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          average={average()}
          positive={positive()}
        />
      )}
    </div>
  );
};

export default App;
