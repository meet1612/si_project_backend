var probycatname = require("../model/product_model");
var express = require("express");
var router = express.Router();
router.get("/:name", function(req, res, next) {
  probycatname.getProductByCat(req.params.name, function(err, rows) {
    if (err) {
      res.json(err);
    } else {
      res.json(rows);
    }
  });
});
module.exports=router;
