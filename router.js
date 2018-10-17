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

app.listen(8888);