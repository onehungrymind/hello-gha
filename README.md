# Github Actions Quickstart with TypeScript

Github Actions™ is a very powerful mechanism that gives engineers the opportunity to delegate complex workflows to a legion of robots so that we can focus on more human endeavors. 

Github Actions are defined in YAML which is a siren song that can create a ton of problems over time. This is because YAML is declarative by nature and not intended to comingle with imperative operations. By embedding imperative logic in a declarative context, you lose any benefit of portability as well as modern tooling designed specifically for such operations. 

Sand is great for building castles but not great for writing books. 

This primary objective of this quickstart is to show you how to separate declaring an action with performing meaningful logic in a logical and scalable way.

## The Jobs

There are is one workflow in the project that consists of three jobs.

### Random 

This job queries the Star Wars API to get the total number of people in the Star Wars universe and then randomly chooses an integer between 1 and the total number of people. 

The job then returns this number as `character_id`. 

### Fetch

This job accepts the `character_id` value as an input from the previous job and then queries the same API to get just the character associated with this ID. 

The job then returns this object as `character`.

NOTE: This is a bit redundant as we get ALL the characters the first time we call the API but we wanted to show two distinct units of work for illustration purposes. 

### Greeting

This job accepts the `character` object as an input from the previous job and then outputs a `greeting` value. 

## The Setup

### The Actions

Each job calls a custom TypeScript action that is defined in the `.github/actions` directory. 

Each action consists of an `action.yaml` file that declares the action configuration (inputs, outputs, runtime, source, etc) while the logic lives in `src/index.ts` directory. 

There is also a `tsconfig.json` in each directory that allows for fine-grained control over how the action is compiled. This config file inherits from the root `tsconfig.json` file that holds the base configuration for compiling all the actions. 

After you have modified an action, you need compile the action so that it is in a consumable JavaScript format. There are commands in `package.json` for each action to facilitate this. 

```
  "scripts": {
    "compile:random": "tsc -p .github/actions/random/tsconfig.json",
    "build:random": "ncc build .github/actions/random/dist/index.js -o .github/actions/random/dist",
    "dist:random": "npm run compile:random && npm run build:random",       
    //...
    "dist:all": "npm run dist:random && npm run dist:fetch && npm run dist:greeting"
  },
```

The easiest way to do this is just by calling `npm run dist:all` which will compile and build all the actions.

If you add another action, make sure to update `package.json` to include the corresponding commands. 

### The Workflow

There is one workflow in this project which is located here `.github/workflows/process.yaml`. 

This file is responsible for orchestrating a meaningful workflow by sequencing individual jobs so that the output of one job serves as the input of the next job. 

