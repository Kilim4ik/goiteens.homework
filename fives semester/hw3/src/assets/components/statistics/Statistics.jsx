import "./Statistics.css";
import PropTypes from "prop-types";
export default function Statistics({ title, stats }) {
  const generateColor = () => Math.round(Math.random() * 256);

  return (
    <section className="stat-section">
      {title && <h3 className="title">{title}</h3>}
      <ul className="stat-list">
        {stats.map(({ id, label, percentage }) => {
          return (
            <li
              key={id}
              className="item"
              style={{
                backgroundColor: `rgb(${generateColor()}, ${generateColor()}, ${generateColor()})`,
              }}
            >
              <span className="label">{label}</span>
              <span className="percentage">{percentage}%</span>
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
  ).isRequired,
};
