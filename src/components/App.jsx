import { useState } from 'react';
import Section from './Section';
import FeedbackOptions from './FeedbackOptions';
import Notification from './Notification';
import Statistics from './Statistics';
import s from './App.module.css';

export function App () {
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

    // const keys = Object.keys(state);
  const keys = ['good', 'neutral', 'bad'];
    const total = countTotalFeedback();
    const positivePercentage = countPositiveFeedbackPercentage();

    return (
      <div className={s.container}>
        <Section title="Please leave feedback">
          <FeedbackOptions options={keys} onLeaveFeedback={handleClick} />
        </Section>
        <Section title="Statistics">
          {total > 0
            ? <Statistics good={good} neutral={neutral} bad={bad} total={total} positivePercentage={good > 0 && positivePercentage} />
            : <Notification message="There is no feedback" />}
        </Section>
      </div>
    );
};

//   export class App extends Component {

//   state = {
//     good: 0,
//     neutral: 0,
//     bad: 0,
//   };

//   handleClick = (option) => {
//     this.setState({ [option]: this.state[option] + 1 });
//     };

//   countTotalFeedback = () => {
//     const { good, neutral, bad } = this.state;
//         return good + neutral + bad
//     };

//   countPositiveFeedbackPercentage = () => {
//         return Math.round(this.state.good / this.countTotalFeedback() * 100)
//     };

//   render() {
//     const { good, neutral, bad } = this.state;
//     const keys = Object.keys(this.state);
//     const total = this.countTotalFeedback();
//     const positivePercentage = this.countPositiveFeedbackPercentage();

//     return (
//       <div className={s.container}>
//         <Section title="Please leave feedback">
//           <FeedbackOptions options={keys} onLeaveFeedback={this.handleClick} />
//         </Section>
//         <Section title="Statistics">
//           {total > 0
//             ? <Statistics good={good} neutral={neutral} bad={bad} total={total} positivePercentage={good > 0 && positivePercentage} />
//             : <Notification message="There is no feedback" />}
//         </Section>
//       </div>
//     );
//   }
// }