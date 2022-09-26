const express = require('express');
const path = require('path');

const app = express();

app.get('/mensaje', function (req, res) {
res.sendFile(path.join(__dirname, './views/home.html'));
});

app.use(express.static(path.join(__dirname, './public')));

app.listen(3000, () => {
  console.log("Servidor corriendo");
}); 

app.use(express.static(public));