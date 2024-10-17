/******/ (() => { // webpackBootstrap
/******/ 	/* webpack/runtime/compat */
/******/ 	
/******/ 	if (typeof __nccwpck_require__ !== 'undefined') __nccwpck_require__.ab = __dirname + "/";
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
define("common/src/swapi", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.fetchCharacters = fetchCharacters;
    exports.fetchCharacter = fetchCharacter;
    async function fetchCharacters() {
        console.log('Fetching characters...');
        const response = await fetch('https://swapi.dev/api/people/');
        const characters = await response.json();
        console.log('characters', characters);
        return characters;
    }
    async function fetchCharacter(id) {
        console.log('Fetching character...');
        const response = await fetch(`https://swapi.dev/api/people/${id}/`);
        const character = await response.json();
        console.log('character', character);
        return character;
    }
});
define("common/src/utils", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.getRandomInt = void 0;
    const getRandomInt = (max) => Math.floor(Math.random() * max) + 1;
    exports.getRandomInt = getRandomInt;
});
define("common/index", ["require", "exports", "common/src/swapi", "common/src/utils"], function (require, exports, swapi_1, utils_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.getRandomInt = exports.fetchCharacters = exports.fetchCharacter = void 0;
    Object.defineProperty(exports, "fetchCharacter", { enumerable: true, get: function () { return swapi_1.fetchCharacter; } });
    Object.defineProperty(exports, "fetchCharacters", { enumerable: true, get: function () { return swapi_1.fetchCharacters; } });
    Object.defineProperty(exports, "getRandomInt", { enumerable: true, get: function () { return utils_1.getRandomInt; } });
});
define("random/src/random", ["require", "exports", "@actions/core", "common/index"], function (require, exports, core_1, common_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    async function random() {
        const characters = await (0, common_1.fetchCharacters)();
        const character_id = (0, common_1.getRandomInt)(characters.count);
        (0, core_1.setOutput)('character_id', character_id);
        console.log('character_id', character_id);
    }
    random();
});
//# sourceMappingURL=random.js.map
module.exports = __webpack_exports__;
/******/ })()
;