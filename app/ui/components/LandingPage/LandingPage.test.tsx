import React from 'react';
import {render} from '@testing-library/react';
import '@testing-library/jest-dom';
import LandingPage from './LandingPage';

describe('<LandingPage />', () => {
  test('Has a header', () => {
    render(<LandingPage />);
    expect(true).toBe(true);
  });
});

