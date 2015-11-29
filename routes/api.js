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

router.delete('/restaurant', function (req, res, next) {
  var Restaurant = Parse.Object.extend("Restaurant");
  var query = new Parse.Query(Restaurant);
  var restaurant = req.body
  restaurant.destroy({
    success: function (restaurant) {
      res.send(restaurant)
      // The object was deleted successfully.
    },
    error: function (restaurant, error) {
      console.log(error)
      res.status(error.code).send(error.message)
      // The delete failed.
      // error is a Parse.Error with an error code and message.
    }
  });
  // query.get(req.query.id, {
  //   success: function (restaurant) {
  //     restaurant.destroy({
  //       success: function (restaurant) {
  //         res.send(restaurant)
  //         // The object was deleted successfully.
  //       },
  //       error: function (restaurant, error) {
  //         console.log(error)
  //         res.status(error.code).send(error.message)
  //         // The delete failed.
  //         // error is a Parse.Error with an error code and message.
  //       }
  //     });

  //   },
  //   error: function (error) {
  //     console.log("Error: " + error);
  //   }
  // });
});

router.put('/restaurant', function (req, res, next) {
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

router.post('/restaurant', function (req, res, next) {

  var Restaurant = Parse.Object.extend("Restaurant");
  var restaurant = new Restaurant();

  var data = req.body
  console.log(data)
  restaurant.save(data, {
    success: function (restaurant) {
      res.send(restaurant)
      // The object was saved successfully.
    },
    error: function (restaurant, error) {
      console.log(error)
      res.status(error.code).send(error.message)
      // The save failed.
      // error is a Parse.Error with an error code and message.
    }
  });
  // restaurant.set("name", data.name);
  // restaurant.set("about", data.about);
  // restaurant.set("address", data.address);
  // restaurant.set("phone", data.phone);
  
});

module.exports = router;
