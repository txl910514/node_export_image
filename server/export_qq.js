/**
 * Created by txl-pc on 2017/8/11.
 */
var nodemailer = require('nodemailer');
var transporter = nodemailer.createTransport({
  service: 'qq',
  auth: {
    user: '1092678514@qq.com',
    pass: 'hdhdwmxqxqxgigad' //授权码,通过QQ获取

  }
});
var mailOptions = {
  from: '1092678514@qq.com', // 发送者
  to: 'txl910514@sina.com', // 接受者,可以同时发送多个,以逗号隔开
  subject: '测试发送', // 标题
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