import React, { useState } from 'react';
import { Input } from '../Input/Input';
import './UserInputs.scss';

export const UserInputs = () => {
  const [userInput, setUserInput] = useState({
    initialInvestment: 1000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  const handleChange = (event) => {
    const { name, value } = event.target;

    setUserInput((prevUserInput) => ({
      ...prevUserInput,
      [name]: Number(value),
    }));
  };

  return (
    <section id='user-input'>
      <div className='input-group'>
        <Input
          label='Initial Investment'
          name={'initialInvestment'}
          value={userInput.initialInvestment}
          onChange={handleChange}
        />
        <Input
          label='Anual Investment'
          name={'annualInvestment'}
          value={userInput.annualInvestment}
          onChange={handleChange}
        />
      </div>
      <div className='input-group'>
        <Input
          label='Expected Return'
          name={'expectedReturn'}
          value={userInput.expectedReturn}
          onChange={handleChange}
        />
        <Input
          label='duration'
          name={'duration'}
          value={userInput.duration}
          onChange={handleChange}
        />
      </div>
    </section>
  );
};
