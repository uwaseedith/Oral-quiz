import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import TemperatureConverter from './TemperatureConverter';

test('converts Celsius to Fahrenheit', () => {
  render(<TemperatureConverter />);

  const input = screen.getByLabelText(/temperature/i);
  const select = screen.getByLabelText(/scale/i);
  const output = screen.getByText(/converted temperature/i);

  fireEvent.change(input, { target: { value: '100' } });
  fireEvent.change(select, { target: { value: 'C' } });

  expect(output).toHaveTextContent('Converted Temperature: 212.00 Fahrenheit');
});

test('converts Fahrenheit to Celsius', () => {
  render(<TemperatureConverter />);

  const input = screen.getByLabelText(/temperature/i);
  const select = screen.getByLabelText(/scale/i);
  const output = screen.getByText(/converted temperature/i);

  fireEvent.change(input, { target: { value: '32' } });
  fireEvent.change(select, { target: { value: 'F' } });

  expect(output).toHaveTextContent('Converted Temperature: 0.00 Celsius');
});
