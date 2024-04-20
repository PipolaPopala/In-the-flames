import "./App.css";
import { useState } from "react";
import StepView from "./components/StepView";
import { stepsData } from "./stepsData";

const App = () => {
  const [step, setStep] = useState(0);

  const handleOptionClick = (nextStep) => {
    setStep(nextStep);
  };

  return (
    <main>
      <header>
        <h1>In the flames</h1>
        <button type="button" onClick={() => setStep(0)}>
          Вернуться к началу
        </button>
        <button type="button">
          <img src="/favicon.ico" alt="" />
        </button>
      </header>
      <StepView
        texts={stepsData[step]?.texts}
        options={stepsData[step]?.options}
        handleOptionClick={handleOptionClick}
      />
    </main>
  );
};

export default App;
