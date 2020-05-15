var category = require("../model/category_model");
var express = require("express");
var router = express.Router();
router.get("/", function(req, res, next) {
  category.getAllCat(function(err, rows) {
    if (err) {
      res.json(err);
    } else {
      res.json(rows);
    }
  });
});
router.post("/", function(req, res, next) {
  category.addCat(req.body,function(err, rows) {
    if (err) {
      res.json(err);
    } else {
      res.json(rows);
    }
  });
});
module.exports = router;
