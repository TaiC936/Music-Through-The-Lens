import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

function Button({ text, type = "button", to }) {
  const navigate = useNavigate();

  const handleClick = () => {
    if (to) {
      navigate(to);
    }
  };

  return (
    <button
      type={type}
      className="border-white-smoke border px-4 py-2 text-white-smoke hover:bg-purple-900"
      onClick={handleClick}
    >
      {text}
    </button>
  );
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
  type: PropTypes.string,
  to: PropTypes.string,
};

export default Button;
