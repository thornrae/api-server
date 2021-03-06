# api-server

Move your mongoose connection code to index.js (edited) 
I read the code for supergoose, it’s creating a fake mongoose server and using that for tests
Your app is also trying to connect and that’s why you are getting the double connection issue in the test.
Making your connecting in your index.js instead so that server.js doesn’t depend on it resolves it