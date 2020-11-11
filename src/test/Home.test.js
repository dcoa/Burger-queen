import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom';
import { render } from '@testing-library/react'
import Home from '../components/pages/Home'

test('clicking on label gives focus to name input', () => {
  const { getByPlaceholderText } = render(<Router><Home /></Router>)
  const nameInput = getByPlaceholderText('Nombre')
  expect(nameInput).toBeInTheDocument();
});
