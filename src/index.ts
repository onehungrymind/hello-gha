import { getInput } from '@actions/core';

const name = getInput('name');

console.log(`Hello, ${name}!`);

const url = 'https://swapi.dev/api/';

async function getPerson() {
  const _url = `${url}people/1/`;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }
    const json = await response.json();
    console.log(json);
  } catch (error: any) {
    console.error(error.message);
  }
}
