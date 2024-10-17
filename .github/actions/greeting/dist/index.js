/******/ (() => { // webpackBootstrap
/******/ 	/* webpack/runtime/compat */
/******/ 	
/******/ 	if (typeof __nccwpck_require__ !== 'undefined') __nccwpck_require__.ab = __dirname + "/";
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
define("greeting", ["require", "exports", "@actions/core"], function (require, exports, core_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const person = JSON.parse((0, core_1.getInput)('person'));
    console.log('person', person);
    (0, core_1.setOutput)('greeting', `May the force be with you, ${person.name}!`);
});
//# sourceMappingURL=greeting.js.map
module.exports = __webpack_exports__;
/******/ })()
;