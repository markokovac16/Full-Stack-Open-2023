import PropTypes from 'prop-types';

const Button = ({ handleClick, name }) => {
  return (
    <div>
      <button onClick={handleClick}>{name}</button>
    </div>
  );
};

Button.propTypes = {
  handleClick: PropTypes.func,
  name: PropTypes.string,
};

export default Button;
