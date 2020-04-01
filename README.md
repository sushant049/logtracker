# LogTracker Application - FTLabs Coding Challenge
### React + Node.js app, with a local/remote express API server
The app is setup using an **Express.js server**, running at port 8000 by default.  
The express app uses a **create-react-app** (by [the facebook team](https://github.com/facebook/create-react-app)) based view, in order to simplify the process of returning a compiled React.js app, as well as supporting API routes on the same server.
 
## Project Setup
1. Install packages
    ```bash
    $ npm install
    ```
2. Setup the .env file
 ```bash
NODE_ENV=development # change this to production
SERVER_URL=http://localhost:8000 #change this to your remote address 
```
3. Build the application (Windows)
    ```bash
    $ npm run build-windows
4. Build the application (Mac)
    ```bash
    $ npm run build-mac
    ```
5. Start the express server
	```bash
    $ npm start
    ```
6. And finally, access the application in browser
    
	```bash
      http://localhost:8000
     ```


## Flow of control
- `bin/www` is the app's **entry point**. Here all the *server configurations* are set up, and the server is started
- `server.js` contains the **app setup**, and is directly called by `bin/www`. Here the *Express.js app is configured*, and all the URL handlers are setup. This is also where all requests to *non-api* paths are redirected to the `public/index.html` file
- `app/` contains the main React.js app
    - When `npm build` is run, the react app under `app/` is built, and its output is copied into the `public/` folder. A react app's main **entry point** is *index.html*, so we need to redirect any *non-api* requests to the index.html file to allow react to handle it
- `routes/` contains the URL handlers
  - `routes/users.js` contains the routing logic for all backend API calls, and calls the corresponding handler under the `controllers/` folder
  
## Live URL (hosted in heroku)
https://log-tracker.herokuapp.com/
