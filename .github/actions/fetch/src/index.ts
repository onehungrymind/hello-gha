import { setOutput } from '@actions/core';

async function fetchCharacter() {
  console.log('Fetching data...');

  const response = await fetch('https://swapi.dev/api/people/1/');
  const character = await response.json();
  
  setOutput('character', character);
  
  console.log('character', character);
}

fetchCharacter();



// import * as core from '@actions/core';
// import { DefaultArtifactClient } from '@actions/artifact';
// import * as fs from 'fs';
// import * as path from 'path';

// async function run() {
//   try {
//     // Name of the artifact to create
//     const artifactName = 'my-artifact';

//     // Specify the file(s) to be uploaded (e.g., 'output.txt')
//     const files = [
//       path.join(__dirname, 'output.txt'), // Replace with your file path(s)
//     ];

//     // Check if file exists before attempting to upload
//     for (const file of files) {
//       if (!fs.existsSync(file)) {
//         throw new Error(`File ${file} does not exist.`);
//       }
//     }

//     // Artifact client
//     const artifact = new DefaultArtifactClient()

//     // Root directory of the files (optional, defaults to the directory containing the files)
//     const rootDirectory = __dirname;

//     // Options for the upload (optional)
//     // const options = {
//     //   continueOnError: false, // Fail the action if there's an error
//     // };

//     // Upload the artifact
//     const uploadResponse = await artifact.uploadArtifact(
//       artifactName,
//       files,
//       rootDirectory
//     );
//     core.info(
//       `Artifact ${uploadResponse.id} uploaded successfully!`
//     );
//   } catch (error: any) {
//     core.setFailed(error.message);
//   }
// }

// run();
