import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { render, cleanup, act } from '@testing-library/react';
import Detail from '../components/detail/Detail';

act(() => {
  describe('Detail component',
    () => {
      afterEach(() => cleanup());
      it('renders Detail', () => {
        const { asFragment } = render(<Router><Detail /></Router>);
        expect(asFragment()).toMatchSnapshot;
      });
    });
});
