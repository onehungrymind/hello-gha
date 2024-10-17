define("greeting", ["require", "exports", "@actions/core"], function (require, exports, core_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const person = JSON.parse((0, core_1.getInput)('person'));
    console.log('person', person);
    (0, core_1.setOutput)('greeting', `May the force be with you, ${person.name}!`);
});
//# sourceMappingURL=greeting.js.map