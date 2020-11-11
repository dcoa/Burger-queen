import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react'
import Button from '../components/button'

test('calls onClick prop when clicked', () => {
  const handleClick = jest.fn()
  render(<Button onClick={handleClick} text="click me" />)
  fireEvent.click(screen.getByText(/click me/i))
  expect(handleClick).toHaveBeenCalledTimes(1)
});
