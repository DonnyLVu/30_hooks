import React, { useEffect, useState } from 'react';
import CharacterList from '../components/character/CharacterList';
import { getCharacters } from '../services/avatarApi';

const AllCharacter = () => {
  const [loading, setLoading] = useState(true);
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    getCharacters()
      .then((characters) => {
        setCharacters(characters);
        setLoading(false);
      });
  }, []);
  if (loading) return <h1>Loading</h1>;
  return <CharacterList characters={characters} />;
};

export default AllCharacter;
