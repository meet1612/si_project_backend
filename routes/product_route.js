var product=require("../model/product_model");
var express = require("express");
var router = express.Router();
router.get('/:id?',function(req,res,next){
    if(req.params.id){
        product.getProductById(req.params.id,function(err,rows){
            if(err){
                res.json(err);
            }
            else{
                res.json(rows);
            }    
        });
    }
    else{
   product.getAllProduct(function(err,rows){
        if(err){
            res.json(err);
        }
        else{
            res.json(rows);
        }
   });
}
});
router.post("/", function(req, res, next) {
    product.addProduct(req.body,function(err, rows) {
      if (err) {
        res.json(err);
      } else {
        res.json(rows);
      }
    });
  });
  router.delete("/:id", function(req, res, next) {
    product.removeProduct(req.params.id,function(err, rows) {
      if (err) {
        res.json(err);
      } else {
        res.json(rows);
      }
    });
  });
  router.put("/:id", function(req, res, next) {
    product.updateProduct(req.params.id,req.body,function(err, rows) {
      if (err) {
        res.json(err);
      } else {
        res.json(rows);
      }
    });
  });
module.exports=router;