var db = require('../db.js');

module.exports.Category = {

  all : function (callback) {
    db.all('categories', function (categories) {
      console.log(categories);
      var data={
        categories: categories
      }
      callback(data);
    });
  },
   getWithArticles : function( id, callback){
    db.find('categories', id, function (categories) {
      db.findRelations('articles', 'category_id', id, function (articles) {
        var data = {
          category: categories[0],
          articles: articles
        };

        callback(data);
      });
    });
  }
}




