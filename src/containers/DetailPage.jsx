import React, { useEffect, useState } from 'react';
import CharacterList from '../components/character/CharacterList';
import { getDetail } from '../services/avatarApi';

const DetailPage = () => {
  const [loading, setLoading] = useState(true);
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    getDetail().then((characters) => {
      setCharacters(characters);
      setLoading(false);
    });
  }, []);
  if (loading) return <h1>Loading</h1>;
  return <CharacterList characters={characters} />;
};

export default DetailPage;
