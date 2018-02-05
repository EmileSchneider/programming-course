// server.js

// BASE SETUP
// =============================================================================

// call the packages we need
var express    = require('express');        // call express
var app        = express();                 // define our app using express
var bodyParser = require('body-parser');

// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port = process.env.PORT || 8080;        // set our port

// ROUTES FOR OUR API
// =============================================================================
var router = express.Router();              // get an instance of the express

// test route to make sure everything is working (accessed at GET http://localhost:8080/api)
router.get('/', function(req, res) {
  res.json({ message: 'hooray! welcome to our api!' });
});

router.get('/presentation', function(req, res){
  res.json({ presentation: ['Slide1', 'Slide2'], name: 'test', indizes: 2 });
})

router.get('/code', function(req, res){
  res.json({ code: '(define (square x) ( * x x ))' });
})

router.get('/presentation_test', function(req, res){
  res.json({ presentation: ['Slide1', 'Slide2'] });
})
// more routes for our API will happen here
// ROUTES FOR OUR API
// =============================================================================
var router = express.Router();              // get an instance of the express Router

// middleware to use for all requests
router.use(function(req, res, next) {
    // do logging
    console.log('Something is happening.');
    next(); // make sure we go to the next routes and don't stop here
});


// more routes for our API will happen here

router.route('/questions')

    // create a bear (accessed at POST http://localhost:8080/api/bears)
    .post(function(req, res) {

        var question = {text: req.body.text};      // create a new instance of the Bear model
        // save the bear and check for errors
        bear.save(function(err) {
            if (err)
                res.send(err);

            res.json({ message: 'Bear created!' });
        });

    });

// REGISTER OUR ROUTES -------------------------------
// all of our routes will be prefixed with /api
app.use('/api', router);

// START THE SERVER
// =============================================================================
app.listen(port);
console.log('Magic happens on port ' + port);



var mongoose   = require('mongoose');
mongoose.connect('mongodb://admin:admin@ds225308.mlab.com:25308/programming-course');

var Schema       = mongoose.Schema;

var QuestionSchema   = new Schema({
    question: String
});

module.exports = mongoose.model('Question', QuestionSchema);
