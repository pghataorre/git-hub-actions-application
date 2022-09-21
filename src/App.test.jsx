import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('renders learn react link', () => {
  it('should run a simple app test', () => {
    render(<App />);
    const linkElement = screen.getByText(/PERMY.CO.UK/i);
    expect(linkElement).toBeInTheDocument();
  });

  it('should run a tester test', () => {
    expect(false).toEqual(false);
  });
});
