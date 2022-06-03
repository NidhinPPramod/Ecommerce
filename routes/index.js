var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {

  let products=[
      {
        name:"Iphone 11",
        category:"Mobile",
        description:"class Performer",
        image:"https://m.media-amazon.com/images/I/71E5zB1qbIL._AC_UY218_.jpg"

      },
    {
      name:"Iphone 12",
      category:"Mobile",
      description:"class Performer",
      image:"https://m.media-amazon.com/images/I/71ZOtNdaZCL._AC_UY218_.jpg"

    },
    {
      name:"Iphone 11 pro max",
      category:"Mobile",
      description:"class Performer",
      image:"https://m.media-amazon.com/images/I/61jLiCovxVL._AC_UY218_.jpg"

    },
    {
      name:"Iphone 13",
      category:"Mobile",
      description:"class Performer",
      image:"https://m.media-amazon.com/images/I/71xb2xkN5qL._AC_UY218_.jpg"

    }]
  res.render('index', { products,admin:false });
});

module.exports = router;
