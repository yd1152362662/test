/**
 * Created by Administrator on 2018/10/19 0019.
 */

exports.loginin=function(req,res){
    if(req.session.sign){
        res.render('user',{state:2});
        return;
    }

    var  name =req.cookies.name;
    var  password=req.cookies.password;

    if(name==null||password==null){
        res.render('login-in',{state:-1});
    }else{
        //(1)引入userService
        var UserService = require('../Service/AdministratorService');
        //(2)创建对象
        var userService = new UserService();
        //(3)对象初始化
        userService.init();
        //(4)验证用户都合法
        userService.checkUser(name,password,function(result){
            if(result.state==2)
            {
                req.session.sign=true;
                res.render('user',{state:2});
            }else{
                res.render('login-in',{state:-1});
            }
        },1);
    }
}

exports.login2 = function(req, res){
    var user  = req.body.user;
    var password  = req.body.password;
    //2,验证用户是否合法
    //(1)引入userService
    var UserService = require('../Service/AdministratorService');
    //(2)创建对象
    var userService = new UserService();
    //(3)对象初始化
    userService.init();
    //(4)验证用户是否合法
    userService.checkUser(user,password,function(result){
        console.log(user);

        if(result.state==2){
            req.session.sign=true;
            res.cookie('name',result.name, {maxAge:60*60 * 1000});
            res.cookie('password',result.password, {maxAge:60*60 * 1000});
        }
        result.name=null;
        result.password=null;
        res.end(JSON.stringify(result));
    },0);

};