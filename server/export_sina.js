/**
 * Created by txl-pc on 2017/8/11.
 */
var nodemailer = require('nodemailer');
var transporter = nodemailer.createTransport({
  host : 'smtp.sina.com',
  secureConnection: true,
  auth: {
    user: 'txl910514@sina.com',
    pass: '@Txl910514' // 新浪邮箱密码

  }
});
var mailOptions = {
  from: 'txl910514@sina.com', // 发送者
  to: '1092678514@qq.com', // 接受者,可以同时发送多个,以逗号隔开
  subject: '新浪测试发送', // 标题
  //text: 'Hello world', // 文本
  html: `<h2>请打开百度:</h2><h3>  
    <a href="http://www.baidu.com">  
    http://www.baidu.com</a></h3>`
};
transporter.sendMail(mailOptions, function (err, info) {
  if (err) {
    console.log(err);
    return;
  }

  console.log('发送成功');
});