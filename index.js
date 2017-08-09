var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var Query = require('./query');

var query = new Query();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
    return new Promise((success, reject) => {
        query.find()
        .then((data) => {
            success(res.send(data));
        })
        .catch((err) => {
            reject(res.status(err.code).send(err));
        });

    })
});

app.listen(3000);