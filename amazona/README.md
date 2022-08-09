# MERN AMAZONA

# Lessons

1. Introduction
2. Install Software
   1. install Google Chrome
   2. install Virtual Studio Code
   3. install NodeJS
   4. install git for windows
3. Install VSCode Tools
   1. Prettier VSCode extension
   2. default formatter option to Prettier in VSCode settings
   3. enable formatonsave in VSCode settings
   4. enable singlequote in VSCode settings
   5. Ctrl + Shift + P -> "Preferences: Open Settings (JSON)" -> add new parameter "editor.bracketPairColorization.enabled": true
   6. ESLint extension to show live errors in code
   7. JavaScript (ES6) code snippets extension
   8. ES7 React/Redux/GraphQL/React-Native snippets extension
4. Create React App
   1. mkdir amazona (wherever we want the project in our system to be installed)
   2. cd amazona
   3. npx create-react-app frontend (it creates a react app in a new folder 'fronted' inside amazona project folder)
   4. cd frontend
   5. npm start
   6. open amazona project in VSCode
   7. modifying App.js
   8. modifying styles in index.css
5. Create Git Repository
   1. rm -rf .git in frontend folder
   2. move .gitignore to amazona root folder
   3. change '/node_modules' to 'node/modules' in .gitignore file
   4. change '/build' to 'build' in .gitignore file
   5. Initialize Repository in Source Control tab
   6. choose amazona folder
   7. write a commit message
   8. Publish Branch as public repository and log in to GitHub account
6. List Products With data.js
   1. create products array
   2. add product images
   3. render products
   4. style products
7. Add Routing
   1. npm i react-router-dom
   2. create route for home screen
   3. create router for product screen
8. Create NodeJS Server (Express, Nodemon, etc.)
   1. Create backend folder
   2. run npm init in backend root folder
   3. Update package.json set type: module
   4. Add .js to imports
   5. npm install express
   6. Create server.js
   7. add start command as node backend/server.js
   8. require express
   9. create route for / return backend is ready
   10. move data.js from frontend to backend
   11. create route for /api/products
   12. return products
   13. run npm start
9. Fetch Products From Backend
   1. set proxy in package.json
   2. npm install axios (communication between Node & Browser)
   3. use state hook
   4. use effect hook
   5. use reducer hook
10. Manage State By Reducer Hook

- define reducer
- update fetch data
- get state from useReducer
