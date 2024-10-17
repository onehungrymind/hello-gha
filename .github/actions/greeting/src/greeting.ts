import { getInput, setOutput } from '@actions/core';

const person = JSON.parse(getInput('person'));
console.log('person', person);

setOutput('greeting', `May the force be with you, ${person.name}!`);