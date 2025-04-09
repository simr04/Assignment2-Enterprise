// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders simran name', () => {
  render(<App />);
  const nameElement = screen.getByText(/simran/i);
  expect(nameElement).toBeInTheDocument();
});
