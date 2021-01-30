import PropTypes from 'prop-types'
import s from './Section.module.css'

export default function Section({ title, children }) {
  return (
    <section className={s.section}>
      <h2 className={s.title}>{title}</h2>
      {children}
    </section>
  );
}

Section.propTypes = {
  title: PropTypes.string.isRequired,
};
