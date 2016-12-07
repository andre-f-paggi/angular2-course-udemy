# Setting up the environment

1. Install NodeJS from http://nodejs.org
2. Open the terminal and install typescript module globally `npm install -g typescript`
3. Install typings (for supporting normal JS libraries to be autocompleted in typescript) module globally `npm install -g typings`
4. Install a good IDE (Pst... install VSCode http://code.visualstudio.com)

# Quickstart

First, install all NPM dependencies. Go to the root of the project and type in terminal:
`npm install`

Then, start the project `node start`

# Folders and config files

## app/
Container of our application

### app/boot.ts
Startup or bootstrap file of our application

### app/app.component.ts
Root component of our application

## tsconfig.json
Configuration file for typescript compiler. How to compile/transpile our typescript to javascript file.

## typings.json
This is the place where we refer typescript definition files.

When we use javascript libraries, we must import typescript definition file for static type checking and intelissense

## package.json
Standard NodeJS dependency configuration

# How the Typescript compiler works
For each typescript file, the compiler generates two more file.

One of them is the transpiled javascript file, which will be the file that is going to actually run on the browser.

The other is the .map file, which is used during debugging to relate a line in typescript to javascript.

# Basics of Angular 2
All the building blocks of Angular 2 are essentially plain typescript files with some class annotations or decorators.

**Example:**
```typescript
@Component({
    selector: 'my-app',
    template: `<h1>Hello Angular</h1>`
})
export class AppComponent {}
```
