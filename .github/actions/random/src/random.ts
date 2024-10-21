import { setOutput } from '@actions/core';

export async function fetchCharacters() {
  console.log('Fetching characters...');
  const response = await fetch('https://swapi.dev/api/people/');
  const characters = await response.json();
  console.log('characters', characters);
  return characters;
}

export const getRandomInt = (max: number): number => Math.floor(Math.random() * max) + 1;

async function random() {
  const characters = await fetchCharacters();
  const character_id = getRandomInt(characters.count);
  
  setOutput('character_id', character_id);
  
  console.log('character_id', character_id);
}

random();