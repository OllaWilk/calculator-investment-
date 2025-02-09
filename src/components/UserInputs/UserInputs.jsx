import React from 'react';
import { Input } from '../Input/Input';
import './UserInputs.scss';

export const UserInputs = ({ onChange, userInput }) => {
  return (
    <section id='user-input'>
      <div className='input-group'>
        <Input
          label='Initial Investment'
          name={'initialInvestment'}
          value={userInput.initialInvestment}
          onChange={onChange}
        />
        <Input
          label='Anual Investment'
          name={'annualInvestment'}
          value={userInput.annualInvestment}
          onChange={onChange}
        />
      </div>
      <div className='input-group'>
        <Input
          label='Expected Return'
          name={'expectedReturn'}
          value={userInput.expectedReturn}
          onChange={onChange}
        />
        <Input
          label='duration'
          name={'duration'}
          value={userInput.duration}
          onChange={onChange}
        />
      </div>
    </section>
  );
};
