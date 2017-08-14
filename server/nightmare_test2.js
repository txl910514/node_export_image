/**
 * Created by txl-pc on 2017/8/14.
 */
const fs = require('fs');
const path = require('path');
var Nightmare = require('nightmare');
var nightmare = Nightmare({ show: false });
var Screenshot = require('nightmare-screenshot');

const screenshotPath = path.join(process.cwd(), 'dp.png');

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
  }))
;