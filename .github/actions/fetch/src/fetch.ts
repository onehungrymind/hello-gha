import { getInput, setOutput } from '@actions/core';

export async function fetchCharacter(id: string) {
  console.log('Fetching character...', id);
  const response = await fetch(`https://swapi.dev/api/people/${id}/`);
  const character = await response.json();
  console.log('character', character);
  return character;
}

const id = getInput('character_id');

console.log('id', id);

async function _fetch(id: string) {
  const character = await fetchCharacter(id);

  setOutput('character', character);

  console.log('character', character);
}

_fetch(id);
