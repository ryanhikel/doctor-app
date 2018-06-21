const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');
const saltRounds = 10;
const path = require('path');
const Users = require('./models/Users');
const Favorites = require('./models/Favorites');
// Create a new Express application (web server)
const app = express();

app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true
}));

app.post('/register', (request, response) => {
  const newUser = request.body;
  bcrypt.hash(newUser.password_digest, saltRounds, function (err, hash) {
    newUser.password_digest = hash;
    Users.create(newUser)
      .then(user => {
        response.json(user)
      });
  });
});

app.use(bodyParser.json());
// Set the port based on the environment variable (PORT=8080 node server.js)
// and fallback to 4567
const PORT = process.env.PORT || 4567;

// In production, any request that doesn't match a previous route
// should send the front-end application, which will handle the route.
if (process.env.NODE_ENV == "production") {
  app.get("/*", function(request, response) {
    response.sendFile(path.join(__dirname, "build", "index.html"));
  });
}

// Start the web server listening on the provided port.
app.listen(PORT, () => { 
  console.log(`Express web server listening on port ${PORT}`);
});