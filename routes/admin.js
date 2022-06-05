var express = require('express');
var router = express.Router();
var ProductHelper =require('../helpers/product-helpers')

/* GET users listing. */
router.get('/', function (req, res) {
   ProductHelper.getAllProducts().then((products)=>{
       console.log(products)
       res.render('admin/view-products', {admin: true, products})
   })

});

router.get('/add-product', (req, res) => {
    res.render('admin/add-product')
})

router.post('/add-product', (req, res) => {
    console.log(req.body)
    console.log(req.files.Image)

    ProductHelper.addProduct(req.body, (insertedId) => {
        let image = req.files.Image
        image.mv('./public/product-images/'+insertedId+ '.jpg', (err) => {
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
