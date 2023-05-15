import PropTypes from 'prop-types';
import css from './Statistics.module.css';
export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentag,
}) => (
  <>
    <p className={`${css.text} ${css.good}`}>Good: {good}</p>
    <p className={`${css.text} ${css.neutral}`}>Neutral: {neutral}</p>
    <p className={`${css.text} ${css.bad}`}>Bad: {bad}</p>
    <p className={css.feedback}>Total: {total}</p>
    {total ? (
      <p className={css.feedback}>Positive feedback: {positivePercentag} %</p>
    ) : (
      <p className={css.text}>Positive feedback: 0 %</p>
    )}
  </>
);

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentag: PropTypes.string.isRequired,
};
