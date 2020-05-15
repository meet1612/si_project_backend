var db=require('../dbconnection');
var category={

    getAllCat:function(callback){
        return db.query("select * from category_tbl",callback);
    },
    addCat:function(item,callback){
        return db.query("insert into category_tbl values(?,?)",[item.Cat_id,item.Cat_name],callback);
    }
};
module.exports=category;