import React from 'react';
import Character from './Character';
import PropTypes from 'prop-types';

const CharacterList = ({ characters }) => {
  const renderedCharacters = characters.map(character => (
    <li key={character._id}>
      <Character {...character} />
    </li>
  ));

  return (
    <ul>
      {renderedCharacters}
    </ul>
  );
};

CharacterList.propTypes = {
  characters: PropTypes.arrayOf(PropTypes.shape({
    _id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    photoUrl: PropTypes.string
  })).isRequired
};

export default CharacterList;
