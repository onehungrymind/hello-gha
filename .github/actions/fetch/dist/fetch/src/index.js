import { getInput, setOutput } from '@actions/core';
import { fetchCharacter } from '../../common/swapi.js';
const id = getInput('character_id');
console.log('id', id);
async function fetch(id) {
    const character = await fetchCharacter(id);
    setOutput('character', character);
    console.log('character', character);
}
fetch(id);
//# sourceMappingURL=index.js.map