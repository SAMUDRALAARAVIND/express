const express = require('express');
const mysql = require("mysql");
const router = express.Router();
const bodyParser = require('body-parser');
router.use(bodyParser.urlencoded({extended:true}));
router.get("/",function(req,resp){
    resp.render("signup");
});
router.get("/addproduct",function(req,resp){
  resp.render("products");
})


router.post("/addproduct",function(req,resp){
  var x= req.body.name;

  console.log(`Submitted Data is: ${x}`);

})
router.put("/:id",function(req,resp){
      resp.send(`This is is to add a new products with id ${req.params.id}`);
});
router.delete("/:id",function(req,resp){
    resp.send(`This is to delete a product with id ${req.params.is}`);
});
router.post("/",function(req,resp){
    resp.send("This is a post request to add a new product to database");
});


module.exports = router;
