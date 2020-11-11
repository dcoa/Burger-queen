import React from 'react'
import { render, unmountComponentAtNode, screen } from 'react-dom';
import { act } from 'react-dom/test-utils';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from '../components/Navbar'
import { AppProvider } from '../AppContext';

let container = null;
beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement('div');
  document.body.appendChild(container);
});

afterEach(() => {
  // cleanup on exiting
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

it('renders with or without a name', () => {
  act(() => {
    render(<Router><AppProvider><Navbar rol="Chef" /></AppProvider></Router>, container);
  });
  const link = document.querySelectorAll('.nav-links')
  for (const item of link) {
    console.log(item[1])
  }
});
