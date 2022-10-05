const express = require('express');
const path = require('path');

const app = express();

app.get('/', (_req, res) => {
    res.sendFile(path.join(__dirname, "./views/home.html"));
  });

app.get('/register', (_req, res) => {
    res.sendFile(path.join(__dirname, "./views/register.html"));
  });

app.get('/login', (_req, res) => {
    res.sendFile(path.join(__dirname, "./views/login.html"));
  });

app.use(express.static(path.join(__dirname, "./public")));

app.listen(process.env.PORT || 3000, function() {
  console.log("Servidor corriendo");
});