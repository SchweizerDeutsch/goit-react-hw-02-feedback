import PropTypes from 'prop-types';
import css from './FeedbackOptions.module.css';
export const FeedbackOptions = ({ onHandleUpdate }) => (
  <>
    <div className={css.container}>
      <button
        className={css.btn}
        type="button"
        name="good"
        onClick={onHandleUpdate}
      >
        Good
      </button>
      <button
        className={css.btn}
        type="button"
        name="neutral"
        onClick={onHandleUpdate}
      >
        Neutral
      </button>
      <button
        className={css.btn}
        type="button"
        name="bad"
        onClick={onHandleUpdate}
      >
        Bad
      </button>
    </div>
  </>
);

FeedbackOptions.propTypes = {
  onHandleUpdate: PropTypes.func.isRequired,
};
