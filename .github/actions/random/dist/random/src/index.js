import { setOutput } from '@actions/core';
import path from 'path';
import { fileURLToPath } from 'url';
import { fetchCharacters } from '../../common/swapi.js';
import { getRandomInt } from '../../common/utils.js';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
async function random() {
    const characters = await fetchCharacters();
    const character_id = getRandomInt(characters.count);
    setOutput('character_id', character_id);
    console.log('character_id', character_id);
}
random();
//# sourceMappingURL=index.js.map