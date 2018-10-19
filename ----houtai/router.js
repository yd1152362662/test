/**
 * Created by lenovo on 2018/10/10.
 */
//1,引入express
var express = require('express');
var app = express();

//2,设置模板引擎
var path = require('path');
//3,设置视图地址
app.set('views', path.join(__dirname, '/views'));
//4,设置ejs引擎
app.set('view engine', 'html');
app.engine('html', require('ejs').__express);

//5,静态文件
app.use(express.static('public'));
//
//6,引入body-parser模块
var bodyParser = require('body-parser');
//7，创建 application/x-www-form-urlencoded 编码解析
var urlencodedParser = bodyParser.urlencoded({ extended: false })

var cookieParser = require('cookie-parser');
app.use(cookieParser());

var session = require('express-session');
app.use(session({
    secret: '12345',
    name: 'express_11_cookie',   //这里的name值得是cookie的name，默认cookie的name是：connect.sid
    cookie: {maxAge: 80*1000 },     //设置maxAge是80000ms，即80s后session和相应的cookie失效过期
}));


var accountController = require('./controllers/AccountController');
app.get('/index', accountController.index);
app.get('/signin', accountController.signin);
app.get('/about', accountController.about);
app.get('/checkout', accountController.checkout);
app.get('/codes', accountController.codes);
app.get('/contact', accountController.contact);
app.get('/faq', accountController.faq);
app.get('/register', accountController.register);
app.get('/single', accountController.single);
app.get('/products', accountController.products);

app.post('/login1',urlencodedParser, accountController.login1);
app.post('/register1',urlencodedParser, accountController.register1);

var AdministratorController = require('./controllers/AdministratorController');
app.get('/login-in', AdministratorController.loginin);
app.post('/login2',urlencodedParser,AdministratorController.login2)
app.get('/inventory', accountController.inventory);
app.get('/orderform', accountController.orderform);
app.get('/reset-password', accountController.resetpassword);

var CheckController = require('./controllers/CheckController');
app.get('/user', CheckController.user);
app.post('/user1',urlencodedParser, CheckController.user1);

var orderController = require('./controllers/OrderController');
app.get('/orderform', orderController.Orderform);
app.post('/order1',urlencodedParser, orderController.Order1);
app.listen(8888);