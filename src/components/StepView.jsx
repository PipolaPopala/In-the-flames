import PropTypes from "prop-types";

const StepView = ({ texts = [], options = [], handleOptionClick }) => {
  return (
    <div>
      {texts.map((text, index) => (
        <p key={index}>{text}</p>
      ))}
      <div>
        {options.map((option, index) => (
          <button
            type="button"
            key={index}
            onClick={() => handleOptionClick(option.nextStep)}
          >
            {option.text}
          </button>
        ))}
      </div>
    </div>
  );
};

StepView.propTypes = {
  texts: PropTypes.arrayOf(PropTypes.string),
  options: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string,
      nextStep: PropTypes.number,
    })
  ),
  handleOptionClick: PropTypes.func,
};

export default StepView;
