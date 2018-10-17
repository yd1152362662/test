/**
 * Created by lenovo on 2018/10/10.
 */
exports.login1 = function(req, res){

     //var userid = req.query.userid;
     //var passwordinput = req.query.passwordinput;

    //1,引入首页数据处理模块
    var AccountDao = require('../Service/UserService');
    //2，创建对象
    var accountDao = new AccountDao();

    var user = accountDao.crypto(req.body.user);
    var password = accountDao.crypto(req.body.password);
    //3,初始化
    accountDao.init();
    //4,查询数据
    accountDao.selectUserByName(user,function(result){
        var response={
            state:0,
            msg:''
        }

        var length = result.length;
        if(length==0){
            response.state=-1;
            response.msg="没有当前用户名，请注册用户！";
        }else{
            var buffer = result[0].password;
            if(password==buffer){
                response.state=1;
                response.msg="登录成功！";
            }else{
                response.state=2;
                response.msg="输入密码错误！";
            }
        }
        //把对象转为json格式数据
        var data = JSON.stringify(response);
        res.end(data);
    });


};

exports.register1 = function(req, res){

    var user = req.body.user;
    var password = req.body.password;
    var FirstName = req.body.FirstName;
    var LastName = req.body.LastName;
    //1,引入首页数据处理模块
    var AccountDao = require('../Service/UserService');
    //2，创建对象
    var accountDao = new AccountDao();
    //3,初始化
    accountDao.init();
    //4,插入数据
    accountDao.insert(user,password,FirstName,LastName,function (result) {
        res.end(JSON.stringify(result));
    });


};







exports.index=function(req, res){
    res.render('index',{})
}
exports.checkout=function(req, res){
    res.render('checkout',{})
}
exports.about=function(req, res){
    res.render('about',{})
}
exports.codes=function(req, res){
    res.render('codes',{})
}
exports.contact=function(req, res){
    res.render('contact',{})
}
exports.register=function(req, res){
    res.render('register',{})
}
exports.products=function(req, res){
    res.render('products',{})
}
exports.faq=function(req, res){
    res.render('faq',{})
}
exports.signin=function(req, res){
    res.render('signin',{})
}
exports.single=function(req, res){
    res.render('single',{})
}


