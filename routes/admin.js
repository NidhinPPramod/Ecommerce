var express = require('express');
var router = express.Router();
var ProductHelper = require('../helpers/product-helpers')

/* GET users listing. */
router.get('/', function (req, res, next) {
    let products = [
        {
            name: "Iphone 11",
            category: "Mobile",
            description: "class Performer",
            image: "https://m.media-amazon.com/images/I/71E5zB1qbIL._AC_UY218_.jpg"

        },
        {
            name: "Iphone 12",
            category: "Mobile",
            description: "class Performer",
            image: "https://m.media-amazon.com/images/I/71ZOtNdaZCL._AC_UY218_.jpg"

        },
        {
            name: "Iphone 11 pro max",
            category: "Mobile",
            description: "class Performer",
            image: "https://m.media-amazon.com/images/I/61jLiCovxVL._AC_UY218_.jpg"

        },
        {
            name: "Iphone 13",
            category: "Mobile",
            description: "class Performer",
            image: "https://m.media-amazon.com/images/I/71xb2xkN5qL._AC_UY218_.jpg"

        }]

    res.render('admin/view-products', {admin: true, products})
});

router.get('/add-product', (req, res) => {
    res.render('admin/add-product')
})

router.post('/add-product', (req, res) => {
    console.log(req.body)
    console.log(req.files.Image)

    ProductHelper.addProduct(req.body, (insertedId) => {
        let image = req.files.Image
        image.mv('./public/product-images/'+insertedId+ '.jpg', (err, done) => {
            if (!err) {
                res.render("admin/add-product")
            }
            else
            {
                console.log('Error')
            }

        })

    })
})

module.exports = router;
