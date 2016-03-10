'use strict';
var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var app = express();
var db = require('./contacts.js');
app.use(bodyParser.json());
app.use(cors());
var singleResponse = function (item) { return { item: item }; };
var multipleResponse = function (items) { return { items: items }; };
app.get('/search', function (req, res) {
    var text = req.query.text;
    var matches = db.filter(function (contact) { return contact.firstname.startsWith(text) ||
        contact.lastname.startsWith(text); });
    res.json(multipleResponse(matches));
});
app.get('/contacts', function (req, res) {
    res.json(multipleResponse(db));
});
app.get('/contacts/:id', function (req, res) {
    var contact = db.find(function (contact) { return contact.id == req.params.id; });
    contact ? res.json(singleResponse(contact)) : res.status(404).json({ error: 'contact not found' });
});
app.put('/contacts/:id', function (req, res) {
    var contact = db.find(function (contact) { return contact.id == req.params.id; });
    if (contact) {
        Object.assign(contact, req.body);
        res.json(singleResponse(contact));
    }
    else {
        res.status(404).json({ error: 'contact not found' });
    }
});
app.post('/contacts', function (req, res) {
    var maxId = db[db.length - 1].id;
    var contact = req.body;
    contact.id = maxId + 1;
    db.push(contact);
    res.json(multipleResponse(db));
});
var server = app.listen(4000, function () {
    var host = server.address().address;
    var port = server.address().port;
    console.log('Test server listening at http://%s:%s', host, port);
});
//# sourceMappingURL=server.js.map