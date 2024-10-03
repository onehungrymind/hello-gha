import { setOutput } from '@actions/core';

const getRandomInt = (max: number): number => Math.floor(Math.random() * max) + 1;

async function fetchCharacterId() {
  console.log('Fetching data...');

  const response = await fetch('https://swapi.dev/api/people/');
  const characters = await response.json();
  const character_id = getRandomInt(characters.count);
  
  setOutput('character_id', character_id);
  
  console.log('character_id', character_id);
}

fetchCharacterId();