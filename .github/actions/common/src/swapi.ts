export async function fetchCharacters() {
  console.log('Fetching characters...');
  const response = await fetch('https://swapi.dev/api/people/');
  const characters = await response.json();
  console.log('characters', characters);
  return characters;
}

export async function fetchCharacter(id:string) {
  console.log('Fetching character...');
  const response = await fetch(`https://swapi.dev/api/people/${id}/`);
  const character = await response.json();
  console.log('character', character);
  return character;
}
