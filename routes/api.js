var express = require('express');
var router = express.Router();
var Parse = require('parse/node')
Parse.initialize("LTuZ3J1wi1e1EFHz4hoOuvIkic0VqfPOaHVYq4YC", "qujBBJgl4QwVBzYOHWaONuFcoaTwbLhpBFETrIGL")

/* GET home page. */
// router.get('/', function (req, res, next) {
//   res.render('index', { title: 'Express' });
// });

router.get('/', function (req, res, next) {
  var Restaurant = Parse.Object.extend("Restaurant");
  var query = new Parse.Query(Restaurant);
  // query.equalTo("playerName", "Dan Stemkoski");
  query.find({
    success: function (results) {
      res.send(results)
      // Do something with the returned Parse.Object values
      
    },
    error: function (error) {
      console.log("Error: " + error);
    }
  });
});

router.get('/restaurant', function (req, res, next) {
  var Restaurant = Parse.Object.extend("Restaurant");
  var query = new Parse.Query(Restaurant);
  // query.equalTo("playerName", "Dan Stemkoski");
  query.get(req.query.id, {
    success: function (results) {
      res.send(results)
      // Do something with the returned Parse.Object values
      
    },
    error: function (error) {
      console.log("Error: " + error);
    }
  });
});

module.exports = router;
