import React from 'react';
import { render, cleanup } from '@testing-library/react';
import Character from './Character';
import { BrowserRouter as Router } from 'react-router-dom';

describe('Character component', () => {
  afterEach(() => cleanup());
  it('renders Character', () => {
    const { asFragment } = render(<Router><Character /></Router>);
    expect(asFragment()).toMatchSnapshot();
  });
});
