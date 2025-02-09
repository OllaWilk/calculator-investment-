import React from 'react';
import { calculateInvestmentResults } from '../../utils/calculateInvestmentResults';
import './Results.scss';

export const Results = ({ input }) => {
  const resultData = calculateInvestmentResults(input);

  console.log(resultData);
  return <div id='result'>Results</div>;
};
