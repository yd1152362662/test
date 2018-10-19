/**
 * Created by lenovo on 2018/10/10.
 */
exports.index = function(req, res){
    //1,引入首页数据处理模块
    var IndexDao = require('../daoD/IndexDao');
    //2，创建对象
    var indexDao =  new IndexDao.index();
    //3,初始化
    indexDao.init();
    //4,查询数据
    indexDao.selectText1(function(result){
        res.render('index',{text1:result})
    });
};