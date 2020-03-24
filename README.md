## Overview
- The goal of this application is to be a web applciation to detect x-ray images you uploaded and recommend foods to eat IF you have a 
disease.
  - For example, you have an alergy. Then it will recommend Anti-histamin nutricious foods.

## Enviroment Setup with VSCode

- Linting
  - Download the following Extension
    - Eslint
    - Prettier
  - Shift + Alt + P
    - Format Document with
    - Configure prettier as default formatter
- It will fix the format on autosave.

## Instructions

- Adding more navigation goes along with views.
  - under src/views/home, create another .file or copy one of those files inside it.
  - under src/routes.js.
    - add your object inside the array
      - layout : this is the main route after root.
      - path : After the home layout, this is the route.
      - name : this is the nav link
      - views : which view teamplate should it generate?

## Docker documentation

- [Download docker desktop](https://download.docker.com/win/stable/Docker%20Desktop%20Installer.exe)

- Enable kubernetes

- run the command `sh react_client_build.sh`
