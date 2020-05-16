var db=require('../dbconnection');
var order={
    getAllOrder:function(callback){
        return db.query("select * from order_tbl",callback);
    },
    addOrder:function(item,callback){
        var date=new Date();
        return db.query("insert into order_tbl values (?,?,?,?,?,?)",[item.O_id,item.O_amount,item.FK_P_id,item.FK_Email_id,date,item.O_status],callback);
    },
    updateOrder:function(soh,item,callback){
        return db.query("update product_tbl set P_soh=? where P_id=?",[soh,item.P_id],callback);
    },
    getOrderByCustId:function(id,callback){
        return db.query("select * from order_tbl where FK_Email_id=?",[id],callback);
    },
    getOrderId:function(callback){
        return db.query("select O_id from order_tbl ORDER BY(O_id) DESC LIMIT 1",callback);
    },
    getMyOrderByJoin:function(id,callback){
        return db.query("select o.*,p.* from order_tbl o,product_tbl p where o.FK_P_id=p.P_id AND o.FK_Email_id=?",[id],callback);
    },
    updateStatus:function(id,status,callback){
        return db.query("update order_tbl set O_status=? where O_id=?",[status,id],callback);
    }
};
module.exports=order;