var express = require('express');
const ProductHelper = require("../helpers/product-helpers");
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
    ProductHelper.getAllProducts().then((products) => {
        console.log(products)
        res.render('user/view-products', {admin: false, products})
    })

});

module.exports = router;
