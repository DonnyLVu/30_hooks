import React, { useEffect, useState } from 'react';
import Detail from '../components/detail/Detail';
import { useParams } from 'react-router-dom';
import { getDetail } from '../services/avatarApi';

const DetailPage = () => {
  const [loading, setLoading] = useState(true);
  const [characters, setCharacters] = useState([]);

  const { _id } = useParams();
  useEffect(() => {
    getDetail(_id).then((characters) => {
      setCharacters(characters);
      setLoading(false);
    });
  }, []);
  if (loading) return <h1>Loading</h1>;

  return <Detail
    name={characters.name}
    photoUrl={characters.photoUrl}
    allies={characters.allies}
    enemies={characters.enemies}
    affiliation={characters.affiliation}
  />;
};

export default DetailPage;
