var Product = require('../models/product.js').Product;

module.exports.controller = function(app) {

    //PRODUCT INDEX
    //this renders all the products in the products table INDEX
    app.get('/products', function(req, res) {

        Product.all(function(products) {


            console.log(products);
            // res.send('hello');
            res.json(products);
        });
    });

    app.get("/products/:id", function(req, res) {
        Product.getWithComments(req.params.id, function(product) {


            console.log(">>>>>>>>>>>");


            res.json(product);
        });
    });
};
