import React from 'react';
import { calculateInvestmentResults } from '../../utils/calculateInvestmentResults';
import './Results.scss';
import { formatter } from '../../utils/formatter';

export const Results = ({ input }) => {
  const resultData = calculateInvestmentResults(input);
  const initialInvestment =
    resultData[0].valueEndOfYear -
    resultData[0].interest -
    resultData[0].annualInvestment;

  return (
    <table id='result'>
      <thead>
        <tr>
          <th>Year</th>
          <th>Investment Value</th>
          <th>Interest (Year)</th>
          <th>Total Interest </th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>
        {resultData.map((yearData) => (
          <tr key={yearData.year}>
            <td>{yearData.year}</td>
            <td>{formatter.format(yearData.valueEndOfYear)}</td>
            <td>{formatter.format(yearData.interest)}</td>
            <td>
              {formatter.format(
                yearData.valueEndOfYear -
                  yearData.annualInvestment * yearData.year -
                  initialInvestment
              )}
            </td>
            <td>
              {formatter.format(
                yearData.valueEndOfYear -
                  (yearData.valueEndOfYear -
                    yearData.annualInvestment * yearData.year -
                    initialInvestment)
              )}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
