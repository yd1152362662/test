/**
 * Created by lenovo on 2018/10/10.
 */


exports.index =  function IndexDao() {
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

    this.selectText1 = function (call) {
        //1,编写sql语句
        var userGetSql = 'SELECT * FROM text1';
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
        this.connection.end();
    }
}



