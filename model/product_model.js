var db=require('../dbconnection');
var product={

    getAllProduct:function(callback){
        return db.query("select * from product_tbl",callback);
    },
    getProductById:function(id,callback){
        return db.query("select * from product_tbl where P_id=?",[id],callback);
    },
    getProductByCat:function(name,callback){
        return db.query("select p.*,c.* from product_tbl p,category_tbl c where c.Cat_id=p.FK_Cat_id AND Cat_name=?",[name],callback);
    },
    getProductByCatId:function(c_id,p_id,callback){
        return db.query("SELECT * FROM product_tbl WHERE FK_Cat_id=? and P_id NOT IN (?)",[c_id,p_id],callback);
    },
    addProduct:function(item,callback){
        return db.query("insert into product_tbl values(?,?,?,?,?,?,?,?,?)",[item.P_id,item.P_name,item.P_price,item.P_img,item.P_color,item.P_mfg,item.FK_Cat_id,item.P_soh,item.P_desc],callback);
    },
    removeProduct:function(id,callback){
        return db.query("delete from product_tbl where P_id=?",[id],callback);
    },
    updateProduct:function(id,item,callback){
        return db.query("update product_tbl set P_name=?,P_price=?,P_img=?,P_color=?,P_mfg=?,FK_Cat_id=?,P_soh=?,P_desc=? where P_id=?",[item.P_name,item.P_price,item.P_img,item.P_color,item.P_mfg,item.FK_Cat_id,item.P_soh,item.P_desc,id],callback);
    }
};
module.exports=product;