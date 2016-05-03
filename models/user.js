var db = require('../db.js');

module.exports.User = {

  all : function (callback) {
    db.all('users', function (users) {
      console.log(users);
      var data={
        users: users
      }
      callback(data);
    });
  },
  allRsvp : function (callback) {
    db.all('rsvps', function (rsvps) {
      console.log(rsvps);
      var data={
        rsvps: rsvps
      }
      callback(data);
    });
  },
  create : function(obj, callback){
    db.create('users', obj, function (data) {
      callback( data );
    });
  },
  createRsvp : function(obj, callback){
    db.create('rsvps', obj, function (data) {
      callback( data );
    });
  },
   find : function(id, callback){
    db.find('users', id, function (data) {
      callback( data[0] );
    });
  },
  findUser : function(user, callback){
    db.findUser('users', user, function (data) {
      // console.log(data);
      // console.log(data[0]);
      callback( data[0]);
    });
  },
   updateArticle : function(obj, id, callback){
    db.update('articles', obj, id, function (data) {
      console.log(data);
      console.log(data[0]);
      callback( data);
    });
  }
}
