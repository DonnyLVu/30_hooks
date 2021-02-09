import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import { MemoryRouter } from 'react-router-dom';
import avatarApi from '../services/avatarApiCharacters.json';
import AllCharacter from './AllCharacter';

const server = setupServer(
  // eslint-disable-next-line max-len
  rest.get('https://last-airbender-api.herokuapp.com/api/v1/characters/', (req, res, ctx) => {
    return res(ctx.json(avatarApi));
  })
);

describe('AllCharacter container', () => {
  beforeAll(() => server.listen());
  afterAll(() => server.close());

  // eslint-disable-next-line max-len
  it('displays a loading screen & renders a list of avatar characters', async () => {
    render(
      <MemoryRouter>
        <AllCharacter />
      </MemoryRouter>
    );
    screen.getByText('Loading');

    const characterListTest = await screen.findByTestId('renderCharacter');

    return waitFor(() => {
      expect(characterListTest).not.toBeEmptyDOMElement();
    });
  });
});
