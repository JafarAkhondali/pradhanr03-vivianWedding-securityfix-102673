var Order = require('../models/order.js').Order;

module.exports.controller = function(app) {

    //Order INDEX
    //this renders all the Orders in the Orders table INDEX

    app.get('/orderscustomers', function(req, res) {

        Order.allCustomerOrder(function(orders) {

            //    console.log(data);
            console.log(orders);
            // res.send('hello');
            res.json(orders);
        });
    });

    app.get("/orderscustomers/:id", function(req, res) {
        Order.findCustomerOrderWithId(req.params.id, function(order) {

            console.log(">>>>>>>>>>>");

            res.json(order);
        });
    });


    app.post('/orderscustomers', function(req, res) {


        Order
            .createCustomerOrder({
                customer_id: req.body.customer_id,
                shipping_address: req.body.shipping_address,
                billing_address: req.session.billing_address,
                total_price: req.body.total_price,
                product_items: req.body.product_items
            }, function(data) {

                console.log(data);

            });

    });

    app.post('/orderscustomers', function(req, res) {


        Order
            .createCustomerOrder({
                customer_id: req.body.customer_id,
                shipping_address: req.body.shipping_address,
                billing_address: req.session.billing_address,
                total_price: req.body.total_price
            }, function(data) {

                console.log(data);

            });

    });

    app.post('/ordersproducts', function(req, res) {


        Order
            .createProductOrder({
                order_id: req.body.order_id,
                product_id: req.body.product_id

            }, function(data) {

                console.log(data);

            });

    });



    app.get('/ordersproducts', function(req, res) {

        Order.allProductOrder(function(orders) {

            //    console.log(data);
            console.log(orders);
            // res.send('hello');
            res.json(orders);
        });
    });

    app.get("/ordersproducts/:id", function(req, res) {
        Order.findProductOrderWithId(req.params.id, function(order) {

            console.log(">>>>>>>>>>>");

            res.json(order);
        });
    });


};
