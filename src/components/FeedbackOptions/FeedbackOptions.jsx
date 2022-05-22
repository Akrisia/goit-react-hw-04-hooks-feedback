import PropTypes from 'prop-types';
import s from './FeedbackOptions.module.css';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
    return (
        <div className={s.controls}>
            {options.map((option) => {
            return (
                <button type='button' key={option} onClick={() => onLeaveFeedback(option)}>{option[0].toUpperCase() + option.slice(1)}</button>
            )})}
        </div>
    );
};

FeedbackOptions.propTypes = {
    options: PropTypes.array.isRequired,
    onLeaveFeedback: PropTypes.func.isRequired
};

export default FeedbackOptions;