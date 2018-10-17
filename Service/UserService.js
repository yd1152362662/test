/**
 * Created by lenovo on 2018/10/12.
 */

function UserService(){

    this.init=function(){
        //(1)引入userDao模块
        var UserDao =  require('../dao/UserDao');
        //(2)创建对象
        this.userDao =  new UserDao();
        //(3)对象初始化
        this.userDao.init();
    }




    this.insert=function(user,password,FirstName,LastName,call){

        var resData={
            insertId:-1,
            msg:''
        }
        var user=this.crypto(user);
        var password=this.crypto(password);

        //1,如何存在就直接返回存在的结果

        var that = this;
        this.checkUser(user,function(result){
            if(result){
                resData.msg="用户已经存在！"
                call(resData);
            }else{
                //因为是异步执行，如果不将this用that指代，那么这个函数就不会执行if（return）为真的操作
                that.userDao.insert(user,password,FirstName,LastName,function (data) {
                    resData.msg="注册成功";
                    resData.insertId=data.insertId;
                    call(resData);
                })
            }

        })
    }




    this.selectUserByName=function(name,call){
        //(1)查询用户数据
        this.userDao.selectUserByName(name,function(result){
            console.log(result)
            call(result);
        })
    }



    this.checkUser=function(name,call){
        this.selectUserByName(name,function(result){
            if(result.length==0){
                call(false);
            }else{
                call(true);
            }
        });
    }





    this.crypto=function(data){
        //1、引入crypto模块
        var crypto = require('crypto');
        //2，生成口令的散列值，crypto模块功能是加密并生成各种散列，createHash(algorithm)方法 ,这是利用给定的算法生成hash对象
        var md5 = crypto.createHash('md5');
        //3,digest([encoding])方法，计算数据的hash摘要值，encoding是可选参数，不传则返回buffer (encoding可为 'hex'、'base64'等)；
        var buffer = md5.update(data).digest('hex');
        return buffer;
    }






}
module.exports=UserService;
