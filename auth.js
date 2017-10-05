var httpRequest = require('request');
var mysql = require('mysql')
var config = require('./config');

var connection = mysql.createConnection(config.db);
module.exports = function (request, res) {

    var options = {
        url: 'https://api.instagram.com/oauth/access_token',
        method: 'POST',
        form: {
            client_id: config.instagram.client_id,
            client_secret: config.instagram.client_secret,
            grant_type: 'authorization_code',
            redirect_uri: config.instagram.redirect_uri,
            code: request.query.code
        }
    };
    console.log(options);
    httpRequest(options, function (error, response, body) {
        if (!error && response.statusCode == 200) {
            var r = JSON.parse(body);
            console.log(r)
            connection.connect();
            var query = 'INSERT INTO users VALUES('
                + r.user.id +',"' + r.user.username +'","' + r.user.full_name + '","' + r.user.bio
                + '","' + r.user.website +'", "' + r.user.profile_picture +'", "' + r.access_token
                +'")';

            console.log(query);
            connection.query(query, function (err, rows, fields) {
                if (err) throw err

                console.log('Done')
            })

            connection.end()

            res.sendFile(__dirname + '/public/home.html')
        }
        else {

            var error = JSON.parse(response.body)
            res.status('404');
            res.render('error', { title: 'Error', message: error.error_message })
        }
    });

};