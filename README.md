# ibm-maximo-ipm

This IPM contains examples of how to read and write attribute info. for assets in an existing IBM Maximo system.

# Prerequisites
- Install NodeJS and NPM if you have not already: https://docs.npmjs.com/downloading-and-installing-node-js-and-npm
- Install ClearBlade Command Line Interface (cb-cli) - look for "Releases" here: https://github.com/ClearBlade/cb-cli

# Installation
- Clone this repo.
- In the cloned workspace on your machine type the following to install Node packages: __npm i__.

# Transpiling code from TypeScript source files to JavaScript
- Run this (replace <service name> with the name of the TypeScript service to transpile: __npm run build:service -service=yourServiceName__
- The services provided for initial transpilation are __maximoRead__ and __maximoWrite__

# Pushing code to your ClearBlade system
- Initialize your workspace to push / pull from ClearBlade system: __cb-cli init__
- Follow all prompts.
- Push all libraries to your system: __cb-cli push -all-libraries__
- Push all transpiled services to your systen: __cb-cli push -all-services__

# Using the services
- Find the __maximoCredentials__ configuration (library) and edit it to match your Maximo system.
- Find the __maximoReadParams__ and / or __maximoWriteParams__ configurations (libraries) and edit them as needed for your task
- Running __maximoRead__ will read the designated parameters from the one designated assetnum
- Running __maximoWrite__ will write the designated parameters to the one designated assetnum
- If needing to write / read MULTIPLE assets you can create your own services based on __maximoRead.ts__ and __maximoWrite.ts__

# Creating your own services
- Use the existing TypeScript (.ts) files as starting points
- Save the new service in a dedicated folder under __src/code/services__
- Create a dedicated folder under __code/services__ to hold the transpiled version of the code. In this folder create a blank .js filed named the same as the source (.ts file).
- Transpile the code as indicated above
- Notice the .js file under __code/services__ now contains code.
- Find the settings file (.json) for the same service in the same folder. Set the settings as needed. Pay attention to libraries that might be needed.
- Push your service to your system: __cb-cli push -service <your service>__
- Run the service in the ClearBlade console by clicking __Save and Test__
