/**
 * Created by lenovo on 2018/10/16.
 */
exports.crypto=function(source){
    //1,�������ģ��
    var crypto = require('crypto');
//2�����ɿ����ɢ��ֵ��cryptoģ�鹦���Ǽ��ܲ����ɸ���ɢ�У�createHash(algorithm)���� ,�������ø������㷨����hash����
    var md5 = crypto.createHash('md5');
//3,digest([encoding])�������������ݵ�hashժҪֵ��encoding�ǿ�ѡ�����������򷵻�buffer (encoding��Ϊ 'hex'��'base64'��)��
    var en_data = md5.update(source).digest('hex');
    return en_data;
}