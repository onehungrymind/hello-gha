import { getInput, setOutput } from '@actions/core';

const id = getInput('character_id');

console.log('id', id);

async function fetchCharacter() {
  console.log('Fetching data...');

  const response = await fetch(`https://swapi.dev/api/people/${id}/`);
  const character = await response.json();
  
  setOutput('character', character);
  
  console.log('character', character);
}

fetchCharacter();
