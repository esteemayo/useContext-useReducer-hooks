import PropTypes from "prop-types";

const Button = ({ type, text, icon, onClick, className }) => {
  return (
    <button onClick={onClick} type={type} className={className}>
      {icon} {text}
    </button>
  );
};

Button.defaultProps = {
  type: "submit",
  text: "Button",
};

Button.propTypes = {
  type: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  className: PropTypes.string,
  onClick: PropTypes.func,
  icon: PropTypes.any,
};

export default Button;
