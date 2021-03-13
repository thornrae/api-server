# api-server

api-server
Deployed Heroku Site

Basic API server with two different models and routes that interact with an ES6 class to create instances to be stored in Mongo DB.  Once in DB instances can be updated, retrieved or deleted dependant upon route path. 

Needed
Node.js, JavaScript, Express, Jest, Mongoose

Change Log
2021-03-04 --> server built, app level middleware, passing route tests 
2021-03-12 --> test implemented for routes

TA ASSISTANCE:
Move your mongoose connection code to index.js;
Your app is also trying to connect and that’s why you are getting the double connection issue in the test;
Making your connection in your index.js instead so that server.js doesn’t depend on it resolves it