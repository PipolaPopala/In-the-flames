import "./App.css";
import { useEffect, useState } from "react";
import StepView from "./components/StepView";
import StartView from "./components/StartView";
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
    <>
      <main className="main">
        <header className="header">
          {step > 0 && (
            <div className="icons-wrapper">
              <svg
                className="icon-header"
                width="41"
                height="42"
                viewBox="0 0 41 42"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g opacity="0.2">
                  <path
                    d="M18.7917 8.75L10.25 15.75H3.41669V26.25H10.25L18.7917 33.25V8.75Z"
                    stroke="white"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M26.5475 14.805C28.1488 16.4459 29.0484 18.6711 29.0484 20.9912C29.0484 23.3114 28.1488 25.5366 26.5475 27.1775"
                    stroke="white"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </g>
              </svg>
              <svg
                className="icon-header"
                width="42"
                height="41"
                viewBox="0 0 42 41"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g opacity="0.2">
                  <path
                    d="M21 37.5833C30.665 37.5833 38.5 29.9349 38.5 20.5C38.5 11.0651 30.665 3.41667 21 3.41667C11.335 3.41667 3.5 11.0651 3.5 20.5C3.5 29.9349 11.335 37.5833 21 37.5833Z"
                    stroke="white"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M17.5 13.6667L28 20.5L17.5 27.3333V13.6667Z"
                    stroke="white"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </g>
              </svg>
              <svg
                className="icon-header"
                width="100"
                height="100"
                viewBox="0 0 100 100"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="50"
                  y="19.7413"
                  width="42.6093"
                  height="42.6093"
                  transform="rotate(45 50 19.7413)"
                  fill="white"
                  fill-opacity="0.05"
                />
                <rect
                  x="50"
                  y="20.4485"
                  width="41.6093"
                  height="41.6093"
                  transform="rotate(45 50 20.4485)"
                  stroke="white"
                  stroke-opacity="0.25"
                />
                <rect
                  x="50"
                  y="13.8773"
                  width="50.9025"
                  height="50.9025"
                  transform="rotate(45 50 13.8773)"
                  stroke="white"
                  stroke-opacity="0.25"
                />
                <path
                  d="M39.583 38H39.333C39.133 40.2 38.783 44.3333 38.283 50.4C37.783 56.4333 37.533 59.7167 37.533 60.25C37.533 61.2833 38.0497 61.8 39.083 61.8L41.133 61.75L41.233 61.95L40.783 64.2C40.4163 64.1667 39.7497 64.1167 38.783 64.05C37.8497 64.0167 36.8997 64 35.933 64C35.0997 64 34.233 64.05 33.333 64.15C32.4663 64.2833 31.8997 64.3667 31.633 64.4L31.883 62.1C32.9497 61.9667 33.7163 61.6333 34.183 61.1C34.6497 60.5333 34.9497 59.5833 35.083 58.25C35.4163 55.1167 35.8497 50.9 36.383 45.6C36.9497 40.2667 37.233 37.2833 37.233 36.65C37.233 35.7833 36.883 35.1333 36.183 34.7C35.5163 34.2667 34.433 34 32.933 33.9L32.783 33.65L33.183 31.9C33.6163 31.9333 34.4663 31.9833 35.733 32.05C36.9997 32.1167 37.9663 32.15 38.633 32.15C39.233 32.15 39.883 32.1333 40.583 32.1C41.3163 32.0333 41.7997 31.9833 42.033 31.95C43.3663 36.25 44.6497 40.25 45.883 43.95C47.1497 47.6167 48.183 50.5333 48.983 52.7C49.783 54.8667 50.283 56.2167 50.483 56.75H50.733C51.1997 55.5167 52.2663 52.5833 53.933 47.95C55.5997 43.3167 57.4163 38.0167 59.383 32.05C59.383 32.0167 59.833 32.0333 60.733 32.1L62.683 32.15C63.3163 32.15 64.2663 32.1167 65.533 32.05C66.7997 31.95 67.6497 31.8833 68.083 31.85L68.183 32.05L67.933 33.9C66.4997 34.0667 65.483 34.3667 64.883 34.8C64.283 35.2 63.983 35.8167 63.983 36.65C63.983 37.3833 64.133 40.1167 64.433 44.85C64.733 49.55 65.0163 53.6167 65.283 57.05C65.4497 58.4167 65.6163 59.4333 65.783 60.1C65.9497 60.7333 66.183 61.1833 66.483 61.45C66.783 61.6833 67.1997 61.8 67.733 61.8C68.033 61.8 68.3163 61.7833 68.583 61.75C68.8497 61.7167 69.033 61.7 69.133 61.7L69.233 61.9L68.783 64.15C68.4497 64.1167 67.8163 64.0833 66.883 64.05C65.983 64.0167 65.033 64 64.033 64C63.133 64 62.1163 64.05 60.983 64.15C59.883 64.2833 59.1663 64.3667 58.833 64.4L59.033 62.1C60.0663 61.9667 60.8163 61.7 61.283 61.3C61.7497 60.9 61.983 60.3333 61.983 59.6C61.983 58.9 61.733 55.65 61.233 49.85C60.7663 44.05 60.4497 40.1 60.283 38H60.033L50.383 64.6L49.183 64.95L39.583 38Z"
                  fill="white"
                />
              </svg>
            </div>
          )}
        </header>
        <section className="section">
          {step > 0 && (
            <StepView
              stepsData={stepsData[step]}
              handleOptionClick={handleOptionClick}
            />
          )}
          {step === 0 && (
            <StartView
              stepsData={stepsData[step]}
              handleOptionClick={handleOptionClick}
            />
          )}
        </section>
      </main>
      {step > 0 && (
        <button
          type="button"
          className="buttons btn-play-again"
          onClick={() => setStep(0)}
        >
          Начать сначала
        </button>
      )}
    </>
  );
};

export default App;
