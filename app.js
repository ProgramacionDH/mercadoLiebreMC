const express = require('express');
const path = require('path');

const app = express();

app.get('/mensaje', function (req, res) {
res.sendFile(path.resolve(__dirname, './views/home.html'));
});

app.use(express.static(path.resolve(__dirname, './public')));

app.listen(process.env.PORT || 3000, function() {
  console.log("Servidor corriendo");
}); 

app.use(express.static(public));