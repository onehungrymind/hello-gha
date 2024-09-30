import { getInput } from '@actions/core';

const name = getInput('name');

async function exampleFetch() {
  console.log('Fetching data...');
  
  const response = await fetch('https://swapi.dev/api/people/1/');
  const json = await response.json();
  console.log(json);
}

exampleFetch();

console.log(`Hello, ${name}!`);
