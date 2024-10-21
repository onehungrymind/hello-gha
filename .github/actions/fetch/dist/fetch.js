"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fetchCharacter = fetchCharacter;
const core_1 = require("@actions/core");
async function fetchCharacter(id) {
    console.log('Fetching character...');
    const response = await fetch(`https://swapi.dev/api/people/${id}/`);
    const character = await response.json();
    console.log('character', character);
    return character;
}
const id = (0, core_1.getInput)('character_id');
console.log('id', id);
async function fetch(id) {
    const character = await fetchCharacter(id);
    (0, core_1.setOutput)('character', character);
    console.log('character', character);
}
fetch(id);
//# sourceMappingURL=fetch.js.map