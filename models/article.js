var db = require('../db.js');

module.exports.Article = {

  all : function (callback) {
    db.all('articles', function (articles) {
      console.log(articles);
      var data={
        articles: articles
      }
      callback(data);
    });
  },
  about : function (callback) {
    db.all('abouts', function (about) {
      console.log(about);
      callback(about[0]);
    });
  },
  find : function(id, callback){
    db.find('articles', id, function (data) {
      console.log(data);
      console.log(data[0]);
      callback( data[0]);
    });
  },
  getWithAuthors : function( id, callback){
    db.find('authors', id, function (authors) {
      db.findRelations('articles', 'author_id', id, function (articles) {
        db.all('categories', function (categories) {
          var data = {
          author: authors[0],
          articles: articles[0],
          categories: categories
        };
        console.log(data);
        callback(data);
        });
      });
    });
  },
  authorOfArticle : function( key, callback){
    db.authorOfArticle('articles', 'authors', 'author_id', 'id', key, function (articles) {
        console.log(articles);
        console.log(articles[0]);
        var data = {
          articles: articles[0]
        };

        callback(data);
    });
  },
  create: function(table, obj, id, cb) {
    pg.connect(dbUrl, function(err, client, done) {
      var keys = [];
      var values = [];
      var dollars = [];
      Object.keys(obj).forEach(function(key, i) {
        keys.push(key);
        values.push(obj[keys[i]]);
        dollars.push('$' + (i + 1));
      })
      var queryString = 'INSERT INTO ' + table + '(' + keys.join(',') + ') VALUES(' + dollars.join(',') + ')';
      client.query(queryString, values, function(err, result) {
        done();
        if (err) {
          console.error('error running query', err);
        }
        cb(result)
      });
    })
    this.end();
  }, //need to edit this create function

  delete: function (id, cb) {
    db.delete('articles', id, function (articles) {

       
    });
  }
   
  
}
