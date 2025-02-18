import { UserInputs } from './components/UserInputs/UserInputs';
import { Header } from './components/Header/Header';
import { Results } from './components/Results/Results';
import './App.scss';
import { useState } from 'react';

export function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 1000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  const inputIsValid = userInput.duration >= 1;

  const handleChange = (event) => {
    const { name, value } = event.target;

    setUserInput((prevUserInput) => ({
      ...prevUserInput,
      [name]: Number(value),
    }));
  };

  return (
    <>
      <Header />
      <UserInputs onChange={handleChange} userInput={userInput} />
      {inputIsValid ? (
        <Results input={userInput} />
      ) : (
        <p style={{ textAlign: 'center' }}>
          Plese enter a duration greater than zero
        </p>
      )}
    </>
  );
}
