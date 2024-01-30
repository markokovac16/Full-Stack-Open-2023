import { useState } from 'react';
import Statistics from './Statistics';

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
      <button onClick={handleClickGood}>good</button>
      <button onClick={handleClickNeutral}>neutral</button>
      <button onClick={handleClickBad}>bad</button>
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
