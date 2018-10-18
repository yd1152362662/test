/**
 * Created by lenovo on 2018/10/10.
 */
exports.login1 = function(req, res){
    var user  = req.body.user;
    var password  = req.body.password;
    //2,验证用户是否合法
    //(1)引入userService
    var UserService = require('../Service/UserService');
    //(2)创建对象
    var userService = new UserService();
    //(3)对象初始化
    userService.init();
    //(4)验证用户是否合法
    userService.checkUser(user,password,function(result){
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



    if(req.session.sign){
        res.render('index',{state:2});
        return;
    }

    var  name =req.cookies.name;
    var  password=req.cookies.password;

    if(name==null||password==null){

        res.render('index',{state:-1});
    }else{
        //(1)引入userService
        var UserService = require('../Service/UserService');
        //(2)创建对象
        var userService = new UserService();
        //(3)对象初始化
        userService.init();
        //(4)验证用户都合法
        userService.checkUser(name,password,function(result){
            if(result.state==2)
            {
                req.session.sign=true;
                res.render('index',{state:2});
            }else{
                res.render('index',{state:-1});
            }
        },1);
    }





}
exports.checkout=function(req, res){
    if(req.session.sign){
        res.render('checkout',{state:2});
        return;
    }

    var  name =req.cookies.name;
    var  password=req.cookies.password;

    if(name==null||password==null){
        res.render('checkout',{state:-1});
    }else{
        //(1)引入userService
        var UserService = require('../Service/UserService');
        //(2)创建对象
        var userService = new UserService();
        //(3)对象初始化
        userService.init();
        //(4)验证用户都合法
        userService.checkUser(name,password,function(result){
            if(result.state==2)
            {
                req.session.sign=true;
                res.render('checkout',{state:2});
            }else{
                res.render('checkout',{state:-1});
            }
        },1);
    }


   // res.render('checkout',{})
}
exports.about=function(req, res){



    if(req.session.sign){
        res.render('about',{state:2});
        return;
    }

    var  name =req.cookies.name;
    var  password=req.cookies.password;

    if(name==null||password==null){
        res.render('about',{state:-1});
    }else{
        //(1)引入userService
        var UserService = require('../Service/UserService');
        //(2)创建对象
        var userService = new UserService();
        //(3)对象初始化
        userService.init();
        //(4)验证用户都合法
        userService.checkUser(name,password,function(result){
            if(result.state==2)
            {
                req.session.sign=true;
                res.render('about',{state:2});
            }else{
                res.render('about',{state:-1});
            }
        },1);
    }

   // res.render('about',{})
}
exports.codes=function(req, res){

    if(req.session.sign){
        res.render('codes',{state:2});
        return;
    }

    var  name =req.cookies.name;
    var  password=req.cookies.password;

    if(name==null||password==null){
        res.render('codes',{state:-1});
    }else{
        //(1)引入userService
        var UserService = require('../Service/UserService');
        //(2)创建对象
        var userService = new UserService();
        //(3)对象初始化
        userService.init();
        //(4)验证用户都合法
        userService.checkUser(name,password,function(result){
            if(result.state==2)
            {
                req.session.sign=true;
                res.render('codes',{state:2});
            }else{
                res.render('codes',{state:-1});
            }
        },1);
    }

    //res.render('codes',{})
}
exports.contact=function(req, res){

    if(req.session.sign){
        res.render('contact',{state:2});
        return;
    }

    var  name =req.cookies.name;
    var  password=req.cookies.password;

    if(name==null||password==null){
        res.render('contact',{state:-1});
    }else{
        //(1)引入userService
        var UserService = require('../Service/UserService');
        //(2)创建对象
        var userService = new UserService();
        //(3)对象初始化
        userService.init();
        //(4)验证用户都合法
        userService.checkUser(name,password,function(result){
            if(result.state==2)
            {
                req.session.sign=true;
                res.render('contact',{state:2});
            }else{
                res.render('contact',{state:-1});
            }
        },1);
    }

    //res.render('contact',{})
}
exports.register=function(req, res){
    if(req.session.sign){
        res.render('register',{state:2});
        return;
    }

    var  name =req.cookies.name;
    var  password=req.cookies.password;

    if(name==null||password==null){
        res.render('register',{state:-1});
    }else{
        //(1)引入userService
        var UserService = require('../Service/UserService');
        //(2)创建对象
        var userService = new UserService();
        //(3)对象初始化
        userService.init();
        //(4)验证用户都合法
        userService.checkUser(name,password,function(result){
            if(result.state==2)
            {
                req.session.sign=true;
                res.render('register',{state:2});
            }else{
                res.render('register',{state:-1});
            }
        },1);
    }

    //res.render('register',{})
}
exports.products=function(req, res){
    var UserService = require('../Service/UserService');
    //(2)创建对象
    var userService = new UserService();
    //(3)对象初始化
    userService.init();
    //(4)验证用户都合法
    if(req.session.sign){
        userService.selectProducts(function(result){
            console.log(result)
            res.render('products',{products:result,state:2});
        });
        //res.render('products',{state:2});
        return;
    }

    var  name =req.cookies.name;
    var  password=req.cookies.password;

    if(name==null||password==null){
        userService.selectProducts(function(result){
            console.log(result)
            res.render('products',{products:result,state:-1});
        });
    }else{
        //(4)验证用户都合法
        userService.checkUser(name,password,function(result){
            var obj={
                state :0
            }
            if(result.state==2)
            {
                req.session.sign=true;
                obj.state=2;
            }else{
                obj.state=-1;
            }
            userService.selectProducts(function(result){
                console.log(result)
                obj.products = result;
                res.render('products',obj);
            });
        },1);
    }





    //
    //var UserService = require('../Service/UserService');
    ////(2)创建对象
    //var userService = new UserService();
    ////(3)对象初始化
    //userService.init();
    //userService.selectProducts(function(result){
    //    console.log(result)
    //    res.render('products',{products:result,state:-1})
    //});



   // res.render('products',{})
}
exports.faq=function(req, res){

    if(req.session.sign){
        res.render('faq',{state:2});
        return;
    }

    var  name =req.cookies.name;
    var  password=req.cookies.password;

    if(name==null||password==null){
        res.render('faq',{state:-1});
    }else{
        //(1)引入userService
        var UserService = require('../Service/UserService');
        //(2)创建对象
        var userService = new UserService();
        //(3)对象初始化
        userService.init();
        //(4)验证用户都合法
        userService.checkUser(name,password,function(result){
            if(result.state==2)
            {
                req.session.sign=true;
                res.render('faq',{state:2});
            }else{
                res.render('faq',{state:-1});
            }
        },1);
    }

   // res.render('faq',{})
}
exports.signin=function(req, res){

    if(req.session.sign){
        res.render('signin',{state:2});
        return;
    }

    var  name =req.cookies.name;
    var  password=req.cookies.password;

    if(name==null||password==null){
        res.render('signin',{state:-1});
    }else{
        //(1)引入userService
        var UserService = require('../Service/UserService');
        //(2)创建对象
        var userService = new UserService();
        //(3)对象初始化
        userService.init();
        //(4)验证用户都合法
        userService.checkUser(name,password,function(result){
            if(result.state==2)
            {
                req.session.sign=true;
                res.render('signin',{state:2});
            }else{
                res.render('signin',{state:-1});
            }
        },1);
    }

    //res.render('signin',{})
}
exports.single=function(req, res){

    if(req.session.sign){
        res.render('single',{state:2});
        return;
    }

    var  name =req.cookies.name;
    var  password=req.cookies.password;

    if(name==null||password==null){
        res.render('single',{state:-1});
    }else{
        //(1)引入userService
        var UserService = require('../Service/UserService');
        //(2)创建对象
        var userService = new UserService();
        //(3)对象初始化
        userService.init();
        //(4)验证用户都合法
        userService.checkUser(name,password,function(result){
            if(result.state==2)
            {
                req.session.sign=true;
                res.render('single',{state:2});
            }else{
                res.render('single',{state:-1});
            }
        },1);
    }


    //res.render('single',{})
}


