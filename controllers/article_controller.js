var Article = require('../models/article.js').Article;

module.exports.controller = function(app) {
  
	//ARTIST INDEX
//this renders all the artists in the artists table INDEX
	app.get('/article/:id', function (req, res) {
		Article.authorOfArticle( req.params.id, function (articles){
	     	var user = req.session.currentUser;
      var name = req.session.name;
      var id = req.session.id;
    
      console.log(">>>>>>>>>>>");

      
      var data ={
              user: user,
              name: name,
              articles: articles
         }

        console.log(data);
	      res.render('articleIndex', data);
	    });
	});

	app.get('/article/edit/:id', function (req, res) {
    	Article.find( req.params.id, function (articles) {
      		console.log("testing");
            var user = req.session.currentUser;
      var name = req.session.name;
      var id = req.session.id;
    
      console.log(">>>>>>>>>>>");

      
      var data ={
              user: user,
              name: name,
              articles: articles
         }

        console.log(data);
      	res.render('articleEdit', data);
    	});
  	});

	app.get('/contribute/:id', function (req, res) {
    	   if (req.session.currentUser === null) {
            res.redirect( '/login' );
          }   else {
                 	Article.getWithAuthors( req.params.id, function (contribute){
            	     	var user = req.session.currentUser;
                    var name = req.session.name;
                    var id = req.session.id;
                  
                    console.log(">>>>>>>>>>>");

                    
                    var data ={
                            user: user,
                            name: name,
                            contribute: contribute
                       }

                      console.log(data); 		
                  	res.render('newPost', data);
                  });
              }

    
  });

  app.get('/contribute', function (req, res) {
         if ( ( req.session.currentUser === null ) || ( req.session.currentUser === undefined ) ) {
            res.redirect( '/login' );
          }   else {
              
                  Article.getWithAuthors( req.params.id, function (data){
                    console.log(data);          
                    res.render('newPost', data);
                  });
              }

    
  });

  	

  	app.get('/about', function (req, res) {
  		Article.about( function (abouts) {
	   
        var user = req.session.currentUser;
      var name = req.session.name;
      var id = req.session.id;
    
      console.log(">>>>>>>>>>>");

      
      var data ={
              user: user,
              name: name,
              abouts: abouts
         }

        console.log(data);
	    
	      res.render('about', data);
	 	});
	});

    app.delete('/article/:id', function(req, res) {
    console.log('hello');
       if (req.session.currentUser) {
        Article.delete(req.params.id, function (data) {
          res.redirect('/');
        });
      } else {
      res.status(403);
      res.redirect('/login');
      }
    });

};

 