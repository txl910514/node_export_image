/**
 * Created by txl-pc on 2017/8/14.
 */
var nodemailer = require('nodemailer');
const fs = require('fs');
const path = require('path');
var Nightmare = require('nightmare');
var nightmare = Nightmare({ show: false });
var Screenshot = require('nightmare-screenshot');

console.log(path.join(__dirname, '..', 'dp.png'))

var transporter = nodemailer.createTransport({
  service: 'qq',
  auth: {
    user: '1092678514@qq.com',
    pass: 'uratpyxsbyjjhedg' //授权码,通过QQ获取

  }
});



nightmare
  .viewport(1366, 768)
  .cookies.set({
  url: 'https://linda.medatc.com/v3dp/v3dp/#/',
  name: 'user_id',
  value: '2920',
  domain: '.linda.medatc.com',
  path: '/',
  secure: false
})
  .cookies.set({
  url: 'https://linda.medatc.com/v3dp/v3dp/#/',
  name: 'hospital',
  value: '{"id":3622,"nameZh":"演示医院","nameEn":"N","name":"演示医院","choiceId":3622}',
  domain: 'linda.medatc.com',
  path: '/',
  secure: false
})
  .cookies.set({
  url: 'https://linda.medatc.com/v3dp/v3dp/#/',
  name: 'template',
  value: '{"nameChinese":"模版1","description":"1","id":1}',
  domain: 'linda.medatc.com',
  path: '/',
  secure: false
})
  .cookies.set({
  url: 'https://linda.medatc.com/v3dp/v3dp/#/',
  name: 'templateId',
  value: '1',
  domain: 'linda.medatc.com',
  path: '/',
  secure: false
})
  .cookies.set({
  url: 'https://linda.medatc.com/v3dp/v3dp/#/',
  name: 'area_module_map',
  value: '{"areaJModule":"TECHNICAL_REPAIR_A","areaAModule":"DEVICE_PANDECT_A","areaDModule":"UPDATE_INFO","areaFModule":"TECHNICAL_DEVICE_A","areaBModule":"DEVICE_SERVICE_A","areaEModule":"TIMEOUT_TICKETS","areaHModule":"MONTH_QUALITY_CONTROL_COUNT","areaCModule":"VALUE_DEVICE_A","areaIModule":"MONTH_REPAIR_COUNT","areaGModule":"LIFE_DEVICE_A"}',
  domain: 'linda.medatc.com',
  path: '/',
  secure: false
})
  .goto('https://linda.medatc.com/v3dp/v3dp/#/')
  .wait(20 * 1000)
  .use(Screenshot.screenshotSelector('dp.png', '.flex_container_vertical', (err) => {
    if (err) {
      console.log('error')
      throw err;
    }
    console.log(11)
    var mailOptions = {
      from: '1092678514@qq.com', // 发送者
      to: 'txl910514@sina.com', // 接受者,可以同时发送多个,以逗号隔开
      cc: 'txl910514@163.com', //抄送
      subject: '截图完成', // 标题
      //text: 'Hello world', // 文本
      html: `<h2>请打开百度:</h2><h3>  
    <a href="http://www.baidu.com">  
    http://www.baidu.com</a></h3><img src="cid:dp"/>`,
      attachments: [
        {
          filename: 'dp.png',
          path:path.join(__dirname, '..', 'dp.png'),
          cid: 'dp' // should be as unique as possible
        }
      ]
    };
    transporter.sendMail(mailOptions, function (err, info) {
      if (err) {
        console.log(err);
        return;
      }

      console.log('发送成功');
    });
  }))
;