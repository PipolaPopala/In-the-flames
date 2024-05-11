const StartView = ({ stepsData, handleOptionClick }) => {
  const { texts, options } = stepsData;
  return (
    <div className="wrapper">
      <div className="content-start">
        <h1 className="title-start">Наедине с пламенем</h1>
        <div className="texts-start">
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
    </div>
  );
};

export default StartView;
