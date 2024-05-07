import "./App.css";
import { useEffect, useState } from "react";
import StepView from "./components/StepView";
import { stepsData } from "./stepsData";

const App = () => {
  const [step, setStep] = useState(0); // нынешний шаг
  const [track, setTrack] = useState([]); // массив предыдущих шагов, можно будет использовать для некоего "дневника истории"

  useEffect(() => {
    setTrack([...track, step]);
    console.log("Все предыдущие шаги: ", track);
    console.log("Шаг: ", step);
  }, [step]);

  const handleOptionClick = (nextStep) => {
    setStep(nextStep);
  };

  return (
    <main>
      <header className="header">
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
