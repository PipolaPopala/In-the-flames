const StepView = ({ stepsData, handleOptionClick }) => {
  const { texts, options } = stepsData;
  return (
    <div className="wrapper">
      <div className="content-left">
        <div className="texts">
          {texts.map((text, index) => (
            <p key={index} className="text">
              {text}
            </p>
          ))}
        </div>
        <div className="buttons">
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
      <div className="content-right">
        <svg
          width="552"
          height="552"
          viewBox="0 0 552 552"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            x="16.9633"
            y="276"
            width="366.334"
            height="366.334"
            transform="rotate(-45 16.9633 276)"
            stroke="white"
            stroke-opacity="0.25"
          />
          <rect
            x="1.29289"
            y="276"
            width="388.495"
            height="388.495"
            transform="rotate(-45 1.29289 276)"
            stroke="white"
            stroke-opacity="0.25"
          />
        </svg>
      </div>
    </div>
  );
};

export default StepView;
