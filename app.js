const express = require('express')
const app = express()
var config = require('./config');
var mysql = require('mysql')
var authUser = require('./auth');
var path = require('path');
var connection = mysql.createConnection(config.db);

app.set('view engine', 'pug')
app.get('/', function (req, res) {
    // connection.connect();
    // connection.query('SELECT 1 + 1 AS solution', function (err, rows, fields) {
    //     if (err) throw err

    //     console.log('The solution is: ', rows[0].solution)
    // })

    // connection.end()

    res.sendFile(__dirname + '/public/index.html')
})

app.get('/login', function (request, response) {
    response.redirect(config.instagram.auth_url);
});

app.get('/auth', authUser);


app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})