import { setOutput } from '@actions/core';
import { fetchCharacters, getRandomInt } from '@proto/common';

async function random() {
  const characters = await fetchCharacters();
  const character_id = getRandomInt(characters.count);
  
  setOutput('character_id', character_id);
  
  console.log('character_id', character_id);
}

random();