import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import Navbar from '../components/Navbar'
import { AppProvider } from '../AppContext';

describe('<Navbar/>', () => {
  it('should print out Product', () => {
    render(
      <Router>
        <AppProvider>
          <Navbar rol="Chef" />
        </AppProvider>
      </Router>
      ,
    );
    const add = screen.getByText(/Home/i);
    expect(add).toBeInTheDocument();
  });
});
