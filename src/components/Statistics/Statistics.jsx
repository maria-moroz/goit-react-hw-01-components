import PropTypes from 'prop-types';
import s from './Statistics.module.css';

export default function Statistics(props) {
  const { title, stats } = props;
  return (
    <section className={s.section}>
      {title && <h2 className={s.title}>{title}</h2>}

      <ul className={s.list}>
        {stats.map(({ id, label, percentage }) => {
          return (
            <li
              className={s.item}
              key={id}
              style={{
                backgroundColor: `${getRandomColor()}`,
              }}
            >
              <span className={s.label}>{label}</span>
              <span className={s.percentage}>{percentage}%</span>
            </li>
          );
        })}
      </ul>
    </section>
  );
}

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};

function getRandomColor() {
  var h = randomInt(0, 360);
  var s = randomInt(42, 98);
  var l = randomInt(40, 90);
  return `hsl(${h},${s}%,${l}%)`;
}

function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
