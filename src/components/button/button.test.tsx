import { render, screen } from '@testing-library/react';
import { composeStories } from '@storybook/testing-react';
import stories from '@components/button/stories';

const { Primary } = composeStories(stories);

test('renders primary button with default args', () => {
  render(<Primary />);
  const buttonElement = screen.getByTestId('button');
  expect(buttonElement).not.toBeNull();
});
