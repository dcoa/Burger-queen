
import React from 'react';
import NuevaOrden from './components/pages/NuevaOrden';
import {render , screen} from '@testing-library/react';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { MemoryRouter } from 'react-router-dom'
Enzyme.configure({ adapter: new Adapter() });


test('full app rendering/navigating', () => {
  render(<NuevaOrden />, { wrapper: MemoryRouter })

  // verify page content for expected route
  expect(screen.getByText(/Cliente/i)).toBeInTheDocument()
});

describe('MyComponent', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = mount(<NuevaOrden />);
  });

  it('renders', () => {
    expect(wrapper).not.toBeNull();
  });
});


describe('<NuevaOrden/>', () => {
it('should print out Product', ()=>{
  render(<NuevaOrden/>);
  const product = screen.getByText(/Producto/i);
  expect(product).toBeInTheDocument();
});
});



