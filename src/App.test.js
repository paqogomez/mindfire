import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
import Earthquakes from './components/earthquakes';


test('should have title of earthquakes close to you', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/Earthquakes close to you./i);
  expect(linkElement).toBeInTheDocument();
});


test('should have title of earthquakes close to you', () => {
  const { getByText } = render(<Earthquakes />);
  const linkElement = getByText(/Earthquakes close to you./i);
  expect(linkElement).toBeInTheDocument();
});