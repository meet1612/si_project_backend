var  order= require("../model/order_model");
var express = require("express");
var router = express.Router();
router.get('/:id?',function(req,res,next){
    if(req.params.id){
        order.getOrderByCustId(req.params.id,function(err,rows){
            if(err){
                res.json(err);
            }
            else{
                res.json(rows);
            }    
        });
    }
    order.getAllOrder(function(err,rows){
        if(err){
            res.json(err);
        }
        else{
            res.json(rows);
        }
    });
});
router.post('/',function(req,res,next){
    order.addOrder(req.body,function(err,rows){
        if(err){
            res.json(err);
        }
        else{
            res.json(rows);
        }
    });
});
router.put('/:soh',function(req,res,next){
    order.updateOrder(req.params.soh,req.body,function(err,rows){
        if(err){
            res.json(err);
        }
        else{
            res.json(rows);
        }
    });
});
router.put('/:id/:status',function(req,res,next){
    order.updateStatus(req.params.id,req.params.status,function(err,rows){
        if(err){
            res.json(err);
        }
        else{
            res.json(rows);
        }
    });
});
module.exports=router;