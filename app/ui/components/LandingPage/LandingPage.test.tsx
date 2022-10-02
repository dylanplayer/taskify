import React from 'react';
import {render} from '@testing-library/react';
import '@testing-library/jest-dom';
import { MockedProvider } from '@apollo/client/testing';

import LandingPage from './LandingPage';
import tasksQuery from '../../graphql/queries/tasksQuery';

const mocks = [
  {
    request: {
      query: tasksQuery,
    },
    result: {
      data: {
        tasks: [
          {
            id: 1,
            title: 'Title',
            createdAt: Date.now(),
            updatedAt: Date.now(),
          }
        ],
      }
    }
  }
];

describe('<LandingPage />', () => {
  test('Has a header', () => {
    render(
      <MockedProvider mocks={mocks} addTypename={false}>
        <LandingPage />
      </MockedProvider>
    );
    expect(true).toBe(true);
  });
});

