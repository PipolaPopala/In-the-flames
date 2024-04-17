import "./App.css";
import { useState } from "react";

const App = () => {
  const [step, setStep] = useState(0);

  const steps = [
    {
      text: "Пора начинать",
      options: [{ text: "Идти на встречу пламени", nextStep: 1 }],
    }, // 0
    {
      text: "Вы находитесь в темном лесу. Выберите, куда пойти:",
      options: [
        { text: "Пойти налево", nextStep: 2 },
        { text: "Пойти направо", nextStep: 3 },
      ],
    }, // 1
    {
      text: "Вы встретили гоблина. Что вы будете делать?",
      options: [
        { text: "Сразиться с ним", nextStep: 4 },
        { text: "Попытаться убежать", nextStep: 5 },
      ],
    }, // 2
    {
      text: "Вы нашли сундук с сокровищами. Что вы будете делать?",
      options: [
        { text: "Открыть сундук", nextStep: 6 },
        { text: "Пройти мимо", nextStep: 7 },
      ],
    }, // 3
    // Далее можно добавить другие шаги
  ];

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
      <div className="content">
        <p>{steps[step]?.text}</p>
        <ul>
          {steps[step]?.options.map((option, index) => (
            <li key={index}>
              <button onClick={() => handleOptionClick(option.nextStep)}>
                {option.text}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
};

export default App;
