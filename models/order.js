var db = require('../db.js');

module.exports.Order = {

    allCustomerOrder: function(callback) {
        db.all('orders', function(orders) {
            console.log(orders);
            var data = {
                orders: orders
            }
            callback(data);
        });
    },
    createCustomerOrder: function(obj, callback) {
        db.createOrder('orders', obj, function(data) {
            callback(data);
        });
    },
    findCustomerOrderWithId: function(id, callback) {
        db.find('orders', id, function(data) {
            callback(data[0]);
        });
    },
    findUser: function(user, callback) {
        db.findUser('orders', user, function(data) {
            callback(data[0]);
        });
    },
    allProductOrder: function(callback) {
        db.all('orders_products', function(orders) {
            console.log(orders);
            var data = {
                orders: orders
            }
            callback(data);
        });
    },
    createProductOrder: function(obj, callback) {
        db.create('orders_products', obj, function(data) {
            callback(data);
        });
    },
    findProductOrderWithId: function(id, callback) {
        db.find('orders_products', id, function(data) {
            callback(data[0]);
        });
    }
};
