var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

// setup the Express App
var app = express();
var PORT = process.env.PORT || 8080;

// set up express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));

// Routing
require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

// Start server to begin listening
app.listen(PORT, function() {
    console.log("App listening to PORT " + PORT);
})