function UserDao() {
    this.init = function () {
        //1,引入MySQL模块
        var mysql = require('mysql');  //调用MySQL模块
        //2，创建一个connection
        this.connection = mysql.createConnection({
            host: 'localhost',       //主机 ip
            user: 'root',            //MySQL认证用户名
            password: '123456',                //MySQL认证用户密码
            port: '3306',                 //端口号
            database: 'mys'          //数据库里面的数据
        });
        //3，连接
        this.connection.connect();
    }
    this.selectUserByName = function (name,call) {
        //1,编写sql语句
        var userGetSql = "SELECT password FROM user where user ='"+name+"'";
        //2,进行查询操作
        /**
         *query，mysql语句执行的方法
         * 1，userAddSql编写的sql语句
         * 2，function (err, result)，回调函数，err当执行错误时，回传一个err值，当执行成功时，传回result
         */
        this.connection.query(userGetSql, function (err, result) {
            if (err) {
                console.log('[INSERT ERROR] - ', err.message);
                return;
            }
            call(result);
        });

        //3,连接结束
        //this.connection.end();
    }
    this.insert = function (user,password,FirstName,LastName,call) {

        //1，编写sql语句
        var  userAddSql = 'INSERT INTO user(user,password,FirstName,LastName) VALUES(?,?,?,?)';
        var  userAddSql_Params = [user,password,FirstName,LastName];
        //2,进行插入操作
        /**
         *query，mysql语句执行的方法
         * 1，userAddSql编写的sql语句
         * 2，userAddSql_Params，sql语句中的值
         * 3，function (err, result)，回调函数，err当执行错误时，回传一个err值，当执行成功时，传回result
         */
        this.connection.query(userAddSql,userAddSql_Params,function (err, result) {
            if(err){
                console.log('[INSERT ERROR] - ',err.message);
                return;
            }

            call(result);
        });
//3,连接结束
//        this.connection.end();

    };


    this.update=function(user,password,id,call){
        //1,编写sql语句
        var userModSql = "UPDATE user SET user = ?,password = ? WHERE id = ?";
        var userModSql_Params = [user,password,id];

        //2，更新操作
        this.connection.query(userModSql,userModSql_Params,function (err, result) {
            if(err){
                console.log('[INSERT ERROR] - ',err.message);
                return;
            }
            call(result);
        });
        //3,连接结束
        //this.connection.end();
    };

    this.selectProducts= function (call) {
        //1,编写sql语句
        var userGetSql = 'SELECT * FROM products1';
        //2,进行查询操作
        /**
         *query，mysql语句执行的方法
         * 1，userAddSql编写的sql语句
         * 2，function (err, result)，回调函数，err当执行错误时，回传一个err值，当执行成功时，传回result
         */
        this.connection.query(userGetSql, function (err, result) {
            if (err) {
                console.log('[INSERT ERROR] - ', err.message);
                return;
            }

            call(result);
        });
        //3,连接结束
      //  this.connection.end();
    }

}
module.exports = UserDao;