import React from 'react';
import { BrowserRouter as Router, MemoryRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import OrderChef from '../components/pages/OrderChef';
import { AppProvider } from '../AppContext';

test('full app rendering/navigating', () => {
  render(<Router><AppProvider><OrderChef /></AppProvider></Router>, { wrapper: MemoryRouter })
  // verify page content for expected route
  expect(screen.getAllByText(/Pedidos/i)).toHaveLength(2)
});

describe('<NewOrder/>', () => {
  it('should print out Product', () => {
    render(<Router><AppProvider><OrderChef /></AppProvider></Router>);
    const product = screen.getByText(/Pedidos Terminados/i);
    expect(product).toBeInTheDocument();
  });
});
