export const getCharacters = () => {
  return fetch('https://last-airbender-api.herokuapp.com/api/v1/characters/')
    .then(res => res.json());
};

export const getDetail = (_id) => {
  // eslint-disable-next-line max-len
  return fetch(`https://last-airbender-api.herokuapp.com/api/v1/characters/${_id}`)
    .then(res => res.json());
};
