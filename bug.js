const express = require('express');
const app = express();
app.get('/users/:id', (req, res) => {
  const userId = req.params.id;
  // ... some database query to fetch user data using userId ...
  if (!user) {
    return res.status(404).send('User not found'); // Missing return statement here
  }
  res.send(user); // This line might not execute if the user is not found
});