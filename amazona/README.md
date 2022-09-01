# MERN AMAZONA

# Lessons

1. Introduction
2. Install Software

- install Google Chrome
- install Virtual Studio Code
- install NodeJS
- install git for windows

3. Install VSCode Tools

- Prettier VSCode extension
- default formatter option to Prettier in VSCode settings
- enable formatonsave in VSCode settings
- enable singlequote in VSCode settings
- Ctrl + Shift + P -> "Preferences: Open Settings (JSON)" -> add new parameter "editor.bracketPairColorization.enabled": true
- ESLint extension to show live errors in code
- JavaScript (ES6) code snippets extension
- ES7 React/Redux/GraphQL/React-Native snippets extension

4. Create React App

- mkdir amazona (wherever we want the project in our system to be installed)
- cd amazona
- npx create-react-app frontend (it creates a react app in a new folder 'fronted' inside amazona project folder)
- cd frontend
- npm start
- open amazona project in VSCode
- modifying App.js
- modifying styles in index.css

5. Create Git Repository

- rm -rf .git in frontend folder
- move .gitignore to amazona root folder
- change '/node_modules' to 'node/modules' in .gitignore file
- change '/build' to 'build' in .gitignore file
- Initialize Repository in Source Control tab
- choose amazona folder
- write a commit message
- Publish Branch as public repository and log in to GitHub account

6. List Products With data.js

- create products array
- add product images
- render products
- style products

7. Add Routing

- npm i react-router-dom
- create route for home screen
- create router for product screen

8. Create NodeJS Server (Express, Nodemon, etc.)

- Create backend folder
- run npm init in backend root folder
- Update package.json set type: module
- Add .js to imports
- npm install express
- Create server.js
- add start command as node backend/server.js
- require express
- create route for / return backend is ready
- move data.js from frontend to backend
- create route for /api/products
- return products
- run npm start

9. Fetch Products From Backend

- set proxy in package.json
- npm install axios (communication between Node & Browser)
- use state hook
- use effect hook
- use reducer hook

10. Manage State By Reducer Hook

- define reducer
- update fetch data
- get state from useReducer

11. Add Bootstrap UI Framework

- npm install react-bootstrap bootstrap
- update App.js

12. Create Product and Rating Component

- create Rating component
- create Product component
- use Rating component in Product component

13. Create Product Details Screen

- fetch product from backend
- create 3 columns for image, info and action
- set browser tab title with react-helmet-async

14. Create Loading and Message Components

- create loading component
- use spinner component
- create message component
- create utils.js to define getError function

15. Add To Cart Functionality

- create React Context
- define reducer
- create store provider
- implement add to cart button click handler

16. Complete Add To Cart

- check if item exists in the cart
- check count in stock in backend

17. Create Cart Screen

- create 2 columns
- display items list
- create action column

18. Complete Cart Screen

- click handler for inc/dec item
- click handler for removing items
- click handler for checkout

19. Create Sign in Screen

- create sign in form
- add email and password
- add sign in button

20. Connect to MongoDB Database

- create atlas mongodb database (cloud)
- install local mongodb database (local)
- npm install mongoose
- npm install dotenv
- connect to mongodb database

21. Seed Sample Data

- create product model
- create user model
- create seed route
- use route in server.js
- seed sample product

22. Seed Sample Users

- create user model
- seed sample users
- create user routes
- npm install bcryptjs

23. Create Signin Backend API

- npm install express-async-handler
- Create signin api
- npm install jsonwebtoken
- define generateToken

24. Complete Signin Screen

- handle submit action
- save token in store and local storage
- show user name in navbar header

25. Create Shipping Screen

- create form inputs
- handle save shipping address
- add checkout wizard bar

26. Create Sign Up Screen

- create input forms
- handle submit
- create backend api
