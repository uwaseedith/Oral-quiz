import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Temperature Converter heading', () => {
  render(<App />);
  const headingElement = screen.getByText(/temperature converter/i);
  expect(headingElement).toBeInTheDocument();
});
