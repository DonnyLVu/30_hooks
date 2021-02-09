
import React from 'react';
import PropTypes from 'prop-types';

const Detail = ({ name, photoUrl, allies, enemies, affiliation }) => (
  <figure>
    <figcaption>{name}</figcaption>
    <img src={photoUrl} />
    <div>Allies: {allies}</div>
    <div>Enemies: {enemies}</div>
    <div>Affiliation: {affiliation}</div>
  </figure>
);

Detail.propTypes = {
  name: PropTypes.string,
  photoUrl: PropTypes.string,
  allies: PropTypes.array,
  enemies: PropTypes.array,
  affiliation: PropTypes.string
};

export default Detail;
