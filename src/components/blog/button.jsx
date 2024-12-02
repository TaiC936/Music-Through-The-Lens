import PropTypes from "prop-types";

function BlogBtn({ text, onClick }) {
  return (
    <button
      onClick={onClick}
      className="border-night border px-4 py-8 text-white-smoke bg-night  hover:bg-purple-900 w-full"
    >
      {text}
    </button>
  );
}
BlogBtn.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};
export default BlogBtn;
