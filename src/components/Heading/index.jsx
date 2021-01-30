import PropTypes from 'prop-types';
import s from './Heading.module.css';

export default function Heading({ message }) {
  return <h1 className={s.title}>{message}</h1>;
}

Heading.propTypes = {
  message: PropTypes.string.isRequired,
};
