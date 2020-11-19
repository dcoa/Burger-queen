import React from 'react';
import { render, screen } from '@testing-library/react';
import Card from '../components/Card';
import { AppProvider } from '../AppContext';

describe('<Card/>', () => {
  it('should print out Product', () => {
    render(
      <AppProvider>
        <Card name="Hamburguesa" price={5} img="img" key="7" />
      </AppProvider>,
    );
    const options = screen.getByText(/Opciones/i);
    expect(options).toBeInTheDocument();
  });
});

describe('<Card/>', () => {
  it('should print out Product', () => {
    render(
      <AppProvider>
        <Card name="Aros de cebolla" price={5} img="img" key="7" />
      </AppProvider>,
    );
    const add = screen.getByText(/Agregar/i);
    expect(add).toBeInTheDocument();
  });
});
