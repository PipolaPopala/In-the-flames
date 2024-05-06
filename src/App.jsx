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
      <header className="header">
        <p>header</p>
        {/* <h1>In the flames</h1> */}
        {/* <button type="button" onClick={() => setStep(0)}>
          Вернуться к началу
        </button> */}
        {/* <button type="button">
          <img src="/favicon.ico" alt="" />
        </button> */}
      </header>
      <section className="section">
        <StepView
          stepsData={stepsData[step]}
          // texts={stepsData[step]?.texts}
          // options={stepsData[step]?.options}
          handleOptionClick={handleOptionClick}
        />
      </section>
    </main>
  );
};

export default App;
