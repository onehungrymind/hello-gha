import { getInput, setOutput } from '@actions/core';
import { fetchCharacter } from '@proto/common';

const id = getInput('character_id');

console.log('id', id);

async function fetch(id: string) {
  const character = await fetchCharacter(id);
  
  setOutput('character', character);
  
  console.log('character', character);
}

fetch(id);
