import PropTypes from 'prop-types';
import StatisticLine from './StatisticLine';

const Statistics = (props) => {
  return (
    <table>
      <tbody>
        <StatisticLine text={'good'} value={props.good} />
        <StatisticLine text={'neutral'} value={props.neutral} />
        <StatisticLine text={'bad'} value={props.bad} />
        <StatisticLine text={'average'} value={props.average} />
        <StatisticLine text={'positive'} value={props.positive} />
      </tbody>
    </table>
  );
};

Statistics.propTypes = {
  average: PropTypes.number,
  positive: PropTypes.number,
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
};

export default Statistics;
