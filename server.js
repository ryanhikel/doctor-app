const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');
const saltRounds = 10;
const path = require('path');
const Users = require('./models/Users');
const Favorites = require('./models/Favorites');
const Comments = require('./models/Comments')
// Create a new Express application (web server)
const app = express();

app.use(bodyParser.json());
app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true
}));

app.get('/user/:id.json', (request, response) => {
  const id = request.params.id
  Users.find(id)
    .then(userData => {
      console.log(userData);
      response.json(userData)
    });
});

app.get('/comments/:doc_id', (request, response) => {
  const doc_id = request.params.doc_id
  Comments.findDoctor(doc_id)
  .then(doc => {
    console.log(doc);
    response.json(doc)
  })
})

app.get('/comments/:user_id/.json', (request, response) => {
  const user_id = request.params.user_id
  Comments.findUser(user_id)
    .then(user => {
      console.log(user);
      response.json(user)
    })
})

app.post('/register', (request, response) => {
  const newUser = request.body;
  console.log(request.body);
  
  bcrypt.hash(newUser.password_digest, saltRounds, function (err, hash) {
    newUser.password_digest = hash;
    Users.create(newUser)
      .then(user => {
        response.json(user)
      });
  });
});

app.post('/login', (request, response) => {
  username = request.body.username;
  plainTextPassword = request.body.password;
  Users.findByUsername(username)
    .then(dbResp => {
      return bcrypt
        .compare(plainTextPassword, dbResp.password_digest)
        .then(res => {
          if (res === true) {
            request.session.loggedIn = true;
            request.session.user_id = dbResp.id;
            request.session.username = dbResp.username;
            return response.json({
              loggedIn: true,
              user: { ...dbResp },
            });
          } else {
            response.json({
              loggedIn: false,
              user: null,
            });
          }
        });
    });

});

app.post('/favorite', (request, response) => {
  const newFavorite = request.body
  Favorites.create(newFavorite)
  .then(favorite => response.json(favorite))
})

app.post('/comments', (request, response) => {
  const newComment = request.body
  Comments.create(newComment)
  .then(comment => response.json(comment))
})



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