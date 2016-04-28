var db = require('../db.js');

module.exports.Product = {

    all: function(callback) {
        db.all('products', function(products) {

            console.log(products);

            callback(products);

        });
    },
    find: function(id, callback) {
        db.find('products', id, function(data) {
            console.log(data);
            console.log(data[0]);
            callback(data[0]);
        });
    },
    getWithComments: function(id, callback) {
        db.find('products', id, function(product) {
            db.CustomerOfComment('comments', 'customers', 'customer_id', 'id', 'product_id', id, function(comments) {
                var data = {
                    product: product[0],
                    comments: comments,
                };
                console.log(data);
                callback(data);

            });
        });
    },

}
