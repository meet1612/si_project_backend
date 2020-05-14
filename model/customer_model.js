var db=require('../dbconnection');
var customer={
    getAllCustomer:function(callback){
        return db.query('select * from customer_tbl',callback);
    },
    getCustomerById(id,callback){
        return db.query("select * from customer_tbl where Email_Id=?",[id],callback);
    },
    CustomerLogin:function(item,callback){
        return db.query('select * from customer_tbl where Email_Id=? And Password=?',[item.Email_Id,item.Password],callback);
    },
    CustomerSignup:function(item,callback){
        return db.query("insert into customer_tbl values (?,?,?,?,?,?,?,?)",[item.Email_Id,item.Password,item.Username,item.Gender,item.Age,item.Mobile,item.City,item.Address],callback);
    },
    CustomerUpdate:function(id,item,callback){
        return db.query("update customer_tbl set Username=?,Gender=?,Age=?,Mobile=?,City=?,Address=? where Email_Id=?",[item.Username,item.Gender,item.Age,item.Mobile,item.City,item.Address,id],callback);
    },
    changepass:function(item,callback){
        return db.query("update user customer_tbl Password=? where Email_Id=?",[item.Password,item.Email_Id],callback);
    }
};
module.exports=customer;