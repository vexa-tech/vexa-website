import { render, screen } from '@testing-library/react';
import App from './App';

test('renders hero headline', () => {
  render(<App />);
  const headingElement = screen.getByText(/We bring solutions/i);
  expect(headingElement).toBeInTheDocument();
});
