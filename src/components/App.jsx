import { useState } from 'react';
import Section from './Section';
import FeedbackOptions from './FeedbackOptions';
import Notification from './Notification';
import Statistics from './Statistics';
import s from './App.module.css';

export function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleClick = (option) => {
    option === 'good' && setGood(state => state + 1);
    option === 'neutral' && setNeutral(state => state + 1);
    option === 'bad' && setBad(state => state + 1);
    };

  const countTotalFeedback = () => {
    return good + neutral + bad
  };

  const countPositiveFeedbackPercentage = () => {
    return Math.round(good / countTotalFeedback() * 100)
  };

return (
      <div className={s.container}>
        <Section title="Please leave feedback">
          <FeedbackOptions options={['good', 'neutral', 'bad']} onLeaveFeedback={handleClick} />
        </Section>
        <Section title="Statistics">
          {countTotalFeedback() > 0
            ? <Statistics good={good} neutral={neutral} bad={bad} total={countTotalFeedback()} positivePercentage={good > 0 && countPositiveFeedbackPercentage()} />
            : <Notification message="There is no feedback" />}
        </Section>
      </div>
    );
};