// var express = require('express');
// var router = express.Router();

var bcrypt = require('bcrypt');


var User = require('../models/user.js').User;

module.exports.controller = function(app) {

	//ARTIST INDEX
//this renders all the artists in the artists table INDEX
	app.get('/users', function (req, res) {
		User.all( function(data) {
			// res.render('articleIndex', data);
			res.json(data);
		});
	});

	app.get('/gallery-viv-dan-wedding', function (req, res) {
		res.render('gallery');

	});

	app.get('/bridesmaids', function (req, res) {
		res.render('bridesmaid');

	});

	app.get('/groomsmen', function (req, res) {
		res.render('groomsmen');

	});

	app.get('/flowergirls', function (req, res) {
		res.render('flowergirls');

	});


	app.get('/login', function (req, res) {
		res.render('login');
	});

	app.get('/rsvp-vivian', function (req, res) {
		User
	    .allRsvp(function(data) {
	    	console.log(data);
	    	res.json(data);
	    });

	});


	app.post('/users', function(req, res) {
    var userName = req.body.name;
    var userEmail = req.body.email;
    var userPassWord = req.body.password;
    var userCode = req.body.code;
    if (userCode === 'v1V1@nD@n1e7') {
      console.log('heelo');
  	  bcrypt.hash(userPassWord, 10, function(err, hash) {
  	    User
  	      .create({
  	      	name: userName,
  	        email: userEmail,
  	        password: hash,
            secret_code: userCode
  	      }, function(user) {
            console.log('here user signed in');
            console.log(user);
            User
        	    .findUser( userEmail, function(user) {
        	    	console.log(user);
        	      if (user) {
        	        bcrypt.compare(userPassWord, user.password, function(err, result) {
        	          if (result) {
        	            req.session.currentUser = user.id;
        	            req.session.name = user.name;
        	            // res.send(user);
                      console.log('here user logged in');
                      console.log(user);
                      console.log(req.session.currentUser);
        	            res.redirect('/');
        	            // res.redirect('userPage', user);

        	          } else {
          	            res.status(400);
          	            res.send({
          	              err: 400,
          	              msg: 'Incorrect password'
          	            });
          	          }
        	        });
        	      } else {
          	        res.redirect('/');
          	      }
        	    });
  	      });
  	  });
    }
    else {
      res.redirect('/');
    }

	});

	app.post('/sessions', function(req, res) {
	  var email = req.body.email;
	  var password = req.body.password;
	  console.log(email);
	  console.log(password);
	  // var logg = $('.sign');

	  User
	    .findUser( email, function(user) {
	    	console.log(user);
	      if (user) {
	        bcrypt.compare(password, user.password, function(err, result) {
	          if (result) {
	            req.session.currentUser = user.id;
	            req.session.name = user.name;
	            // res.send(user);
              console.log('here user logged in');
              console.log(user);
              console.log(req.session.currentUser);
	            res.redirect('/');
	            // res.redirect('userPage', user);

	          } else {
	            res.send({
	              err: 400,
	              msg: 'Incorrect password, please retunr to the site and register your account with the wedding invitation vip code'
	            });
	          }
	        });
	      } else {
	        res.redirect('/');
	      }
	    });
	});

	app.get('/sessions', function (req, res) {

	    	res.json(req.session.currentUser);

	});


	app.delete('/sessions', function(req, res) {
	  console.log('bye you logged out');
	  req.session.currentUser = null;
	  req.session.name = null;
	 	 res.redirect('/');
	});

	app.get('/current_user', function(req, res) { //not sure what to do with this?
	  if (req.session.currentUser) {

	    Author
	      .find(req.session.currentUser,
	      function(user) {
	        res.send(user);
	      });
	  } else {
	    res.send(null);
	  }
	});

	app.post('/rsvp', function(req, res) {
		console.log('test123');
		console.log(req.body);

		if (req.session.currentUser) {
			User
				.createRsvp({
					first_name: req.body.first_name,
					last_name: req.body.last_name,
					rsvp: req.body.rsvp,
					rsvp_food_choice: req.body.rsvp_food_choice,
					guest_name: req.body.guest_name,
					guest_food_choice: req.body.guest_food_choice,
					kid_names: req.body.kid_names,
					kids_food_choices: req.body.kids_food_choices,
					phone: req.body.phone,
					address: req.body.address,
					message: req.body.message,
					user_id: req.session.currentUser
				}, function(result) {

					console.log(result);
					res.redirect('/');
				});
		} else {
			res.status(403);
			 res.redirect('/login');
		}
	});


};
