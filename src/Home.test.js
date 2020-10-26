import React from 'react';
import { render, screen } from '@testing-library/react';
import Home from './components/pages/Home';
import { MemoryRouter } from 'react-router-dom'

test('full app rendering/navigating', () => {
  render(<Home />, { wrapper: MemoryRouter })

  // verify page content for expected route
  expect(screen.getByText(/home/i)).toBeInTheDocument()
});

//The wrapper option to wrap a MemoryRouter around the component you want to render.
//MemoryRouter works when you don't need access to the history object itself in the test, but just need the components to be able to render and navigate.
