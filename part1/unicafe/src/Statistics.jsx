import PropTypes from 'prop-types';

const Statistics = (props) => {
  return (
    <div>
      <p>average {props.average}</p>
      <p>positive {props.positive} %</p>
    </div>
  );
};

Statistics.propTypes = {
  average: PropTypes.number,
  positive: PropTypes.number,
};

export default Statistics;
