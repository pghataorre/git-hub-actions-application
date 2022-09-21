import React from 'react';
import { prettyDOM, render, screen } from '@testing-library/react';
import Images from './Images';

describe('renders Image component', () => {
  it('should render single image', () => {
    const testImagePath = 'testFolder/TestImage';
    const testId = 'testImage';
    const testAltText = 'testAltText';
    render(<Images 
      src={testImagePath}
      testid={testId}
      altText={testAltText}
    />);

    expect(screen.getByTestId(testId)).toBeInTheDocument();
    expect(screen.getByTestId(testId).src).toBe(`http://localhost/${testImagePath}`);
    expect(screen.getByTestId(testId).alt).toBe(testAltText);
  });
});
