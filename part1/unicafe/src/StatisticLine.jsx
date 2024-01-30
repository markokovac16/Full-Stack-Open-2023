import PropTypes from 'prop-types';

const StatisticLine = (props) => {
  return (
    <div>
      <p>
        {props.text} {props.value}
      </p>
    </div>
  );
};

StatisticLine.propTypes = {
  text: PropTypes.string,
  value: PropTypes.number,
};

export default StatisticLine;
