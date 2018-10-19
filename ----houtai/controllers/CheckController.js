exports.user1=function(req,res){
    //1,解析客户端提交的数据
    //(1)引入MySQL模块
    var mysql  = require('mysql');
    //(2)创建一个connection
    var connection = mysql.createConnection({
        host     : 'localhost',       //主机 ip
        user     : 'root',            //MySQL认证用户名
        password : '123456',                //MySQL认证用户密码
        port: '3306',                 //端口号
        database:'work'          //数据库里面的数据
    });
    //(3),连接
    connection.connect();
    //(4),编写sql语句
    var  userGetSql = "SELECT * from users";
//4,进行查询操作
    /**
     *query，mysql语句执行的方法
     * 1，userAddSql编写的sql语句
     * 2，function (err, result)，回调函数，err当执行错误时，回传一个err值，当执行成功时，传回result
     */
    connection.query(userGetSql,function (err, result) {
        if(err){
            console.log('[INSERT ERROR] - ',err.message);
            return;
        }
        res.end(JSON.stringify(result));
    });
//5,连接结束
    connection.end();
}

exports.user=function(req,res){
    res.render("user",{});
}