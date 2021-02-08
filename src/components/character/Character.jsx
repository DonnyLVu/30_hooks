import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Character = ({ name, photoUrl, _id }) => (
  <figure>
    <figcaption>{name}</figcaption>
    <Link to={`/character/${_id}`}>
      <img src={photoUrl} />
    </Link>
  </figure>
);

Character.propTypes = {
  _id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  photoUrl: PropTypes.string
};

export default Character;
