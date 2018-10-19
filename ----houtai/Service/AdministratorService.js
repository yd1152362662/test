/**
 * Created by lenovo on 2018/10/12.
 */

function AdministratorService(){

    this.init=function(){
        //(1)引入userDao模块
        var UserDao =  require('../dao/AdministratorDao');
        //(2)创建对象
        this.userDao =  new UserDao();
        //(3)对象初始化
        this.userDao.init();
    }


    this.selectUserByName=function(name,call){
        //(1)查询用户数据
        this.userDao.selectUserByName(name,function(result){
            console.log(result)
            call(result);
        })
    }

    this.checkEmail = function (email,call) {
        this.selectUserByName(email,function(result){
            call(result);
        })
    }

    this.checkUser=function(user,password,call,state){

        //if(state==0){
        //    //(1)用户工具类
        //    var tool=require('../Tools/tool');
        //    user =tool.crypto(user);
        //    password =tool.crypto(password);
        //}


        this.selectUserByName(user,function(result){
            var body={
                state:0,
                msg:"hello"
            }

            //1,获得数组的长度
            var length = result.length;

            if(length==0){
                body.msg="没有当前用户账号，请确认账号是否正确，如果没有账号，请注册新用户！"
            }else{
                //2,把密码从数组对象里面取出来
                var buffer = result[0].password;
                //3,判断用户是否合法
                if(password==buffer){
                    body.state=2,
                        body.msg="登录成功！";
                    body.user=user;
                    body.password=buffer;
                    //req.location("/index");
                }else{
                    body.state=1,
                        body.msg="登录失败，密码错误，请重新输入密码！";
                }
            }
            call(body);
        });






    };

    this.selectProducts=function(call){


        //(1)查询用户数据
        this.userDao.selectProducts(function(result){

            call(result);
        })
    }

    this.selectProducts1=function(call){


        //(1)查询用户数据
        this.userDao.selectProducts(function(result){

            call(result);
        })
    }

    this.crypto=function(source){
        //1,引入加密模块
        var crypto = require('crypto');
//2，生成口令的散列值，crypto模块功能是加密并生成各种散列，createHash(algorithm)方法 ,这是利用给定的算法生成hash对象
        var md5 = crypto.createHash('md5');
//3,digest([encoding])方法，计算数据的hash摘要值，encoding是可选参数，不传则返回buffer (encoding可为 'hex'、'base64'等)；
        var en_data = md5.update(source).digest('hex');
        return en_data;
    }








}

module.exports=AdministratorService;

