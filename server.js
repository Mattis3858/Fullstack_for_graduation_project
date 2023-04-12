require('dotenv').config();
const express = require('express');
const app = express();
app.set('view engine', 'ejs');

app.get('/', function (req, res) {
  res.render('index');
});

const port = parseInt(process.env.PORT, 10) || 8080;
app.listen(port);
