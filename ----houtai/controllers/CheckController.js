exports.user1=function(req,res){
    //1,�����ͻ����ύ������
    //(1)����MySQLģ��
    var mysql  = require('mysql');
    //(2)����һ��connection
    var connection = mysql.createConnection({
        host     : 'localhost',       //���� ip
        user     : 'root',            //MySQL��֤�û���
        password : '123456',                //MySQL��֤�û�����
        port: '3306',                 //�˿ں�
        database:'work'          //���ݿ����������
    });
    //(3),����
    connection.connect();
    //(4),��дsql���
    var  userGetSql = "SELECT * from users";
//4,���в�ѯ����
    /**
     *query��mysql���ִ�еķ���
     * 1��userAddSql��д��sql���
     * 2��function (err, result)���ص�������err��ִ�д���ʱ���ش�һ��errֵ����ִ�гɹ�ʱ������result
     */
    connection.query(userGetSql,function (err, result) {
        if(err){
            console.log('[INSERT ERROR] - ',err.message);
            return;
        }
        res.end(JSON.stringify(result));
    });
//5,���ӽ���
    connection.end();
}

exports.user=function(req,res){
    res.render("user",{});
}