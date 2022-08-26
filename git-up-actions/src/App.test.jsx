import { render, screen } from '@testing-library/react';
import App from './App';

describe('renders learn react link', () => {
  it('should run a simple app test', () => {
    render(<App />);
    const linkElement = screen.getByText(/learn react/i);
    expect(linkElement).toBeInTheDocument();
  });
});
