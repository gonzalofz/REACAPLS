const getCharacters = async () => {
  const response = await fetch("https://rickandmortyapi.com/api/character");
  const character = await response.json();

  return character.results;
};

export { getCharacters };
