import React from 'react';

import { render, screen } from '@testing-library/react';

import { Primary } from '@components/button/stories';

it('renders the button in the primary state', () => {
  render(<Primary />);
  const buttonElement = screen.getByTestId('button');
  expect(buttonElement).not.toBeNull();
});
