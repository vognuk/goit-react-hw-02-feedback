import PropTypes from 'prop-types';
import s from './Buttons.module.css';

export default function Buttons({ options, onLeaveFeedback }) {
  return (
    <div className={s.container}>
      {Object.keys(options).map(key => (
        <button
          key={key}
          type="button"
          className={s.button}
          id={key}
          onClick={e => onLeaveFeedback(e)}
        >
          {key.slice(0, 1).toUpperCase() + key.slice(1).toLowerCase()}
        </button>
      ))}
    </div>
  );
}

Buttons.propTypes = {
  options: PropTypes.object.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
