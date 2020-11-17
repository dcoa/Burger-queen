import React from 'react';
import { BrowserRouter as Router, MemoryRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';

import NewOrder from '../components/pages/NewOrder';
import App from '../App'
import { AppProvider } from '../AppContext';

test('full app rendering/navigating', () => {
  render(<Router><AppProvider><NewOrder /></AppProvider></Router>, { wrapper: MemoryRouter })
  // verify page content for expected route
  expect(screen.getByText(/Ordenes por Entregar/i)).toBeInTheDocument()
});

describe('<NewOrder/>', () => {
  it('should print out Product', () => {
    render(<Router><AppProvider><NewOrder /></AppProvider></Router>);
    const product = screen.getByText(/TOTAL/i);
    expect(product).toBeInTheDocument();
  });
});

describe('<App/>', () => {
  it('should print out Product', () => {
    render(<AppProvider><App /></AppProvider>);
    const product = screen.getByText(/CHEF/i);
    expect(product).toBeInTheDocument();
  });
});
