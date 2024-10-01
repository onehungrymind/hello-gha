import { getInput, setOutput } from '@actions/core';

const name = getInput('name');
console.log(`Hello, ${name}!`);

async function getPerson() {
  console.log('Fetching data...');

  const response = await fetch('https://swapi.dev/api/people/1/');
  const person = await response.json();
  
  setOutput('person', person);
  
  console.log('person', person);
}

getPerson();


