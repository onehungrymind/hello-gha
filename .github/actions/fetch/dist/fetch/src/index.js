import { getInput, setOutput } from '@actions/core';
import path from 'path';
import { fileURLToPath } from 'url';
import { fetchCharacter } from '../../common/swapi.js';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const id = getInput('character_id');
console.log('id', id);
async function fetch(id) {
    const character = await fetchCharacter(id);
    setOutput('character', character);
    console.log('character', character);
}
fetch(id);
//# sourceMappingURL=index.js.map