import { getInput, setOutput } from '@actions/core';

export async function fetchCharacter(id: string) {
  console.log('Fetching character...');
  const response: any = await fetch(`https://swapi.dev/api/people/${id}/`);
  const character = await response.json();
  console.log('character', character);
  return character;
}

const id = getInput('character_id');

console.log('id', id);

async function fetch(id: string) {
  const character = await fetchCharacter(id);

  setOutput('character', character);

  console.log('character', character);
}

fetch(id);
