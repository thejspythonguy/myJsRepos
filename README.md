# MyJSRepos To-Do List Collection

This repository contains three separate JavaScript/TypeScript To-Do list applications built with Angular, React, and Vue.

## Projects

### 1. Angular To-Do List (`myTodoList_Angular`)
- Framework: Angular 22
- Features: client app plus server-side rendering setup
- Main files:
  - `src/main.ts`
  - `src/main.server.ts`
  - `src/app/app.ts`
  - `server.ts`

### 2. React To-Do List (`mytodolist_react`)
- Framework: React 19
- Bootstrapped with Create React App
- Main files:
  - `src/App.js`
  - `src/index.js`

### 3. Vue To-Do List (`mytodolist-vuejs`)
- Framework: Vue 3 with Vite
- TypeScript enabled
- Main files:
  - `src/App.vue`
  - `src/main.ts`
  - `src/components/HelloWorld.vue`

## Getting Started

Each project is independent and has its own `package.json` and build scripts. To work with any project, open a terminal and `cd` into the project folder first.

### Prerequisites
- Node.js (recommended version: 20.x or newer)
- npm

## Install and Run

### Angular
```bash
cd myTodoList_Angular
npm install
npm start
```
Then open `http://localhost:4200`.

### React
```bash
cd mytodolist_react
npm install
npm start
```
Then open `http://localhost:3000`.

### Vue
```bash
cd mytodolist-vuejs
npm install
npm run dev
```
Then follow the local Vite URL shown in the terminal.

## Build Commands

### Angular
```bash
cd myTodoList_Angular
npm run build
```

### React
```bash
cd mytodolist_react
npm run build
```

### Vue
```bash
cd mytodolist-vuejs
npm run build
```

## Notes
- The Angular app includes SSR support and a `serve:ssr:myTodoList_Angular` script to run the compiled server bundle.
- The React app is a standard Create React App project.
- The Vue app uses Vite and TypeScript.

## Repository Structure

```
myTodoList_Angular/
mytodolist_react/
mytodolist-vuejs/
```

Each folder contains a standalone To-Do application with its own source code and dependencies.
