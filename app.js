'use strict';

console.log('TP CIEL');

/*  *********************** Serveur Web ***************************   */

var express = require('express'); 
var port = 80;

var exp = express(); 

exp.use(express.static(__dirname + '/www'));

exp.get('/', function (req, res) {
    console.log('Reponse a un client'); 
    res.sendFile(__dirname + '/www/index.html');
});

exp.use(function (err, req, res, next) {
    console.error(err.stack);
    res.status(500).send('Erreur serveur express');
});

exp.listen(port, function () {
    console.log('Serveur en ecoute');
}); 