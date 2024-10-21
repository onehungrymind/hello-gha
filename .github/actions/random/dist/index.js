/******/ (() => { // webpackBootstrap
/******/ 	/* webpack/runtime/compat */
/******/ 	
/******/ 	if (typeof __nccwpck_require__ !== 'undefined') __nccwpck_require__.ab = __dirname + "/";
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
define("random", ["require", "exports", "@actions/core"], function (require, exports, core_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.getRandomInt = void 0;
    exports.fetchCharacters = fetchCharacters;
    async function fetchCharacters() {
        console.log('Fetching characters...');
        const response = await fetch('https://swapi.dev/api/people/');
        const characters = await response.json();
        console.log('characters', characters);
        return characters;
    }
    const getRandomInt = (max) => Math.floor(Math.random() * max) + 1;
    exports.getRandomInt = getRandomInt;
    async function random() {
        const characters = await fetchCharacters();
        const character_id = (0, exports.getRandomInt)(characters.count);
        (0, core_1.setOutput)('character_id', character_id);
        console.log('character_id', character_id);
    }
    random();
});
//# sourceMappingURL=random.js.map
module.exports = __webpack_exports__;
/******/ })()
;