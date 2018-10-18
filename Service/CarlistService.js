/**
 * Created by lenovo on 2018/10/18.
 */
module.exports=function CarlistService(){
    this.init = function () {
        //1,引入购物车数据处理模块
        var CarListDao = require('../Dao/CarListDao');
        //2,创建对象
        this.carListDao = new CarListDao();
        //3,初始化
        this.carListDao.init();
    };
    this.addCarlist = function (session, productId, call) {
        var msg = null;
        var that = this;
        if (session.sign) {

            this.checkList(session.user_id, productId, function (result) {
                if (result) {
                    that.carListDao.init();
                        that.carListDao.addCarList([session.user_id, productId], function (result) {
                        msg = '商品添加成功，请在购物车中查看！！！';
                        call(msg);
                    })
                } else {
                    msg = '该商品已经在购物车中！！！';
                    call(msg);
                }
            })
        } else {
            msg = '请先进行登录然后再添加商品！！！';
            call(msg);
        }
    };
    this.checkList = function (user_id, productId, call) {

            this.carListDao.selectCarList(['user_id', user_id], function (result) {
            for (var i = 0; i < result.length; i++) {
                if (result[i].product_id == productId) {
                    call(false);
                    return;
                }
            }
            call(true);
        });
    };
    this.end = function(){
        this.carListDao.closeConnecte();
    };
}